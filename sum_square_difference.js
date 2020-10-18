// The sum of the squares of the first ten natural numbers is 385
// The square of the sum of the first ten natural numbers is 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
let square = num => {
    return num*num
}
let result = () => {
    let sum_of_squares = 0
    let square_of_sum = 0
    for (let i = 0; i <= 100; i++) {
        sum_of_squares += square(i)
        square_of_sum += i
    }
    return square(square_of_sum) - sum_of_squares
}
console.log(result())