# Learning — TypeScript Decorators & Metadata

## Introduction
Decorators are functions applied to classes, methods, properties, or parameters to extend their behavior without directly modifying them.

## Example
```ts
function Log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${key} with`, args);
    return original.apply(this, args);
  };
}
```

## Types of decorators
1. Class decorators
2. Method decorators
3. Accessor decorators
4. Property decorators
5. Parameter decorators

## Execution Order
Parameter → Method → Accessor → Property → Class  
Decorators on the same member execute from bottom to top.

## Reflect Metadata
Using `reflect-metadata`, decorators can store and retrieve metadata.
```ts
Reflect.defineMetadata('role', 'admin', target, key);
const role = Reflect.getMetadata('role', target, key);
```

## Lifecycle
1. TypeScript compiles with `experimentalDecorators` and `emitDecoratorMetadata`.
2. Decorators execute once at class definition time.
3. Metadata is attached via Reflect APIs.
4. Instances use the wrapped or modified logic.

## Patterns
- **Decorator Pattern:** Extend behavior dynamically.
- **Proxy Pattern:** Intercept and control access.
- **AOP:** Apply cross-cutting concerns like logging.

## Advanced Concepts
- Combining decorators
- Async-safe wrapping for Promises
- Configurable decorator options
- Using metadata to drive runtime logic

## Visualization
```
user → decorator wrapper → original method
  |         ↑
  └─ logs, metrics, error handling
```

## Conclusion
Decorators bridge declarative syntax with runtime power. Mastering them gives insight into the mechanics behind NestJS, Angular, and TypeORM.
