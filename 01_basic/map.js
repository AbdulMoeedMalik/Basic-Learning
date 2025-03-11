const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// Math.round(x) → Rounds to the nearest integer.
// Math.ceil(x) → Always rounds up.
// Math.floor(x) → Always rounds down.
// Math.trunc(x) → Removes decimal part (no rounding).

// Math.pow(base, exponent) → Calculates base^exponent.

console.log(Math.pow(2, 3)); // 8 (2³ = 8)

// Math.sqrt(x) → Finds the square root.

console.log(Math.sqrt(16)); // 4

// Math.max(a, b, c, ...) → Returns the largest number.

console.log(Math.max(10, 20, 5)); // 20

// Math.min(a, b, c, ...) → Returns the smallest number.

console.log(Math.min(10, 20, 5)); // 5

// Math.random() → Returns a random number between 0 and 1

console.log(Math.random()); // Example output: 0.54321

// Generating a random number in a range (e.g., 1 to 10):



let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum); // Example output: 7

// Math.abs(x) → Returns the absolute value (removes negative sign).

console.log(Math.abs(-10)); // 10


// Math.sign(x) → Returns 1 if positive, -1 if negative, 0 if zero.

console.log(Math.sign(10)); // 1
console.log(Math.sign(-5)); // -1
console.log(Math.sign(0)); // 0
