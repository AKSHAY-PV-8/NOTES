function Rotation(array, k) {
    if (!Array.isArray(array)) return "invalid input"
    if (array.length === 0) return []

    let rotate = k % array.length;
    if (rotate < 0) rotate += array.length
    console.log(rotate)
    function reverse(start, end, arr) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr
    }

    reverse(0, array.length - 1, array);
    reverse(0, rotate - 1, array),
        reverse(rotate, array.length - 1, array)

    return array

}
// console.log(Rotation([1, 2, 3, 4, 5], -2))

function StringReverse(string) {
    if (typeof string != "string") return undefined

    let words = []
    let substring = ""
    let isWord = false
    for (let char of string) {
        if(char !== " "){
            substring += char
            isWord = true
        }else{
            if(isWord){
                words.push(substring)
                isWord = false
                substring = ""
            }
        }
    }
    if (substring.length != 0) {
        words.push(substring)
    }

    let left = 0, right = words.length - 1

    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]];
        left++;
        right--;
    }

    let result = ""

    for (let word of words) {
        result += word + " "
    }

    return result

}
// console.log(StringReverse("I   love JavaScript"));

function frequesyCount(array){
    if(!Array.isArray(array)) return undefined;
    if(array.length === 0) return {};

    let frequency = {}

    for(let number of array){
            frequency[number] = (frequency[number] || 0) + 1
    }

    return frequency
}
// console.log(frequesyCount([1,2,2,3,3]))

function sum(a){
    let total = 0
    if(typeof a === "number") total += a

    function inner(b){
        if(arguments.length === 0) return total;
        if(typeof b === "number") total += b;
        return inner;
    }
    return inner

}
// console.log(sum(1)(2)(3)())

function flattening(arr){
    let result = []; 
    for(let number of arr){
        if(Array.isArray(number)){
            result.push(...flattening(number))
        }else{
            result.push(number)
        }
    }
    return result

}

function flattening(arr){
    let result = []

    function helper(a){
        for(let number of a){
            if(Array.isArray(number)){
                helper(number)
            }else{
                result.push(number)
            }
        }

    }
    helper(arr)
    return result
}
    //   if (number !== null && typeof number === "object" && number.constructor === Array)
// console.log(flattening([1,[2,[3,4]],5]))



class minHeap{
    constructor(){
        this.heap = [];
    }

    getParent(i){return Math.floor((i-1) / 2)};
    getLeft(i){return (2 * i + 1)};
    getRight(i){return (2 * i + 2)};

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    remove(){
        if(this.heap.length === 1) return this.heap.pop()

            const root = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.heapifyDown();
            return root

    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while(i > 0 && this.heap[this.getParent(i)] > this.heap[i])
        {
            this.swap(i, this.getParent(i))
            i = this.getParent(i)

        }
    }

    heapifyDown(){
        let index = 0;
        const length = this.heap.length;

        while(true){
            const left = this.getLeft(index);
            const right = this.getRight(index);

            let smallest = index;

            if(left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if(smallest != index){
                this.swap(smallest, index);
                index = smallest
            }else break
        }
    }

}
const NthSmalestNumber = (arry, n) => {
    const heap = new minHeap();

    for(let i of arry){
        heap.insert(i)
    }
    let result ;
    for(let i = 0; i < n; i++){
        result = heap.remove();
    }
    console.log(arry)
    return result
}
// console.log(NthSmalestNumber([10, 5, 20, 8, 15], 2))



class maxHeap{
    constructor(){
        this.heap = [];
    }

    getParent(i){return Math.floor((i-1)/2)}
    getLeft(i){return (2 * i + 1)}
    getRight(i){return (2 * i -1)}

    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    remove(){
        if(this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while (i > 0 && this.heap[this.getParent(i)] < this.heap[i]){
            this.swap(i, this.getParent(i));
            i = this.getParent(i);
        }
    }

    heapifyDown(){
        let index = 0;
        let length = this.heap.length;

        while(true){
            const left = this.getLeft(index)
            const right = this.getRight(index);

            let highest = index;

            if(left < length && this.heap[left] > this.heap[highest] ) highest = left;
            if(right < length && this.heap[right] > this.heap[highest]) highest = right; 

            if(highest != index){
                this.swap(index, highest)
                index = highest
            }else break

        }
    }
    
}
function nthLargestNumber(arr, k){
    const heap = new maxHeap();

    for(let i of arr){
        heap.insert(i)
    }

    let result ;
    for(let i = 0; i < k; i ++){
        result = heap.remove(i)
    }

    return result
}
// console.log(nthLargestNumber([10, 5, 20, 8, 15], 2))



function palindrom(string){

    let cleaned = "";
    for(let i = 0; i < string.length; i++){
        let code = string.charCodeAt(i)
        
        if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
            cleaned += string[i]
        }
    }

    let left = 0, right = cleaned.length-1

    while(left < right){
        if(cleaned[left] === cleaned[right]){
            left++;
            right--;
        }else{
            return false
        }
    }
    return true
}
// console.log(palindrom("32maw m"))


function firstNonRepation(string){

    let frequency = {};

    for(let char of string){
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for(let char in frequency){
        if(frequency[char] === 1)
            return char
    }

    return null
}

// console.log(firstNonRepation("aabbc"));

function GroupingOfAngram(array){

    let groups = {}
    for(let word of array){
        let freq = new Array(26);

        for(let i = 0; i < 26; i++){
            freq[i] = 0
        }

        for(let i = 0; i < word.length; i++){
            let index = word.charCodeAt(i) - 97;
            freq[index] +=1
        }

        let key = "";
        for(let i of freq){
            key += i + "#"
        }

        if(!groups[key]){
            groups[key] = []
        }
        groups[key].push(word)

    }
    let result = [];
    for(let k in groups){
        result.push(groups[k])
    }

    return result

}
// console.log(GroupingOfAngram(["abc", "cba", "bca", "dca", "cda", "cde"]));

function mergeSort(arr){
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);

    let left = [];
    for(let i = 0; i < mid; i++){
        left[i] = arr[i];
    }

    let right = [];

    for(let i = mid; i < arr.length; i++){
        right[i - mid] = arr[i]
    }

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];

    let i = 0, j= 0, k = 0;

    while (i < left.length && j < right.length){
        if(left[i] < right[j]){
            result[k++] = left[i++];
        }else{
            result[k++] = right[j++];
        }
    }

    while(i < left.length) result[k++] = left[i++];
    while(j < right.length) result[k++] = right[j++];

    return result
}

// console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))

function removeDuplicates(arr){
    function mergeSort1(array){
        if(array.length <= 1) return array;

        let mid = Math.floor(array.length / 2)

        let left = []
        for(let i = 0; i < mid; i ++){
            left[i] = array[i]
        }
        let right = [];
        for(let i = mid; i <array.length; i++){
            right[i - mid] = array[i]
        }

        return merge1(mergeSort1(left), mergeSort1(right))
        
    }

    function merge1(left, right){
        let result = []
        let i = 0, j = 0, k = 0;

        while(i < left.length && j <right.length){
            if(left[i] < right[j]){
                result[k++] = left[i++]
            }else{
                result[k++] = right[j++]
            }
        }

        while(i < left.length) result[k++] = left[i++]
        while(j < right.length) result[k++] = right[j++]

        return result
    }
    let sorted = mergeSort1(arr)

    let slow = 0

    for(let fast = 1; fast < sorted.length; fast++){
        if(sorted[slow] != sorted[fast]){
            slow++;
            sorted[slow] = sorted[fast] 
        }
    }

    let result = [];
    for(let k = 0; k <= slow; k++){
        result[k] = sorted[k]
    }
    return result
}
// console.log(removeDuplicates([1,1,2,4,3,3,2]))

function twoSum(arr, target) {
    let map = {}

    for(let i = 0; i < arr.length; i++){
        let need = target - arr[i]

        if(map[need] !== undefined){
            return [map[need], i]
        }
        map[arr[i]] = i
    }
}
// console.log(twoSum([1,3,5,2], 7))

function moveZeros(arr){
    let i = 0;
    for(let j = 0; j < arr.length; j++){
        if(arr[j] != 0){
            arr[i] = arr[j];
            i++
        }
    }
    for(let j = i+1; j < arr.length; j++){
        arr[j] = 0
    }

    return arr
}
// console.log(moveZeros([1,0,2,2,0,0,3]))

function starPyramid(n){
    for(let i = 1; i <= n; i++){
        let line = ""

        for(let s = 0; s < n-i; s++){
            line += " "
        }

        for(let j = 0; j < 2 * i - 1; j++){
            line += "*"
        }

        console.log(line)
    }

}
// starPyramid(5);

function reversePyramid(n){
    for(let i = 1; i <= n; i++){
        let line = "";

        for(let s = 0; s < i - 1; s++){
            line += " ";
        }

        for(let j = 0; j < 2 * (n - i) + 1; j++){
            line += "*";
        }

        console.log(line)
    }
}
// reversePyramid(5)

function leftTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let s = 0; s < n - i; s++) {
            line += " ";
        }

        for (let j = 1; j <= i; j++) {
            line += "*";
        }

        console.log(line);
    }
}
function hollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // spaces
        for (let s = 0; s < n - i; s++) line += " ";

        // stars & hollow inside
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1 || i === n) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

function printMartix(mat){
    for(let i = 0; i < mat.length; i++){
        let row = "";
        for(let j = 0; j < mat[0].length; j++){
            row += mat[i][j] + " "
        }
        console.log(row)
    }
}

console.log(printMartix([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))










