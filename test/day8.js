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
// console.log(FlatteningWithoutUsingRecursion([1, [2, [3, 4]], 5]))

function intersection(arr1, arr2){
    let lookup = {}
    let result = []

    for(let char of  arr1){
        lookup[char] = true
    }

    for(let char of arr2){
        if(lookup[char]){
            result.push(char)
            lookup[char] = false
        }
    }

    return result
    
}
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]))

function primeNumber(number){
    if(number <= 1) return false
    for(let i = 2; i*i <= number ; i++){
        if(number % i === 0){
            return false
        }
        return true
    }
    
}

// console.log(primeNumber(7))

function nonRepeating(str){
    if (typeof str !== "string" || str.length === 0) return undefined;

    let freq = {};

    for (let char of str){
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let char of str){
        if (freq[char] === 1) return char;
    }

    return "invalid";
}
/*
when we iterate to the hash map please remember this with normal function

        let set = {a:2, b:2, c:1}

        let keys = Object.keys(set) // ['a', 'b', 'c']

        for(let i = 0 ; i < keys.length; i++){
                let key = keys[i]
                console.log(key, set[key]) // a 2
                                              b 3
                                              c 1
            }
*/

// console.log(nonRepeating("aabbcde"))


                                               