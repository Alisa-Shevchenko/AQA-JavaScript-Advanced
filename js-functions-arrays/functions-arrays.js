// Таск 1.
// Напишіть 3 види функцій(function declaration, function expression, arrow function). 
// Кожна з них приймає 2 параметри, поверніть більше значення. 
// Викличте кожну функцію з 2 аргументами.
// Результати виведіть у консоль.

// //function declaration

function comparingNumbersDeclaration(a, b) {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
    return ("equal/can not calculate")
}
let result1 = comparingNumbersDeclaration(10, 4)
console.log(result1)

// //function expression

const comparingNumbersExpression = function (a, b) {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
    return ("equal/can not calculate")
}
let result2 = comparingNumbersExpression(1, 4)
console.log(result2)

// //arrow function

let comparingNumbersArrow = (a, b) => {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
    return ("equal/can not calculate")
}
let result3 = comparingNumbersExpression(23, -1)
console.log(result3)


// Таск 2.
// Створіть функцію яка приймає один параметр value. 
// Усередині функції виведіть значення value. 
// Після цього, рекурсивно викличте функцію зі збільшеним значенням value(наприклад, value + 1). 
// Фунція повинна викликатися, доки value не стане менше або рівне 20. 
// Викличте вашу функцію з аргументом, наприклад, 2.


const recursionNumbers = (value) => {
    console.log(value)
    if (value < 20) {
        recursionNumbers(value + 1)
    }
}
recursionNumbers(2)



// Tacк 3.
// Дано масив.
// let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];
// Створіть функцію яка в результаті свого виконання пройдеться по кожному елементу масиву. 
// Для ітерації по масиву використовуйте for чи for .. of. Перевірте чи у масиві буде “cat”.
// Результат виведіть в консоль.

let nestedArray = [["apple", "banana", "dog"], ["cherry", "cat", "elephant"], ["red", "green", "cat"]];

function findCat(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
        for (let i2 = 0; i2 < nestedArray[i].length; i2++) {
            if (nestedArray[i][i2] === "cat") {
                console.log("There is cat");
                return;
            }
        }
    }

    console.log("There is no cat");
}
findCat(nestedArray);


// Таск 4.
// Створіть функцію divideArray, яка приймає один параметр - масив чисел numbers.
// У функції divideArray використайте блок try, щоб вивести результат ділення кожного елемента масиву на попередній елемент у масиві. 
// Додайте умову, якщо у масиві менше елементів ніж 2, то додайте настроювану помилку throw new Error(”your message ”). 
// Збережіть результати ділення у новий масив result.
// У разі помилки ділення (якщо попередній елемент дорівнює 0 або якщо елементи не є числами), викиньте помилку за допомогою блоку catch з інформативним повідомленням.
// Завершіть функцію за допомогою блоку finally та виведіть повідомлення "Робота завершена" в консоль, навіть якщо помилка виникла або не виникла.
// Викличте функцію divideArray з різними масивами чисел, включаючи випадок, коли попередній елемент дорівнює 0 або один з елементів не є числом.
// Наприклад:
// console.log(divideArray([10, 2, 5])); // Результат
// console.log(divideArray([5, 0, 2])); // Помилка
// console.log(divideArray([10, 'abc', 2])); // Помилка
// console.log(divideArray([3])); // Помилка
// Поради:
// Оголосіть змінну result = [], та пуште значення у змінну result кожної ітерації циклу.
// У циклі додайте додатковий кондишини на перевірку чи елементи масиву є числом(typeof ..  === "number"),і чи не === 0. і оголосіть там помилку
// ви можете одразу у метод який буде пушити елементи у новий масив додати операцію ділення.


function divideArray(numbers) {
    let result = [];

    try {
        if (numbers.length < 2) {
            throw new Error("The array must contain at least two numbers.");
        }

        for (let i = 1; i < numbers.length; i++) {
            if (typeof numbers[i - 1] !== "number" || typeof numbers[i] !== "number" || numbers[i - 1] === 0) {
                throw new Error("Division error or incorrect data.");
            }

            result.push(numbers[i] / numbers[i - 1]);
        }
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Complete");
    }

    return result;
}

console.log(divideArray([20, 2, 5]));           // Результат
console.log(divideArray([10, 0, 2]));           // Помилка
console.log(divideArray([10, 'string', 2]));    // Помилка
console.log(divideArray([9]));                  // Помилка


// Таск 5.
// a) Дано масив 
// const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56].
// Виведіть лише непарні числа з масиву.
// b) Дано масив 
// сonst arrayColors = [”yellow”, “green”, “apple”, “red”, “pink”]
// відсортуйте масив з допомогою методу sort


const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56];

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        console.log(array[i])
    }
};

const arrayColors = ["yellow", "green", "apple", "red", "pink"]

console.log(arrayColors.sort((a, b) => a.localeCompare(b)))

// Таск 6.
// Вам потрібно обєднати всі елементи у масиві за допомогою методу concat.
// Створіть два масиви , які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.


const vegetables = ["tomatoes", "lettuce", "cucumbers"];
const meat = ["bacon", "chicken", "veal"];

const dinner = vegetables.concat(meat);
console.log(dinner);

// Таск 7.
// Вам потрібно обчислити суму всіх елементів у масиві за допомогою методу reduce.
// Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
// Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
// Виведіть отриману суму на консоль.

const numbers = [10, 20, 30, 40, 50];
const sumOfNumbers = numbers.reduce((a, b) => a + b, 0);
console.log(sumOfNumbers)