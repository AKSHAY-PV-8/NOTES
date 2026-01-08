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
    peak() { return this.heap[0] }
}

function merge(lists) {

    let rows = lists.length
    let cols = lists[0].length

    for(let c = 0; c < cols; c++){
        for(let r = 0; r < rows; r++){
            console.log(lists[r][c])
        }
    }
}
console.log(merge(
    [
        [1, 4, 7],
        [2, 3, 8],
        [1, 5, 9]
    ]
))


Q1. Next Greater Frequency Element

Given an array, for each element find the next element to its right whose frequency is greater than the current element’s frequency.

If no such element exists, output -1.

Test Case 1

Input

[1, 1, 2, 3, 4, 2, 1]


Output

[-1, -1, 1, 2, 2, 1, -1]

Test Case 2

Input

[4, 4, 4, 2, 2, 1]


Output

[-1, -1, -1, 4, 4, 2]

Q2. Minimum Platforms Required

Given arrival and departure times of trains, find the minimum number of platforms required so that no train waits.

Test Case 1

Input

Arrival = [900, 940, 950, 1100, 1500, 1800]
Departure = [910, 1200, 1120, 1130, 1900, 2000]


Output

3

Test Case 2

Input

Arrival = [100, 200, 300]
Departure = [150, 250, 350]


Output

1

Q3. K Closest Numbers to X

Given a sorted array, find K numbers closest to X.

If tie → choose smaller number first.

Return result in sorted order.

Test Case 1

Input

arr = [1, 2, 3, 4, 5]
K = 4
X = 3


Output

[1, 2, 3, 4]

Test Case 2

Input

arr = [1, 3, 7, 8, 9]
K = 2
X = 6


Output

[7, 8]

Q4. Count Subarrays with Equal 0s and 1s

Given a binary array, count the number of subarrays with equal number of 0s and 1s.

Test Case 1

Input

[0, 1, 0, 1]


Output

4

Test Case 2

Input

[0, 0, 1]


Output

1

Q5. Decode Nested Encoded String

Given an encoded string where:

k[encoded_string] means repeat inside string k times

Nested patterns are allowed

Test Case 1

Input

3[a2[c]]


Output

accaccacc

Test Case 2

Input

2[ab]3[c]


Output

ababccc

🧠 Interview Focus Summary
Question	Main Concept
Q1	Stack + hashmap
Q2	Two pointers
Q3	Binary search
Q4	Prefix sum
Q5	Stack + parsing



////////////////////////////////////////////////////


LeetCode 152 – Maximum Product Subarray ⭐ (must-do)

LeetCode 53 – Maximum Subarray (Kadane)

LeetCode 918 – Maximum Sum Circular Subarray

LeetCode 1749 – Maximum Absolute Sum of Any Subarray

LeetCode 1567 – Maximum Length of Subarray With Positive Product