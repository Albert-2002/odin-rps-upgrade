# The Complete JavaScript Crash Course

## From Beginner to Advanced — A Guide + Cheat Sheet

> Prerequisite: You know HTML & CSS (The Odin Project). This guide assumes zero JS knowledge and takes you all the way to advanced, professional-level concepts.

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Variables & Data Types](#2-variables--data-types)
3. [Operators](#3-operators)
4. [Control Flow](#4-control-flow)
5. [Functions](#5-functions)
6. [Arrays](#6-arrays)
7. [Objects](#7-objects)
8. [The DOM](#8-the-dom)
9. [Events](#9-events)
10. [ES6+ Modern JavaScript](#10-es6-modern-javascript)
11. [Scope & Closures (Deep Dive)](#11-scope--closures-deep-dive)
12. [`this` Keyword](#12-this-keyword)
13. [Asynchronous JavaScript](#13-asynchronous-javascript)
14. [Error Handling](#14-error-handling)
15. [Object-Oriented JS (Prototypes & Classes)](#15-object-oriented-js-prototypes--classes)
16. [Functional Programming Patterns](#16-functional-programming-patterns)
17. [The Event Loop (How JS Really Works)](#17-the-event-loop-how-js-really-works)
18. [Modules & Tooling](#18-modules--tooling)
19. [Browser Storage & Web APIs](#19-browser-storage--web-apis)
20. [Testing Basics](#20-testing-basics)
21. [Project Ideas (Beginner → Advanced)](#21-project-ideas-beginner--advanced)
22. [Cheat Sheet Quick Reference](#22-cheat-sheet-quick-reference)
23. [Where to Go Next](#23-where-to-go-next)

---

## 1. Getting Started

### How to run JavaScript

- **Browser console**: Right-click → Inspect → Console tab. Great for quick tests.
- **In an HTML file**:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

Always put `<script>` right before `</body>` (or use `defer`) so the DOM loads first.

```html
<script src="script.js" defer></script>
```

- **Node.js** (for running JS outside the browser, and for tooling/projects):

```bash
node script.js
```

### Your first program

```js
console.log("Hello, world!");
```

`console.log()` is your best friend for debugging — use it constantly while learning.

---

## 2. Variables & Data Types

### Declaring variables

```js
let age = 25; // can be reassigned, block-scoped
const name = "Sam"; // cannot be reassigned, block-scoped
var oldWay = "avoid this"; // function-scoped, legacy — avoid in modern code
```

**Rule of thumb**: Use `const` by default. Use `let` only when you know the value will change. Never use `var`.

### Primitive data types

```js
let str = "Hello"; // String
let num = 42; // Number
let big = 123n; // BigInt (rare)
let bool = true; // Boolean
let empty = null; // Null (intentional "nothing")
let notSet; // Undefined (declared, no value yet)
let sym = Symbol("id"); // Symbol (unique identifier, advanced)
```

### Checking types

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  <-- famous JS quirk/bug, be aware of it
typeof {}; // "object"
typeof []; // "object"
typeof function () {}; // "function"
```

### Template literals (string formatting)

```js
const name = "Sam";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Multi-line strings too:
const msg = `Line one
Line two`;
```

### Type coercion & conversion

```js
Number("42"); // 42
String(42); // "42"
Boolean(0); // false
Boolean(""); // false
Boolean("0"); // true (non-empty string is truthy!)

"5" + 3; // "53"  (string concatenation)
"5" - 3; // 2     (numeric subtraction, coerces)
"5" * "2"; // 10
```

**Falsy values** (only 8 in JS — memorize these):

```js
(false, 0, -0, 0n, "", null, undefined, NaN);
```

Everything else is truthy, including `"0"`, `[]`, and `{}`.

---

## 3. Operators

```js
// Arithmetic
+  -  *  /  %  **   // ** is exponent: 2 ** 3 = 8

// Assignment
=  +=  -=  *=  /=  %=  **=

// Comparison
===  !==   // strict equality (use these!)
==   !=    // loose equality (avoid — does type coercion)
>  <  >=  <=

// Logical
&&   // AND
||   // OR
!    // NOT
??   // Nullish coalescing (only falls back on null/undefined)

// Examples
const a = 5, b = 10;
console.log(a === 5);        // true
console.log(a == "5");       // true (avoid this pitfall — use ===)
console.log(null ?? "default"); // "default"
console.log(0 ?? "default");    // 0 (0 is not null/undefined!)
console.log(0 || "default");    // "default" (0 is falsy)
```

### Ternary operator

```js
const age = 20;
const status = age >= 18 ? "adult" : "minor";
```

---

## 4. Control Flow

### If / else

```js
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teen");
} else {
  console.log("Child");
}
```

### Switch

```js
switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
  case "Fri":
    console.log("Almost weekend");
    break;
  default:
    console.log("Regular day");
}
```

### Loops

```js
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do...while (runs at least once)
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

// for...of — iterate over VALUES (arrays, strings, maps, sets)
for (const value of [10, 20, 30]) {
  console.log(value);
}

// for...in — iterate over KEYS (objects) — avoid on arrays
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}
```

### `break` and `continue`

```js
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // skip this iteration
  if (i === 6) break; // exit loop entirely
  console.log(i);
}
```

---

## 5. Functions

### Function declaration (hoisted — can be called before it's defined)

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Function expression (not hoisted)

```js
const greet = function (name) {
  return `Hello, ${name}!`;
};
```

### Arrow functions (ES6, concise, no own `this`)

```js
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Implicit return (single expression, no braces)
const square = (x) => x * x;
const add = (a, b) => a + b;

// Returning an object literal needs parentheses
const makeUser = (name) => ({ name: name, active: true });
```

### Default parameters

```js
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
```

### Rest parameters (gather args into array)

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4); // 10
```

### Callback functions (functions passed as arguments)

```js
function processUser(name, callback) {
  const message = `Processing ${name}`;
  callback(message);
}
processUser("Sam", (msg) => console.log(msg));
```

### Higher-order functions

Functions that take other functions as arguments or return functions.

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = multiplier(2);
double(5); // 10
```

### Immediately Invoked Function Expressions (IIFE)

```js
(function () {
  console.log("Runs immediately");
})();
```

---

## 6. Arrays

### Creating & basics

```js
const fruits = ["apple", "banana", "cherry"];
fruits.length; // 3
fruits[0]; // "apple"
fruits[fruits.length - 1]; // last item
```

### Mutating methods (change the original array)

```js
fruits.push("date"); // add to end
fruits.pop(); // remove from end
fruits.unshift("apricot"); // add to start
fruits.shift(); // remove from start
fruits.splice(1, 1, "kiwi"); // remove/insert at index
fruits.reverse();
fruits.sort(); // sorts as strings by default!
fruits.sort((a, b) => a - b); // numeric sort — always provide comparator for numbers
```

### Non-mutating methods (return NEW array — prefer these)

```js
const nums = [1, 2, 3, 4, 5];

nums.map((n) => n * 2); // [2,4,6,8,10]
nums.filter((n) => n % 2 === 0); // [2,4]
nums.reduce((acc, n) => acc + n, 0); // 15 (sum)
nums.find((n) => n > 3); // 4 (first match)
nums.findIndex((n) => n > 3); // 3
nums.some((n) => n > 4); // true (at least one matches)
nums.every((n) => n > 0); // true (all match)
nums.includes(3); // true
nums.slice(1, 3); // [2,3] (does NOT mutate, unlike splice)
nums.join(", "); // "1, 2, 3, 4, 5"
[...nums].reverse(); // spread to avoid mutating original
```

### `map` vs `forEach` vs `filter` — the trio you'll use constantly

```js
[1, 2, 3].forEach((n) => console.log(n)); // just loops, returns undefined
[1, 2, 3].map((n) => n * 2); // [2, 4, 6] — new array, same length
[1, 2, 3].filter((n) => n > 1); // [2, 3] — new array, fewer items
```

### `reduce` deep dive (the most powerful, hardest to learn)

```js
const cart = [{ price: 10 }, { price: 20 }, { price: 5 }];
const total = cart.reduce((acc, item) => acc + item.price, 0);
// acc starts at 0, accumulates through each item -> 35

// reduce can build objects too:
const words = ["a", "b", "a", "c", "b", "a"];
const counts = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
// { a: 3, b: 2, c: 1 }
```

### Destructuring arrays

```js
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]
```

### Array vs Object — checking arrays

```js
Array.isArray([1, 2, 3]); // true
```

---

## 7. Objects

### Basics

```js
const person = {
  name: "Sam",
  age: 25,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

person.name; // dot notation
person["age"]; // bracket notation (needed for dynamic keys)
person.greet();
```

### Adding/removing/updating

```js
person.email = "sam@example.com"; // add
delete person.age; // remove
person.name = "Samuel"; // update
```

### Object destructuring

```js
const { name, age } = person;
const { name: fullName } = person; // rename while destructuring
const { email = "none" } = person; // default value if missing
```

### Spread operator with objects (shallow copy / merge)

```js
const updated = { ...person, age: 26 }; // copy + override
const merged = { ...obj1, ...obj2 }; // merge (obj2 wins on conflicts)
```

### Object methods

```js
Object.keys(person); // ["name", "email", "greet"]
Object.values(person); // values array
Object.entries(person); // [["name","Sam"], ["email", "..."]]
Object.freeze(person); // make immutable
Object.assign({}, obj1, obj2); // merge (older way, prefer spread)
```

### Nested objects & optional chaining

```js
const user = {
  profile: { social: { twitter: "@sam" } },
};
user.profile?.social?.twitter; // safe access, undefined if any link missing
user.profile?.social?.instagram ?? "not set";
```

### Computed property names

```js
const key = "score";
const obj = { [key]: 100 }; // { score: 100 }
```

---

## 8. The DOM

The DOM (Document Object Model) is how JavaScript reads/manipulates HTML.

### Selecting elements

```js
document.getElementById("title");
document.querySelector(".card"); // first match, CSS selector syntax
document.querySelectorAll(".card"); // ALL matches (NodeList)
document.getElementsByClassName("card"); // live HTMLCollection (older)
```

### Reading/changing content

```js
const el = document.querySelector("#title");
el.textContent = "New text"; // safe, treats as plain text
el.innerHTML = "<b>Bold text</b>"; // parses as HTML — be careful (XSS risk with user input)
el.value; // for inputs/textareas
```

### Changing styles & classes

```js
el.style.color = "red";
el.classList.add("active");
el.classList.remove("active");
el.classList.toggle("active");
el.classList.contains("active");
```

### Attributes

```js
el.setAttribute("data-id", "42");
el.getAttribute("data-id");
el.removeAttribute("data-id");
el.dataset.id; // reads data-id via dataset API
```

### Creating & inserting elements

```js
const newDiv = document.createElement("div");
newDiv.textContent = "I'm new!";
newDiv.classList.add("box");

document.body.appendChild(newDiv);
parentEl.append(newDiv); // modern, flexible
parentEl.prepend(newDiv);
el.before(newDiv);
el.after(newDiv);
el.remove(); // remove an element
```

### Traversing the DOM

```js
el.parentElement;
el.children;
el.firstElementChild;
el.lastElementChild;
el.nextElementSibling;
el.previousElementSibling;
```

---

## 9. Events

### Basic listener

```js
const button = document.querySelector("button");
button.addEventListener("click", function (event) {
  console.log("Clicked!", event.target);
});

// Arrow function version
button.addEventListener("click", (e) => console.log(e));

// Remove a listener (must use a named function reference)
function handleClick() {
  console.log("clicked");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);
```

### Common events

```
click, dblclick, mouseover, mouseout, mousemove
keydown, keyup, keypress
submit, change, input, focus, blur
DOMContentLoaded, load, resize, scroll
```

### The event object

```js
button.addEventListener("click", (e) => {
  e.preventDefault(); // stop default behavior (e.g. form submit/refresh)
  e.stopPropagation(); // stop event from bubbling to parent elements
  console.log(e.target); // element that triggered the event
  console.log(e.currentTarget); // element the listener is attached to
});
```

### Event delegation (huge, commonly-used pattern)

Instead of adding listeners to many children, add ONE listener to the parent:

```js
document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked item:", e.target.textContent);
  }
});
```

This works even for elements added to the DOM later — very important for dynamic lists.

### Form handling

```js
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload
  const formData = new FormData(form);
  const email = formData.get("email");
  console.log(email);
});
```

---

## 10. ES6+ Modern JavaScript

### `let`/`const` and block scope

```js
{
  let x = 10; // only exists inside these braces
}
```

### Template literals (covered above)

### Destructuring (covered above) — works in function params too

```js
function printUser({ name, age }) {
  console.log(`${name} is ${age}`);
}
```

### Spread & Rest

```js
// Spread: expand an iterable
const arr = [1, 2, 3];
const copy = [...arr];
Math.max(...arr);

// Rest: collect remaining into array/object
function log(first, ...others) {
  console.log(first, others);
}
const { a, ...restObj } = { a: 1, b: 2, c: 3 };
```

### Enhanced object literals

```js
const name = "Sam";
const user = {
  name,
  greet() {
    return "hi";
  },
}; // shorthand
```

### Optional chaining `?.` and nullish coalescing `??`

Covered above — memorize these, used everywhere in modern code.

### Classes (see Section 15)

### Modules (see Section 18)

### Map & Set (advanced collection types)

```js
// Map: key-value pairs, keys can be ANY type
const map = new Map();
map.set("name", "Sam");
map.set(1, "one");
map.get("name"); // "Sam"
map.has("name"); // true
map.delete("name");
map.size;
for (const [key, value] of map) {
  console.log(key, value);
}

// Set: unique values only
const set = new Set([1, 2, 2, 3, 3]);
set.add(4);
set.has(2); // true
set.size; // 4
[...set]; // [1, 2, 3, 4] — great for de-duplicating arrays!

const unique = [...new Set([1, 1, 2, 2, 3])]; // [1, 2, 3]
```

### Symbol, generators, and other advanced ES6+ features

```js
// Generators — functions that can pause/resume
function* idGenerator() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const gen = idGenerator();
gen.next().value; // 1
gen.next().value; // 2
```

---

## 11. Scope & Closures (Deep Dive)

### Scope

```js
let global = "I'm global";

function outer() {
  let outerVar = "I'm in outer";
  function inner() {
    let innerVar = "I'm in inner";
    console.log(global, outerVar, innerVar); // can access all 3
  }
  inner();
  console.log(innerVar); // ERROR — inner scope not visible outside
}
```

Inner functions can access outer variables, but not vice versa. This is called **lexical scoping**.

### Closures

A closure is a function that "remembers" the variables from where it was created, even after that outer function has finished running.

```js
function makeCounter() {
  let count = 0; // this variable is "enclosed"
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```

Every call to `makeCounter()` creates a brand-new, independent `count`:

```js
const counterA = makeCounter();
const counterB = makeCounter();
counterA(); // 1
counterA(); // 2
counterB(); // 1 — independent!
```

**Why closures matter**: they enable data privacy (like private variables), function factories, and are the backbone of things like React hooks, debounce/throttle utilities, and module patterns.

```js
// Practical closure example: private counter with controlled access
function createBankAccount(balance) {
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    },
  };
}
const account = createBankAccount(100);
account.deposit(50); // 150
// `balance` cannot be accessed directly from outside — it's private!
```

---

## 12. `this` Keyword

`this` is one of the trickiest parts of JS. Its value depends on **how a function is called**, not where it's defined (except for arrow functions).

```js
const person = {
  name: "Sam",
  greet() {
    console.log(this.name); // "this" = person, because called as person.greet()
  },
};
person.greet(); // "Sam"

const greetFn = person.greet;
greetFn(); // undefined (or error in strict mode) — "this" lost its context!
```

### Arrow functions don't have their own `this`

They inherit `this` from the surrounding (lexical) scope — this is why arrow functions are great for callbacks:

```js
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++; // "this" correctly refers to `timer`
      console.log(this.seconds);
    }, 1000);
  },
};
timer.start();
```

If you used a regular `function` in `setInterval` above, `this` would refer to the global object (or `undefined` in strict mode) instead of `timer` — a very common bug for beginners.

### Manually controlling `this`

```js
function greet() {
  console.log(this.name);
}
const user = { name: "Sam" };

greet.call(user); // "Sam" — call with explicit `this`
greet.apply(user, []); // same, but args passed as array
const boundGreet = greet.bind(user); // returns a new function permanently bound to `user`
boundGreet(); // "Sam"
```

---

## 13. Asynchronous JavaScript

JavaScript is single-threaded, but handles slow operations (network requests, timers) asynchronously so the page doesn't freeze.

### Callbacks (the old way)

```js
setTimeout(() => {
  console.log("Runs after 2 seconds");
}, 2000);
```

Nesting many callbacks leads to "callback hell" — hard to read/maintain.

### Promises (the modern foundation)

A Promise represents a value that will be available now, later, or never (error).

```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("It worked!");
  } else {
    reject("It failed!");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
  .finally(() => console.log("Always runs"));
```

### Chaining promises

```js
fetchUser(1)
  .then((user) => fetchPosts(user.id))
  .then((posts) => console.log(posts))
  .catch((err) => console.error(err));
```

### `async`/`await` (modern, cleanest syntax — built on Promises)

```js
async function getUser() {
  try {
    const response = await fetch("https://api.example.com/user/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}
```

`async` functions always return a Promise. `await` pauses execution until the Promise resolves — but only within an `async` function.

### The Fetch API (making HTTP requests — you'll use this constantly)

```js
// GET request
fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// POST request
fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Sam", age: 25 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// With async/await
async function createUser(userData) {
  const response = await fetch("https://api.example.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
  return await response.json();
}
```

### Running promises in parallel

```js
const [users, posts] = await Promise.all([
  fetch("/api/users").then((r) => r.json()),
  fetch("/api/posts").then((r) => r.json()),
]);
// Promise.all fails fast if ANY promise rejects.

// Promise.allSettled — waits for all, regardless of success/failure
const results = await Promise.allSettled([promise1, promise2]);

// Promise.race — resolves/rejects as soon as the FIRST promise settles
const fastest = await Promise.race([promise1, promise2]);
```

---

## 14. Error Handling

```js
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Caught an error:", error.message);
} finally {
  console.log("This always runs, error or not");
}

// Throwing custom errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Custom error classes (advanced)
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid email format");
} catch (err) {
  if (err instanceof ValidationError) {
    console.log("Validation failed:", err.message);
  }
}
```

---

## 15. Object-Oriented JS (Prototypes & Classes)

### Prototypes (how JS actually implements inheritance under the hood)

```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  return `Hi, I'm ${this.name}`;
};

const sam = new Person("Sam");
sam.greet(); // "Hi, I'm Sam" — method is shared via the prototype, not copied per-instance
```

### Classes (ES6 syntax sugar over prototypes — the modern way to write OOP)

```js
class Person {
  // class field (modern syntax)
  species = "Human";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hi, I'm ${this.name}`;
  }

  // static method — called on the class itself, not instances
  static create(name) {
    return new Person(name, 0);
  }

  // getter/setter
  get info() {
    return `${this.name} (${this.age})`;
  }
  set info(value) {
    [this.name, this.age] = value.split(",");
  }
}

const sam = new Person("Sam", 25);
sam.greet();
Person.create("Guest");
sam.info; // getter
```

### Inheritance

```js
class Student extends Person {
  constructor(name, age, school) {
    super(name, age); // call parent constructor
    this.school = school;
  }
  greet() {
    return `${super.greet()}, I study at ${this.school}`;
  }
}

const student = new Student("Sam", 20, "MIT");
student.greet();
student instanceof Person; // true
```

### Private fields (modern, `#` prefix)

```js
class BankAccount {
  #balance = 0; // truly private, inaccessible from outside

  constructor(initial) {
    this.#balance = initial;
  }
  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return this.#balance;
  }
}
```

---

## 16. Functional Programming Patterns

```js
// Pure functions — same input always gives same output, no side effects
function add(a, b) {
  return a + b;
} // pure
let total = 0;
function addToTotal(x) {
  total += x;
} // impure — has a side effect

// Immutability — avoid mutating data directly
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // instead of arr.push(4)

const obj = { a: 1 };
const newObj = { ...obj, b: 2 }; // instead of obj.b = 2

// Function composition
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((acc, fn) => fn(acc), x);
const double = (x) => x * 2;
const increment = (x) => x + 1;
const process = pipe(double, increment);
process(5); // (5*2)+1 = 11

// Currying
const multiply = (a) => (b) => a * b;
const double2 = multiply(2);
double2(5); // 10

// Debounce (delay execution until user stops triggering an event — very common in real apps)
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), delay);
  };
}
const debouncedSearch = debounce(
  (query) => console.log("Searching:", query),
  300,
);

// Throttle (limit execution to once every N ms)
function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

---

## 17. The Event Loop (How JS Really Works)

JavaScript has a **single thread**, a **call stack**, and uses the **event loop** to handle async code without blocking.

```
Call Stack → runs your code, one frame at a time
Web APIs   → browser handles timers, fetch, DOM events in the background
Callback / Task Queue → holds callbacks ready to run (setTimeout, events)
Microtask Queue → holds Promise callbacks (.then, async/await) — HIGHER PRIORITY
Event Loop → constantly checks: "Is the call stack empty? If so, run the next
             microtask queue item first, THEN the next task queue item."
```

```js
console.log("1");

setTimeout(() => console.log("2"), 0); // goes to task queue

Promise.resolve().then(() => console.log("3")); // goes to microtask queue

console.log("4");

// Output order: 1, 4, 3, 2
// Synchronous code runs first, then ALL microtasks, then macrotasks (setTimeout)
```

Understanding this explains why Promises seem to "jump the queue" ahead of `setTimeout`, and is essential for debugging tricky async bugs.

---

## 18. Modules & Tooling

### ES Modules (native, modern JS)

```js
// math.js
export function add(a, b) {
  return a + b;
}
export const PI = 3.14159;
export default function multiply(a, b) {
  return a * b;
} // one default export per file

// main.js
import multiply, { add, PI } from "./math.js";
import * as MathUtils from "./math.js"; // import everything as an object
```

In HTML, use `type="module"`:

```html
<script type="module" src="main.js"></script>
```

### CommonJS (Node.js legacy style — still very common)

```js
// math.js
module.exports = { add, multiply };
// main.js
const { add, multiply } = require("./math.js");
```

### npm (Node Package Manager) — essential for real projects

```bash
npm init -y                  # start a new project (creates package.json)
npm install lodash           # install a package
npm install -D vite          # install as a dev dependency
npm run build                # run a script defined in package.json
```

### Bundlers/build tools you'll encounter

- **Vite** — modern, fast, great for beginners starting real projects.
- **Webpack** — older, powerful, more config-heavy.
- **Parcel** — zero-config alternative.

### Linting/formatting (good habits early)

- **ESLint** — catches bugs and enforces style rules.
- **Prettier** — auto-formats your code consistently.

---

## 19. Browser Storage & Web APIs

```js
// localStorage — persists even after closing the browser
localStorage.setItem("theme", "dark");
localStorage.getItem("theme");
localStorage.removeItem("theme");
localStorage.clear();

// sessionStorage — cleared when the tab closes
sessionStorage.setItem("draft", "unsaved text");

// Storing objects (must stringify/parse — storage only holds strings)
localStorage.setItem("user", JSON.stringify({ name: "Sam" }));
const user = JSON.parse(localStorage.getItem("user"));

// Timers
setTimeout(() => console.log("once"), 1000);
const id = setInterval(() => console.log("repeats"), 1000);
clearInterval(id);

// JSON
JSON.stringify({ a: 1 }); // '{"a":1}'
JSON.parse('{"a":1}'); // { a: 1 }
```

---

## 20. Testing Basics

Real-world projects use automated tests. A gentle intro using **Jest** (most popular):

```bash
npm install -D jest
```

```js
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require("./sum");
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

```bash
npx jest
```

Common matchers: `toBe`, `toEqual`, `toBeTruthy`, `toBeNull`, `toContain`, `toThrow`.

---

## 21. Project Ideas (Beginner → Advanced)

### Beginner (DOM + basic logic)

1. **To-Do List** — add/delete/mark complete, save to localStorage
2. **Calculator** — basic operations, keyboard support
3. **Number Guessing Game**
4. **Quote Generator** — fetch random quotes from a public API
5. **Digital Clock** — updates every second using `setInterval`
6. **BMI Calculator**

### Intermediate (async, APIs, more complex state)

7. **Weather App** — fetch from a weather API, handle loading/error states
8. **Movie Search App** — OMDB API, debounced search input
9. **Expense Tracker** — CRUD with localStorage persistence
10. **Recipe Finder** — filter/search fetched data
11. **Pomodoro Timer** — with start/pause/reset and settings
12. **GitHub Profile Viewer** — fetch and display GitHub user data via their public API

### Advanced (architecture, patterns, real complexity)

13. **Kanban Board** (Trello clone) — drag & drop, localStorage or backend
14. **Chat App (mock or real-time with WebSockets/Firebase)**
15. **E-commerce Cart** — product listing, cart state, checkout flow
16. **Markdown Editor** — live preview, syntax parsing
17. **Multiplayer game or canvas-based game** (Snake, Tetris clone)
18. **Personal Dashboard** — combines multiple APIs (weather, news, tasks)
19. **Build your own small framework/library** — e.g., a mini state-management library, to deeply understand how tools like Redux work

**Tip**: For each project, try building it three ways as you grow — vanilla JS first, then with a framework (React/Vue) later once you get there, then with tests.

---

## 22. Cheat Sheet Quick Reference

```js
// Declaring
const x = 1; let y = 2;

// Types
typeof x

// String
`template ${x}`
str.length, str.toUpperCase(), str.toLowerCase(), str.trim()
str.split(","), str.includes("x"), str.slice(0,3), str.replace("a","b")

// Array
arr.map(), arr.filter(), arr.reduce(), arr.find(), arr.forEach()
arr.push(), arr.pop(), arr.slice(), arr.splice(), arr.sort()
arr.includes(), arr.join(), [...arr]

// Object
Object.keys(obj), Object.values(obj), Object.entries(obj)
{...obj}, const {a,b} = obj

// Function
function fn(){}, const fn = () => {}, async function fn(){}

// Conditionals
if/else, switch, ternary ? :, && || ??

// Loops
for, for...of, for...in, while, forEach

// Async
fetch().then().catch()
async function() { await ... try/catch }
Promise.all([...])

// DOM
document.querySelector(), addEventListener(), classList.add/remove/toggle()

// Class
class X { constructor(){} method(){} static m(){} #private }
```

---

## 23. Where to Go Next

1. **Practice fundamentals** — build 3-5 beginner projects with _just vanilla JS, no frameworks_. This is critical; don't skip to React too early.
2. **The Odin Project's JavaScript course** — since you already used it for HTML/CSS, continue there; it pairs perfectly with this guide.
3. **JavaScript.info** — excellent, free, deep-dive reference for anything you need to revisit.
4. **MDN Web Docs** — the official, authoritative reference for JS/DOM/Web APIs.
5. Once comfortable: learn **Git/GitHub** deeply (version control), then move to a framework like **React**, and pick up **TypeScript** for larger projects.
6. Build, break, debug, repeat — the fastest way to actually learn JavaScript is writing lots of small, real programs, not just reading.

Good luck — you have a strong foundation from HTML/CSS, and JavaScript is where your pages start coming to life. Build things, get stuck, look things up, and keep shipping projects.
