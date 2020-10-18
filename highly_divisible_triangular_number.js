// The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:
// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
// Let us list the factors of the first seven triangle numbers:
//      1: 1
//      3: 1,3
//      6: 1,2,3,6
//     10: 1,2,5,10
//     15: 1,3,5,15
//     21: 1,3,7,21
//     28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.
// What is the value of the first triangle number to have over five hundred divisors?
let generateTriangularNumber = n => {
    return (n * (n + 1)) / 2
}
let result = () => {
    let res = 0
    let n = 1
    while (res === 0) {
        let divisors = 0
        let triangularNumber = generateTriangularNumber(n)
        for (let i = 1; i < Math.sqrt(triangularNumber); i++) {
            if (triangularNumber % i === 0) divisors += 2 // If there is a multiple smaller than the sqrt, there is an other one greater
        }
        if (divisors > 500) {
            res = triangularNumber
            break
        }
        n++
    }
    return res
}
console.log(result())