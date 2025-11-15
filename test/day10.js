function createMultiplier(multiplier){
    return (multiplicant) => {
        let result = multiplicant * multiplier
        console.log(result)
    }
}
// const double = createMultiplier(2)
// const triple = createMultiplier(3)

// double(10)
// triple(2)

function counter(){
    let count = 0;
    return () =>{
        count ++;
        console.log(count);
    }
}
// const fun = counter()
// fun()
// fun()

function filter(arr){
    return (con) => {
        let result = []
        for(let i of arr){
             if(con(i)){
                result.push(i)
             }
        }
        console.log(result)
    }
}
// const fun = filter([1,2,3,4])
// fun(n => n > 2)
// filter([1,2,3,4])(n => n > 2) // [3,4]

function ReverseWords(str){
    let array = [], subString = ""
    for(let char of str){
        if(char !== " "){
            subString += char
        }else{
            array.push(subString)
            subString = ""
        }
    }
    if(subString) array.push(subString)

    let left = 0, right = array.length - 1 

    while(left < right){
        [array[left], array[right]] = [array[right], array[left]]
        left ++;
        right --;
    }

    let result = ''

    for(let word of array){
        result += " "+word
    }
    return result

}

// console.log(ReverseWords("I love JavaScript"))

function addTwoNumbers(arr1, arr2){

    if(!Array.isArray(arr1) || !Array.isArray(arr2)) return undefined
    if(arr1.length === 0 || arr2.length === 0) return ""

    function reverse(arr){
        let left = 0, right = arr.length - 1;
        while(left < right){
            [arr[left], arr[right]] = [arr[right] , arr[left]]
            left ++;
            right --;
        }
        return arr
    }
    let num1 = reverse(arr1), num2 = reverse(arr2)

    console.log(num1, num2)
    
    let result = []
    let i = 0, j = 0, carry = 0, pos = 0;

    while(i < num1.length || j < num2.length || carry > 0){
        let x = i < num1.length ? num1[i] : 0;
        let y = j < num2.length ? num2[j] : 0;

        let sum = x + y + carry
        console.log("sum Number",sum)

        let n = sum % 10;
        console.log("digit", n)
        result[pos] = n

        carry = (sum - n) / 10

        console.log("carry", carry)

        i++
        j++
        pos++
    }

    return result

    
           
}

let l1 = [2,4,3], l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))



