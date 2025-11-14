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