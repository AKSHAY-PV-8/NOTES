function prefixSum(array){
    let prefix = []
    prefix[0] = array[0];

    for(let i = 1; i < array.length; i++){
        prefix[i] = prefix[i-1] + array[i];
    }
    return prefix[array.length -1]

}
console.log(prefixSum([1,2,3,5]))

