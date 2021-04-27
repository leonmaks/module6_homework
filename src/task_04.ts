/* Задание 4
Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */

const out = process.stdout.write.bind(process.stdout)

const
  BEGIN = 5,
  END = 15

let current = BEGIN

const interval = setInterval(function () {
  if (current > BEGIN) out(" ")
  out(`${current}`)
  if (++current > END) {
    clearInterval(interval)
    out('\n')
  }
}, 1000)
