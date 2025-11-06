function reverse(string){

    if(typeof string !== "string" || string === null) return undefined
    if(string.length === 0) return ""

    let stringAfterTrim = string.trim()
    let str= []
    for(let i of stringAfterTrim){
        str.push(i)
    }

    let left = 0
    let right = str.length-1

    while(left < right){
        [str[left], str[right]] = [str[right], str[left]]
        left++;
        right--
    }

    let revers = ''
    
    for(let i of str){
        revers += i
    }

    return revers

}

function palindrome(string){

    if(typeof string !== "string") return undefined;
    if(string.length === 0) return undefined;


    let left = 0;
    let right = string.length-1;

    while(string[left] === " ") left ++;
    while(string[right] === " ") right --;

    while(left< right){
        if(string[left] !== string[right]) return false;
        left ++;
        right --;
    }

    return true

}

function MaximumInArray(arr){

    if(!Array.isArray(arr) || arr === null) return undefined;
    if(arr.length === 0) return undefined;

    let Max = 0
    for(let i of arr){
        if(i > Max){
            Max = i
        }
    }
    return Max

}

function Occurrences(string){
    if(typeof string !== "string") return undefined;
    if(string.length === 0) return "";

    let lookup = {}
    for(let char of string){
        if(char !== " "){
            lookup[char] = (lookup[char] || 0) + 1
        }
    }

    return lookup
}

class MaxHeap{
    constructor(){
        this.heap = []
    }

    getLeftChild(i) {return ((2 * i) + 1)}
    getRightChild(i) {return ((2 * i) + 2)}
    getParent(i) {return Math.floor(i -1)/2}

    swap(i,j){ return this.heap[i,j] = this.heap[j,i] }

    add(value){
        this.heap.push(value)
        heapifyUp()
    }

    remove(){

    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while(i > 0 && this.heap[this.getParent(i)] < this.heap[i]){
            this.swap(this.getParent(i), i)
            i = this.getParent(i);
        }      
    }


}



// function MetrixMultiplication(arr1, arr2){
    
//     const lnArr1 = arr1.length;
//     const lnColArr1 = arr1[0].length;
//     const lnArr2 = arr2.length;
//     const lnColArr3 = arr2[0].length;

//     const Result = []

//     for(let i = 0; i < lnArr1; i++){
                                                            
//     }
// }
                                      

// const arr1 = [[1,2,3], 
//               [2,4,3], 
//               [5,6,7]]

// const arr2 = [[4,1,2], 
//               [3,1,2], 
//               [6,4,2]]

                                                       

// console.log(MetrixMultiplication(arr1, arr2))

