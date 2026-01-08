function binarySearch(array, taget){
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right)/2)

        if(taget == array[mid]){
            return mid
        }else if(array[mid] > taget){
            right = mid - 1;
        }else{
            left = mid + 1
        }
    }
    return -1
}

function binarySearchIn2D(array, target){
    let rows = array.length;
    let cols = array[0].length;

    let left = 0;
    let right = rows * cols - 1;

    while(left < right){
        let mid = Math.floor((left + right) / 2);

        let r = Math.floor(mid / cols);
        let c = (mid % cols)

        let value = array[r][c];

        if(value === target){
            return ["row",r + 1,"col",c + 1]
        }
        if (value < target) left = mid + 1;
        else right = mid - 1;
    }
    return false
}

function SearchInRotatedArray(array, target){
    let left = 0;
    let right = array.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(array[mid] === target){
            return mid
        }else if(array[mid] >= array[left]){
            if(array[left] <= target && target <= array[mid]){
                right = mid - 1
            }else{
                left = mid + 1 
            }
        }else{
            if(array[mid] <= array[right] && array[mid] <= target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
    }
}

console.log(SearchInRotatedArray([4,5,6,7,0,1,2], 0))

console.log(binarySearchIn2D([
 [1, 3, 5, 7],
 [10,11,16,20],
 [23,30,34,60]
], 16))

console.log(binarySearch([-1,0,3,5,9,12], 9))

