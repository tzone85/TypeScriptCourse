
// letting ts infer types

// string
let myName: string = 'Thando';

// number
let myAge: number = 35;

// boolean
let hasHobbies = true;

// assign types myself

let myRealAge: number;
myRealAge = 27;

// array
let hobbies: any[] = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 'string';

// (TS only)tuples (tuples are basically arrays with mixed types, & a limited number of items and order is preserved)

let address: [string, number] = ["MyStreet", 99];

// (TS only) enums (to make numbers more expressive)
enum Color {
    Grey,       //0
    Green = 200,      //1
    Blue = 2       //2
}

let myColor: Color = Color.Green;
console.log(myColor);

// any
let car: any = "bmw";
car = { brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName(): string {
    return myName;
}
console.log(myName);

function sayHello(): void {
    console.log('Hello');
}

// argument types
function multiply(value1: number, value2: number) : number {
    return value1 * value2;
}

console.log(multiply(2, 6));

// functions as types, i.e. funtion types

let myMultiply: (value1: number, value2: number) => number;

// myMultiply =  sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(4, 6));

// objects
let userData: { name: string, age: number} = {
    name: "Thando",
    age: 35
};

// not a valid type
// userData = {
//     a: 'hello',
//     b: 22
// };

// complex object
let complex: { data: number[], output: (all: boolean) => number[]} = {

    data: [200, 39, 45, 3.2],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// type alias

type Complex = { data: number[], output: (all: boolean) => number[] }

let complex2: Complex = {

    data: [200, 39, 45, 3.2],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 35;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = "Something Special";
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}

// never type (Can be used in an area where u don't want to get to in your code to begin with)
function neverReturns(): never {
    throw new Error('An Error');
}

// non-nullable Types

let canBeNull: number | null = 12;
canBeNull = null;

let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null;
canThisBeAny = 12;