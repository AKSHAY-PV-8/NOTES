const { useLayoutEffect } = require("react")

function belt(array, t, n) {
    function reverse(l, r, arr) {
        while (l < r) {
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++
            r--
        }
        return arr
    }

    let k = t % n
    if (k < 0) {
        k += n
    }

    console.log(k)

    reverse(0, array.length - 1, array)
    reverse(0, k - 1, array)
    return reverse(k, array.length - 1, array)

}
// console.log(belt([3, 8, 1, 9, 4], -2, 5))

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

function eauals(nums) {
    let map = new Map()
    map.set(0, -1)
    let sum = 0
    let maxLen = 0

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum))
        }
        else {
            map.set(sum, i)
        }


    }
    return maxLen

}
// console.log(eauals([0,1,0,1]))

function kthSmallPair(nums, k) {
    let heap = new Heap((a, b) => b - a)

    let left = 0
    let right = left + 1
    let array = []


    while (left < nums.length - 1) {
        let diff = 0
        if (nums[left] >= nums[right]) {
            diff = nums[left] - nums[right]
        } else {
            diff = nums[right] - nums[left]
        }
        array.push(diff)
        right++

        if (right == nums.length) {
            left++
            right = left + 1
        }
    }

    for (let num of array) {
        heap.add(num)
        if (heap.heap.length > k) {
            heap.remove()
        }
    }

    return heap.remove()

}
// console.log(kthSmallPair([1,3,1], 1))




// function ShortestPath(grid, k){
//     let n = grid.length;
//     let m = grid[0].length;


//     let visited = Array.from({length: n}, () => Array(k+1).fill(false))
//     let queue = [];

//     queue.push([0,0,k,0])

//     visited[0][0][k] = true
//     let dir = [[1,0], [-1,0], [0,1],[0,-1]]

//     if(let )
//     }

// console.log(ShortestPath([
//  [0,0,0],
//  [1,1,0],
//  [0,0,0],
//  [0,1,1],
//  [0,0,0]
// ], 1))


function bfs(grid, k) {
    let n = grid.length;
    let m = grid[0].length;

    let queue = []
    let visited = Array.from({ length: n }, () =>
        Array.from({ length: m }, () => Array(k + 1).fill(false))
    );


    queue.push([0, 0, k, 0])
    visited[0][0][k] = true;


    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while (queue.length > 0) {
        console.log(visited)
        let [r, c, remK, steps] = queue.shift()


        if (r === n - 1 && c === m - 1) {
            return steps
        }
        for (let [dr, dc] of dir) {
            let nr = r + dr
            let nc = c + dc

            if (nr < 0 || nc < 0 || nr >= n || nc >= m) continue;
            let netK = remK - grid[nr][nc]
            if (netK >= 0 && !visited[nr][nc][netK]) {
                visited[nr][nc][netK] = true;
                queue.push([nr, nc, netK, steps + 1])

            }
        }
    }

}
// console.log(bfs([
//     [0, 0, 0],
//     [1, 1, 0],
//     [0, 0, 0],
//     [0, 1, 1],
//     [0, 0, 0]
// ], 1))


function reorgininze(s) {
    let heap = new Heap((a, b) => b[1] - a[1])

    let freq = new Map()

    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1)
    }

    for (let [ch, count] of freq) {
        heap.add([ch, count])
    }

    let result = ""
    let prev = null

    while (heap.heap.length > 0) {
        let [ch, count] = heap.remove()
        result += ch
        count--

        if (prev !== null) {
            heap.add(prev)
            prev = null
        }

        if (count > 0) {
            prev = [ch, count]
        }
    }

    return result.length === s.length ? result : ""
}

console.log(reorgininze("aabb"))


function decode(s) {
    let stack = []
    let currentNum = 0;
    let currentStr = "";

    for (let ch of s) {
        if (!isNaN(ch)) {
            currentNum = currentNum * 10 + Number(ch)
        }
        else if (ch === "[") {
            stack.push(currentStr)
            stack.push(currentNum)
            currentStr = ""
            currentNum = 0;
        }
        else if (ch === "]") {
            let num = stack.pop()
            let preStr = stack.pop()

            currentStr = preStr + currentStr.repeat(Number(num))
        } else {
            currentStr += ch
        }
    }

    return currentStr
}

console.log(decode("3[a]2[bc]"))


function reorg(s) {
    let freq = new Map()
    for (let ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1)
    }

    let heap = new Heap((a, b) => b[1] - a[1])

    for (let [ch, count] of freq) {
        heap.add([ch, count])
    }
    let result = ""
    let prev = null

    while (heap.heap.length > 0) {
        let [ch, count] = heap.remove()
        result += ch
        count--
        if (prev != null) {
            heap.add(prev)
            prev = null
        }

        if (count > 0) {
            prev = [ch, count]
        }
    }

    return result.length === s.length ? result : ""

}
console.log(reorg("aabb"))


function leastInterval(tasks, n) {
    let frew = new Map()
    for (let task of tasks) {
        freq.set(task, (freq.get(task) || 0) + 1);
    }

    let heap = new Heap((a, b) => b - a);

    for (let count of freq.values()) {
        heap.add(count);
    }

    let time = 0;

    while (heap.heap.length > 0) {
        let temp = [];
        let cycle = n + 1;

        while (cycle > 0 && heap.heap.length > 0) {
            let count = heap.remove()
            if (count - 1 > 0) {
                temp.push(count - 1)
            }
            time++;
            cycle--;
        }

        for (let t of temp) {
            heap.add(t)
        }

        if (heap.heap.length > 0) {
            time += cycle
        }
    }
}

function distantBarcodes(nums) {

    let freq = new Map()
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    let heap = new Heap((a, b) => b[1] - a[1])

    for (let [num, count] of freq) {
        heap.add([num, count])
    }
    let result = []
    let prev = null


    while (heap.heap.length > 0) {

        let [num, count] = heap.remove()
        result.push(num)
        count--

        if (prev != null) {
            heap.add(prev)
            prev = null
        }

        if (count > 0) {
            prev = [num, count]
        }
    }
    return result
}

console.log(distantBarcodes([1, 1, 1, 1, 2, 2, 3, 3]
))

function re(s) {
    let heap = new Heap((a, b) => b[1] - a[1])

    let freq = new Map()
    for (let char of s) {
        freq.set(char, (freq.get(char) || 0) + 1)
    }

    for (let [char, count] of freq) {
        heap.add([char, count])
    }

    let result = ""
    let prev = null

    while (heap.heap.length > 0) {
        let [char, count] = heap.remove()
        result += char
        count--

        if (prev !== null) {
            heap.add(prev)
            prev = null
        }

        if (count > 0) {
            prev = [char, count]
        }
    }

    return result

}
console.log(re("aabbaabb"))


function de(s) {
    let stack = []
    let curNum = 0
    let curStr = ""

    for (let cha of s) {
        if (!isNaN(cha)) {
            curNum = curNum * 10 + Number(cha)
        } else if (cha == "[") {
            stack.push(curStr)
            stack.push(curNum)
            curNum = 0
            curStr = ""
        } else if (cha == "]") {
            let num = stack.pop()
            let prevStr = stack.pop()
            curStr = prevStr + curStr.repeat(Number(num))
        } else {
            curStr += cha
        }
    }
    return curStr

}
console.log(de("3[a]2[bc]"))

function shortestPath(grid, k) {
    let rows = grid.length
    let cols = grid[0].length

    let visited = Array.from({ length: rows }, () => Array.from({ length: cols }, () => new Set()))

    let queue = [[0, 0, k, 0]]
    visited[0][0].add(k)

    let dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while (queue.length > 0) {
        let [r, c, k, steps] = queue.shift()

        if (r == rows - 1 && c == cols - 1) {
            return steps
        }
        for (let [dr, dc] of dir) {
            let nr = r + dr
            let nc = c + dc

            if (nc < 0 || nr < 0 || nr >= rows || nc >= cols) continue

            let nk = k - grid[nr][nc]
            if (nk >= 0 && !visited[nr][nc].has(nk)) {
                visited[nr][nc].add(nk)
                queue.push([nr, nc, nk, steps + 1])
            }
        }
    }

}

console.log(shortestPath([
    [0, 0, 0],
    [1, 1, 0],
    [0, 0, 1],
    [0, 1, 1],
    [0, 0, 0]
],
    1))

function closdedIslands(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let count = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols) {
            return false
        }

        if (grid[r][c] === 1) {
            return true
        }

        grid[r][c] = 1
        let down = dfs(r + 1, c)
        let up = dfs(r - 1, c)
        let right = dfs(r, c + 1)
        let left = dfs(r, c - 1)

        return down && up && right && left
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] == 0) {
                if (dfs(r, c)) {
                    count++
                }
            }
        }
    }
    return count

}
console.log(closdedIslands([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]))

function exist(grid, word) {
    let rows = grid.length
    let cols = grid[0].length

    function dfs(r, c, indx) {

        if (indx === word.length) {
            return true
        }

        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            grid[r][c] !== word[indx]
        ) {
            return
        }

        let temp = grid[r][c]
        grid[r][c] = "#"
        let fount = dfs(r - 1, c, indx + 1) ||
            dfs(r + 1, c, indx + 1) ||
            dfs(r, c + 1, indx + 1) ||
            dfs(r, c - 1, indx + 1)
        grid[r][c] = temp
        return fount
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) {
                return true
            }
        }
    }
    return false

}

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABFCE"))


function islands(grid) {
    let rows = grid.length
    let cols = grid[0].length
    let count = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            grid[r][c] === 0
        ) {
            return
        }

        grid[r][c] = 0
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for(let r = 0; r < rows; r++){
        if(grid[r][0] == 1)dfs(r,0)
        if(grid[r][cols - 1] == 1) dfs(r,cols-1)
    }

    for(let c = 0; c < cols; c++){
        if(grid[0][c] === 1)dfs(0,c)
        if(grid[rows-1][c] === 1)dfs(rows-1,c)
    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] ===  1){
                count ++
            }
        }
    }
    return count
}
console.log(islands(
    [
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 0, 0, 0]
    ]
))
function cr(s,k){
    let left = 0
    let maxFrq = 0;
    let result = 0
    let map = new Map()

    for(let right = 0; right < s.length; right++){
        let char = s[right]
        map.set(char, (map.get(char) || 0) + 1)
        maxFrq = Math.max(maxFrq, map.get(char))

        while((right - left + 1) - maxFrq > k ){
            map.set(s[left], map.get(s[left]) - 1)
            left ++
        }

        result = Math.max(result, right -left + 1)
    }
    return result


}

console.log(cr("ABAABB", 2))

function fa(s1, s2){
    let freq = new Array(26).fill(0)
    let window = new Array(26).fill(0)
    let windowSize = s2.length

    for(let char of s2){
        freq[char.charCodeAt(0) - 97] ++
    }
    let left = 0

    for(let right = 0; right < s1.length; right ++){
        window[s[right].charCodeAt(0) - 97]++
        while(right - left +1 > windowSize){
            window[s[left].charCodeAt(0) - 97]--
            left++
        }


    }

}

// console.log(fa("cbaebabacd", "abc"))

function lcs(s){
    let lomg = ""

    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j < s.length; j ++){
            let k = 0
            while(
                i+k < s.length && 
                j+k < s.length &&
                s[i+k] == s[j+k]
            ){
                k ++
            }

            if(k > lomg.length){
                lomg = s.slice(i, i + k)
            }
        }
    }
    return lomg

}

console.log(lcs("abcabcxabcdabcd"))
