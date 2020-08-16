"use strict";
// letting ts infer types
// string
var myName = 'Thando';
// number
var myAge = 35;
// boolean
var hasHobbies = true;
// assign types myself
var myRealAge;
myRealAge = 27;
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100];
// hobbies = 'string';
// (TS only)tuples (tuples are basically arrays with mixed types, & a limited number of items and order is preserved)
var address = ["MyStreet", 99];
// (TS only) enums (to make numbers more expressive)
var Color;
(function (Color) {
    Color[Color["Grey"] = 0] = "Grey";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = "bmw";
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(myName);
function sayHello() {
    console.log('Hello');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 6));
// functions as types, i.e. funtion types
var myMultiply;
// myMultiply =  sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(4, 6));
// objects
var userData = {
    name: "Thando",
    age: 35
};
// not a valid type
// userData = {
//     a: 'hello',
//     b: 22
// };
// complex object
var complex = {
    data: [200, 39, 45, 3.2],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [200, 39, 45, 3.2],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 35;
myRealRealAge = "27";
// myRealRealAge = true;
// check types
var finalValue = "Something Special";
if (typeof finalValue == "string") {
    console.log("Final value is a string");
}
// never type (Can be used in an area where u don't want to get to in your code to begin with)
function neverReturns() {
    throw new Error('An Error');
}
// non-nullable Types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny;
canThisBeAny = 12;
