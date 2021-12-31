//Ryan Monaghan
//12-31-2021
//Codecademy Front-End Engineering Course

/*Program to convert human and dog years (age)*/
/*Dogs mature at a faster rate than human beings. 
We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age.
In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. 
Thus, how old would I be if you were a dog?

This program is to solve how to convert your age from “human years” to “dog years”:
NOTED:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years. */

//My age currently
const myAge = 24;

let earlyYears = 2;
earlyYears *= 10.5;

/*Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
Set the result equal to a variable called laterYears. We’ll be changing this value later. */
laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

/*Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears.*/
myAgeInDogYears = earlyYears + laterYears;

/*Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName.
The toLowerCase method returns a string with all lowercase letters.*/
myName = 'Ryan'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);