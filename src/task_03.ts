/* Задание 3
Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат. */

function createSumFunc(num1: number) {
  return function (num2: number) {
    return num1 + num2
  }
}

const
  NUM1 = 7,
  NUM2 = 22

const sumFunc = createSumFunc(NUM1)

console.log(`${NUM1}+${NUM2}=`, sumFunc(NUM2))
