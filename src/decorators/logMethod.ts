import 'reflect-metadata';
import { METADATA_KEY } from '../metadata';
import { LogOptions, LogLevel, Logger } from '../types';
import { ConsoleLogger } from '../logger';

export function LogMethod(options: LogOptions = {}) {
  const opts = { level: 'info' as LogLevel, showArgs: true, showResult: true, ...options };
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    if (typeof original !== 'function') return descriptor;

    // store metadata
    Reflect.defineMetadata(METADATA_KEY.LOG_OPTIONS, opts, target, propertyKey);

    descriptor.value = function (...args: unknown[]) {
      const self = this as unknown as { logger?: Logger };
      const logger: Logger = opts.logger ?? self.logger ?? new ConsoleLogger();
      const name = String(propertyKey);
      if (opts.showArgs) {
        logger.log(opts.level, `Calling ${name} with args: ${JSON.stringify(args)}`);
      } else {
        logger.log(opts.level, `Calling ${name}`);
      }

      const result = original.apply(this, args);

      const handleResult = (res: unknown) => {
        if (opts.showResult) {
          logger.log(opts.level, `${name} returned: ${JSON.stringify(res)}`);
        }
        return res;
      };

      // support promises
      if (result && typeof (result as Promise<unknown>).then === 'function') {
        return (result as Promise<unknown>).then((r) => handleResult(r));
      } else {
        return handleResult(result);
      }
    };

    return descriptor;
  };
}
