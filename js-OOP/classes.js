// Tack3
// Створіть клас ProductClass, який представляє товар у магазині. У класі Product повинні бути наступні властивості:
// name - назва товару. price - ціна товару. quantity - кількість одиниць товару на складі. Клас ProductClass повинен мати наступні методи:
// getTotalPrice() - повертає загальну вартість товару (ціна * кількість).
// purchase(quantity) - зменшує кількість товару на складі на одиницю (передану як аргумент) після покупки. 
// Також перевірте чи кількість товарів на складі не = 0 та чи кількість товарів яка є не менша ніж кількість товарів яка задана у аргументі.
// Створіть 3 екземпляри класу Product для різних товарів та виконайте наступні дії:
// Приклад як це зробити, ви маєте мати 3 таких екземпляри класу.
// const tShirt = new Product("t-shirt", 20, 100);
// Виведіть загальну вартість кожного товарy для всіх ваших змінних екземпляра, використовуючи метод getTotalPrice().
// Виконайте покупку purchase(quantity) для всіх товарів з екземпляру класу.
// Виведіть залишок товарів на складі після кожної покупки.

class ProductClass {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }


    getTotalPrice() {
        return this.price * this.quantity;
    }


    getBalanceAfterPurchase(amount) {
        if (this.quantity > 0 && this.quantity >= amount) {
            this.quantity -= amount;
            console.log(`You bought ${amount} ${this.name}`)
        }
        else if (this.quantity === 0) {
            console.log(`Sorry, the product is out of stock :(`)

        }
        else if (this.quantity < amount) {
            console.log(`Now there are ${this.quantity} ${this.name} in stock`)
        }
        else {
            console.log("The field is filled in incorrectly")
        }

    }
}
const apple = new ProductClass("apple", 10, 50)
const banana = new ProductClass("banana", 20, 0)
const tangerine = new ProductClass("tangerine", 70, 150)

console.log("The total cost of the product:", apple.getTotalPrice())
apple.getBalanceAfterPurchase(51)
console.log(`Product balance in stock: ${apple.quantity}`)

console.log("The total cost of the product:", banana.getTotalPrice())
banana.getBalanceAfterPurchase(5)
console.log(`Product balance in stock: ${banana.quantity}`)

console.log("The total cost of the product:", tangerine.getTotalPrice())
tangerine.getBalanceAfterPurchase(10)
console.log(`Product balance in stock: ${tangerine.quantity}`)


// Tack4

// Створіть клас CarClass з такими властивостями та методами:
// Властивості:

// make (марка автомобіля) - публічна .
// model (модель автомобіля) - публічна.
// year (рік випуску автомобіля) - публічна.
// speed (поточна швидкість автомобіля) - приватна, початкова швидкість має = 0.
// Методи:

// constructor(make, model, year) - конструктор класу, який ініціалізує марку, модель та рік випуску автомобіля,
// а також встановлює початкову швидкість на нуль. (this.speed = 0)
// getCarInfo() - абстрактний метод.
// accelerate(speed) - публічний метод, який збільшує швидкість автомобіля на задану кількість кілометрів на годину.
// brake(speed) - публічний метод, який зменшує швидкість автомобіля на задану кількість кілометрів на годину.
// Створіть клас вашого автомобіля, наприклад (AudiClass) який буде наслідувати клас CarClass.

// Додайте супер конструктор, та додайте нову властивість у свій конструктор:
// color - приватна властивість.
// Перезапишіть абстрактний метод getCarInfo() - має бути публічний метод, який виводить інформацію про автомобіль (марка, модель, рік та колір).
// За допомогою геттера та сеттера створіть методи myCurrentColor(). У цих методах виводьте поточний колір автомобіля. у set метод має прийняти параметр color.
// Cтворіть екземпляр класу вашого автомобіля який унаслідував властивості з батьківського класу.
// Виведіть інформацію про ваш автомобіль (getCarInfo()).
// Виконайте декілька операцій зі зміною швидкості (Тобто необхідно викликати ці методи accelerate(speed) та brake(speed))
// За допомогою гетера та сетера змініть інформацію про ваш колір.
// За допомогою методаgetCarInfo() виведіть інформацію про автомобіль

class CarClass {
    #speed
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.#speed = 0;
    }

    accelerate(speed) {
        this.#speed += speed;
    }

    brake(speed) {
        this.#speed -= speed;
    }

    getCarInfo() {
        console.log(`Brand: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

class AudiClass extends CarClass {
    #color;

    constructor(make, model, year, color) {
        super(make, model, year);
        this.#color = color;
    }

    get color() {
        return this.#color;
    }

    set color(color) {
        this.#color = color;
    }

    myCurrentColor() {
        console.log(`Current color: ${this.#color}`);
    }

    getCarInfo() {
        super.getCarInfo();
        console.log(`Color: ${this.#color}`);
    }
}

const myAudi = new AudiClass("Audi", "A4", 2022, "black");

myAudi.getCarInfo();

myAudi.accelerate(50);

myAudi.brake(20);

myAudi.getCarInfo();

myAudi.color = "red";

myAudi.myCurrentColor();


// Таск5

// Створіть клас Person: Представляє особу з такими властивостями:

// firstName - ім'я особи
// lastName - прізвище особи
// age - вік особи
// Всі властивості мають бути публічні

// Створіть клас PeopleRegistry який наслідується від Person

// Клас PeopleRegistry представляє реєстр осіб з такими методами та властивостями:

// super конструктор 
// people - властивість, це має бути масив об'єктів осіб, який ініціалізується пустим.
// addPerson(person) - метод, що додає особу до реєстру. Використайте метод push щоб запушити отриману особу після ініціалізації класу.
// removePerson(firstName, lastName) - метод, що видаляє особу за ім'ям та прізвищем.
// Для того щоб видалити особу, ви можете відфільтрувати свій масив people та присвоїти його поточному масиву people.
// (this.people = this.people.filter(….));

// findPerson(firstName, lastName) - метод, що знаходить особу за ім'ям та прізвищем.
// Виконання схоже до removePerson, використайте метод filter. // return this.people.find();

// listPeople() - метод, що виводить список всіх осіб в реєстрі. Пройдіться по масиву people методом forEach. 
// У середині forEach чз крапку виведіть властивості у консоль
// Name: ${person.firstName} , тут ще має бути lastName та age.

// Виконання:

// Якщо складно реалізувати всі методи, реалізуйте хоча б 2. Про це вкажіть у своєму дескрипшині до ПР.
// Cтворіть екземпляр класу PeopleRegistry( тут буде ваша змінна реєстр)
// Створіть 2 екземпляри класу Person(тут ваша змінна person)
// Додайте у реєстр зміні екземпляру класу Person:

// Приклад виконання
// екземпляр класу PeopleRegistry
// const registry = new PeopleRegistry();
// екземпляри класу Person
// const person1 = new Person(); // використайте свою тестову дату.
// const person2 = new Person();// використайте свою тестову дату.
// Додаємо осіб до реєстру
// registry.addPerson(person1);
// registry.addPerson(person2);

// Виведіть всіх людей які є у реєстрі listPeople()
// Знайдіть людину, за допомогою метода findPerson();
// Видаліть людину з реєстру, за допомогою метода removePerson();

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class PeopleRegistry extends Person {
    constructor() {
        super();
        this.people = [];
    }
    addPerson(person) {
        this.people.push(person);
    }

    removePerson(firstName, lastName) {
        this.people = this.people.filter((person) => person.firstName !== firstName || person.lastName !== lastName);
    }

    findPerson(firstName, lastName) {
        return this.people.find((person) => person.firstName === firstName && person.lastName === lastName);
    }

    listPeople() {
        this.people.forEach((person) => {
            console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
        });
    }
}


const registry = new PeopleRegistry();


const person1 = new Person("Alisa", "Shevchenko", 28);
const person2 = new Person("Anna", "Koval", 22);

registry.addPerson(person1);
registry.addPerson(person2);

registry.listPeople();

const foundPerson = registry.findPerson("Alisa", "Shevchenko");
if (foundPerson) {
    console.log("Person found:", foundPerson);
} else {
    console.log("Person not found");
}

registry.removePerson("Anna", "Koval");

registry.listPeople();
