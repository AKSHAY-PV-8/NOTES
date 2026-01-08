function minSubArrayLen(nums, taget) {
    let left = 0
    let sum = 0
    let minLen = Infinity;
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum >= taget) {
            
                minLen = Math.min(minLen, right - left + 1)

            sum -= nums[left]
            left++
        }
    }
    return minLen
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))

function productExceptSelf(nums){
    let result = []
    let prefix = []
    prefix[0] = nums[0]
    for(let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i -1] * nums[i]
    }
    let total = prefix[nums.length - 1]
    
    for(let i = 0 ; i < nums.length; i++){
        let product = total / nums[i];
        result.push(product)
    }
    return result
}
console.log(productExceptSelf([-1,1,0,-3,3]))

function subarraySum(nums, k) {//560

    let map = new Map()
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;

        if (map.has(sum - k)) {
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count

}
// console.log(subarraySum([1, 2, 3], 3))

function findMaxLength(nums) {//525
    let map = new Map();
    map.set(0, -1);
    let maxLen = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum))
        } else {
            map.set(sum, i)
        }
    }
    return maxLen
}
// console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]))

function subarraysDivByK(nums, k){//974

    let sum = 0
    let map = new Map();
    map.set(0, 1);
    let count = 0

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        let rem = sum % k
        if( rem < 0) rem += k
        if(map.has(rem)){
            count += map.get(rem);
        }
        map.set(rem, (map.get(rem) || 0) + 1)

    }

    return count

}
// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))

function numSubarraysWithSum(nums, goal){//930
    let map = new Map();
    map.set(0, 1);

    let sum = 0;
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]

        if(map.has(sum - goal)){
            count += map.get(sum - goal)
        }

        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count

}
// console.log(numSubarraysWithSum([0,0,0,0,0], 0))

function numberOfSubarrays(nums, k){//1248
    let sum = 0;
    let map = new Map()
    map.set(0, 1);
    let count = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i] % 2;

        if(map.has(sum - k)){
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}
// console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2], 2))

