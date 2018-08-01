// ** Basic Types
// Boolean
let isDone: boolean = false;

// * Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// * String
let text: string = 'blue';
text = 'red';

// * Example
const myname: string = `ksugiura`;
let age: number = 36;
let sentence: string = `Hello, my name is ${ myname }.
I'll be ${ age + 1 } years old next month.`;

// * Array
let listNum: number[] = [1, 2, 3];
let listStr: string[] = ['1', '2', '3'];

// * Generic Array(rarely used)
// let listGen: Array<number> = [1, 2, 3];

// * Tuple
let tuple: [string, number];
tuple = ['hello', 10];
// tuple = ['hello', '10']; // * Error
console.log(tuple[0].length);
// console.log(tuple[1].length); // * Error




