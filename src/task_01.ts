`
Задание 1

В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
  Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
  При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.
`

/**
 * Функция анализирует массив и выводит в консоль количество чётных и нечётных элементов в массиве.
 * Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.
 * Также учитывается, что массив может содержать не только числа, но и, например, знаки, null и так далее.
 */
 function analyzeArray(array: any[]): void {

  let [evenCnt, oddCnt, zeroCnt, notNumCnt] = [0, 0, 0, 0]

  array.forEach(el => {
    if (isNumeric(el)) {
      const num = +el!
      if (!num) zeroCnt++
      else if (isEven(num)) evenCnt++
      else oddCnt++
    } else {
      notNumCnt++
    }
  })
  console.log(`Четных - ${evenCnt}, нечетных - ${oddCnt}, нулевых - ${zeroCnt}, нечисловых - ${notNumCnt}`)
}

/**
 * Функция анализирует переданное значение и возвращает "true", если значение численное.
 */
function isNumeric(val: any): boolean {
  return (typeof (val) === 'number' || typeof (val) === "string" && val.trim() !== '') && !isNaN(+val)
}

/**
 * Функция анализирует переданное число и возвращает "true", если значение четное.
 */
function isEven(n: number): boolean {
  return n % 2 == 0
}

analyzeArray([2, 4, 6, 8, 9])
analyzeArray([1, 3, 5, 7, 10])
analyzeArray([null, "", "not numeric", -1])
analyzeArray([])
analyzeArray([1, "", 2, "2", 10, 11, 0, -32, 48, 54, null, "string", .342, true])
