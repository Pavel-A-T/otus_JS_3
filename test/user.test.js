import {useUser, isWord, pow, diff, maxMin, workWithArray} from "../src/user";

describe('This is tests from user.js file function...', () => {

    it('This is useUser() function', () => {
        const age = 25;
        jest.spyOn(window, 'prompt').mockImplementation(() => {return age});
        jest.spyOn(console, 'log');
        useUser();
        expect(console.log).toHaveBeenCalledWith('John', age, 'admin');
    });

    it('This is isWord() function', () => {
        const words = ['Rok', "in World"];
        expect(isWord(words[0])).toBe(true);
        expect(isWord(words[1])).toBe(false);
    });

    it('This is pow() function', () => {
        const a = 3;
        const b = 5;
        expect(pow(a, a)).toBe(27);
        expect(pow(b, a)).toBe(125);
        expect(pow(a, b)).toBe(243);
        expect(pow(a, 0)).toBe(1);
        expect(pow(b, -1)).toBe(0.2);
    });

    it('This is diff() function', () => {
        const a = 309;
        const b = 55;
        const c = -999;
        expect(diff(a, b)).toBe(254);
        expect(diff(b, a)).toBe(254);
        expect(diff(a, c)).toBe(1308);
        expect(diff(a, 0)).toBe(309);
        expect(diff(a, a)).toBe(0);
    });

    it('This is maxMin() function', () => {
        jest.spyOn(console, 'log');
        const arr = [5, 10, 25, 60, 99, -8, -9, 3, 0, 33];
        maxMin(arr);
        expect(console.log).toHaveBeenCalledWith('min = -9, max = 99');
    });

    it('This is workWithArray() function', () => {
        const array = [1, 2, 5, 58, 63, 21, 78, 94, 77, 3];
        const arr2 = [2, 4, 10, 116, 126, 42, 156, 188, 154, 6];
        jest.spyOn(console, 'log');
        workWithArray();
        expect(console.log).toHaveBeenCalledWith(402);
        expect(console.log).toHaveBeenCalledWith(arr2);
        expect(console.log).toHaveBeenCalledWith(array);
    });
});