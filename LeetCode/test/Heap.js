// class Heap{
//     constructor(compare){
//         this.heap = []
//         this.compare = compare
//     }

//     getParent(i){return Math.floor((i-1)/2)}
//     getLeft(i){return (i * 2 + 1)}
//     getRight(i){return (i * 2 + 2)}

//     swap(i,j){return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]}

//     add(value){
//         this.heap.push(value)
//         this.heapifyUp()
//     }

//     remove(){
//         if(this.heap.length === 0) return null
//         if(this.heap.length === 1) return this.heap.pop();

//         let root = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.heapifyDown();
//         return root
//     }

//     heapifyUp(){
//         let i = this.heap.length - 1

//         while( i > 0){
//             if(this.compare(this.heap[i], this.heap[this.getParent(i)]) < 0){
//                 this.swap(i, this.getParent(i))
//                 i = this.getParent(i)
//             }else break
//         } 
//     }

//     heapifyDown(){
//         let idx = 0;
//         let lenght = this.heap.length;

//         while(true){
//             let left = this.getLeft(idx)
//             let right = this.getRight(idx)
//             let small = idx

//             if(left < lenght && this.compare(this.heap[left], this.heap[small]) < 0) small = left
//             if(right < lenght && this.compare(this.heap[right], this.heap[small]) < 0) small = right

//             if(small != idx){
//                 this.swap(small,idx)
//                 idx = small;
//             }else break
//         }
//     }
// }


//215, 347, 973, 692,295, 703, 621, // 767, 857, 239, 632, 502,480

// function findKthLargest(nums, k){//215
//     const minHeap = new Heap((a,b) => a - b)

//     for(let num of nums){
//         minHeap.add(num)

//         if(minHeap.heap.length > k){
//             minHeap.remove()
//         }
//     }
//     return minHeap.heap[0]
// }

// console.log(findKthLargest([3,2,1,5,6,4], k = 2))


function productExceptSelf(nums) {
    let result = []
    let product = 1;
    let map = new Map()
    map.set(0, 1)


    for (let i = 0; i < nums.lenght; i++) {
        product *= nums[i]

        if (map.has(product / nums[i])) {
            result.push(map.get(product / nums[i]))
        }
        map.set(product, product)
    }
    return result

}

// console.log(productExceptSelf([1,2,3,4]))

// ----------------------------------------


class Heap {
    constructor(condition) {
        this.heap = []
        this.comp = condition
    }

    getParent(i) { return Math.floor((i - 1) / 2) }
    getLeft(i) { return i * 2 + 1 }
    getRight(i) { return i * 2 + 2 }
    swap(i, j) { return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] }

    add(value) {
        this.heap.push(value);
        this.heapifyUp()
    }
    remove() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()

        let node = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return node;
    }

    heapifyUp() {
        let i = this.heap.length - 1
        while (i > 0) {
            if (this.comp(this.heap[i], this.heap[this.getParent(i)]) < 0) {
                this.swap(i, this.getParent(i))
                i = this.getParent(i)
            } else break
        }
    }
    heapifyDown() {
        let length = this.heap.length
        let idx = 0

        while (true) {
            let left = this.getLeft(idx)
            let right = this.getRight(idx)

            let small = idx;

            if (left < length && this.comp(this.heap[left], this.heap[small]) < 0) small = left;
            if (right < length && this.comp(this.heap[right], this.heap[small]) < 0) small = right;

            if (idx !== small) {
                this.swap(idx, small)
                idx = small
            } else break
        }
    }
    length() { return this.heap.length }
    peak() { return this.heap[this.heap.length - 1] }
}

function findKthLargest(array, k) {//215

    let minHeap = new Heap((a, b) => b - a)

    for (let num of array) {
        minHeap.add(num)

        if (minHeap.length() > k) {
            minHeap.remove()
        }
    }
    let result = minHeap.remove()
    return result

}
// console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))

function topKFrequent(nums, k) {//347
    const freq = new Map();

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    let minHeap = new Heap((a, b) => a[1] - b[1])

    for (let [num, count] of freq) {
        minHeap.add([num, count])
        if (minHeap.length() > k) {
            minHeap.remove()
        }
    }

    return minHeap.heap.map(item => item[0])
}
// console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 3, 3, 3, 2], 2))

function kClosest(points, k) {//973
    const heap = new Heap((a, b) => b[0] - a[0])

    for (let [x, y] of points) {
        let dis = x * x + y * y
        heap.add([dis, x, y])

        if (heap.length() > k) {
            heap.remove()
        }
    }

    const result = []
    while (heap.length() > 0) {
        const [, x, y] = heap.remove();
        result.push([x, y])
    }
    return result


}
// console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2))

function topKfrequentWord(words, k) {//692
    let heap = new Heap((a, b) => a[1] - b[1])
    let freq = new Map()

    for (let word of words) {
        freq.set(word, (freq.get(word) || 0) + 1)
    }

    for (let [word, count] of freq) {
        heap.add([word, count])

        if (heap.length() > k) {
            heap.remove()
        }
    }

    let result = []

    while (heap.length() > 0) {
        let [word, count] = heap.remove()
        result.push(word)
    }

    return result

}
// console.log(topKfrequentWord(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))

class MedianFinder {//295
    constructor() {
        this.left = new Heap((a, b) => b - a)
        this.right = new Heap((a, b) => a - b)
    }

    addNum(num) {
        if (this.left.length() === 0 || num < this.left.peak()) {
            this.left.add(num)
        } else {
            this.right.add(num)
        }

        if (this.left.length() > this.right.length + 1) {
            this.right.add(this.left.remove())
        }

        if (this.right.length() > this.left.length) {
            this.left.add(this.right.remove())
        }
    }

    findMedian() {
        if (this.left.length() > this.right.length()) {
            return this.left.peak()
        }

        return (this.left.peak() + this.right.peak()) / 2
    }

}

const mf = new MedianFinder();

// mf.addNum(1);
// mf.addNum(2);
// console.log(mf.findMedian());

// mf.addNum(3);
// console.log(mf.findMedian());


class ScoreTracker {//703
    constructor() {
        this.data = [];
    }

    add(score) {
        this.data.push(score);
    }

    kthLargest(k) {
        if (this.data.length < k) return null;

        // Min heap of size k
        const minHeap = new Heap((a, b) => a - b);

        for (let score of this.data) {
            minHeap.add(score);

            if (minHeap.length() > k) {
                minHeap.remove();
            }
        }

        return minHeap.remove()
    }
}
// let scores = new ScoreTracker()

// scores.kthLargest(3)
// scores.add(4)
// scores.add(5)
// scores.add(8)
// scores.add(2)
// console.log(scores.kthLargest(3)
// )


function leastInterval(tasks, n) {//621
    const freq = new Map()

    for (let task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1)
    }

    let maxFrq = 0;
    let countMax = 0;

    for (let count of freq.values()) {
        if (count > maxFrq) {
            maxFrq = count;
            countMax = 1
        } else if (count === maxFrq) {
            count++
        }
    }

    const slots = (maxFrq - 1) * (n + 1) * + countMax

    return Math.max(tasks.length, slots)
}

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))

function reorganizeString(s) {
    let freq = new Map()

    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    let result = ""
    let prev = null;


    let heap = new Heap((a, b) => b[1] - a[1])

    for (let [value, count] of freq) {
        heap.add([value, count])
    }

    while(heap.length() > 0){
        let [value, count] = heap.remove()
        result += value
        count --

        if(prev && prev[1] > 0){
            heap.add(prev)
        }

        prev = [value, count]

    }

    return result

}
console.log(reorganizeString("aabcr"))


function mincostToHireWorkers(quality, wage, k) {//857

    let workers = [];

    // 1️⃣ Build workers array
    for (let i = 0; i < quality.length; i++) {
        let ratio = wage[i] / quality[i];
        workers.push([ratio, quality[i]]);
    }

    // 2️⃣ Sort by ratio
    workers.sort((a, b) => a[0] - b[0]);

    // 3️⃣ Max heap by QUALITY
    let heap = new Heap((a, b) => b[1] - a[1]);

    let sumQ = 0;
    let minCost = Infinity;

    // 4️⃣ Greedy iteration
    for (let [ratio, qual] of workers) {
        heap.add([ratio, qual]);
        sumQ += qual;

        if (heap.length() > k) {
            let removed = heap.remove();
            sumQ -= removed[1];
        }

        if (heap.length() === k) {
            minCost = Math.min(minCost, sumQ * ratio);
        }
    }

    return minCost;
}
console.log(mincostToHireWorkers([10,20,5], [70,50,30], 2))


function maxSlidingWindow(nums, k){//239
    let left = 0
    let windows = []
    for(let right = 0; right < nums.length; right++){
        while( right - left + 1 === k){
            let subArry = nums.slice(left, right + 1)
            windows.push(subArry)
            left++
        }
    }

    let result = []

    for(let window of windows){
        let heap = new Heap((a,b) => b - a);
        for(let i of window){
            heap.add(i)
        }
        result.push(heap.remove())
    }
    return result

}
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))

function repeatedNTimes(nums){//961
    let n = nums.length/2;

    let map = new Map()

    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1)
    }

    for(let [num, count] of map){
        if(count === n){
            return num
        }
    }

}
console.log(repeatedNTimes([5,1,5,2,5,3,5,4]))





