import 'reflect-metadata';
import { LogExecutionTime } from '../src/decorators/logExecutionTime';

describe('LogExecutionTime', () => {
  test('measures sync execution time', () => {
    const logs: string[] = [];
    const spyLogger = { log: (level: any, message: string) => logs.push(message) };

    class C {
      logger = spyLogger as any;

      @LogExecutionTime()
      compute(n: number) {
        // busy work
        for (let i=0;i<100000;i++) {}
        return n;
      }
    }

    const c = new C();
    const r = c.compute(5);
    expect(r).toBe(5);
    expect(logs.some(l => l.includes('executed in'))).toBeTruthy();
  });

  test('measures async execution time', async () => {
    const logs: string[] = [];
    const spyLogger = { log: (level:any, message:string) => logs.push(message) };

    class AsyncC {
      logger = spyLogger as any;

      @LogExecutionTime()
      async fetch(n:number) {
        await new Promise(r => setTimeout(r, 10));
        return n;
      }
    }

    const a = new AsyncC();
    const r = await a.fetch(7);
    expect(r).toBe(7);
    expect(logs.some(l => l.includes('executed in'))).toBeTruthy();
  });
});
