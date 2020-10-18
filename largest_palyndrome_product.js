// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.
let is_palindrome = n => {
    let s = n.toString().split("")
    let len = s.length
    let palindrome = true
    let i = 0
    while (i < len / 2 && palindrome) {
        if (s[i] !== s[len - i -1]) palindrome = false
        i ++
    }
    return palindrome
}
let result = () => {
    let largest = 0
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= 100; j--) {
            let mult = i*j
            if (mult < largest) break;
            if (is_palindrome(mult) && mult > largest) largest = mult            
        }
    }
    return largest
}
console.log(result())