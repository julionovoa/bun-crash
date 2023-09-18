import {describe, expect, test, beforeAll} from 'bun:test';

beforeAll(() => {
  console.log('beforeAll');
});

describe('math', () => {
    test('addition', () => {
        expect(1+5).toBe(6);
    });
});
