import 'reflect-metadata';
import { LogMethod } from './logMethod';
import { LogExecutionTime } from './logExecutionTime';

export function LogClass(): ClassDecorator {
  return function (target: Function) {
    const proto = target.prototype;
    const propNames = Object.getOwnPropertyNames(proto);

    for (const name of propNames) {
      if (name === 'constructor') continue;
      const desc = Object.getOwnPropertyDescriptor(proto, name);
      if (!desc || typeof desc.value !== 'function') continue;

      // Apply both decorators to each method — composition example.
      const methodDecorator = LogMethod();
      const timeDecorator = LogExecutionTime();

      methodDecorator(proto, name, desc);
      timeDecorator(proto, name, desc);

      Object.defineProperty(proto, name, desc);
    }
  };
}
