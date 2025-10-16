import 'reflect-metadata';
import { METADATA_KEY } from '../metadata';
import { LogOptions, LogLevel, Logger } from '../types';
import { ConsoleLogger } from '../logger';
import { performance } from 'perf_hooks';

export function LogExecutionTime(options: Partial<LogOptions> = {}) {
  const opts = { level: 'info' as LogLevel, showExecutionTime: true, ...options };
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    if (typeof original !== 'function') return descriptor;

    Reflect.defineMetadata(METADATA_KEY.LOG_OPTIONS, opts, target, propertyKey);

    descriptor.value = function (...args: unknown[]) {
      const self = this as unknown as { logger?: Logger };
      const logger: Logger = opts.logger ?? self.logger ?? new ConsoleLogger();
      const name = String(propertyKey);
      const start = performance.now();
      const result = original.apply(this, args);

      const finalize = (res: unknown) => {
        const end = performance.now();
        const ms = end - start;
        logger.log(opts.level!, `${name} executed in ${ms.toFixed(3)}ms`);
        return res;
      };

      if (result && typeof (result as Promise<unknown>).then === 'function') {
        return (result as Promise<unknown>).then((r) => finalize(r));
      } else {
        return finalize(result);
      }
    };

    return descriptor;
  };
}
