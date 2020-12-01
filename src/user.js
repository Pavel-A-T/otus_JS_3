/**
 * Создайте объект user, содержащий поле name со
 значением ‘John’.
 1.Запросить у пользователя ввод числа. Записать
 введенное значение в поле age объекта user.
 2.Создать копию объекта user с именем admin.
 Добавить новому объекту поле role со значением
 ‘admin’.
 *Записать все значения полей объекта admin в
 отдельные переменные. Имена переменных
 должны совпадать с названиями полей.
 */

export function useUser() {
  const user = { name: "John" };
  const number = prompt("Введите возраст");
  user.age = number;
  const admin = { ...user, role: "admin" };
  const { name, age, role } = admin;
  console.log(name, age, role);
}

/**
 * Создайте массив целых чисел из 10 элементов.
 1.Выведите в консоль сумму всех элементов массива.
 2.Создайте новый массив на основе исходного, в
 котором каждый элемент будет вдвое больше
 элемента исходного массива с таким же индексом.
 (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый
 массив).
 3.*Найдите и выведите в консоль наибольший и
 наименьший элементы исходного массива.
 */

export function workWithArray() {
  const array = [1, 2, 5, 58, 63, 21, 78, 94, 77, 3];
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  console.log(sum);

  const ar = array.concat();
  for (let i = 0; i < ar.length; i += 1) {
    ar[i] *= 2;
  }
  console.log(ar);
  console.log(array);
}

export function maxMin(array) {
  const arr = array.sort((a, b) => a - b);
  console.log(`min = ${  arr.shift()  }, max = ${  arr.pop()}`);
}

/**
 * 1.Напишите функцию diff, которая получает в качестве
 параметров 2 числа и возвращает разницу между
 наибольшим и наименьшим.
 2.Напишите функцию isWord, которая принимает на
 вход текстовую строку. Функция возвращает true, если
 строка состоит из одного слова и false, если из
 нескольких.
 *Напишите функцию pow(a, x), которая вернёт
 значение числа a, возведённого в степень x.
 */

export function diff(a, b) {
  if (a > b) {
    return a - b;
  }
  return b - a;
}

export function pow(a, x) {
  let result = 1;
  if (x > 0) {
    for (let i = 0; i < x; i += 1) {
      result *= a;
    }
  } else if (x < 0) {
    for (let i = 0; i < -x; i += 1) {
      result /= a;
    }
  }
  return result;
}

export function isWord(str) {
  if (str.length === 0) {
    return false;
  }
  const s = str.trim();
  return s.indexOf(" ", 1) === -1;
}
