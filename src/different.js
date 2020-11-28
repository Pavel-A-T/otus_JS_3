/**
 *
 Домашнее задание №8 «Работа с
 датами»
 1.Запросите у пользователя дату в формате
 ДД.ММ.ГГГГ. Напишите программу, выводящую день
 недели по введённой дате.
 2.Написать программу, которая выводит в консоль
 количество минут, прошедшее с начала сегодняшнего
 дня.
 3.*В двух переменных хранятся даты рождения двух
 пользователей в формате ДД.ММ.ГГГГ. Написать
 программу, которая определяет более молодого
 пользователя.
 *
 */

export function passMinutes() {
    const now = new Date();
    const hours = now.getHours();
    const min = now.getMinutes();
    return hours * 60 + min;
}

export function dayOfWeek() {
    const numb = prompt('Введите DD MM YYYY день, месяц и год через пробел').trim();
    const [day, month, year] = numb.split(" ");
    const date = new Date(`${year}-${month}-${day}`);
    const myDay = date.getDay()
    switch (`${  myDay}`) {
        case '0': {
            return "Воскресенье";
        }
        case '1': {
            return "Понедельник";
        }
        case '2': {
            return "Вторник";
        }
        case '3': {
            return "Среда";
        }
        case '4': {
            return "Четверг";
        }
        case '5': {
            return "Пятница";
        }
        case '6': {
            return "Суббота";
        }
        default: {
            return "Error";
        }
    }
}

export function compare() {
    const firstPerson = prompt('Введите дату рождения первой персоны DD MM YYYY день, месяц и год через пробел');
    const secondPerson = prompt('Введите дату рождения второй персоны DD MM YYYY день, месяц и год через пробел');
    const [dayFirstPerson, monthFirstPerson, yearFirstPerson] = firstPerson.split(' ');
    const dateFirst = Date.parse(`${yearFirstPerson}-${monthFirstPerson}-${dayFirstPerson}`);
    const [daySecondPerson, monthSecondPerson, yearSecondPerson] = secondPerson.split(' ');
    const dateSecond = Date.parse(`${yearSecondPerson}-${monthSecondPerson}-${daySecondPerson}`);
    if (dateSecond > dateFirst) {
        return `Вторая персона моложе ${yearSecondPerson}-${monthSecondPerson}-${daySecondPerson}`;
    }
    return `Первая персона моложе ${yearFirstPerson}-${monthFirstPerson}-${dayFirstPerson}`;
}

