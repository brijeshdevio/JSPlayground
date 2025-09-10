// ============== Question 1 ==============
// Create a promise that resolves with the message `"Data fetched successfully!"` and rejects with the message `"Failed to fetch data"`. Create a variable `dataReceived` and assign it a boolean value. Log the resolved message to the console.

const dataReceived = new Promise((resolve, reject) => {
  const isSuccess = Math.floor(Math.random() * 10) % 2 == 0;
  if (isSuccess) resolve("Data fetched successfully!");
  else reject("Failed to fetch data");
});

dataReceived.then(console.log).catch(console.error);

// ============== Question 2 ==============
// Create a promise that checks if a number is greater than 10. If it is, resolve with the message `"Number is valid"`, otherwise reject with the message `"Number is too small"`.

const checkNumberIsValid = () =>
  new Promise((resolve, reject) => {
    const number = Math.floor(Math.random() * 20);
    if (number > 10) resolve("Number is valid");
    else reject("Number is too small");
  });

checkNumberIsValid().then(console.log).catch(console.error);

// ============== Question 3 ==============
// Create a promise that resolves with the message `"User is logged in"` if the boolean variable `isLoggedIn` is `true`, and rejects with the message `"User is not logged in"` if it is `false`.

const loginUser = () =>
  new Promise((resolve, reject) => {
    const isLoggedIn = Math.floor(Math.random() * 10) % 2 == 0;
    if (isLoggedIn) resolve("User is logged in");
    else reject("User not logged in");
  });

loginUser().then(console.log).catch(console.error);

// ============== Question 4 ==============
// Create a promise that simulates fetching user data. If `userExists` is true, resolve with the user object `{ name: "Alice", age: 25 }`. If false, reject with the message `"User not found"`.

const fetchingUser = () =>
  new Promise((resolve, reject) => {
    const userExists = Math.floor(Math.random() * 10) % 2 == 0;
    if (userExists) resolve({ name: "Alice", age: 25 });
    else reject("User not found");
  });

fetchingUser().then(console.log).catch(console.error);

// ============== Question 5 ==============
// Create a promise that resolves with a number 42 after 2 seconds. Use setTimeout for delay. Log the number to the console when it resolves.
const resolveNumber = new Promise((resolve) => {
  setTimeout(() => {
    resolve(42);
  }, 2000);
});

resolveNumber.then(console.log).catch(console.error);

// ============== Question 6 ==============
// Create a promise that rejects with a number 500 after 3 seconds. Use setTimeout for delay. Log the number to the console when it rejects.
const rejectNumber = new Promise((_, reject) => {
  setTimeout(() => {
    reject(500);
  }, 3000);
});

rejectNumber.then(console.log).catch(console.error);

// ============== Question 7 ==============
// Create a function checkPassword(password) that returns a promise. If the password is "12345", resolve with the message "Password accepted", otherwise reject with "Invalid password".

const checkPassword = (password) =>
  new Promise((resolve, reject) => {
    if (password === "12345") resolve("Password accepted");
    else reject("Invalid password");
  });

checkPassword("12345").then(console.log).catch(console.error);

// ============== Question 8 ==============
// Create a function checkEmail() that returns a promise which checks if an email contains the "@" symbol. If it does, resolve with "Valid email". If not, reject with "Invalid email".

const checkEmail = (email) =>
  new Promise((resolve, reject) => {
    if (email.includes("@")) resolve("Valid email");
    else reject("Invalid email");
  });

checkEmail("m@example.com").then(console.log).catch(console.error);

// ============== Question 9 ==============
// Create a function fetchTemperature() that returns a promise. The promise should resolve with "Temperature is 20°C" if the temperature is above 15, and reject with "Temperature too low" otherwise.

const fetchTemperature = (temperature) =>
  new Promise((resolve, reject) => {
    if (temperature > 15) resolve("Temperature is 20°C");
    else reject("Temperature too low");
  });

fetchTemperature(17).then(console.log).catch(console.error);
