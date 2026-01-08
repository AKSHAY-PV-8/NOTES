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
console.log(mincostToHireWorkers([10, 20, 5], [70, 50, 30], 2))



///////////////////////////////////////////////////////////////////////

function islands(grid) { //closed islands

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

function shortestPath(grid, K) {
    let rows = grid.length;
    let cols = grid[0].length;

    // directions: up, down, left, right
    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // visited[r][c][k] = true
    let visited = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => new Set())
    );

    // queue: [row, col, remainingK, steps]
    let queue = [[0, 0, K, 0]];
    visited[0][0].add(K);

    while (queue.length > 0) {
        let [r, c, k, steps] = queue.shift();

        // reached destination
        if (r === rows - 1 && c === cols - 1) {
            return steps;
        }

        for (let [dr, dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;

            if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

            let nk = k - grid[nr][nc]; // reduce K if obstacle

            if (nk >= 0 && !visited[nr][nc].has(nk)) {
                visited[nr][nc].add(nk);
                queue.push([nr, nc, nk, steps + 1]);
            }
        }
    }

    return -1;
}

console.log(
    shortestPath(
        [
            [0, 0, 0],
            [1, 1, 0],
            [0, 0, 1],
            [0, 1, 1],
            [0, 0, 0]
        ],
        2
    )
);

function shortestPathBase(grid) {
    let rows = grid.length;
    let cols = grid[0].length;

    // If start or end is blocked
    if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) {
        return -1;
    }

    let visited = Array.from({ length: rows }, () =>
        Array(cols).fill(false)
    );

    let queue = [[0, 0, 0]]; // row, col, steps
    visited[0][0] = true;

    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    while (queue.length > 0) {
        let [r, c, steps] = queue.shift();

        // reached destination
        if (r === rows - 1 && c === cols - 1) {
            return steps;
        }

        for (let [dr, dc] of dirs) {
            let nr = r + dr;
            let nc = c + dc;

            if (
                nr >= 0 && nc >= 0 &&
                nr < rows && nc < cols &&
                grid[nr][nc] === 0 &&
                !visited[nr][nc]
            ) {
                visited[nr][nc] = true;
                queue.push([nr, nc, steps + 1]);
            }
        }
    }

    return -1;
}

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

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(dfs(r,c)){
                count++
            }
        }
    }

}
console.log(closdedIslands([[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]))
