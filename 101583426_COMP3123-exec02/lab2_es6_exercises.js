/*
COMP3123 - Lab 2 - ES6 Practice Exercises
Travis Eweka - 101583426
Run with: node lab2_es6_exercises.js
*/

// ----------------------------------------------------------
// Exercise 1: rewrite gretter() with const/let, an arrow
// function, a template literal and for...of
// ----------------------------------------------------------
console.log("----- Exercise 1 -----")

const gretter = (myArray, counter) => {
    const greetText = "Hello "
    for (const name of myArray) {
        console.log(`${greetText}${name}`)
    }
}
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

// ----------------------------------------------------------
// Exercise 2: capitalize the first letter of a string using
// destructuring ([first, ...rest]) and the spread operator
// ----------------------------------------------------------
console.log("----- Exercise 2 -----")

const capitalize = ([first, ...rest]) => first.toUpperCase() + rest.join("").toLowerCase()

console.log(capitalize("fooBar"))
console.log(capitalize("nodeJs"))

// ----------------------------------------------------------
// Exercise 3: use map() with capitalize() on each colour
// ----------------------------------------------------------
console.log("----- Exercise 3 -----")

const colors = ["red", "green", "blue"]
const capitalizedColors = colors.map((color) => capitalize(color))
console.log(capitalizedColors)

// ----------------------------------------------------------
// Exercise 4: use filter() to keep only the values under 20
// (matches the expected output [1, 5])
// ----------------------------------------------------------
console.log("----- Exercise 4 -----")

const values = [1, 60, 34, 30, 20, 5]
const filterLessThan20 = values.filter((value) => value < 20)
console.log(filterLessThan20)

// ----------------------------------------------------------
// Exercise 5: use reduce() to get the sum and the product
// ----------------------------------------------------------
console.log("----- Exercise 5 -----")

const array = [1, 2, 3, 4]
const calculateSum = array.reduce((total, number) => total + number, 0)
const calculateProduct = array.reduce((total, number) => total * number, 1)
console.log(calculateSum)
console.log(calculateProduct)

// ----------------------------------------------------------
// Exercise 6: Car class and a Sedan subclass that extends it.
// Sedan calls super() to set model and year in Car.
// ----------------------------------------------------------
console.log("----- Exercise 6 -----")

class Car {
    constructor(model, year) {
        this.model = model
        this.year = year
    }

    details() {
        return `Model: ${this.model} Engine ${this.year}`
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year)
        this.balance = balance
    }

    info() {
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`
    }
}

const car2 = new Car("Pontiac Firebird", 1976)
console.log(car2.details())
// Subclass - extends Car super class
const sedan = new Sedan("Volvo SD", 2018, 30000)
console.log(sedan.info())
