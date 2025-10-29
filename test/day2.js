const secondLargestNumber = (array) => {

    let hightest = array[0];
    let secondHighteset = 0
    for(let i = 0; i < array.length; i++){
        
        if(array[i]  > hightest){
            secondHighteset = hightest
            hightest = array[i]
        }
        if(array[i] < hightest && array[i] > secondHighteset){
            secondHighteset = array[i]
        }
    }

    return secondHighteset
}

const frequncy = (string) => {

    let set = {};
    let highestChar = null;
    let value = null;

    for(let char of string){
        set[char] = (set[char] || 0) +1;
        if(highestChar < set[char]){
            highestChar = set[char]
            value = char
        }
                                                                                                                                                                                                      
    }

    return value
}

const MoveZeroEnd = (array) => {
    let index = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] !== 0){
            array[index] = array[i]
            index++;
        }
    }

    while( index < array.length){
       array[index] = 0;
       index ++
    }

    return array
}

const once = (fn) => {
    let called = false

    return () => {
        if(!called){
            called = true
            fn()
        }
    }


}

const sayHi = once(() => console.log("Hi!"));
sayHi(); // prints "Hi!"
sayHi(); // does nothing

// const array = [10, 5, 8, 20, 2]
// const string = "javascript"
// const array1 = [0, 1, 0, 3, 12]



// console.log(secondLargestNumber(array))
// console.log(frequncy(string))

// console.log(MoveZeroEnd(array1))