export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogOptions {
  level?: LogLevel;
  showArgs?: boolean;
  showResult?: boolean;
  showExecutionTime?: boolean;
  logger?: Logger;
  toFile?: boolean;
}

export interface Logger {
  log(level: LogLevel, message: string, meta?: Record<string, unknown>): void;
}
