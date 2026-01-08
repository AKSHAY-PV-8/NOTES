function pivotIndex(array) {
    let total = 0;

    for(let i = 0; i < array.length; i++){
        total += array[i]
    }
    let leftSum = 0
    for(let i = 0; i < array.length; i++){
        let rightSum = total - array[i] - leftSum;
        if(leftSum == rightSum){
            return i
        }else{
            leftSum += array[i]
        }
    }
    return -1
}

console.log(pivotIndex([2,1,-1]))

