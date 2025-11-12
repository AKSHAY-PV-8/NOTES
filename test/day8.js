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

function FlatteningWithoutUsingRecursion(arr){
    let stack = [...arr]
    let result = []

    while(stack.length > 0){
        let current = stack.pop()
        if(typeof current === "object" && current !== null && current.constructor === Array){
            for(let i = 0 ; i < current.length; i++){
                stack[stack.length] = current[i]
            }
        }else{
            result[result.length] = current
        }
    }
    let left = 0
    let right = result.length - 1 ;
    while(left < right){
        [result[left],result[right]] = [result[right],result[left]]
        left ++;
        right--;
    }
                                                                                                                                        
    return result
}
console.log(FlatteningWithoutUsingRecursion([1, [2, [3, 4]], 5]))
                                               