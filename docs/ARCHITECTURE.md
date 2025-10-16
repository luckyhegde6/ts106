# ARCHITECTURE

## Overview
Small library that exports decorators and a simple Logger. Metadata keys defined in metadata.ts

## Project Structure:
```
logger-decorator-library/
├─ src/
│  ├─ decorators/
│  │  ├─ logMethod.ts
│  │  ├─ logExecutionTime.ts
│  │  ├─ logClass.ts
│  │  └─ index.ts
│  ├─ logger.ts              # logger interface + default implementation
│  ├─ metadata.ts            # metadata keys and helpers
│  ├─ types.ts               # shared type definitions
│  └─ index.ts               # public exports
├─ tests/
│  ├─ logMethod.spec.ts
│  ├─ logExecutionTime.spec.ts
│  └─ logClass.spec.ts
├─ docs/
│  ├─ README.md
│  ├─ LEARNING.md
│  ├─ GUIDES/
│  │  ├─ decorators.md
│  │  ├─ metadata.md
│  │  └─ design-patterns.md
│  ├─ INTERVIEW_QUESTIONS.md
│  └─ ARCHITECTURE.md       # contains both HLD and LLD
├─ package.json
├─ tsconfig.json
├─ jest.config.js
├─ .eslintrc.js
└─ .prettierrc
```

## HLD
Components:
- decorators/: LogMethod, LogExecutionTime, LogClass
- logger.ts: default ConsoleLogger implementing Logger
- metadata.ts: keys used across decorators.

## LLD
- Metadata key `logger:options` stores options for a specific method
- Decorator factories return functions that define metadata and wrap descriptor.value
