class Heap {
    constructor(compare) {
        this.heap = []
        this.compare = compare;
    }

    getParent(i) { return Math.floor((i - 1) / 2) }
    getLeft(i) { return (i * 2 + 1) }
    getRight(i) { return (i * 2 + 2) }

    swap(i, j) { return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] }

    add(value) {
        this.heap.push(value);
        this.heapifyUp()

    }

    remove() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return root
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
        let idx = 0;
        let length = this.heap.length;

        while (true) {
            let left = this.getLeft(idx);
            let right = this.getRight(idx);

            let small = idx;

            if (left < length && this.compare(this.heap[left], this.heap[small]) < 0) small = left;
            if (right < length && this.compare(this.heap[right], this.heap[small]) < 0) small = right;

            if (small !== idx) {
                this.swap(small, idx);
                idx = small
            } else break
        }
    }

    isEmpty() {
        return this.heap.length === 0
    }

}

function mergeKlist(list) {
    let minHeap = new Heap((a, b) => a.value - b.value);
    let maxHeap = new Heap((a, b) => b.value - a.value);

    let result = []
    let pickMin = false
    const pointers = new Array(list.length).fill(0);

    for (let i = 0; i < list.length; i++) {
        if (list[0].length > 0) {
            let node = {
                value: list[i][0],
                listIndex: i,
                elementIndex: 0
            }
            minHeap.add(node);
            maxHeap.add(node)
        }
    }

    while (!minHeap.isEmpty() && !maxHeap.isEmpty()) {
        let node;

        if (pickMin) {
            node = minHeap.remove()
        } else {
            node = maxHeap.remove()
        }

        const { value, listIndex, elementIndex } = node;

        if (pointers[listIndex] !== elementIndex) continue;

        result.push(value)
         pointers[listIndex]++

        let nextValue = elementIndex + 1;
        if(nextValue < list[listIndex].length){
            const newNode = {
                value: list[listIndex][nextValue],
                listIndex,
                elementIndex : nextValue
            }
            minHeap.add(newNode)
            maxHeap.add(newNode)
        }

        pickMin = !pickMin
        
    }

    return result


}

console.log(mergeKlist([
    [1, 4, 7],
    [2, 3, 8],
    [1, 5, 9]
]))