function MaximumAverageSubarray(nums, k){ //643

    let windowSum = 0;

    for(let i = 0; i < k; i++){
        windowSum += nums[i]
    }
    let maxSum = windowSum;

    console.log(maxSum)

    for(let i = k; i < nums.length; i++){
        windowSum = windowSum + nums[i] - nums[i - k]
        maxSum = Math.max(windowSum, maxSum)
    }
    return maxSum/k

}
console.log(MaximumAverageSubarray([1,12,-5,-6,50,3], 4))

function averageThreshhold(nums, k, threshold){ //1343
    let windowSum = 0
    for(let i = 0; i < k; i++){
        windowSum += nums[i]
    }
    let count = 0;

    if(windowSum/k >= threshold){
        count++
    }

    for(let i = k; i < nums.length; i++){
        windowSum = windowSum + nums[i] - nums[i - k] 
        if(windowSum / k >= threshold){
            count ++
        }
    }

    return count

}
console.log(averageThreshhold([11,13,17,23,29,31,7,5,2,3], 3, 5))

function longestSubstring(s){//3
    let set = new Set();
    let left = 0;
    let maxLen = 0;
    let result = "";

    for(let right = 0; right < s.length; right ++){
        while(set.has(s[right])){
            set.delete(s[left]);
            left ++
        }

        set.add(s[right])
        if(right - left + 1 > maxLen){
            maxLen = right - left + 1;
            result = s.slice(left, right + 1)
        }
        
    }

    return result

}
console.log(longestSubstring("pwwkew"));

function maxConsicutiveOnes(nums, k){//1004
    let left = 0;
    let maxLenght = 0;
    let zeros = 0

    for(let right = 0; right < nums.length; right++){
        if(nums[right] === 0){
            zeros++
        }
        while(zeros > k){
            if(nums[left] === 0){
                zeros --
            }
            left ++
        }  
        maxLenght = Math.max(maxLenght, right - left + 1)
    }
    return maxLenght
}
console.log(maxConsicutiveOnes([1,1,1,0,0,0,1,1,1,1,0],2));

function FruitIntoBasket(array){//904
    let left = 0;
    let map = new Map()

    let maxLen = 0;
    
    for(let right = 0; right < array.length; right++){
        map.set(array[right], (map.get(array[right]) || 0) + 1)

        while(map.size > 2){
            map.set(array[left], map.get(array[left]) - 1)

            if(map.get(array[left]) === 0){
                map.delete(array[left])
            }
            left ++
        }
        maxLen = Math.max(maxLen, right - left + 1)
    } 
    return maxLen
}
console.log(FruitIntoBasket([1,2,1]));

function checkInclusion(s1, s2) {//567
    if (s1.length > s2.length) return false;

    let need = new Map();
    let window = new Map();

    // Count characters of s1
    for (let ch of s1) {
        need.set(ch, (need.get(ch) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let valid = 0; // number of chars whose count matches

    while (right < s2.length) {
        let ch = s2[right];
        right++;

        // add right char
        if (need.has(ch)) {
            window.set(ch, (window.get(ch) || 0) + 1);
            if (window.get(ch) === need.get(ch)) {
                valid++;
            }
        }

        // keep window size = s1.length
        while (right - left >= s1.length) {
            // 🎯 check before shrinking
            if (valid === need.size) return true;

            let leftChar = s2[left];
            left++;

            // remove left char
            if (need.has(leftChar)) {
                if (window.get(leftChar) === need.get(leftChar)) {
                    valid--;
                }
                window.set(leftChar, window.get(leftChar) - 1);
            }
        }
    }

    return false;
}
console.log(checkInclusion("ab", "eidbooo"));







