// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
let is_divisible = num => {
    let i = 1
    while (i <= 20) {
        if (num % i !== 0) return false
        i++
    }
    return true
}
let result = () => {
    let i = 2520
    while (!is_divisible(i)) {
        i+=2
    }
    return i
}
console.log(result())