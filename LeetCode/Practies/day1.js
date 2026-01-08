function logestSubstring(s){
    let left = 0;
    let logest = 0;
    let set = new Set();

    for(let right = 0; right < s.length; right++){
        while(set.has(s[right])){
            set.delete(s[left])
            left++
        }
        set.add(s[right]);
        logest = Math.max(logest,  right - left + 1)
    }
    return logest
}
console.log(logestSubstring("pwwkew"));


function minSizeSubarraySum(nums, target){
    let left = 0;
    let minLng = Infinity;
    let sum = 0;

    for(let right = 0 ; right < nums.length; right++){
        
        sum += nums[right];

        while(sum >= target){
            if(sum === target){
                minLng = Math.min(minLng, right - left + 1)
            }
            sum -= nums[left];
            left++
        }
    }

    return minLng
}

console.log(minSizeSubarraySum([1,4,4], 4))

function firstLastPosition(nums, target){
    let left = 0;
    let right = nums.length - 1 ;
    let result = []

    if(nums.length === 0) return [-1, -1]

    while(left <= right){
        
        if(nums[left] == target){
            result.push(left)
        }

        if(nums[right] == target){
            result.push(right)
        }
        left ++;
        right --;
    }

    result.sort((a,b) => a- b)
    if(result.length === 1){
        result.push(0)
    }

    return result.length === 0 ? [-1, -1] : result

}

console.log(firstLastPosition([1], 1));


