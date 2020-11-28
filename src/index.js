/**
 * 1.В переменных a и b хранятся числа. Написать
 программу, которая выводит в консоль произведение
 и сумму этих чисел.

 2.В двух переменных хранятся строки символов.
 Написать программу, которая выведет в консоль
 суммарное количество символов в обоих строках.

 3.*Написать программу, которая запрашивает у
 пользователя ввод трёхзначного числа, а потом
 выводит в консоль сумму цифр введёного числа
 */

export function calculate(a, b) {
    console.log(`${a} + ${b} = ${  a + b}`);
    console.log(`${a} * ${b} = ${  a * b}`);
}

export function sumLengthString(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(a.length + b.length);
    }
}

export function three() {
    let number = prompt('Введите трехзначное число', 100);
    let result = 0;
    while (number > 0) {
        result += number % 10;
        number = (number - number % 10) / 10;
    }
    console.log(result);
}


/**
 1.В переменных a и b хранятся числа. Вывести в
 консоль наибольшее из них.
 2.Запросить у пользователя ввод числа от 1 до 12.
 Вывести в консоль название месяца, соответствующее
 этому числу (1 — январь, 2 — февраль и т.д.).
 *В переменных circle и square хранятся площади круга
 и квадрата соответственно. Написать программу,
 которая определяет, поместится ли круг в квадрат.
 */
export function printMax(a, b) {
    if (a > b) {
        console.log(a);
        return;
    }
    console.log(b);
}

export function printMonth() {
    const month = prompt('Введите число от 1 до 12');
    switch (`${  month}`) {
        case '1': {
            console.log('January');
            break;
        }
        case '2': {
            console.log('February');
            break;
        }
        case '3':{
            console.log('March');
            break;
        }
        case '4': {
            console.log('April');
            break;
        }
        case '5': {
            console.log('May');
            break;
        }
        case '6': {
            console.log('June');
            break;
        }
        case '7': {
            console.log('July');
            break;
        }
        case '8': {
            console.log('August');
            break;
        }
        case '9': {
            console.log('September');
            break;
        }
        case '10': {
            console.log('October');
            break;
        }
        case '11': {
            console.log('November');
            break;
        }
        case '12': {
            console.log('December');
            break;
        }
        default: {
            console.log('Error');
        }
    }
}

export function circleInSquare(circle, square) {
    const diametr = Math.sqrt(circle/Math.PI) * 2;
    const side = Math.sqrt(square);
    return (side >= diametr);
}

/**
 1.Вывести в консоль сумму всех целых чисел от 50 до
 100.
 2.Вывести в консоль таблицу умножения на 7.
 7 x 1 = 7
 7 x 2 = 14
 …
 7 x 9 = 63
 *Запросить у пользователя ввод числа N. Вывести в
 консоль среднее арифметическое всех нечётных
 чисел от 1 до N.
 */

export function print(a, b) {
    let result = 0;
    for (let i = a; i <= b; i += 1) {
        result += i;
    }
    console.log(result);
}

export function multiplication() {
    const j = 7;
    for (let i = 1; i < 10; i += 1) {
        const result = j * i;
        console.log(`${j} * ${i} = ${result}`);
    }
}

export function average() {
    let result = 0;
    let div = 0;
    const number = prompt('Введите число');
    for (let i = 1; i <= number; i += 1) {
        if (i % 2 !== 0) {
            result += i;
            div += 1;
        }
    }
    console.log(result / div);
}
