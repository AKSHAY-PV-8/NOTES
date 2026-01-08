//215, 347, 973, 692,295, 703, 621, // 767, 857, 239, 632, 502,480

class Heap {
    constructor(condition) {
        this.heap = [];
        this.compare = condition
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

        let node = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return node
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            if (this.compare(this.heap[i], this.heap[this.getParent(i)]) < 0) {
                this.swap(i, this.getParent(i))
                i = this.getParent(i)
            } else break
        }
    }

    heapifyDown() {
        let index = 0;
        let length = this.heap.length

        while (true) {
            let left = this.getLeft(index)
            let right = this.getRight(index)
            let small = index

            if (left < length && this.compare(this.heap[left], this.heap[small]) < 0) small = left;
            if (right < length && this.compare(this.heap[right], this.heap[small]) < 0) small = right;

            if (small != index) {
                this.swap(small, index)
                index = small
            } else break
        }
    }

    length() {
        return this.heap.length
    }
    peak() {
        return this.heap[this.length() - 1]
    }
}

function findKthLargest(nums, k) {
    let heap = new Heap((a, b) => a - b)

    for (let num of nums) {
        heap.add(num)

        if (heap.length() > k) {
            heap.remove()
        }
    }

    return heap.remove()
}
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))

function topKFrequent(nums, k) {
    let heap = new Heap((a, b) => b[1] - a[1])
    let freq = new Map()

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }

    for (let [num, count] of freq) {
        heap.add([num, count])
    }
    
    let result = []
    for (let i = 0; i < k; i++) {
        let [value, count] = heap.remove()
        result.push(value)
    }
    return result
}
console.log(topKFrequent([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2))