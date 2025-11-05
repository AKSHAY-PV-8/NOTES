function reverse(string){

    if(typeof string !== "string" || string === null) return undefined
    if(string.length === 0) return ""

    let stringAfterTrim = string.trim()
    let str= []
    for(let i of stringAfterTrim){
        str.push(i)
    }

    let left = 0
    let right = str.length-1

    while(left < right){
        [str[left], str[right]] = [str[right], str[left]]
        left++;
        right--
    }

    let revers = ''
    
    for(let i of str){
        revers += i
    }

    return revers

}

function palindrome(string){

    if(typeof string !== "string") return undefined;
    if(string.length === 0) return undefined;


    let left = 0;
    let right = string.length-1;

    while(string[left] === " ") left ++;
    while(string[right] === " ") right --;

    while(left< right){
        if(string[left] !== string[right]) return false;
        left ++;
        right --;
    }

    return true

}

function MaximumInArray(arr){

    if(!Array.isArray(arr) || arr === null) return undefined;
    if(arr.length === 0) return undefined;

    let Max = 0
    for(let i of arr){
        if(i > Max){
            Max = i
        }
    }
    return Max

}

console.log(MaximumInArray([3, 7, 2, 9, 5])

