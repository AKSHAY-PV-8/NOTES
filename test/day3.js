const findindMissingNUmber = (array) => {
    const length = array.length +1;

    const extimate = (length * (length+1)) / 2;
    const sum = array.reduce((acc, num) => acc +num)
    return extimate - sum

}

const Anagram = (str1, str2) => {
    
    const count = {}
                                 
    for(let char of str1){
        count[char] = (count[char] || 0) +1
    }

    for(let char of str2){
        if(!count[char]){
            return false
        }
        count[char]--
    }

    return true
    
}

const factorial = (n) => {
    if(n === 1) return 1;
    return n* factorial(n-1)
}


const TwoSum = (array, k) =>{
    let result= []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j <array.length; j++){
            if(array[i] + array[j] === k){
                result.push([array[i],array[j]])
            }
        }
    }

    return result
}

const CounterClosure = () => {
    let count = 0;

    const counter=() =>{
        count++;
        console.log(count)
    }
    return counter
}

const counter = CounterClosure();
counter(); // 1
counter(); // 2
counter(); // 3
counter()


// console.log(TwoSum([2,7,11,15], 9))
// console.log(factorial(5))

// console.log(Anagram("listen", "silent"))


// const array = [1,2,4,5];

// console.log(findindMissingNUmber(array))
