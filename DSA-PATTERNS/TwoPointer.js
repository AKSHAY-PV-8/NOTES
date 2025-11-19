function TwoSum(arr, n){ 

    let left = 0, right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === n){
            return [arr[left] , arr[right]]
        }else if(sum > n){
            right--;
        }else{
            left ++
        }
    } 
    return null
}

console.log(TwoSum([2,7,11,15], 9)) //best way for sorted array