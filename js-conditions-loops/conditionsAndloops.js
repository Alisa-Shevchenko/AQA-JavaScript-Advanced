// 1. Нарахуйте зарплату людині яка працює у компанії. Створіть змінну yearsOfExperience яка буде символізувати час, скільки людина працює у компанії.
// За допомогою конструкції if else, визначте заробітню плату та бонус.
//Якщо людина працює пів року, то зарплата = 0, бонусів немає
//Якщо людина працює від пів року до року, то зарплата = 100 , бонус 1 % від зарплати
//Якщо людина працює від року до двох років, то зарплата = 333, бонус 3 % від зарплати 
//Якщо людина працює від двох до чотирьох років, то зарплата = 555, бонус 4 % від зарплати 
//Якщо людина працює від більше чотиьох років, то зарплата = 666 , бонус = ксть років роботи * зарплату
//Усі результати виведіть у консоль.

const yearsOfExperience = 4;

if (yearsOfExperience <= 0.5) {
    const salary = 0;
    const percentage = 0;
    const bonus = salary / 100 * percentage;

    console.log(`Salary: ${salary}, bonus: ${bonus}`);

} else if (yearsOfExperience <= 1) {
    const salary = 100;
    const percentage = 1;
    const bonus = salary / 100 * percentage;

    console.log(`Salary: ${salary}, bonus: ${bonus}`);

} else if (yearsOfExperience <= 2) {
    const salary = 333;
    const percentage = 3;
    const bonus = salary / 100 * percentage;

    console.log(`Salary: ${salary}, bonus: ${bonus}`);

} else if (yearsOfExperience <= 4) {
    const salary = 555;
    const percentage = 4;
    const bonus = salary / 100 * percentage;

    console.log(`Salary: ${salary}, bonus: ${bonus}`);

} else if (yearsOfExperience > 4) {
    const salary = 666;
    const bonus = yearsOfExperience * salary;

    console.log(`Salary: ${salary}, bonus: ${bonus}`);

} else {

    console.log("can not calculate")
}

// 2.Використовуючи конструкцію switch-case виведіть 12 місяців. 
// Для кожного місяця ви повинні мати відповідний case в switch і виведіть назву місяця, коли цей case виконується.
// Тобто в консолі має бути виведено місяць який ви вказуєте для виконання case. наприклад “January”.

let numberOfMonth = 1;

switch (numberOfMonth) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("February")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;
    case 7:
        console.log("July")
        break;
    case 8:
        console.log("August")
        break;
    case 9:
        console.log("September")
        break;
    case 10:
        console.log("October")
        break;
    case 11:
        console.log("November")
        break;
    case 12:
        console.log("December")
        break;

    default:
        console.log("Does not exist this month")
        break;
}

// 3. У нас є const number = 30 як верхня межа діапазону чисел,виведіть лише парні числа for. 
//Зверніть увагу, числа 0 та 22 не мають бути виведені.
// Pезультат має бути:
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20
// 24
// 26
// 28

const number = 30

for (let i = 0; i < number; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    if (i === 0) {
        continue;
    }
    if (i === 22) {
        continue;
    }
    console.log(i)
}

// 4.У вас є два числа numberA, numer B присвойте їм значення. За допомогою тернарного оператора виведіть число яке більше.

const numberA = -164;
const numberB = 333;

const numberC = numberA > numberB
    ? console.log(numberA)
    : numberB > numberA
        ? console.log(numberB)
        : numberB === numberA
            ? console.log("equal")
            : console.log("can not calculate");


// 5.За допомогою циклу while переберіть строку “Javascript is fun”, 
// якщо строка містить літеру “a” використайте оператор сontinue,
// якщо строка містить літеру “n” зупиніть виконаня за допомогою break;


let text = "Javascript is fun";
let i = 0;

while (i < text.length) {
    let currentChar = text[i];

    if (currentChar === "a") {
        i++;
        continue;
    }

    if (currentChar === "n") {
        break;
    }

    console.log(currentChar);
    i++;
}