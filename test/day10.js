function createMultiplier(n){
    const multiplier = n;
    return (multiplicant) => {
        let result = multiplicant * multiplier
        console.log(result)
    }
}

const double = createMultiplier(2)
const triple = createMultiplier(3)

double(10)
triple(2)