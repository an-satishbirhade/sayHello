const sayHello = require('./index');

const inputString = 'John Doe';
const result = sayHello(inputString);

console.log(`Name: ${inputString}`);
console.log(`Greet: ${result}`);
