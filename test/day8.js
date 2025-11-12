const reverseUsingRecursion = (string, i = 0) => {
    if(i === string.length) return ""
    return reverseUsingRecursion(string, i+1) + string[i]
}

// console.log(reverseUsingRecursion("hellow"));


function checkArrayAreEqual(arr1, arr2){

    let set = {}

    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined
    if(arr1.length !== arr2.length) return false
    
    for(let i of arr1){
        set[i] = (set[i] || 0) + 1
    }
    for(let i of arr2){
        if(!set[i]) return false
        set[i] --;
    }
    return true
}

// console.log(checkArrayAreEqual([1,2,3], [1,2,3]))