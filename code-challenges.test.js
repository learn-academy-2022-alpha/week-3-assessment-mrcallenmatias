// ASSESSMENT 3: Coding Practical Questions with Jest

// const { expect } = require("@jest/globals")
// const { it } = require("jest-circus")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

//Create a test with expect statements
//returns an array that length containing the numbers of the Fibonacci sequence
describe("fibonacciSequence", () => {

    it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
        expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
        expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        expect(fibonacciSequence(2)).toEqual("Please enter a number greater than 2")
        
    })
})
// b) Create the function that makes the test pass.

// create the function needed name fibonacciSequence
// create two variable, 1 for the total, another for an array to store the total
// make a statement that if number is less than 2, tells them to input greater than 2
// then iterate through the array
// if length is less than 2, just add 1 to the array
// if number is more than 2, then the newest two number be added, and add it to the array
// returns an array that length containing the numbers of the Fibonacci sequence

const fibonacciSequence = (number) => {
    let eachTotal = 0
    let arrNum = [1]
    if (number > 2) {
        for (let i = 0; i < number - 1; i++) {
            if (arrNum.length < 2) {
                arrNum.push(i + 1)
            }
            else {
                eachTotal = (arrNum[i - 1] + arrNum[i])
                arrNum.push(eachTotal)
            }
        }
        return arrNum
    } else {
        return "Please enter a number greater than 2"
    }
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe("oddLeastToGreatest", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

    it("returns a new array of only odd numbers sorted from least to greatest", () => {
        expect(oddLeastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddLeastToGreatest(fullArr2)).toEqual([-823, 7, 23])
    })
})

// b) Create the function that makes the test pass.

// create a function that takes an array argument
// use the method filter, to get the number date, use typeoff
// to get the odd, use % sign
// sort the array from least to greatest by using the sort method, additionally, use the function to sort the number data.
// return a new array of only odd numbers sorted from least to greatest

const oddLeastToGreatest = (array) => {
    let a = array.filter(a => (typeof a === "number" && a % 2 !== 0))
    return a.sort(function(a,b) {
        return a-b
    }) 
}


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("arraySum", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []

    it("returns an array of the accumulating sum", () => {
        expect(arraySum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(arraySum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(arraySum(numbersToAdd3)).toEqual([])
    })
})

// b) Create the function that makes the test pass.

// create a function that takes in an array parameter
// create a variable that takes in the total each time the element is added
// create another variable to add the total number evertime the value is added
// use for loop method to access each date inside the array, add them then push inside the seconde array
// return an array of the accumulating sum
const arraySum = (array) => {
    let total = 0
    let arr = []
    for (let i = 0; i < array.length; i++) {
        total += array[i]
        arr.push(total)
    }
    return arr
}