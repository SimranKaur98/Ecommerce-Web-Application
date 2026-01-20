import {it, expect, describe} from 'vitest';
import {formatMoney} from './money';
describe('formatMoney', () => {
    it('formats 1999 to $19.99', () => {
        expect(formatMoney(1999)).toBe('$19.99');
    });
    it('displays 2 decimals',() => {
        expect(formatMoney(2000)).toBe('$20.00');
        expect(formatMoney(2050)).toBe('$20.50');

    });
}); 