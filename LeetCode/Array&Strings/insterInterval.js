function insterInterval(intervals, newInterval){
    intervals.push(newInterval)

    intervals.sort((a,b) => a[0] - b[0])

    let prev = intervals[0];
    let result = [];

    for(let i = 1 ; i < intervals.length; i++){
        let current = intervals[i]

        if(current[0] <= prev[1]){
            prev[1] = Math.max(prev[1], current[1])
        }else{
            result.push(prev);
            prev = current;
        }
    }
    result.push(prev)
    return result
}


console.log(insterInterval([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]))