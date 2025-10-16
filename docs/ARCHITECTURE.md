# ARCHITECTURE

## Overview
Small library that exports decorators and a simple Logger. Metadata keys defined in metadata.ts

## HLD
Components:
- decorators/: LogMethod, LogExecutionTime, LogClass
- logger.ts: default ConsoleLogger implementing Logger
- metadata.ts: keys used across decorators.

## LLD
- Metadata key `logger:options` stores options for a specific method
- Decorator factories return functions that define metadata and wrap descriptor.value
