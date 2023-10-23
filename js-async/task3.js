// Tack3 https://jsonplaceholder.typicode.com/
// Створіть дві асинхронні функції для здійснення запитів до сервера:
// Перша функція робить запит на сервер за посиланням
// https://jsonplaceholder.typicode.com/comments/1 і повертає об'єкт comments у вигляді Promise.
// Друга функція робить запит на сервер за посиланням
// https://jsonplaceholder.typicode.com/posts/2 і повертає об'єкт posts у вигляді Promise.
// Викликайте ці функції. Використовуйте методи Promise.all та Promise.race, передаючи їм масив із викликами обох функцій.
// Виведіть результат виконання цих функцій.

async function getComments() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/comments/1",
  );
  if (response.ok) {
    const comments = await response.json();
    return comments;
  } else {
    throw new Error("No comments");
  }
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
  if (response.ok) {
    const posts = await response.json();
    return posts;
  } else {
    throw new Error("No Posts");
  }
}

async function main() {
  const commentsPromise = getComments();
  const postsPromise = getPosts();

  try {
    const [comments, posts] = await Promise.all([
      commentsPromise,
      postsPromise,
    ]);
    console.log("Promise.all:");
    console.log("Comments:", comments);
    console.log("Posts:", posts);
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    const firstCompleted = await Promise.race([commentsPromise, postsPromise]);
    console.log("\nPromise.race:");
    console.log("Completed:", firstCompleted);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
