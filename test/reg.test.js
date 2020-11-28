import {isDate, isEmail, isPhoneNumber} from "../src/reg";

describe('This is tests from reg.js file functions «Регулярные выражения»...', () => {

    it('This is isEmail() ', () => {
        const values = ["avatarjk@mail.ru", "hg@dfs@hk.ru"];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        expect(isEmail()).toBe(true);
        expect(isEmail()).toBe(false);
    });

    it('This is isPhoneNumber() ', () => {
        const values = ['+78956532541', '89754682856', '+7495-632-5689', '5454-dfgxe'];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        expect(isPhoneNumber()).toBe(true);
        expect(isPhoneNumber()).toBe(true);
        expect(isPhoneNumber()).toBe(true);
        expect(isPhoneNumber()).toBe(false);
    });

    it('This is isDate() ', () => {
        const values = ['22.07.12', '12/02/1965', '15-04-63', '31.03.1987', 'ss/dd/ww', '12\\02\\1965'];
        jest.spyOn(window, 'prompt').mockImplementation(() => values.shift());
        expect(isDate()).toBe(true);
        expect(isDate()).toBe(true);
        expect(isDate()).toBe(true);
        expect(isDate()).toBe(true);
        expect(isDate()).toBe(false);
        expect(isDate()).toBe(true);
    });
});

