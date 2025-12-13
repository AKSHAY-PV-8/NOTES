function frequency(array){
    let set = {}
    for(let i of array){
        set[i] = (set[i] || 0) + 1
    }
    return set
}

console.log(frequency([1,2,2,3,3]))


function sum(a){
    let total = 0;
    function inner(b){
        if(arguments.length === 0) return total;
        total+=b;
        return inner
    }
    return inner
}
console.log(sum(1)(2)(3)())

function flatterning(arr){
    let result = [];
    for(let number of arr){
        if(Array.isArray(number)){
            result.push(...flatterning(number))
        }else{
            result.push(number)
        }
    }

    return result
}

console.log(flatterning([1,[2,[3,4]],5]))


class minHeap{
    constructor(){
        this.heap = [];
    }

    getParent(i){return Math.floor((i-1)/2)}
    getLeft(i){return (2*i + 1)}
    getRight(i){return (2*i + 2)}

    swap(i,j){
       [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    insert(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    remove(){
        if(this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return root
    }

    heapifyUp(){
        let i = this.heap.length - 1;

        while(i > 0 && this.heap[this.getParent(i)] > this.heap[i]){
            this.swap(i, this.getParent(i))
            i = this.getParent(i)
        }
    }

    heapifyDown(){
        let index = 0;
        let length = this.heap.length;

        while(true){
            let left = this.getLeft(index);
            let right = this.getRight(index);

            let smallest = index

            if(left < length && this.heap[left] < this.heap[smallest]) smallest = left;
            if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;

            if(smallest != index){
                this.swap(smallest,index)
                index = smallest
            }else break
        }
    }
}

const NthSmalestNumber = (arry, n) => {
    const heap = new minHeap()
    for(let number of arry){
        heap.insert(number)
    }

    let result ;
    for(let i = 0; i < n; i++){
        result = heap.remove(i)
    }
    return result
}

console.log(NthSmalestNumber([10, 5, 20, 8, 15], 3))


function GroupingOfAngram(array){
    let group = {}
    for(let word of array){
        let freq = new Array(26)
        for(let i = 0; i < 26; i++){
            freq[i] = 0
        }

        for(let i = 0; i < word.length; i++){
            let code = word.charCodeAt(i) - 97;
            freq[code] += 1
        }


        let key = "";

        for(let i of freq){
            key += i + "#"
        }

        if(!group[key]){
            group[key] = []
        }
        group[key].push(word);
    }

    let result = [];

    for(let i in group){
       result.push(group[i])
    }
    return result
}

console.log(GroupingOfAngram(["abc", "cba", "bca", "dca", "cda", "cde"]));


function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)

    let left = [];
    for(let i = 0 ; i < mid; i++){
        left[i] = arr[i]
    }

    let right = [];
    for(let i = mid; i < arr.length; i++){
        right[i - mid] = arr[i]
    }

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    let i = 0, j = 0, k = 0;

    while (i < left.length && j < right.length){
        if(left[i] < right[j]){
            result[k++] = left[i++]
        }else{
            result[k++] = right[j++]
        }
    }

    while (i < left.length) result[k++] = left[i++];
    while(j < right.length) result[k++] = right[j++];
    return result

}

console.log(mergeSort([1,5,6,7,2,3,4,5,6]))

function removeDuplicates(arr){
    let slow = 0;
    for(let fast = 1; fast < arr.length; fast++){
        if(arr[slow] != arr[fast]){
            slow ++;
            arr[slow] = arr[fast]
        }
    }
    let result = []
    for(let i = 0; i < slow; i++){
                result.push(arr[i])

    }
    return result
}

console.log(removeDuplicates([1,1,2,4,3,5,2]))

function twoSum (arr, k){

    let map = {};
    for(let i of arr){
        let need = k - i;

        if(map[need]){
            return [i, map[need]]
        }else{
            map[i] = i
        }
    }

}

console.log(twoSum([1,2,3,6,4], 8))

function myMap(arr, callback){
    let result = []
    for(let i = 0; i < arr.length; i++){
        result[i] = callback(arr[i], i ,arr)
    }
    return result
}
console.log(myMap([1,2,3], x => x * 2));


function binarySearch(arr, target ){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] === target) return mid
        else if (arr[mid] < target) left = mid + 1;
        else if(arr[mid] > target) right = mid -1
    }
    return null;
}

console.log(binarySearch([12,3,5,3,7], 5))


function longestCommonPrefix(array){
    if(array.length === 0) return "";

    let prefix = "";
    let first = array[0];

    for(let i = 0; i < first.length; i++){
        let char = first[i]

        for(let j = 1; j < array.length; j++){
            if(i > array[j].length || array[j][i] !== char){
                return prefix
            }
        }
        prefix += char
    }

    return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"])); 

function frew(array){
    let feq = {};
    for(let char of array){
        feq[char] = (feq[char] || 0) + 1;
    } 
    console.log(feq)
}

console.log(frew([1,2,2,3,3,3,34]));


class priorityQueue{
    constructor(){
        this.heap = []
        this.counter = 0;
    }
    getParent(i){return Math.floor((i-1)/ 2)}
    swap(i,j){
        [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]
    }

    enqueue(name, priority){
        this.heap.push({name, priority, order: this.counter++})
        this.heapifyUp()
    }
    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root;
    }

    higher(a,b){
        if(a.priority !== b.priority){
            return a.priority > b.priority
        }
        return a.priority < b.priority;
    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while(i > 0){
            if(this.higher(this.heap[i], this.heap[this.getParent(i)])){
                this.swap(i, this.getParent(i))
                i = this.getParent(i);
            }else break
        }
    }

    heapifyDown() {
        let i = 0;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let best = i;

            if (left < this.heap.length && this.higher(this.heap[left], this.heap[best])) {
                best = left;
            }
            if (right < this.heap.length && this.higher(this.heap[right], this.heap[best])) {
                best = right;
            }

            if (best !== i) {
                [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
                i = best;
            } else break;
        }
    }
}
function airportBoarding(commands) {
    const pq = new PriorityQueue();

    for (let i = 0; i < commands.length; i++) {
        let parts = commands[i].split(" ");

        if (parts[0] === "ADD_NORMAL") {
            pq.enqueue(parts[1], 1);
        } 
        else if (parts[0] === "ADD_PRIORITY") {
            pq.enqueue(parts[1], 2);
        } 
        else if (parts[0] === "BOARD") {
            let passenger = pq.dequeue();
            if (passenger === null) {
                console.log("No passengers in line");
            } else {
                console.log(passenger.name);
            }
        } 
        else {
            console.log("Invalid command");
        }
    }
}