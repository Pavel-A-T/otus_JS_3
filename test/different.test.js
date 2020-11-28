import {compare, dayOfWeek, passMinutes} from '../src/different';

describe('This is tests from different.js Домашнее задание №8 «Работа с датами»...', () => {

    it('This is passMinutes function', () => {
        const date = new Date();
        const b = date.getHours() * 60 + date.getMinutes();
        expect(passMinutes()).toBe(b);
    });

    it('This is dayOfWeek() function', () => {
        jest.spyOn(window, 'prompt').mockImplementation(() => String("20 11 2020"));
        expect(dayOfWeek()).toBe("Пятница");
        jest.spyOn(window, 'prompt').mockImplementation(() => String("28 11 2020"));
        expect(dayOfWeek()).toBe("Суббота");
        jest.spyOn(window, 'prompt').mockImplementation(() => String("29 11 2020"));
        expect(dayOfWeek()).toBe("Воскресенье");
        jest.spyOn(window, 'prompt').mockImplementation(() => String("30 11 2020"));
        expect(dayOfWeek()).toBe("Понедельник");
        jest.spyOn(window, 'prompt').mockImplementation(() => String("01 12 2020"));
        expect(dayOfWeek()).toBe("Вторник");
        jest.spyOn(window, 'prompt').mockImplementation(() => String("2 12 2020"));
        expect(dayOfWeek()).toBe("Среда");
        jest.spyOn(window, 'prompt').mockImplementation(() => String(" 3 12 2020"));
        expect(dayOfWeek()).toBe("Четверг");
    });

    it('This is compare() function', () => {
        const array = ["20 02 1985", "9 07 1978"];
        jest.spyOn(window, 'prompt').mockImplementation(() => array.shift());
        expect(compare()).toBe("Первая персона моложе 1985-02-20");
        const array2 = ["18 09 1956", "19 03 1968"];
        jest.spyOn(window, 'prompt').mockImplementation(() => array2.shift());
        expect(compare()).toBe("Вторая персона моложе 1968-03-19");
    });
});
