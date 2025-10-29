const containerWithMostWater = (array) => {

    let LargestArea = 0;
    let area = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            let breadth = j-i;
            if(array[i] <= array[j]){
                area = breadth * array[i]
            }      else{
                area = breadth * array[j]
            }
        }
        if(area > LargestArea){
            LargestArea = area
        }
    }
    return LargestArea
}


console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))