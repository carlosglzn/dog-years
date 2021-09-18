// Exercise to convert my age from "human years" to "dog years"

// My age in 2021
const myAge = 26;

// The first two years of a dog
let earlyYears = 2;

// Each dog's years = 10.5 human years
// Multiply the 2 first years by 10.5 human years
earlyYears *= 10.5;

// Substracting the first two years from my age to get the later years
let laterYears = myAge - 2;

// Later Years: 1 dog's years = 4 human years
// Multiply later years by 4
laterYears *= 4;

// Adding the early years calculations with the later years to get my age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// My name in lower case

const myName = "Carlos Gonzalez".toLowerCase();

// Result

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
