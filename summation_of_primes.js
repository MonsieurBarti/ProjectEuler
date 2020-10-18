// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of all the primes below two million.
let sqrt = num => {
    return Math.sqrt(num)
}
let result = () => {
    let sum = 2
    for (let i = 3; i < 2000000; i+=2) {
        let i_isPrime = true
        for (let j = 2; j <= sqrt(i); j++) {
            if(i % j === 0) {
                i_isPrime = false
                break
            }
        }
        if(i_isPrime) {
            sum += i
        }
    }
    return sum
}
console.log(result())