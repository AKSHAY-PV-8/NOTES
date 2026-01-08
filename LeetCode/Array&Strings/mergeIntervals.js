function merge(intervals) {
    intervals.sort((a,b) => a[0] - b[0])

    let prev = intervals[0];
    let result = [];

    for(let i = 1; i < intervals.length; i++){
        let current = intervals[i];

        if(prev[1] >= current[0]){
            prev[1] = Math.max(prev[1], current[1]);
        }else{
            result.push(prev);
            prev = current
        }
    }
    result.push(prev)
    return result
}


console.log(merge([[1,3],[2,6],[15,18],[8,10]]))





