function logestWord(string) {
    if (typeof string !== "string" || string === null) return undefined;
    if (String.length === 0) return "";

    let currentWord = ""
    let longest = "";
    let currLen = 0;
    let maxLen = 0

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char !== " ") {
            currentWord += char;
            currLen++;
        } else {
            while (currLen > maxLen) {
                maxLen = currLen;
                longest = currentWord
            }
            currentWord = "";
            currLen = 0;
        }
     
    }
    return longest
}
// console.log(logestWord("I love programming in JavaScript"))

function CountVowels(string) {
    const vowels = { a: true, e: true, i: true, o: true, u: true }
    const str = string.toLowerCase()
    let count = 0
    for (let char of str) {
        if (vowels[char]) {
            count++
        }
    }
    return count
}
// console.log(CountVowels("Hello world"));

function TwoArrayAreEqul(arr1, arr2) {
    if(arr1.length !== arr2.length){
        for(let i = 0; i <= arr1.length; i++ ){
            if(arr1[i] !== arr2[i]) return false
        }
    }
    return true
}
console.log(TwoArrayAreEqul([1, 2, 3], [1, 2, 3]))

function SumOfDigits(num) {

    if(num === null )return undefined
    if(typeof num !== "number"){
        num = Number(num);
        if(isNaN(num)) return undefined
    }

    num = Math.abs(Math.floor(num))
    let sum = 0
    while (num > 0){
        let lastDigit = Math.floor(num % 10)
        sum += lastDigit
        num = Math.floor(num / 10)
    }
    return sum

}
// console.log(SumOfDigits(1234)) 
                                

