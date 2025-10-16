# 🎯 Decorators, Metadata & Logging — Interview Questions and Answers

## 1. What are decorators in TypeScript?
Decorators are special functions that modify or enhance classes, methods, properties, or parameters at design time. They are syntactic sugar for higher-order functions that wrap or extend behavior.

## 2. Types of decorators in TypeScript
- Class decorators — modify or replace class definitions.
- Method decorators — wrap methods to modify behavior.
- Accessor decorators — modify getters/setters.
- Property decorators — annotate properties.
- Parameter decorators — annotate method parameters.

## 3. Execution order of decorators
Parameter → Method → Accessor → Property → Class (inner to outer, bottom-up).

## 4. What problems do decorators solve?
They handle cross-cutting concerns like logging, caching, validation, and dependency injection elegantly.

## 5. How does metadata reflection work?
Using `reflect-metadata`, decorators can attach and read metadata via `Reflect.defineMetadata()` and `Reflect.getMetadata()`.

## 6. How does the Logger Decorator Library use metadata?
Each decorator attaches metadata about logging options, such as levels and timing, using `Reflect.defineMetadata()`.

## 7. Explain @LogMethod()
It wraps the method to log arguments and return values, handling async methods too. Demonstrates the Decorator Pattern.

## 8. Explain @LogExecutionTime()
It measures method execution duration using `performance.now()`, useful for profiling and metrics.

## 9. Explain @LogClass()
It applies method decorators to all class methods automatically, showing AOP-style composition of decorators.

## 10. Design patterns used
- Decorator Pattern
- Proxy Pattern
- Observer Concept
- Aspect-Oriented Programming (AOP)

## 11. Adding @LogParams()
You can use a parameter decorator to record indices of parameters to log via metadata.

## 12. Why use reflect-metadata?
It standardizes how metadata is stored and retrieved, making it interoperable across frameworks like NestJS.

## 13. Multiple decorators
They execute in reverse order (bottom-up), wrapping methods like middleware layers.

## 14. Compile-time vs runtime decorators
TypeScript decorators execute at runtime. Angular uses compile-time analysis for its decorators.

## 15. Pros and cons
**Pros:** Declarative syntax, reusable, modular.  
**Cons:** Adds complexity, limited standardization, may impact readability.

## 16. Relation to NestJS/Angular
These frameworks depend on decorators for dependency injection, routing, and configuration metadata.

## 17. Testing decorators
Use Jest spies to ensure wrapped methods behave correctly and logs are emitted as expected.

## 18. Decorators vs middleware
Decorators are method-level; middleware is global. Both serve interception purposes but at different layers.

## 19. AOP in simple terms
Aspect-Oriented Programming allows separation of cross-cutting concerns like logging and validation without altering business logic.

## 20. Extending this library
Add log transports, masking sensitive data, dependency injection, or tracing for enterprise-grade observability.

## 21. Quickfire questions
- Can decorators modify arguments? Only by wrapping the method.  
- Are decorators executed per instance? No, once at class definition time.  
- Can decorators apply to standalone functions? Not yet in TypeScript.

---
**Key Talking Points**
- Deep understanding of metadata reflection and AOP.  
- Connect decorator principles to real-world frameworks.  
- Showcase practical logging implementation and testability.
