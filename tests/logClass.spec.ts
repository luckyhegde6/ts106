import 'reflect-metadata';
import { LogClass } from '../src/decorators/logClass';

describe('LogClass', () => {
  test('applies decorators to all methods', () => {
    const logs: string[] = [];
    const spyLogger = { log: (level:any, message:string) => logs.push(message) };

    @LogClass()
    class S {
      logger = spyLogger as any;
      sum(a:number,b:number){ return a+b; }
      mul(a:number,b:number){ return a*b; }
    }

    const s = new S();
    expect(s.sum(2,3)).toBe(5);
    expect(s.mul(3,4)).toBe(12);
    // Because LogClass composes LogMethod + LogExecutionTime, logs should include 'Calling' and 'executed in'
    expect(logs.some(l => l.includes('Calling'))).toBeTruthy();
    expect(logs.some(l => l.includes('executed in'))).toBeTruthy();
  });
});
