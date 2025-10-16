# Metadata Guide

Use `import 'reflect-metadata'` at the app entrypoint to enable decorator metadata emission.

Common apis:
- Reflect.defineMetadata(key, value, target, propertyKey?)
- Reflect.getMetadata(key, target, propertyKey?)
- Reflect.hasMetadata(key, target, propertyKey?)
