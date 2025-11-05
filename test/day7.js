function logestWord(string) {
    if (typeof string !== "string" || string === null) return undefined;
    if (String.length === 0) return "";


    let words = []
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
console.log(logestWord("I love programming in JavaScript"))

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
console.log(CountVowels("Hello world"));

function TwoArrayAreEqul(arr1, arr2) {


}
console.log(TwoArrayAreEqul([1, 2, 3], [1, 2, 3]))



