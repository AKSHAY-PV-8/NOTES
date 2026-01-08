function mergeSortedArray(arr1, arr2){
    let m = arr1.filter(i => i !== 0 ).length;
    let n = arr2.length;

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while(j >= 0){
        if( i >=0 && arr1[i] > arr2[j]){
            arr1[k--] = arr1[i--];
        }else{
            arr1[k--] = arr2[j--]
        }
    }
    return arr1
}
console.log(mergeSortedArray([1,2,3,0,0,0], [2,5,6]))

