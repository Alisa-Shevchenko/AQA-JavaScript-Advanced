// Таск1
// У файлі spreadAndRest.js. Cтворіть 2 масиви з довільними значеннями.
// Створіть третій масив у якому обєднайте ці два масиви за допомогою “…” spread
// Виведіть третій масив у консоль.

const first = ["H", "e", "ll", "o"]
const second = ["W", "o", "r", "l", "d"]
const third = [...first, ...second]
console.log(third)

// Tack2
// Cтворіть функцію multiply яка приймає 2 параметри, multiplier та arguments.
// Параметр arguments має бути доданий за допомогою оператора збирання властивостей - “…” rest.
// Помножте значення multiplier на кожен елемент який буде у arguments.
// *hint Для опрацювання цієї операції, можете пройтись по arguments за допомогою методу map.
// Очікуваний результат:
// const result = multiply(4, 9, 83, 3);
// console.log(result) // [ 36, 332, 12 ]

function multiply(mutiplier, ...arguments) {
    return arguments.map((arguments) => arguments * mutiplier)
}

const result = multiply(4, 9, 83, 3);
console.log(result)




