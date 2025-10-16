# Decorators Guide

- Method decorators receive (target, propertyKey, descriptor)
- You can wrap the original method on descriptor.value and preserve `this` by using function.apply.
- To keep types, decorators should return the modified descriptor.
- For async methods, detect Promise via .then to instrument results.
