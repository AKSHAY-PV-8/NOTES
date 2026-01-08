function constinuousSubarraySum(nums, k){
    let map = new Map();
    map.set(0, 1);

    let sum = 0;

    for(let num of nums){
        sum += num;

        if(map.has(sum - k)){
            return true;
        }

        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return false
}

console.log(constinuousSubarraySum([23,2,6,4,7], 13))