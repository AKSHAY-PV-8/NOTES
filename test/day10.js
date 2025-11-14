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



