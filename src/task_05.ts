/* Задание 5
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */

const
  X = 4,
  N = 3

const powerFunc = (x: number, n: number): number => {
  let result = 1
  for (let i = 0; i < n; i++) result *= x
  return result
}

console.log(`${X}^${N}=`, powerFunc(X, N))
