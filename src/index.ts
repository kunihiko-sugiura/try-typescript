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
// tuple = [10, 'hello']; // * Error
console.log(tuple[0].length);
// console.log(tuple[1].length); // * Error

tuple[2] = 'world';
tuple[4] = 1;
// tuple[3] = false; // * Error
console.log(tuple);
// console.log(tuple[5].toString());

// * Enum
enum Color {
    Red = 1,
    Green = 3,
    Blue,
}
let color: Color = Color.Blue;
let colorName: string = Color[2];
console.log(color, colorName);

// * Any
let notSure: any = 4;
notSure = 'maybe a string instead';
notSure = false;
notSure = [1];
// * list any
let listAny: any[] = [1, true, "free"];

// * Void
let unusable: void = undefined;

// return function
function returnVoid(): void {
    console.log("This is my warning message");
}
console.log(returnVoid());

// ** Null and Undefined
let u: undefined = undefined;
let n: null = null;

// ** TODO:Never


