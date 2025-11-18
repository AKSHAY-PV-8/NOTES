

function lengthOfLongestSubstring(s) {
    let seen = new Set()
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (seen.has(s[right])) {
            seen.delete(s[left])
            left++
        }
        seen.add(s[right])

        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}
// console.log(lengthOfLongestSubstring("abcabcbb"))

function checkAnagram(arr) {

    let groups = {};

    for (let word of arr) {

        let freq = new Array(26)
        for (let i = 0; i < 26; i++) {
            freq[i] = 0
        }

        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            freq[index] += 1
        }

        let key = "";

        for (let i of freq) {
            key += i + "#"
        }
        if (!groups[key]) {
            groups[key] = []
        }
        groups[key].push(word)
    }

    let result = []

    for (let k in groups) {
        result.push(groups[k])
    }
    return result

}
console.log(checkAnagram(["abc", "cba", "bca", "dca", "cda", "cde"]))

function longestPalindromicSubstring(s){}

