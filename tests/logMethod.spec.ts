import 'reflect-metadata';
import { LogMethod } from '../src/decorators/logMethod';
import { ConsoleLogger } from '../src/logger';

describe('LogMethod', () => {
  test('logs args and result', () => {
    const logs: string[] = [];
    const spyLogger = {
      log: (level: any, message: string) => logs.push(`[${level}] ${message}`),
    };

    class C {
      logger = spyLogger as any;
      @LogMethod({ level: 'debug', showArgs: true, showResult: true })
      add(a: number, b: number) {
        return a + b;
      }
    }

    const c = new C();
    const res = c.add(2,3);
    expect(res).toBe(5);
    expect(logs.some(l => l.includes('Calling add'))).toBeTruthy();
    expect(logs.some(l => l.includes('returned'))).toBeTruthy();
  });

  test('works with async methods', async () => {
    const logs: string[] = [];
    const spyLogger = { log: (level: any, message: string) => logs.push(message) };

    class AsyncC {
      logger = spyLogger as any;
      @LogMethod({ level: 'info' })
      async compute(n: number) {
        return n*2;
      }
    }

    const a = new AsyncC();
    const res = await a.compute(4);
    expect(res).toBe(8);
    expect(logs.length).toBeGreaterThan(0);
  });
});
