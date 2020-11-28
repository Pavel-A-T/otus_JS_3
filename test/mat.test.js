import {isRightTriangle, lengthCircle, equation} from "../src/mat";

describe('This is tests from mat.js Домашнее задание №9  «Математические операции»...', () => {

    it('This is isRightTriangle function', () => {
        jest.spyOn(window, 'prompt').mockImplementation(() => String('5 4 3'));
        expect(isRightTriangle()).toBe(true);
        jest.spyOn(window, 'prompt').mockImplementation(() => String('9 10 11'));
        expect(isRightTriangle()).toBe(false);
    });

    it('This is lengthCircle()', () => {
        jest.spyOn(console, 'log');
        const r = 33;
        lengthCircle(r);
        expect(console.log).toHaveBeenCalledWith(Math.PI * r);
    });

    it('This is equation()', () => {
        jest.spyOn(window, 'prompt').mockImplementation(() => String('6 1 -1'));
        expect(equation()).toBe("x1 = -0.5; x2 = 0.3333333333333333.");
        jest.spyOn(window, 'prompt').mockImplementation(() => String('2 -9 4'));
        expect(equation()).toBe("x1 = 0.5; x2 = 4.");
        jest.spyOn(window, 'prompt').mockImplementation(() => String('1 9 0'));
        expect(equation()).toBe("x1 = -9; x2 = 0.");
        jest.spyOn(window, 'prompt').mockImplementation(() => String('0 0 0'));
        expect(equation()).toBe("Нет корней");
    });
});
