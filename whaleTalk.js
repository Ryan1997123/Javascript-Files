/**
 * Ryan Monaghan
 * 01/16/2022
 * Whale Talk Program CodeCademy
 * 
 * Objective: Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
 */


/**
 * 
Create a variable named input that is equal to any phrase you’d like. This variable will contain the text you want to translate into “whale talk”.
 */
const input = 'Hyolyn is a great dancer!';

/**
 * Whales only speak in vowels so you need an array of vowels to be extracted from the input variable. Set the array equal to a variable named vowels that will not be updated.

Note: Whales don’t consider “y” a vowel.
 */
const vowels = ['a','e','i','o','u'];

/**
 * 
Create a variable named resultArray and set it equal to an empty array: []. This will serve as a place to store the vowels from the input string.
 */
const resultArray = [];


/**
 * 
Create a loop to iterate through each letter of the input variable text. In a later step, we will compare each letter with our vowels array.
 */

//Loop through the input variable string
for (let i = 0; i < input.length; i++){
//Loop through the vowels array
for(let j = 0; j < vowels.length; j++){
//check if the character and input string are a vowel
if(input[i] === vowels[j]){
//if the letter is an 'e' we want two of them printed
    if(input[i] === 'e'){
      resultArray.push('ee');
//if the letter is a 'u' we want to print two of them
    } else if(input[i] === 'u'){
      resultArray.push('uu');
    }
//Otherwise just print the values in the input variable that match the vowels array (not double).
    else{
      resultArray.push(input[i]);
    }
    }
  }
}
//Output the result of the results array in uppercase and formatted with no spaces.
console.log(resultArray.join('').toUpperCase());

//Output:  OIAEEAAEE

