function minPlatforms(arrivals, departures) {
    arrivals.sort((a,b) => a - b)
    departures.sort((a,b) => a - b)

    let number = arrivals.length

    let platFormNumber = 1;
    let result = 1;
    let i = 1;
    let j = 0;

    while(i < number && j <number){
        if(arrivals[i] <= departures[j]){
            platFormNumber++;
            i++
        }else{
            platFormNumber--;
            j++
        }
        result = Math.max(result, platFormNumber)
    }
    return result
}

const arrivals = [900, 940, 950, 1100, 1500, 1800];
const departures = [910, 1200, 1120, 1130, 1900, 2000];

console.log(minPlatforms(arrivals,departures));

                                                                  
   
                                   
