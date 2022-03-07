const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]
const numbersToAdd2 = [0, 7, -8, 12]
    // Expected output: [0, 7, -1, 11]

const arraySum = (array) => {
    let a = 0
    let b = []
    for (let i = 0; i < array.length; i++) {
        a += array[i]
        b.push(a)
    }
    return b
}

console.log(arraySum(numbersToAdd2));