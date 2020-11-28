import {
    average,
    calculate,
    circleInSquare,
    multiplication,
    print,
    printMax,
    printMonth,
    sumLengthString,
    three
} from '../src/index'

describe('This is tests from index.js file functions...', () => {

    it('This is calculate() function', () => {
        jest.spyOn(console, 'log');
        calculate(45, 69);
        expect(console.log).toHaveBeenCalledWith(`45 + 69 = 114`);
        expect(console.log).toHaveBeenCalledWith(`45 * 69 = 3105`);
    });

    it('This is sumLengthString() function', () => {
        jest.spyOn(console, 'log');
        sumLengthString("мама мыла раму", "!!!!!!");
        expect(console.log).toHaveBeenCalledWith(20);
    });

    it('This is three() function', () => {
        const values = [155, 278];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        jest.spyOn(console, 'log');
        three();
        expect(console.log).toHaveBeenCalledWith(11);
        three();
        expect(console.log).toHaveBeenCalledWith(17);
    });

    it('This is printMax() function', () => {
        const a = 456;
        const b = 858;
        jest.spyOn(console, 'log');
        printMax(a, b);
        expect(console.log).toHaveBeenCalledWith(b)
        printMax(b, a);
        expect(console.log).toHaveBeenCalledWith(b);
    });

    it('This is printMonth() function', () => {
        const values = [1, 3, 5, 7, 9, 10, 11, 12, 13, 278, 2, 4, 6, 8];
        const months = ['January', 'March', 'May', 'July', 'September', 'October', 'November', 'December', 'Error',
            'Error', 'February', 'April', 'June', 'August'];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        jest.spyOn(console, 'log');
        while (values.length > 0) {
            printMonth();
            expect(console.log).toHaveBeenCalledWith(months.shift());
        }
    });

    it('This is circleInSquare()', () => {
        const a = 15;
        const b = 20;
        const c = 18;
        expect(circleInSquare(a, b)).toBe(true);
        expect(circleInSquare(c, b)).toBe(false);
    });

    it('This is print()', () => {
        jest.spyOn(console, 'log');
        print(50, 100);
        expect(console.log).toHaveBeenCalledWith(3825)
        print(51, 99);
        expect(console.log).toHaveBeenCalledWith(3675);
    });

    it('This is multiplication()', () => {
        const str = [];
        for (let i = 1; i < 10; i += 1) {
            const result = 7 * i;
            str.push(`7 * ${i} = ${result}`);
        }
        jest.spyOn(console, 'log');
        multiplication();
        expect(console.log).toHaveBeenCalledWith(str[0]);
    });

    it('This is average()', () => {
        const values = [5, 8];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        jest.spyOn(console, 'log');
        average();
        expect(console.log).toHaveBeenCalledWith(3);
        average();
        expect(console.log).toHaveBeenCalledWith(4);
    });
});


