//optimised version

const rainwaterTapping = (arr) => {
  let left = 0, right = arr.length - 1;
  let leftMax = 0, rightMax = 0;
  let total = 0;

  while (left < right) {
    if (arr[left] < arr[right]) {
      if (arr[left] >= leftMax) leftMax = arr[left];
      else total += leftMax - arr[left];
      left++;
    } else {
      if (arr[right] >= rightMax) rightMax = arr[right];
      else total += rightMax - arr[right];
      right--;
    }
  }

  return total;
};

const array1 = [3,0,1,0,4,0,2]; // Expected: 10
const array2 = [3,0,2,0,4];     // Expected: 7

console.log(rainwaterTapping(array1));
console.log(rainwaterTapping(array2));


// const rainwaterTappig = (array) => {

//     let tappedRainWater = 0
//     let heigh = 0
                                                                                                       
//     for(let i = 0; i < array.length; i++){
        
//             if(array[heigh] >= array[i]){
//                 let rainwaterStored = array[heigh] - array[i];
//                 tappedRainWater = tappedRainWater + rainwaterStored
//             }else if(array[heigh] < array[i]){
//                 heigh = i
//                 let heighFromEnd = array.length-1
//                 for(let j = array.length-1; j > 0; j--){
//                     if( j !== heigh){
//                         let Stored = array[heighFromEnd] - array[j];
//                         tappedRainWater = tappedRainWater + Stored
//                     }else{
//                         return tappedRainWater
//                     }

//                 }
//             }
//         }
//     }




// const array = [3,0,1,0,4,0,2]  //10
// const array2 = [3,0,2,0,4] // 7

// console.log(rainwaterTappig(array2))