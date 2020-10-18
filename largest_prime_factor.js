// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?
let result = num => {
    let i = 2
    let res
    while (i <= num) {
        if (i % 2 === 0 && i !== 2) {
            i++
        }
        if (num % i == 0) {
            res = i
            num = num / i
        } else {
            i++
        }
    }
    return res
}
console.log(result(600851475143))