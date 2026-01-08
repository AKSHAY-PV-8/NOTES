function sdf(nums, target) {//209
    let minLen = Infinity;
    let left = 0;
    let sum = 0

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        while (sum >= target) {
            minLen = Math.min(minLen, right - left + 1)
            sum -= nums[left];
            left++
        }
        

    }

    return minLen

}
console.log(sdf([1, 4, 4], 4))

function subarraySum(nums, k) {//560
    let sum = 0;
    let count = 0

    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}
console.log(subarraySum([1, 2, 3], 3));

function subarraysDivByK(nums, k) {//974
    let map = new Map()
    map.set(0, 1)

    let count = 0;
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let rem = sum % k;
        if (rem < 0) sum + k

        if (map.has(rem)) {
            count += map.get(rem)
        }

        map.set(rem, (map.get(rem) || 0) + 1)
    }
    return count
}
console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))

function numSubarraysWithSum(nums, goal) {//930
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (map.has(sum - goal)) {
            count += map.get(sum - goal)
        }

        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return count

}
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0))

function numberOfSubarrays(nums, k) {//1248
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] % 2;;

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }

        map.set(sum, (map.get(sum) || 0) + 1)

    }
    return count
}
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2))

function minWindow(s, t) {//76
    let left = 0;
    let minLen = Infinity;
    let start = 0

    let map = new Map();
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let requeird = map.size

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right];
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1)
            if (map.get(rightChar) === 0) {
                requeird--;
            }
        }

        while (requeird === 0) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                start = left
            }
            let leftChar = s[left]
            if (map.has(leftChar)) {
                map.set(leftChar, map.get(leftChar) + 1);
                if (map.get(leftChar) > 0) {
                    requeird++
                }
            }
            left++
        }
    }
    return minLen === Infinity ? "" : s.substring(start, start + minLen)
}
console.log(minWindow("ADOBECODEBANC", "ABC"));

function subarraysWithKDistinct(nums, k) {//992

    return atMost(nums, k) - atMost(nums, k - 1)

    function atMost(nums, k) {
        let left = 0;
        let map = new Map();
        let count = 0

        for (let right = 0; right < nums.length; right++) {
            let num = nums[right];
            map.set(num, (map.get(num) || 0) + 1)
            if (map.get(num) === 1) {
                k--;
            }

            while (k < 0) {
                let leftChar = nums[left];
                map.set(leftChar, map.get(leftChar) - 1)
                if (map.get(leftChar) === 0) {
                    k++
                }
                left++
            }

            count += right - left + 1
        }

        return count
    }

}
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))

function checkSubarraySum(nums, k) {//523
    let sum = 0
    let map = new Map()
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if(map.has(sum - k)) {
            return true
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return false

}
console.log(checkSubarraySum([23,2,6,4,7], 13));

function findTheLongestSubstring(s){
    
}
console.log(findTheLongestSubstring("eleetminicoworoep"))


