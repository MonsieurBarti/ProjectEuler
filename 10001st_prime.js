// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?
let sqrt = num => {
    return Math.sqrt(num)
}
let result = num => {
    let primes = [2]
    for(let i = 3; primes.length < num; i += 2) {
        let i_isPrime = true
        for(let j = 0; j < primes.length && j <= sqrt(i); j++) {
            if(i % primes[j] === 0){
                i_isPrime = false
                break
            }
        }
        if(i_isPrime){
            primes.push(i)
        }
    }
    return primes[primes.length - 1]
}
console.log(result(10001))