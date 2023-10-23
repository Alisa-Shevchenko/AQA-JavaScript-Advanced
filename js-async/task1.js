// Таск1

// Дано обєкт:

// const userSettings = {
// username: "john_doe",
// theme: "dark",
// language: "en",
// notifications: true,
// };

// Зробіть сереалізацію та десеалізацію

const userSettings = {
    username: "john_doe",
    theme: "dark",
    language: "en",
    notifications: true,
};

const serializedObj = JSON.stringify(userSettings);
console.log(serializedObj);

const deserializedObj = JSON.parse(serializedObj);
console.log(deserializedObj);