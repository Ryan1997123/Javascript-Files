//Ryan Monaghan
//12-31-2021
//Codecademy Front End Engineering Course

//A JS program to convert Kelvin to Celsius, then to Farenheit.

// A variable named kelvin, and set it equal to 293 for todays forcast of 293 Kelvin.
const kelvin = 293;

//To convert Kelvin to Celsius by subtracting 273 from the kelvin var.
const celsius = kelvin - 273;

//Fahrenheit = Celsius * (9/5) + 32
let fahrenheit = celsius * (9 / 5) + 32;

//Remove the decimal number when converting from Celsius to Fahrenheit
fahrenheit = Math.floor(fahrenheit);


console.log(`The temperature is ${fahrenheit} degrees Farenheit.`);

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

//Convert celsius to the Newton scale
//Newton = Celsius * (33/100)
const newton = Math.floor(celsius * (33 / 100));
console.log(`The temperature is ${newton} degrees Newton`);
