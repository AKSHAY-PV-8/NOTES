function subSets(nums) {
    let result = []

    function backtrack(index, path) {
        result.push([...path])
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(0, [])
    return result

}
console.log(subSets([1, 2, 2]))

function combine(n, k) {
    let result = []

    function backtrack(index, path) {

        if (path.length === k) {
            result.push([...path])
            return
        }

        for (let i = index; i <= n; i++) {
            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }

    }
    backtrack(1, [])
    return result;

}
console.log(combine(4, 2))

function combinationSumII(nums, target) {
    nums.sort((a, b) => a - b)
    let result = [];

    function backrack(index, path, sum) {
        if (sum === target) {
            result.push([...path])
            return
        }

        if (sum > target) return

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backrack(i + 1, path, sum + nums[i])
            path.pop()
        }
    }
    backrack(0, [], 0)
    return result
}
console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8))

function partition(s) {
    let result = [];

    function palindrom(word) {
        let l = 0
        let r = word.length - 1
        if (l == r) return true;
        while (l < r) {
            if (word[l] !== word[r]) return false;
            l++
            r--
        }
        return true
    }

    function backtrack(index, path) {
        if (index === s.length) {
            result.push([...path])
            return
        }

        for (let i = index; i < s.length; i++) {
            let str = s.slice(index, i + 1)
            if (!palindrom(str)) continue;
            path.push(str)
            backtrack(i + 1, path)
            path.pop()
        }


    }
    backtrack(0, [])
    return result
}
console.log(partition("aab"))

function permutations(nums) {
    let result = []
    let used = new Array(nums.length).fill(false)
    function backtrack(index, path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let i = index; i < nums.length; i++) {
            if (used[i]) continue
            if (i > index && nums[i] === nums[i - 1] && !used[i - 1]) continue
            used[i] = true
            path.push(nums[i])
            backtrack(index, path)
            path.pop()
            used[i] = false

        }

    }
    backtrack(0, [])
    return result

}
console.log(permutations([1, 2, 3]))

function letterCasePermutation(s) {
    let result = []

    function backtrack(index, path) {

        if (path.length === s.length) {
            result.push(path)
            return
        }
        let char = s[index]
        if (isNaN(char)) {
            backtrack(index + 1, path + char.toUpperCase())
            backtrack(index + 1, path + char.toLowerCase())
        } else {
            backtrack(index + 1, path + char)
        }

    }
    backtrack(0, "")
    return result

}
console.log(letterCasePermutation("a1b2"))

function letterCombinations(digits) {
    let result = [];
    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"]
    }
    function backtrack(index, path) {
        if (path.length === digits.length) {
            result.push(path)
            return
        }

        let letter = map[digits[index]];
        for (let char of letter) {
            backtrack(index + 1, path + char)
        }
    }
    backtrack(0, "")
    return result
}
console.log(letterCombinations("23"))

function restoreIpAddresses(s) {//////////
    let result = []
    function backtrack(start, path) {
        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join("."))
            }
            return
        }

        for (let len = 0; len <= 3; len++) {
            if (start + len > s.length) break
            let segment = s.slice(start, start + len)
            if (Number(segment) > 255) continue
            path.push(segment)
            backtrack(start + len, path)
            path.pop()
        }

    }
    backtrack(0, [])
    return result

}
console.log(restoreIpAddresses("25525511135"))

function generateParenthesis(n) {
    let result = []
    function backtrack(open, close, path) {
        if (path.length === n * 2) {
            result.push(path)
            return
        }

        if (open < n) {
            backtrack(open + 1, close, path + "(")
        }

        if (close < open) {
            backtrack(open, close + 1, path + ")")
        }
    }
    backtrack(0, 0, "")
    return result
}
console.log(generateParenthesis(3))

function exist(board, word) {
    let rows = board.length;
    let cols = board[0].length;

    function dfs(index, r, c) {

        if (index === word.length) return true

        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            board[r][c] !== word[index]
        ) {
            return false
        }

        let temp = board[r][c]
        board[r][c] = "#"
        let fount = dfs(index + 1, r + 1, c) ||
            dfs(index + 1, r - 1, c) ||
            dfs(index + 1, r, c + 1) ||
            dfs(index + 1, r, c - 1)
        board[r][c] = temp;

        return fount
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(0, r, c)) {
                return true
            }
        }
    }
    return false

}
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))

function floodFill(image, sr, sc, color) {
    let rows = image.length
    let cols = image[0].length
    let startColor = image[sr][sc]

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            image[r][c] !== startColor
        ) {
            return
        }

        image[r][c] = color;
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    dfs(sr, sc)
    return image
}
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))

function numIslands(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            grid[r][c] !== "1"
        ) {
            return
        }

        grid[r][c] = 0

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1") {
                count++
                dfs(r, c)
            }
        }
    }

    return count

}
console.log(numIslands(
    [["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]]
))

function checkInclusion(s1, s2) {//////////

    let freq = new Array(26).fill(0)
    let window = new Array(26).fill(0)

    for (let ch of s1) {
        freq[ch.charCodeAt(0) - 97]++
    }

    let left = 0;


    for (let right = 0; right < s2.length; right++) {
        window[s2[right].charCodeAt(0) - 97]++
        while (right - left + 1 > s1.length) {
            window[s2[left].charCodeAt(0) - 97]--
            left++
        }

        if (arraysEqual(freq, window)) return true
    }

    return false

}
function arraysEqual(a, b) {
    for (let i = 0; i < 26; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
console.log(checkInclusion("ab", "eidbaooo"))

function findAnagrams(s, p) {

    let freq = new Array(26).fill(0)
    let window = new Array(26).fill(0)

    for (let char of p) {
        freq[char.charCodeAt(0) - 97]++
    }

    let windowSize = p.length
    let left = 0
    let result = []

    for (let right = 0; right < s.length; right++) {
        window[s[right].charCodeAt(0) - 97]++
        while (right - left + 1 > windowSize) {
            window[s[left].charCodeAt(0) - 97]--
            left++
        }

        if (arraysEqual(freq, window)) {
            result.push(left)
        }
    }

    return result

}
console.log(findAnagrams("cbaebabacd", "abc"))

function numSubarrayProductLessThanK(nums, k) {
    let count = 0;
    let left = 0;
    let product = 1;

    for (let right = 0; right < nums.length; right++) {
        product *= nums[right]
        while (product > k) {
            product /= nums[left]
            left++
        }

        count += right - left + 1
    }

    return count
}
console.log(numSubarrayProductLessThanK([10, 5, 5, 6], 100))

function characterReplacement(s, k) {/////////
    let map = new Map()
    let left = 0;
    let maxFreq = 0

    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        map.set(char, (map.get(char) || 0) + 1);

        while ((right - left + 1) - maxFreq > k) {
            map.set(s[left], map.get(s[left])--)
            left++
        }

        maxFreq = Math.max(maxFreq, right - left + 1)
    }
    return maxFreq

}
console.log(characterReplacement("ABAAB", 2))

function longestOnes(nums, k) {////
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}
console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2))

function minWindow(s, t) {/////////
    let left = 0
    let map = new Map()
    let minLen = Infinity
    let start = 0


    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }

    let requied = map.size

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (map.has(rightChar)) {
            map.set(rightChar, (map.get(rightChar) || 0) - 1)
            if (map.get(rightChar) === 0) {
                requied--
            }
        }

        while (requied === 0) {
            let leftChar = s[left]
            if (right - left + 1 < minLen) {
                minLen = right - left + 1
                start = left
            }
            if (map.has(leftChar)) {
                map.set(leftChar, (map.get(leftChar) || 0) + 1)
                if (map.get(leftChar) > 0) {
                    requied++
                }
            }
            left++
        }
    }

    return s.substring(start, start + minLen)
}
console.log(minWindow("ADOBECODEBANC", "ABC"))


function sdf(nums, target) {
    let count = 0;
    let sum = 0;
    let map = new Map()
    map.set(0, 1)

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]

        if (map.has(sum - target)) {
            count += map.get(sum - target)
        }

        map.set(sum, (map.get(sum) || 0) + 1)

    }

    return count
}
console.log(sdf([2, 3, 1, 2, 4, 3], 7))

function productExceptSelf(nums) {////
    let result = []
    let prefix = []
    prefix[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        prefix[i] = prefix[i - 1] * nums[i]
    }
    let total = prefix[nums.length - 1]

    for (let i = 0; i < nums.length; i++) {
        let product = total / nums[i];
        result.push(product)
    }
    return result
}
console.log(productExceptSelf([1, 2, 3, 4]))

function findMaxLength(nums) {////
    let map = new Map()
    map.set(0, -1)
    let maxLen = 0
    let sum = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1

        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum))
        }
        map.set(sum, i)
    }
    return maxLen

}
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]))


class Heap {
    constructor(condition) {
        this.heap = []
        this.compare = condition
    }

    getParent(i) { return Math.floor((i - 1) / 2) }
    getLeft(i) { return i * 2 + 1 }
    getRight(i) { return i * 2 + 2}
    swap(i,j){ return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]}

    add(value){
        this.heap.push(value)
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length === 0) return null
        if(this.heap.length === 1) return this.heap.pop()

        let node = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapyfyDown()
        return node
    }

    heapifyUp(){
        let i = this.heap.length - 1
        while(i > 0){
            if(this.compare(this.heap[i], this.heap[this.getParent(i)]) < 0){
                this.swap(i, this.getParent(i))
                i = this.getParent(i)
            }else break
        }
    }
    heapyfyDown(){
        let i = 0;
        let length = this.heap.length

        while(true){
            let left = this.getLeft(i)
            let right = this.getRight(i)
            let small = i;

            if(left < length && this.compare(this.heap[left], this.heap[small]) < 0) small = left
            if(right < length && this.compare(this.heap[right], this.heap[small]) < 0) small = right

            if(small != i){
                this.swap(small, i)
                i = small
            }else break
        }
    }
}

function kthLargest(nums, k){

    let heap = new Heap((a,b) => a[1] - b[1])
    let map = new Map()
    for(let char of nums){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let [num, count] of map){
        heap.add([num,count])

        if(heap.heap.length > k){
            heap.remove()
        }
    }

    let result = []
    for(let char of heap.heap){
        result.push(char[0])
    }

    return result
} 

console.log(kthLargest([1,1,1,2,2,3,3,3,3,4], 3))

class MedianFinder {////////
    constructor() {
        this.left = new Heap((a, b) => b - a)
        this.right = new Heap((a, b) => a - b)
    }
    addNum(num){
        if(this.left.heap.length === 0 || num < this.left.heap[0]){
            this.left.add(num)
        }else{
            this.right.add(num)
        }

        if(this.left.heap.length > this.right.heap.length + 1){
            this.right.add(this.left.remove())
        }
        if(this.right.heap.length > this.left.heap.length){
            this.left.add(this.right.remove())
        }
    }

    findMedian(){
        if(this.left.heap.length > this.right.heap.length){
            return this.left.heap[0]
        }

        return (this.left.heap[0] + this.right.heap[0]) / 2
    }

}

const mf = new MedianFinder();

mf.addNum(1);
mf.addNum(2);
console.log(mf.findMedian());

mf.addNum(3);
console.log(mf.findMedian());

function longestRepeatingBF(s) {
    let best = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let sub = s.slice(i, j);
            let count = 0;
            let idx = 0;

            while ((idx = s.indexOf(sub, idx)) !== -1) {
                count++;
                idx += 1;
            }

            if (count >= 2 && sub.length > best.length) {
                best = sub;
            }
        }
    }
    return best;
}


function mergeSort(array){
    if(array.length <= 1) return array
    let mid = Math.floor(array.length / 2)
    let left = []

    for(let i = 0; i < mid; i++){
        left[i] = array [i]
    }
    let right = []
    for(let i = mid; i < array.length; i++){
        right[i - mid] = array[i]
    }

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    let result = []
    let i = 0, j = 0, k = 0

    while(i < left.length && j < right.length){
        if(left[i] < right [j]){
            result[k++] = left[i++]
        }else{
            result[k++] = right[j++]
        }
    }

    while(i < left.length) result[k++] = left[i++]
    while(j < right.length) result[k++] = right[j++]
    return result
}


let array = [5,3,6,2,4,7,3,4]

console.log(mergeSort(array))

function solidSqure(n){
    for(let i = 1; i <= n; i++){
        let row = ""

        for(let space = 1; space <= n-i; space++){
            row += " "
        }
        for(let j = 1; j <= 2*i -1; j++){
            row += "*"
            
        }
        console.log(row)
    }
}
solidSqure(5)


function compressRepeatedSubstring(s) {
    let best = s;

    for (let len = 1; len <= s.length / 2; len++) {
        let compressed = "";
        let i = 0;

        while (i < s.length) {
            let sub = s.slice(i, i + len);
            let count = 1;

            while (s.slice(i + count * len, i + (count + 1) * len) === sub) {
                count++;
            }

            compressed += count > 1 ? sub + count : sub;
            i += count * len;
        }

        if (compressed.length < best.length) {
            best = compressed;
        }
    }

    return best;
}


function solveNQueens(n) {
    let result = [];

    let cols = new Set();
    let diag1 = new Set(); // row - col
    let diag2 = new Set(); // row + col

    let board = Array.from({ length: n }, () =>
        Array(n).fill('.')
    );

    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r => r.join('')));
            return;
        }

        for (let col = 0; col < n; col++) {
            if (
                cols.has(col) ||
                diag1.has(row - col) ||
                diag2.has(row + col)
            ) continue;

            // Place queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // Backtrack
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return result;
}

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // found
        } 
        else if (arr[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }

    return -1; // not found
}

function nonRepeating(s, k) {
    let left = 0;
    let set = new Set()
    let result = []

    function returnNonRepeating(str) {
        let map = new Map()
        let last = str[str.length - 1]

        for (let char of str) {
            map.set(char, (map.get(char) || 0) + 1)
        }
        console.log(map)
        console.log("seen", set)

        for (let [value, count] of map) {
            if (set.size === 0) {
                set.add(value)
                return value
            }
            else if (!set.has(value) && count == 1) {
                set.add(value)
                return value
            }
            else if (set.has(value) && count === 1 && value == last) {
                return value
            }
        }

    }

    for (let right = 0; right < s.length; right++) {
        while (right - left + 1 === k) {
            let str = s.substring(left, right + 1)
            console.log(str)
            result.push(returnNonRepeating(str))
            console.log("result", result)
            left++
        }

    }
    return result

}
// console.log(nonRepeating("aabcdbec", 4))

class Heap {
    constructor(condition) {
        this.heap = []
        this.comapare = condition
    }
    getParent(i) { return Math.floor((i - 1) / 2) }
    getLeft(i) { return i * 2 + 1 }
    getRight(i) { return i * 2 + 2 }
    swap(i, j) { return [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] }

    add(value) {
        this.heap.push(value)
        this.heapifyUp()
    }

    remove() {
        if (this.heap.length === 1) return this.heap.pop()

        let node = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return node
    }
    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            if (this.comapare(this.heap[i], this.heap[this.getParent(i)]) < 0) {
                this.swap(i, this.getParent(i))
                i = this.getParent(i)
            } else break
        }

    }
    heapifyDown() {
        let i = 0;
        let length = this.heap.length;

        while (true) {
            let left = this.getLeft(i)
            let right = this.getRight(i)
            let small = i

            if (left < length && this.comapare(this.heap[left], this.heap[small]) < 0) small = left
            if (right < length && this.comapare(this.heap[right], this.heap[small]) < 0) small = right

            if (small !== i) {
                this.swap(small, i)
                i = small
            } else break
        }
    }
}

function serverLoadBalaner(servers, tasks) {
    let heap = new Heap((a, b) => a - b)

    for (let i of servers) {
        heap.add(i)
    }

    console.log(heap.heap)
    for (let i of tasks) {
        let server = heap.remove()
        server += i
        heap.add(server)
    }

    return heap.heap

}
// console.log(serverLoadBalaner([3, 3, 5], [4, 2, 1, 3]))


function minSteps(height) {
    height.sort((a, b) => a - b)

    let mid = Math.floor(height.length / 2)
    let top = height[height.length - 1]
    let bottom = height[0]
    console.log(top, bottom)
    let midDiff = 0
    let steps = 0

    if (height.length % 2 === 0) {
        midDiff = height[mid] - height[mid - 1]
        steps = (height[mid - 1] - bottom) + (top - height[mid - 1]) + midDiff

    } else {
        midDiff = 0
        steps = (height[mid] - bottom) + (top - height[mid]) + midDiff
    }

    return steps
}
// console.log(minSteps([1, 5, 4, 7]))


function message(s) {

    let result = ""
    let track = ""
    for (let i = 0; i < s.length; i++) {
        let char = s[i]

        if (isNaN(char)) {
            track += char
        } else {
            let count = Number(char)
            for (let i = 0; i < count; i++) {
                result += track
            }
            track = ""
        }
    }
    return result

}
// console.log(message("a2b3cd2"))


function logest(nums) {
    let left = 0;
    let right = 1
    let count = 1
    let maxLen = 0
    let prev = nums[left]

    while (left < nums.length) {
        if (prev < nums[right]) {
            prev = nums[right]
            count++
            right++
        } else {
            maxLen = Math.max(maxLen, count)
            left++
            count = 0
            prev = left
            right = left + 1
        }

    }

    return maxLen
}
// console.log(logest([2, 2, 2, 2]))


function MinimumWindow(s, t) {
    let left = 0;
    let minLen = Infinity
    let start = 0
    let map = new Map()
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    let requierd = map.size

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]
        if (map.has(rightChar)) {
            map.set(rightChar, map.get(rightChar) - 1)
        }
        if (map.get(rightChar) === 0) {
            requierd--
        }

        while (requierd === 0) {
            if (right - left + 1 < minLen) {
                start = left
                minLen = right - left + 1
            }
            let leftChar = s[left]
            if (map.has(leftChar)) {
                map.set(leftChar, (map.get(leftChar) || 0) + 1)
            }
            if (map.get(leftChar) > 0) {
                requierd++
            }
            left++
        }
    }

    return s.substring(start, start + minLen)

}
// console.log(MinimumWindow
//     ("ADOBECODEBANC", "ABC"))


function negation(nums, k) {
    let heap = new Heap((a, b) => a - b)

    for (let i of nums) {
        heap.add(i)
    }
    for (let i = 0; i < k; i++) {
        let pop = heap.remove()
        heap.add(-(pop))
        console.log("index:", i, heap.heap)
    }
    let result = 0

    for (let i of heap.heap) {
        result += i
    }
    return result
}
// console.log(negation([3, -1, 0, 2], 3))

function firstMissingPosition(nums) {
    nums.sort((a, b) => a - b)
    if (nums[0] != 0) return 1
    for (let i = 0; i < nums.length - 1; i++) {

        if (nums[i] + 1 != nums[i + 1]) {
            return nums[i + 1]
        }
    }
    return nums[nums.length - 1] + 1

}
// console.log(firstMissingPosition([1, 2, 0]))

function longestSUbstring(s) {
    let left = 0;
    let set = new Set()
    let maxLen = 0

    for (let right = 0; right < s.length; right++) {
        let rightChar = s[right]

        while (set.has(rightChar)) {
            let leftChar = s[left]
            maxLen = Math.max(maxLen, right - left)
            set.delete(leftChar)
            left++
        }
        set.add(rightChar)
    }
    return maxLen

}
// console.log(longestSUbstring("bbbbbb"))

function islands(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return false
        }

        if (grid[r][c] === 1) {
            return true
        }

        grid[r][c] = 1;
        let up = dfs(r - 1, c);
        let down = dfs(r + 1, c);
        let left = dfs(r, c - 1);
        let right = dfs(r, c + 1);

        return up && down && left && right;

    }

    for (let r = 0; r < rows; r++) {
        for (c = 0; c < cols; c++) {
            if (grid[r][c] === 0) {
                if (dfs(r, c)) {
                    count++
                }

            }
        }
    }

    return count

}
// console.log(islands([
//     [1, 1, 1, 1],
//     [1, 0, 0, 1],
//     [1, 0, 1, 1],
//     [1, 1, 1, 1]
// ]))


function splitArray(nums) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let prefixSum = 0;
    let parts = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        // Try to make each part equal to prefixSum
        if (totalSum % prefixSum === 0) {
            let target = prefixSum;
            let current = 0;
            let count = 0;

            for (let j = i + 1; j < nums.length; j++) {
                current += nums[j];
                if (current === target) {
                    count++;
                    current = 0;
                } else if (current > target) {
                    break;
                }
            }

            if (current === 0) {
                parts = Math.max(parts, count + 1);
            }
        }
    }

    return parts;
}
// console.log(splitArray([1,2,3,3]))

function eauals(nums){
    let map = new Map()
    map.set(0, -1)
    let sum = 0
    let maxLen = 0

    for(let i = 0; i < nums.length; i++){
        sum += nums[i] === 0 ? -1 : 1;
        if(map.has(sum)){
            maxLen = Math.max(maxLen, i - map.get(sum))
        }
        else{
            map.set(sum, i)
        }

        
    }
    return maxLen

}
// console.log(eauals([0,1,0,1]))

function kthSmallPair(nums, k){
    let heap = new Heap((a,b) => b - a)

    let left = 0
    let right = left + 1
    let array = []


    while(left < nums.length - 1){
        let diff = 0
        if(nums[left] >= nums[right]){
            diff = nums[left] - nums[right]
        }else{
            diff = nums[right] - nums[left]
        }
        array.push(diff)
        right ++

        if(right == nums.length){
            left ++
            right = left + 1
        }
    }
    
    for(let num of array){
        heap.add(num)
        if(heap.heap.length > k){
            heap.remove()
        }
    }

    return heap.remove()

}
// console.log(kthSmallPair([1,3,1], 1))
