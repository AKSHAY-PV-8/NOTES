function LogestSUbstring(s) {
    let left = 0;
    let maxLength = 0;
    let set = new Set();

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}
// console.log(LogestSUbstring("pwwkew"))

function findSubstring(s, word) {

    let string = [...word].join("")
    let windowSize = string.length;
    let window = "";
    let left = 0;
    let result = []

    function permutation(str1, str2) {
        let count = new Array(26).fill(0);

        let string1, string2

        if (str1 > str2) {
            string1 = str1;
            string2 = str2
        }

        for (let char of str1) {
            count[char.charCodeAt(0) - 97]++
        }
        for (let char of str2) {
            count[char.charCodeAt(0) - 97]--
        }

        for (let char of count) {
            if (char !== 0) {
                return false
            }
        }
        return true
    }

    for (let right = 0; right < s.length; right++) {
        window += s[right];

        if ((right - left + 1) === windowSize) {
            if (permutation(window, string)) {
                result.push(left)
            }
            window = window.slice(1)
            left++
        }
    }
    return result
}
// console.log(findSubstring("barfoothefoobarman", ["foo", "bar"]))

function minWindow(s, t) {
    let left = 0;
    let minLen = Infinity;
    let start = 0;
    let map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    let requierd = map.size


    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1)
            if (map.get(rightChar) === 0) {
                requierd--;
            }
        }

        while (requierd === 0) {
            if (minLen > right - left + 1) {
                start = left;
                minLen = right - left + 1
            }
            let leftChar = s[left]
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) {
                    requierd++
                }
            }
            left++
        }
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen)
}
// console.log(minWindow("ADOBECODEBANC", "ABC"))

function DNA(s) {
    let windowSize = 10
    let subString = ""
    let look = new Map()
    let result = []

    if (s.length === windowSize) {
        return s
    }

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        subString += rightChar

        if (subString.length === windowSize) {
            look.set(subString, (look.get(subString) || 0) + 1)
            subString = subString.slice(1)
        }
    }

    for (let [key, value] of look) {
        if (value > 1) {
            result.push(key)
        }
    }
    return result
}
// console.log(DNA("AAAAAAAAAAAAA"))

function minSubArrayLen(array, k) {
    let left = 0;
    let sum = 0;
    let minLen = Infinity;

    for (let right = 0; right < array.length; right++) {
        sum += array[right]

        while (sum >= k) {
            if (sum === k) {
                minLen = Math.min(minLen, right - left + 1)
            }
            sum -= array[left]
            left++;
        }

    }
    return minLen
}
// console.log(minSubArrayLen([1,4,4], 4))

function maxSlidingWindow(nums, k) {
    let windowSize = k;
    let result = [];
    let window = [];

    for (let right = 0; right < nums.length; right++) {
        window.push(nums[right])

        while (window.length === windowSize) {
            let large = - Infinity

            for (let i of window) {
                large = Math.max(large, i)
            }
            result.push(large);
            window.shift()
        }
    }

    return result

}
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))

function longestSubstring(s, k) {
    if (s.length < k) return 0;

    let freq = new Map();
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) < k) {
            let left = longestSubstring(s.slice(0, i), k);
            let right = longestSubstring(s.slice(i + 1), k);
            return Math.max(left, right);
        }
    }

    return s.length;
}
// console.log(longestSubstring("ababbc", 2))



