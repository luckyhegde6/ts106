# Logger Decorator Library

A compact TypeScript library that demonstrates method & class decorators, metadata reflection, and AOP-style logging.

See `LEARNING.md` for deep explanation, and `GUIDES/` for focused guides.

Usage example:

```ts
import 'reflect-metadata';
import { LogMethod, LogExecutionTime, LogClass } from './src/decorators';

@LogClass()
class ExampleService {
  @LogMethod()
  @LogExecutionTime()
  compute(value: number): number {
    return value ** 2;
  }
}

const s = new ExampleService();
s.compute(5);
```
