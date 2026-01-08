class MinHeap{
    constructor(compare){
        this.heap = [];
        this.compare = compare;
    }

    getParent(i){return Math.floor((i -1)/2)}
    getLeft(i){return (i*2 + 1)}
    getRight(i){return (i*2 + 2)}

    swap(i,j){return [this.heap[i],this.heap[j]] = [this.heap[j],this.heap[i]]}

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length === 1) return this.heap.pop();

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown()
        return root;
    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while(i > 0){
            if(this.compare(this.heap[i], this.heap[this.getParent(i)]) < 0){
                this.swap(i, this.getParent(i));
                i = this.getParent(i)
            }else break
        }
    }

    heapifyDown(){
        let i = 0;
        let lenght = this.heap.length;

        while(true){
            let left = this.getLeft(i)
            let right = this.getRight(i);
            let small = i;

            if(left < lenght && this.compare(this.heap[left], this.heap[small]) < 0) small = left;
            if(right < lenght && this.compare(this.heap[right], this.heap[small]) < 0) small = right;

            if(small != i){
                this.swap(small,i)
                i = small
            }else break
        }

    }
}

let minHeap = new MinHeap((a,b) => b - a);


minHeap.add(5)
minHeap.add(1);
minHeap.add(10);
minHeap.add(3);

console.log(minHeap)

console.log(minHeap.remove())
console.log(minHeap.remove())
console.log(minHeap.remove())
console.log(minHeap.remove())




