function subarraySum(nums, k) { 
   let map = new Map();
   map.set(0, 1);

   let count = 0;
   let sum = 0;


   for(let num of nums){
        sum += num;
        if(map.has(sum - k)){
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1 )
   }
   return count
}



function returnSubArray(nums,k){
    let map = new Map();
    map.set(0, [-1])

    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum += nums[i];

        if(map.has(sum - k)){
           for(let startingIndex of map.get(sum - k)){
            console.log(nums.slice(startingIndex + 1, i + 1))
           }
        }

        if(!map.has(sum)){
            map.set(sum, [])
        }
        map.get(sum).push(i)
    }
}


console.log(subarraySum([5, 1, 2, 3], 6))
returnSubArray([5, 1, 2, 3], 6)



