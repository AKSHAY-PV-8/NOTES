function createMultiplier(multiplier){
    return (multiplicant) => {
        let result = multiplicant * multiplier
        console.log(result)
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

double(10)
triple(2)

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
    const array = arr
    let result = []
    return (cod) => {
        for(let i of array){
             if(cod(i)){
                result.push(i)
             }
        }
        console.log(result)
    }
}

// const fun = filter([1,2,3,4])
// fun(n => n > 2)

// filter([1,2,3,4])(n => n > 2) // [3,4]