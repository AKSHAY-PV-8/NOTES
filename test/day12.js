function longestPalindrome(s) {
    if (!s || s.length < 2) return s;

    let start = 0, end = 0;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;    // palindrome length
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);          // odd length palindromes
        let even = expand(i, i + 1);     // even length palindromes
        let len = Math.max(odd, even);

        if (len > end - start + 1) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    let result = "";
    for (let i = start; i <= end; i++) {
        result += s[i];
    }
    return result;
}

console.log(longestPalindrome("babad")); // "bab" or "aba"






