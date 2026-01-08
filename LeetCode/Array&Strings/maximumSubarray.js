function maximumSubarray(array){
    if(!Array.isArray(array)) return undefined;

    let maxSum = array[0];
    let currentSum = array[0];

    for(let i = 1; i < array.length; i++){
        currentSum = Math.max(array[i], currentSum += array[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum
}

console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))


