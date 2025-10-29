const logestWord = (string) => {
    let word = ""
    let longest = ""
    for(let char of string){
        if(char === " "){
           if(word.length > longest.length){
            longest = word
           }
            word = ""
        }else{
           word= word+char
        }
    }
    if (word.length > longest.length) {
    longest = word;
  }


    return longest
                  
}

const SumOfNestedArray = (array) => {

    let sum = 0
    for(let i = 0; i < array.length; i++){

        if(Array.isArray(array[i])){
            sum = sum + SumOfNestedArray(array[i])
        }else{
            sum = sum + array[i]
        }
    }

    return sum

}

const flattening = (array) => {

    let result = []

    for(let i = 0 ; i < array.length; i++){
        if(Array.isArray(array[i])){
            result = result.concat(flattening(array[i]))
        }else{
            result.push(array[i])
        }
    }

    return result

}

function checkTesCase(fun, arr){
    let states = ""

   arr.map((t, index) => {
    JSON.stringify(fun(t.test)) === JSON.stringify(t.result) ? console.log(index+1, states = true) : console.log(index+1, states= false);

   })

}

function spliceArray (arr,length){

    let result = []
    let subArray = []
    

    for(let i = 0 ; i < arr.length ;i++){
        subArray.push(arr[i])

        if(subArray.length === length || i === arr.length -1){
            result.push(subArray)
            subArray = []
        }
    }
    return result

}

function duplicate (string) {
    let seen = {}
    let result = ""

    for(let char of string){
        if(!seen[char]){
            seen[char] = true
            result = result + char
        }
    }
    return  result
}

                            
               

// console.log(duplicate("programming"))

// console.log(spliceArray([1,2,3,4,5,6,7,8], 3))



// const arr = [
//     {test:[1, [2, [3, 4]], 5], result: [1, 2, [3, 4], 5]},
//     {test:[1, [[2, [3, 4]]], 5], result: [1, [2, 3], 4, 5]},

// ]     


// console.log(checkTesCase(flattening, arr))

// console.log(flattening([1, [2, [3, 4]], 5]))

// console.log(SumOfNestedArray([1, [2, [3, 4]], 5]))
     
// console.log(logestWord("I love programming in JavaScript"))

            