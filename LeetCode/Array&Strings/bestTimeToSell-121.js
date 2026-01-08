function bestTimeToSell(array){
    if(!Array.isArray(array)) return undefined;
    if(array.length === 0) return []

    let bestProfit = 0;
    let slow = 0;
    for(let fast = 1; fast < array.length; fast++){
        if(array[fast] < array[slow]){
            slow = fast;
        }else{
            let profit = array[fast] - array[slow]
            profit > bestProfit ? bestProfit = profit : bestProfit
        }
    }
    return bestProfit
}
console.log(bestTimeToSell([7,6,4,3,1]))

