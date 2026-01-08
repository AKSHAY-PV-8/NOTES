function longestPalindrome(s) {
    let left = 0;

    let start = 0;
    let maxLen = 1;

    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let len = right - left + 1;

            if (len > maxLen) {
                maxLen = len;
                start = left
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    }
    return s.substring(start, start + maxLen)
}
// console.log(longestPalindrome("babad"))

function maxArea(array) {
    let left = 0;
    let right = array.length - 1;
    let maxWater = 0;

    while (left <= right) {
        let width = right - left;
        let height = Math.min(array[left], array[right])
        let area = height * width;

        maxWater = Math.max(maxWater, area)

        if (array[left] < array[right]) {
            left++;
        } else {
            right--
        }
    }
    return maxWater
}
// console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

function threeSum(array) {
    let result = [];
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        if (array[i] === array[i - 1]) continue

        while (left < right) {
            let sum = array[i] + array[left] + array[right]

            if (sum === 0) {
                result.push([array[i], array[left], array[right]])

                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result
}
// console.log(threeSum([-1, 0, 1, 2, -1, -4]))

function threeSumClosest(nums, k) {
    let result = Infinity;
    nums.sort((a, b) => a - b)

    let closestSum = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]

            if (Math.abs(closestSum - k) > Math.abs(sum - k)) {
                closestSum = sum
            } else if (sum < 0) {
                left++
            } else if (sum > 0) {
                right--
            } else {
                return sum
            }
        }
    }
    return closestSum;
}
// console.log(threeSumClosest([-1,2,1,-4], 1))

function fourSum(nums, target) {
    let result = [];
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length - 2; j++) {
            if(nums[j] === nums[j - 1]) continue;

            let left = j + 1
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right]

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]])
                    left++;
                    right--;
                } else if (sum < 0) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return result
}
// console.log(fourSum([1, 0, -1, 0, -2, 2], 0))



// class ListNode{
//     constructor(val){
//         this.val = val;
//         this.next = null
//     }
// }

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3)

// console.log(head)


function removeDuplicates(nums){{
    let slow = 1;
    for(let fast = 1; fast < nums.length; fast++){
        if(nums[fast] !== nums[fast - 1]){
            nums[slow] = nums[fast]
            slow++
        }
    }
    return slow
}

}
// console.log(removeDuplicates([1,1,2]))

function removeElement(nums, k) {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== k) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
}
// console.log(removeElement([0,1,2,2,3,0,4,2], 2))

function strStr(str, need){
    windowSize = need.length;
    let left = 0;
    let subString = ""

    for(let right = 0 ; right < str.length; right++){
        subString += str[right];

        while(right < str.length &&subString.length === windowSize){
            if(subString === need){
                return(left)
            }
            subString = subString.slice(1)
            left ++;
        }
    }
}
// console.log(strStr("sadbutsad", "sad"))

function nextPermutation(){
    
}




