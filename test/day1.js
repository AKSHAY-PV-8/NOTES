const arrrayRotation = (array, k) =>{
    let rotation = (k % array.length) 
    const reverse = (arr,start, end) => {
        while(start < end){
            [arr[start],arr[end]] = [arr[end],arr[start]]
            start++
            end--
        }
    }
    reverse(array,0, array.length-1)
    reverse(array,0,rotation-1);
    reverse(array,rotation, array.length-1)
    return array
}

const stringReverse = ( string ) => {
    let word = "";
    let words = []
    for(let i = 0 ; i < string.length; i++){
        let char = string [i];
        if(char !== " "){
            word = word+char;
        }else{
            if(word.length > 0){
                words.push(word);
                word = "";
            }
        }
    }
    words.push(word)
    let result = []
 
    for(let i = words.length-1; i >= 0 ; i--){
        result.push(words[i])
    }

    return result
}

const frequencyCounter = (array) => {
    let res = {}
    for(let i = 0; i < array.length; i++){
        let element = array[i]

        if(res[element] === undefined){
            res[element] = 1;
        }else{
            res[element]++;
        }
    }
    return res
}

function sum(a){
    let result = 0
    function inner(b){
        result= a+b
    }
}
       
const string = "i love js"
const array = [1,2,3,4,5]
const k = 2
const array1 = [1,2,2,3,3,3]

// console.log(arrrayRotation(array,k))
// console.log(stringReverse(string))
// console.log(frequencyCounter(array1))
console.log(sum(1)(2)(3))

