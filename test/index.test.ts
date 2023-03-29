import { describe, test, expect } from 'vitest';
import b, { gb, kb, mb, tb } from '../lib';

describe('b', () => {
    test('if value = -1, it should throw an error', () => {
        expect(() => b(-1)).toThrowError();
    });

    test('if value = 0, it should be 0', () => {
        expect(b(0)).toBe(0);
    });

    test('if value = 1024, it should be 1024', () => {
        expect(b(1024)).toBe(1024);
    });

    test('if value = 1024, it should be 1024', () => {
        expect(b('1kb')).toBe(1024);
    });

    test('if value = 1k, it should be 1024', () => {
        expect(b('1kb')).toBe(1024);
    });

    test('if value = 1kb, it should be 1024', () => {
        expect(b('1kb')).toBe(1024);
    });

    test(`if value = 1m, it should be ${1024 ** 2}`, () => {
        expect(b('1mb')).toBe(1024 ** 2);
    });

    test(`if value = 1.5m, it should be ${1.5 * 1024 ** 2}`, () => {
        expect(b('1.5m')).toBe(1.5 * 1024 ** 2);
    });

    test(`if value = 1.5mb, it should be ${1.5 * 1024 ** 2}`, () => {
        expect(b('1.5mb')).toBe(1.5 * 1024 ** 2);
    });

    test(`if value = 1.5gb, it should be ${1.5 * 1024 ** 3}`, () => {
        expect(b('1.5gb')).toBe(1.5 * 1024 ** 3);
    });

    test(`if value = 1.5g, it should be ${1.5 * 1024 ** 3}`, () => {
        expect(b('1.5g')).toBe(1.5 * 1024 ** 3);
    });

    test(`if value = 1.5tb, it should be ${1.5 * 1024 ** 3}`, () => {
        expect(b('1.5tb')).toBe(1.5 * 1024 ** 4);
    });

    test(`if value = 1.5t, it should be ${1.5 * 1024 ** 3}`, () => {
        expect(b('1.5t')).toBe(1.5 * 1024 ** 4);
    });

    test(`if value = -1.5t, it should throw an error`, () => {
        expect(() => b('-1.5t')).toThrowError();
    });

    test(`if value = 1.5z, it should throw an error`, () => {
        expect(() => b('1.5z')).toThrowError();
    });

    test(`if value = "     30       ", it should be 30`, () => {
        expect(b('     30       ')).toBe(30);
    });

    test(`if value = "     50    kb   ", it should be ${50 * 1024}`, () => {
        expect(b('     50    kb   ')).toBe(50 * 1024);
    });
});

describe('kb, mb, gb, tb', () => {
    describe('kb', () => {
        test('value = 1024, it should be 1', () => {
            expect(kb('1024')).toBe(1);
        });

        test('value = 1mb, it should be 1024', () => {
            expect(kb('1mb')).toBe(1024);
        });
    });

    describe('mb', () => {
        test('value = 1024kb, it should be 1', () => {
            expect(mb('1024kb')).toBe(1);
        });

        test('value = 1gb, it should be 1024', () => {
            expect(mb('1gb')).toBe(1024);
        });
    });

    describe('gb', () => {
        test('value = 1024mb, it should be 1', () => {
            expect(gb('1024mb')).toBe(1);
        });

        test('value = 1tb, it should be 1024', () => {
            expect(gb('1tb')).toBe(1024);
        });
    });

    describe('tb', () => {
        test('value = 1024gb, it should be 1', () => {
            expect(tb('1024gb')).toBe(1);
        });
    });
});
