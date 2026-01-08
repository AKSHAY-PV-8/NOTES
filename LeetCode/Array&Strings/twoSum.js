function TwoSum(array, target){

    if(!Array.isArray(array)) return undefined;
    if(array.length === 0) return []

    let seen = new Map()
    for(let i = 0; i < array.length; i++){
        let need = target - array[i];
        if(seen.has(need)){
            return [seen.get(need), i]
        }else{
            seen.set(array[i], i)
            console.log(seen)
        }
    }
}

console.log(TwoSum([1,2,7,3,3], 6))