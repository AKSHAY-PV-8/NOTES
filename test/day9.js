function RemoveAllZero(arr) {
    if (!Array.isArray(arr)) return undefined;
    if (arr.length === 0) return [];

    let result = [];
    for (let i of arr) {
        if (i !== 0) result.push(i);
    }

    while (result.length < arr.length) {
        result.push(0);
    }

    return result;
}
// console.log(RemoveAllZero([0, 1, 0, 3, 12]))

function RotateArray(arr, num){
    if(!Array.isArray(arr)) return undefined

    num = num % arr.length;
    if(num < 0) num += arr.length;

    function reverce(array, star, end){
        let left = star, right = end;
        while(left < right){
            [array[left], array[right]] = [array[right], array[left]]
            left ++;
            right --;
        }
        return array
    }

    reverce(arr, 0 , arr.length - 1)
    reverce(arr, 0, num - 1)
    reverce(arr, num, arr.length - 1)

    return arr
    
}
// console.log(RotateArray([1,2,3,4,5], 2))

function ReverseWord(str){
    if(typeof str !== "string" || str === null) return undefined
    if(str.length === 0) return " "

    let array = []
    let substring = ""
    for(let char of str){
        
        if(char != " "){
            substring += char
        }else{
            array.push(substring)
            substring = ""
        }
    }
    if(substring) array.push(substring)

    let left = 0, right = array.length - 1;

    while(left < right){
        [array[left], array[right]] = [array[right], array[left]]
        left ++;
        right --;
    }

    let result = ''
    
    for(let word of array){
        result += ` ${word}`
    }

    return result

}
// console.log(ReverseWord("I love JavaScript"))

function CapitalizeChar(str){
    

}