// 1. Людина хоче отримати права.
// Створіть змінну яка буде символізувати вік людини. 
// Після чого створіть булеву змінну, яка буде визначати чи особа досягла віку коли може отримати права,( в Україні це 18 років),
//базуючись на заченні з попередньої змінної. Результат виведіть у консоль.

const age = 12;
const isAdult = age >= 18;
const driverLicense = true;

console.log(isAdult && driverLicense);

// 2.Створіть дві змінні, які містять імена двох осіб. 
//Використовуючи конкатенацію рядків, створіть третю змінну, яка містить вітання для обох осіб.
//Виведіть результат в консоль.
//Базуючись на результаті всіх змінних зробіть конкантенацію всіх рядків (4 змінна, або просто обєднати у консоль лозі все) і виведіть результат у консоль.

let user = "Ostap";
let user1 = "Orest" ;                                                            
let greeting = "Hello" + " " + user + " " + "and" + " ".concat (user1) + "!";

console.log(greeting);

let allVariables = `${user}, ${user1}, ${greeting}`;

console.log(allVariables);

// 3.Створіть змінну зі значенням "5.489"
//- приведіть змінну до типу даних number, зі збереженням символів після коми
// - перевірте чи отрмане число після першої операції не є NaN
// - округліть значення до одного знака після крапки
// - поверніть змінну з типом даних number назад у тип даних string
// Всі результати виконання виведіть в консоль

let value1 = "5.489";
let parseFloatValue1 = parseFloat(value1);
let isNanValue = isNaN(parseFloatValue1);
let toFixedValue = parseFloatValue1.toFixed(1);
let toStringValue = parseFloatValue1.toString();

console.log(parseFloatValue1, typeof parseFloatValue1);
console.log(isNanValue);
console.log(toFixedValue, typeof toFixedValue );
console.log(toStringValue, typeof toStringValue);

// 4.Створіть змінну зі значенням "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation."
// - виведіть довжину рядка
// - замініть всі слова Wikipedia на довільне слово чи букву, результат виведіть у консоль.
// - перевірте чи містить дана строка слово "world"
// - перевірте чи закінчується дана строка cловом "foundation"
// Всі результати виконання виведіть в консоль

const someText = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";

console.log(someText.length);
console.log(someText.replaceAll("Wikipedia", "Text"));
console.log(someText.includes("world"));
console.log(someText.endsWith("foundation"));

// 5* Обчислення площі та об'єму

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI
// π - число “пі”. Ви можете використати Math.PI у вашому дз для вираження цього числа
// Створіть змінну radius і присвойте їй числове значення радіуса кола.
// Обчисліть площу кола за формулою π * radius^2 і виведіть результат.
// Створіть змінну length і присвойте їй числове значення довжини прямокутника.
// Створіть змінну width і присвойте їй числове значення ширини прямокутника.
// Обчисліть площу прямокутника за формулою length * width і виведіть результат.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radiusValue = 5;
let circleArea = Math.PI * radiusValue ** 2;

console.log(circleArea.toFixed(2));

const lengthValue = 10;
const widthValue = 2;
const rectangleArea = lengthValue * widthValue;
console.log(rectangleArea.toFixed(2));

const heightValue = 3;
const cylinderVol = Math.PI * radiusValue ** 2 * heightValue;

console.log(cylinderVol.toFixed(2));




