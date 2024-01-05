// problem-1
/**
 * Design a TypeScript function that takes a parameter of a union type (e.g., string | number). If it's a string, return its length. If it's a number, return the square of that number.
*/
// Ans :
const checkType = (input: string | number): number => {
    if (typeof input == 'string') {
        return input.length
    }
    else if (typeof input == 'number') {
        return input * input
    }
    return 0
}


//problem-2
/***
 * Create an interface called Person with optional properties address and phone. The address property itself will be another object containing city and street properties. Implement a function named getAddressCity that takes an argument of type Person and returns the city from the address property of the Person object. Use optional chaining to prevent any type errors.
 */
// Ans :
interface Address {
    city?: string;
    street?: string
}

interface Person {
    address?: Address;
    phone?: string
}

const getAddressCity = (person: Person): string | undefined => {

    return person?.address?.city
}


//problem-3
/**
 * Create a type guard function isCat that checks if an object is an instance of a Cat class. If it does, the function says "yes, it's a cat." If it doesn't match, the function says "no, it's not a cat."
 */
// Ans :
class Cat {
    name: string;
    species: string;
    sound: string

    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound
    }
}

const isCat = (cat: any): string => {
    if (cat instanceof Cat) {
        return "yes, it's a cat"
    }
    return "no, it's not a cat."
}

//problem-4
/**
 * You got a list that has numbers and words mixed together. Your job is to make a function that will take the list as an argument and return the total by adding them up.

To solve this in TypeScript, you'll look at each thing in the list named mixedData, which looks like this: [1, 'two', 3, 'four', 5]. You'll go through the list, find the numbers, and add them together.

Every time you find a number in the list, you'll add it to a total. You'll start at zero and then keep adding the numbers you find. If no number is found in the list return 0. To make sure TypeScript knows these things are numbers, you'll use type assertions.
 */
// Ans :
const findNumberSum = <T>(mixedData: T[]): number => {
    let total = 0;
    mixedData.forEach(element => {
        if (typeof element == 'number') {
            total += element as number
        }
        return 0

    });
    return total
}


//problem-5
/**
 * Define two interfaces: Car with properties like make, model, and year, and Driver with properties like name and licenseNumber. Create a function that takes two objects of type Car and Driver and returns an object with the combined properties of both types.
 */
// Ans :
interface Car {
    make: string;
    model: string;
    year: number
}

interface Driver {
    name: string;
    licenseNumber: string
}

const objectCombined = <Tc, Td>(car: Tc, driver: Td): Tc & Td => {
    const combineObj = {
        ...car, ...driver
    }
    return combineObj
}


//problem-6
/**
 * Write a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is an array of numbers. If it is, calculate the sum of the numbers and log it. If it's not, log an error message.
 */
// Ans :
const calculateSumFromArray = (param: unknown): void => {
    if (Array.isArray(param) && param.every((item) => typeof item === 'number')) {
        const sum = (param as number[]).reduce((acc, val) => acc + val, 0);
        console.log(sum);
    } else {
        console.error("Error: Parameter is not an array of numbers.");
    }
}

//problem-7
/**
 * Create a TypeScript function called findFirstOccurrence that accepts an array and a value to search for. Use generics to make the function work with arrays of any data type. Inside the function, find and return the index of the first occurrence of the value in the array. If the value is not found in the array, return -1 to indicate that. Create sample arrays of different data types (e.g., numbers, strings) and call the findFirstOccurrence function for each of them to display the results.

// Example usage:

const numbers: number[] = [1, 2, 3, 4, 5, 2];

const strings: string[] = ["apple", "banana", "cherry", "date", "apple"];

const targetNumber = 2;

const targetString = "cherry";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);

const indexInStrings = findFirstOccurrence(strings, targetString);

console.log(indexInNumbers); //output:  1

console.log(indexInStrings); //output: 2
 */

const findFirstOccurrence = <T>(arr: T[], value: T): number => {
    const index = arr.findIndex((item) => item === value);
    return index !== -1 ? index : -1;
}

