// Tack2
// Створіть асинхронну функцію delayAndLog(message, milliseconds), яка приймає повідомлення message
// і час у мілісекундах milliseconds.
// Функція повинна затримати виконання на заданий час milliseconds, використовуючи setTimeout.
// Після затримки, функція повинна вивести message на консоль.
// Використайте async/await для керування асинхронним виконанням функції.
// Викличте функцію delayAndLog з різними повідомленнями та затримками.

async function delayAndLog(message, milliseconds) {
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  await delay(milliseconds);

  console.log(message);
}
async function main() {
  await delayAndLog("delay 2 seconds", 2000);
  await delayAndLog("delay 3 seconds", 3000);
  await delayAndLog("delay 1 second", 1000);
}

main();
