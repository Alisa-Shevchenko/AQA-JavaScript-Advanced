// 1.Таск 1
// Створіть порожній обєкт automationQA.
// Додайте властивості чз крапку чи []:
// programmerName - стрінга, має містити ім’я програміста;
// programmingLanguages - стрінга, має містити назву мови програмування;
// age - число, має містити вік програміста;
// languages - масив, який представляє мови, якими говорить програміст
// preferences - обєкт, який буде представляти що необхідно для програміста. Наприклад:
// {basicPrefences : “table”}.
// Виведіть обєкт automationQA у консоль.

const automationQA = {};

automationQA.programmerName = "Alisa";
automationQA.programmingLanguages = "JavaScript";
automationQA.age = 28;
automationQA.languages = ["Ukrainian", "English"];
automationQA.preferences = {
  basicPrefences: "table",
  drinks: "Coffee",
  food: "pizza",
};
console.log(automationQA);

// Tаск 2
// Створіть обєкт room
// Додайте властивості(тут можна одразу записати в обєкт):
// name - стрінга, має містити назву кімнати;
// size - число, має містити розмір кімнати;
// window - булеве значення. // true/false.
// Виведіть у консоль значення name, window.

let room = {
  name: "bedroom",
  size: 20,
  window: true,
};

console.log(`Room: ${room.name}, Window: ${room.window}`);

// Таск 3
// Створіть обєкт movie
// Додайте властивості(тут можна одразу записати в обєкт):
// title - стрінга, має містити назву фільму;
// releaseYear - число, має містити дату коли вийшов фільм;
// genre - стрінга, має містити жанр.
// Замініть жанр фільму, замініть тайтл.
// Додайте 2 додаткові властивості // Наприклад actors: {mainRole : “Test Test”, ….}, director.
// Видаліть title з обєкту movie.
// Виведіть оновлений обєкт movie у консоль.

const movie = {
  title: "The Shining",
  releaseYear: 1980,
  genre: "Psychological thriller",
};

movie.title = "American Horror Story";
movie.genre = "horror";
movie.cast = {
  mainRole1: "Evan Peters",
  mainRole2: "Kathy Bates",
};
movie.director = "Ryan Murphy";

delete movie.title;

console.log(movie);

// Таск 4

// Дано обєкт:
// const englishBooks = [
//     {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960
//     },
//     {
//         title: "1984",
//         author: "George Orwell",
//         year: 1949
//     },
//     {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925
//     }
// ];
// Пройдіться циклом по масиву обєктів.
// Якщо title буде “The Great Gatsby” то пропустіть виконання ітерації.
// Якщо year буде більше ніж 1940, то виведіть у консоль значення ключа та властивості.
// Якщо author “George Orwell” то замініть його на довільне значення.
// Виведіть оновлений масив об’єктів englishBooks

const englishBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
];

for (let i = 0; i < englishBooks.length; i++) {
  if (englishBooks[i].title === "The Great Gatsby") {
    continue;
  }
  if (englishBooks[i].year > 1940) {
    console.log(`year: ${englishBooks[i].year}`);
  }
  if (englishBooks[i].author === "George Orwell") {
    englishBooks[i].author = "changed value";
  }
}
console.log(englishBooks);

// Таск 5

// Створіть вкладений об'єкт(обєкт у середині якого є ще один обєкт) з довільними властивостями.
// Пройдіться по цьому вкладеному об'єкту циклом і виведіть всі елементи в консоль.


let cinemaSessions = {
  thrillers: {
    name: "Misery",
    time: "17pm",
    hall: 1,
  },
};

for (let key in cinemaSessions) {
  //eslint-disable-next-line no-prototype-builtins
  if (cinemaSessions.hasOwnProperty(key)) {
    const object2 = cinemaSessions[key];
    console.log(key);
    for (let keys in object2) {
      //eslint-disable-next-line no-prototype-builtins
      if (object2.hasOwnProperty(keys)) {
        const values = object2[keys];
        console.log(`${keys}: ${values}`);
      }
    }
  }
}

// Таск 6
// Створіть обєкт user з властивостями name, age, email, address. Address має бути обєктом
// наприкд: address: {city: "your value", postalCode: "your value"}
// Створіть функцію getUserInfo, яка приймає об'єкт користувача в якості параметру
// та використовує деструктуризацію для отримання name, age користувача
// Створіть функцію getFullAddress, яка приймає об'єкт користувача в якості параметру
// та використовує деструктуризацію для отримання емейлу, міста та поштового коду користувача.
// Наприклад: address: { city, postalCode }
// Виведіть інформацію про користувача та емейл і його адресу, використовуючи результати функцій getUserInfo та getFullAddress.

const user = {
  name: "Alisa",
  age: 28,
  email: "alisa@gmail.com",
  address: {
    city: "Zaporizhzhia",
    postalCode: "69000",
  },
};

function getUserInfo({ name, age }) {
  return `Name: ${name}, Age: ${age}`;
}

function getFullAddress({ email, address: { city, postalCode } }) {
  return `Email: ${email}, Address: ${city}, ${postalCode}`;
}

const userInfo = getUserInfo(user);
const fullAddress = getFullAddress(user);

console.log(userInfo, ",", fullAddress);

// *Advanced. Створіть обєкт user з властивостями name, age, email, address.
// Address має бути обєктом address: {city: "your value", postalCode: "your value"}.
// Спробуйте створити функції getUserInfo та getFullAddress в одному рядку за допомогою деструктуризації аргументу функції.
// PS: Advanced по бажанню.
