function minWindow(s, t) {
    let map = new Map()
    let left = 0
    for (let ch of t) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let require = map.size
    let minLen = Infinity;
    let start = 0


    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (map.has(rightChar)) {
            map.set(rightChar, (map.get(rightChar) || 0) - 1);
            if (map.get(rightChar) === 0) {
                require--;
            }
        }

        while (require <= 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left
            }
            let leftChar = s[left]
            if (map.has(leftChar)) {
                map.set(leftChar, (map.get(leftChar) || 0) + 1)
                if (map.get(leftChar) > 0) {
                    require++
                }
            }
            left++
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen)

}
console.log(minWindow("ADOBECODEBANC", "ABC"))

function characterReplacement(s, k) {
    let left = 0;
    let map = new Map()
    let maxLen = 0;
    let longest = 0


    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        map.set(rightChar, (map.get(rightChar) || 0) + 1);

        maxLen = Math.max(maxLen, map.get(rightChar))

        while(((right -left + 1) - maxLen) > k){
            let leftChar = s[left]
            map.set(leftChar, (map.get(leftChar) || 0) - 1)
            left ++
        }

        longest = Math.max(longest, right - left + 1)
    }

    return longest
}
console.log(characterReplacement("ABAB", 2));

function numSubarrayProductLessThanK(nums, k){
    let left = 0;
    let product = 1;
    let count = 0;

    for(let right = 0; right < nums.length; right++){
        product *= nums[right];
        while(product >= k){
            product /= nums[left];
            left ++
        }
        count += right - left + 1
    }
    return count;

}
console.log(numSubarrayProductLessThanK([10,5,2,6], 100))

