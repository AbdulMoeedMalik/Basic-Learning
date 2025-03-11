const name = "Moeed"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Moeed-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('c'));

// const newString = gameName.substring(0, 5)
// console.log(newString);

// const anotherString = gameName.slice(-4, 10)
// console.log(anotherString);

const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());
  // trim Method

const greeting = "   Hello world!  ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";


const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

console.log(url.includes('moeed'))

console.log(gameName.split('-'));

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]


