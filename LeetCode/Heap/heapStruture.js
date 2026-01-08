class Heap{
    constructor(condition){
        this.heap = [];
        this.compare = condition;
    }

    getParent(i){return Math.floor((i-1)/2)}
    getLeft(i){return i*2 + 1};
    getRight(i){return i*2 + 2};

    swap(i,j){return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]};

    add(value){
        this.heap.push(value);
        this.heapifyUp()
    }

    remove(){
        if (this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDowm()
        return root;

    }

    heapifyUp(){
        let i = this.heap.length - 1;
        while( i > 0){
            if(this.compare(this.heap[i], this.heap[this.getParent(i)]) < 0){
                this.swap(i, this.getParent(i))
                i = this.getParent(i)
            }else break
        }
    }

    heapifyDowm(){
        let idx = 0;
        let length = this.heap.length;

        while(true){
            let left = this.getLeft(idx);
            let right = this.getRight(idx);
            let small = idx;

            if( left < length && this.compare(this.heap[left], this.heap[small]) < 0) small = left;
            if( right < length && this.compare(this.heap[right], this.heap[small]) < 0) small = right;

            if(small !== idx){
                this.swap(idx, small);
                idx = small;
            }else break;

        }
    }

    isEmpty(){
        return  this.heap.length === 0;
    }
}


function mergeKsortedList(list){
    let heap = new Heap((a,b) => a.value - b.value);
    let result = [];

    for(let i = 0; i < list.length; i++){
        if(list[i].length > 0){
            heap.add({
                value: list[i][0],
                listIndex: i,
                elementIndex: 0
            })
        }
    }
    console.log(heap)

    while(!heap.isEmpty()){
        let {value, listIndex, elementIndex} = heap.remove()
        result.push(value);

        let nextIndex = elementIndex + 1;

        if(nextIndex < list[listIndex].length){
            heap.add({
                value: list[listIndex][nextIndex],
                listIndex,
                elementIndex: nextIndex
            })
        }
    }

    return result

}

console.log(mergeKsortedList([
  [1, 4, 7],   // list 0
  [2, 5, 8],   // list 1
  [3, 6, 9]    // list 2
]))


