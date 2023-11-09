# Here Is Some TypeScript Interview Questions:

### What are some benefits of using TypeScript over JavaScript in a project?

#### TypeScript is an open-source language that is a statically-typed superset of JavaScript. It was developed and maintained by Microsoft, and it has been gaining popularity among developers due to its numerous benefits.
* The Advantages of TypeScript over JavaScript
TypeScript is especially beneficial for large-scale projects where code maintenance and scalability are important. TypeScript has a rich set of tools, such as an integrated development environment (IDE) and text editor support, that makes it easier to develop and debug code.One of the other benefits of TypeScript is strong typing. TypeScript requires you to declare the type of variables, which can help prevent type-related errors. This makes code easier to read, maintain, and debug, and can also help reduce the risk of security vulnerabilities.TypeScript's strong typing and type inference also make code more readable, especially for large projects.TypeScript also includes features like interfaces and classes, which are not available in JavaScript. Interfaces allow you to define a contract that classes must implement.TypeScript offers a range of benefits over JavaScript, including improved type safety, tooling, and integration. By using TypeScript, developers code can be high-quality, scalable, and maintainable that is easier to debug and test. 

### What is the purpose of the optional chaining (?.) and nullish coalescing (??) operators in TypeScript, and how do they work? Provide an example for each

#### The optional chaining (?.) and nullish coalescing (??) operators in TypeScript (and JavaScript) are designed to handle situations involving optional or potentially nullable values, making your code more resilient and concise.

* Optional chaining ('?')
The optional chaining operator allows you to safely access properties or call methods on an object without the risk of throwing an error if the object or any intermediate property is null or undefined.

how it works:  If the property or method accessed using ?. is null or undefined the expression short-circuits and undefined is returned instead of causing an error.

const person = {
    name: 'Belal',
    address: {
        city: 'Narayanganj',
        
    },
};

const street = person?.address?.street;

console.log(street); 

* Nullish Coalescing (??):

 The nullish coalescing operator is used to provide a default value for a variable or expression when the variable on its left is null or undefined. It is particularly useful when you want to distinguish between truly missing values and values like an empty string or 0.

How it works: It returns the value on the right if the value on the left is null or undefined. Otherwise it returns the value on the left.

const user = {
    name: 'Belal',
    age: 24, 
};

const phoneNumber = user.phoneNumber ?? 'there is no phone number';
const age = user.age ?? 'there is no age';

console.log(phoneNumber); 
console.log(age);

These operators are particularly valuable when working with data from external sources such as APIs where missing or undefined values can be common.
