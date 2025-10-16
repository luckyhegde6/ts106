import { Logger, LogLevel } from './types';
import fs from 'fs';
import path from 'path';

export class ConsoleLogger implements Logger {
  constructor(private toFile?: boolean, private filePath?: string) {
    if (toFile && filePath) {
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    }
  }

  private fmt(level: LogLevel, message: string) {
    const ts = new Date().toISOString();
    return `[${ts}] [${level.toUpperCase()}] ${message}`;
  }

  log(level: LogLevel, message: string, meta?: Record<string, unknown>) {
    const formatted = this.fmt(level, message) + (meta ? ` ${JSON.stringify(meta)}` : '');
    // Console output
    if (level === 'error') console.error(formatted);
    else if (level === 'warn') console.warn(formatted);
    else console.info(formatted);

    // optional file output
    if (this.toFile && this.filePath) {
      try {
        fs.appendFileSync(this.filePath, formatted + '\n', { encoding: 'utf8' });
      } catch (err) {
        console.error('[Logger] Failed to write to file', err);
      }
    }
  }
}
