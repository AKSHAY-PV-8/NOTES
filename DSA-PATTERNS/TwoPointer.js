function TwoSum(arr, n){ //best way for sorted array

    let left = 0, right = arr.length - 1

    while(left < right){
        let sum = arr[left] + arr[right]

        if(sum === n){
            return [arr[left] , arr[right]]
        }else if(sum > n){
            right--;
        }else{
            left ++
        }
    } 
    return null
}
function twoSumHash(arr, target) {
    let map = {};

    for (let i = 0; i < arr.length; i++) {
        let need = target - arr[i];
        if (map[need] !== undefined) {
            return [need, arr[i]];
        }
        map[arr[i]] = i;
    }
    return null;
}
// console.log(TwoSum([2,7,11,15], 9)) //best way for sorted array


function RemoveDuplicatesWithoutUsingExtraArray (arr){
    let j = 1;
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] != arr[j-1]){
            arr[j] = arr[i]
            j++
        }
    }
    return j
}
// console.log(RemoveDuplicatesWithoutUsingExtraArray([0,1,1,2,2,3]))


function Palindrome(str) {

    let clean = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        // A-Z → convert to lowercase manually
        if (code >= 65 && code <= 90) {
            clean += String.fromCharCode(code + 32);
        }
        // a-z → keep
        else if (code >= 97 && code <= 122) {
            clean += str[i];
        }
    }

    let left = 0, right = clean.length - 1;

    while (left < right) {
        if (clean[left] !== clean[right]) return false;
        left++;
        right--;
    }

    return true;
}

console.log(Palindrome("aba"))


function MostWaterContained (arr){

    let left = 0, right = arr.length - 1
    let result = 0

    while(left < right){
        let height = arr[left] < arr[right] ? arr[left] : arr[right]
        let width = right - left;
        let area = height * width
        area > result ? result = area : result

        arr[left] < arr[right] ? left ++ : right-- ;
    }
    return result
}

console.log(MostWaterContained([1,8,6,2,5,4,8,3,7]))

