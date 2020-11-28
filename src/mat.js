/**
 *
 Домашнее задание №9
 «Математические операции»
 1.Даны длины трёх сторон треугольника. Определить,
 является ли треугольник прямоугольным.
 2.Пользователь вводит число R. Написать программу,
 которая выведет в консоль длину окружности и
 площадь круга с радиусом R.
 *Пользователь вводит числа a, b и c. Написать
 программу, выводящую корни квадратного
 уравнения с коэффициентами a, b и c.
 */

export function isRightTriangle() {
    const number = prompt('Введите три стороны треугольника через пробел');
    const ar = number.split(' ');
    const a = Number(ar[0]);
    const b = Number(ar[1]);
    const c = Number(ar[2]);

    if ((c > a) && (c > b) && (c === Math.sqrt(a * a + b * b))) {
        return true;
    } if ((a > c) && (a > b) && (a === Math.sqrt(c * c + b * b))) {
        return true;
    } if ((b > a) && (b > c) && (b === Math.sqrt(a * a + c * c))) {
        return true;
    }
    return false;
}

export function lengthCircle(r) {
    if (r >= 0) {
        console.log(Math.PI * r);
        console.log(Math.PI * r * r);
    }
}

export function equation() {
    const number = prompt('Введите три аргумента квадратного уравнения а,b,с  через пробел');
    let [a, b, c] = number.split(' ');
    a = Number(a);
    b = Number(b);
    c = Number(c);

    const d = b * b - 4 * a * c;
    if (d === 0 && (a !== 0)) {
        return -b / (2 * a);
    }
    if (d > 0) {
        const x1 = (-b - Math.sqrt(d)) / (2 * a);
        const x2 = (-b + Math.sqrt(d)) / (2 * a);
        return `x1 = ${x1}; x2 = ${x2}.`;
    }
    return "Нет корней";
}

