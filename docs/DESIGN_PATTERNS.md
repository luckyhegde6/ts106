# Design Patterns in the Logger Decorator Library

## 1. Decorator Pattern
Each decorator wraps a function or class method, adding logging or timing behavior without altering core logic.

## 2. Proxy Pattern
Decorators act as proxies, intercepting calls and controlling access transparently.

## 3. Observer Concept
The logger functions as an observer, reacting to events like “method started” and “method ended.”

## 4. Aspect-Oriented Programming (AOP)
Decorators implement AOP by injecting cross-cutting concerns such as logging or profiling declaratively.

## 5. Composition of Decorators
`@LogClass()` combines multiple decorators, illustrating how higher-order decorators can aggregate functionality.

## 6. Dependency Injection readiness
Loggers are injected via configuration or class properties, showcasing inversion of control principles.

---
**Takeaway:**  
Decorators form a bridge between functional composition and structural design patterns, providing modular and scalable architecture.
