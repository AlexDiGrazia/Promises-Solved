

/**
 * PROMISE ERROR HANDLER
 * Please, make sure to read the "09 An-important-rule.md" file in exercises-info folder
 */


/**
 * @task
 * Create a function `iterate` that prints the first argument 
 * (an integer) to it and then returns that argument + 1
 * The function must be exported
 */

export  function iterate(int) {
  console.log(int)
  return int + 1;
}

/**
 * @task
 * Create a function `alwaysThrows` that throws an `Error` with text `"OH NOES"`
 * The function must be exported
 */

export function alwaysThrows() {
  throw new Error('OH NOES')
}

/**
 * @task
 * Create a function `onReject` that logs the argument value in the console
 * The function must be exported
 */

export function onReject(arg) {
  console.log(arg.message)
}

/**
 * @task
 * Create a promise variable that follows the list:
 * * Stores the resolved promise using `Promise.resolve`
 * * Wraps your iterate method, then a series of iterations that attempts to perform `iterate` a total of 10 times.
 * * Attach a rejection handler at the bottom of your chain to print the
 * `error.message` using `console.log` with the onReject function
 * * Insert a call to `alwaysThrows` after your 5th call of `iterate`
 * If everything was done correctly the promise will:
 * * log (1, 2, 3, 4, 5)
 * * throw an error that will be handled by the catch() block and log the error message
 */

export const promise = 
  Promise
    .resolve(1)
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => alwaysThrows())
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .then((res) => iterate(res))
    .catch((err) => onReject(err));





// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-9"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
