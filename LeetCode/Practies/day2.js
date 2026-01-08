function characterReplacement(s, k) {//424
    let left = 0;
    let maxLen = 0;
    let maxFreq = 0;
    let map = new Map()

    for (let right = 0; right < s.length; right++) {

        map.set(s[right], (map.get(s[right]) || 0) + 1)

        maxFreq = Math.max(maxFreq, map.get[s[right]])

        while (((right - left + 1) - maxFreq) > 2) {
            map.set(s[left], map.get(s[left]) - 1)
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)

    }

    return maxLen
}
// console.log(characterReplacement("ABAB", 2))

function longestOnes(nums, k) {//1004

    let left = 0;
    let maxLen = 0;
    let map = new Map();

    for (let right = 0; right < nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1)

        while (map.get(0) > k) {
            map.set(nums[left], map.get(nums[left]) - 1)
            left++
        }
        console.log(right, map)

        maxLen = Math.max(maxLen, right - left + 1)
    }

    return maxLen

}
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))

function threeSum(nums) {//15
    nums.sort((a, b) => a - b);
    let result = []

    for (let i = 0; i < nums.length - 2; i++) {

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++
                right--
            } else if (sum < 0) {
                left++;
            } else {
                right--
            }
        }
    }
    return result
}
// console.log(threeSum([-1,0,1,2,-1,-4]));

function twoSum(nums, k) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];

        if (sum === k) {
            return [left + 1, right + 1]
        } else if (sum < k) {
            left++
        } else {
            right--
        }
    }

    return []

}
// console.log(twoSum([-1, 0], -1))

function groupAnagrams(strs) {//49
    let group = {};
    let result = [];
    for (let words of strs) {
        let code = []
        for (let i = 0; i < words.length; i++) {
            let char = words[i]
            let ele = char.charCodeAt(0) - 97
            code.push(ele);
            code.sort((a, b) => a - b)
        }
        // let key = word.split('').sort().join('');
        if (!group[code]) {
            group[code] = []
        }
        group[code].push(words)
    }
    for (let key in group) {
        result.push(group[key])
    }
    return result
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function search(nums, target) {//33
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        let mid = Math.floor((right + left)/2);

        if(nums[mid] === target){
            return mid
        }

        if(nums[left] <= nums[mid]){
            if(target < nums[mid] && nums[left] <= target){
                right = mid-1
            }else{
                left = mid+1
            }
        }else{
            if(target > nums[mid] && target <= nums[right]){
                left = mid + 1
            }else{
                right = mid - 1
            }
        }
    }
}
// console.log(search([4, 5, 6, 7, 0, 1, 2], 0))

function subarraysDivByK(nums, k){
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for(let num of nums){
        sum += num;

        let rem = (sum % k +k) % k;

        if(map.has(rem)){
            count += map.get(rem)
        }

        map.set(rem, (map.get(rem) || 0) + 1)
    }

    return count
}
console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))















