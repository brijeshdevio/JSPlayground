// 1. Destructuring and Rest/Spread
// Question: Given this object, write a single line of code to extract the title and author, and then collect the rest of the properties (isbn, pages, language) into a variable named details.

// What you learn: Precise extraction of data from objects and using the rest operator to cleanly separate properties.
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  isbn: "978-0596517748",
  pages: 176,
  language: "English",
};

const { title, author, ...details } = book;
console.log(title);
console.log(author);
console.log(details);

// 2. Promises & Async/Await
// Question: Refactor this nested promise chain into using async/await and proper error handling. Add a feature to fetch a user's posts after their profile is loaded.
// Starter Code

// What you learn: Converting promise chains to the more readable async/await syntax and handling errors without the "callback hell" anti-patter
fetchUserProfile(123)
  .then((profile) => {
    console.log(profile);
    fetchUserPosts(profile.id)
      .then((posts) => {
        console.log(posts);
      })
      .catch((err) => console.error("Failed to fetch posts:", err));
  })
  .catch((err) => console.error("Failed to fetch profile:", err));

// Improved version
(async () => {
  try {
    const profile = await fetchUserProfile(123);
    console.log(profile);
    const posts = await fetchUserPosts(profile.id);
    console.log(posts);
  } catch (error) {
    console.error("Failed to fetch data", err);
  }
})();

// 3. Iterators & Generators
// Question: Create a generator function numberRange that yields numbers from start to end (inclusive) with a custom step value. Then, use it to log only even numbers between 10 and 20.

// What you learn: How generators produce values on demand, enabling lazy evaluation and working with infinite sequences (conceptually).

function* numberRange(start, end, step = 1) {
  let count = start;
  while (count <= end) {
    yield count;
    count += step;
  }
}

const number = numberRange(1, 100, 5);
while (!number.next().done) {
  console.log(number.next().value);
  if (number.next().done) {
    break;
  }
}
