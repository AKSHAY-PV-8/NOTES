function subsets(nums) {//78
    let result = [];
    function backtrack(index, path) {
        result.push([...path]);

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(0, [])
    return result
}
// console.log(subsets([1,2,2]))

function subSetII(nums) {//90
    let result = [];

    function backtract(index, path) {

        result.push([...path])
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtract(i + 1, path)
            path.pop()
        }

    }
    backtract(0, [])
    return result

}
// console.log(subSetII([1,2,2]))

function combinations(n, k) {//77
    let result = [];

    function backtrack(index, path) {
        if (path.length === k) {
            result.push([...path])
            return
        }

        for (let i = index; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path)
            path.pop()
        }

    }

    backtrack(1, [])
    return result
}
// console.log(combinations(4, 2))

function combinationSum(nums, target) {//39
    let result = [];

    function backtrack(index, path, sum) {
        if (sum === target) {
            result.push([...path])
            return
        }

        if (sum > target) return;

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(i, path, sum + nums[i]);
            path.pop()
        }

    }
    backtrack(0, [], 0)
    return result
}
// console.log(combinationSum([2,3,6,7], 7))

function combinationSumII(nums, target) {//40
    nums.sort((a, b) => a - b)
    let result = [];

    function backtrack(index, path, sum) {
        if (sum === target) {
            result.push([...path])
            return
        }

        if (sum > target) return;

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtrack(i + 1, path, sum + nums[i]);
            path.pop()
        }

    }
    backtrack(0, [], 0)
    return result
}
// console.log(combinationSumII([10,1,2,7,6,1,5], 8))

function combinationSum3(k, n) {//216
    let result = [];
    function backtrack(start, path, sum) {
        if (path.length === k) {
            if (sum === n) {
                result.push([...path])
            }
            return
        }
        if (sum > n) return;

        for (let i = start; i <= 9; i++) {
            path.push(i)
            backtrack(i + 1, path, sum + i)
            path.pop()
        }

    }
    backtrack(1, [], 0)
    return result
}
// console.log(combinationSum3(3, 9))

function partition(s) {//131
    let result = [];

    function paldrom(l, r) {
        if (l == r) return true;

        while (l < r) {
            if (s[l] !== s[r]) return false
            l++;
            r--
        }
        return true
    }

    function backrack(start, path) {
        if (start === s.length) {
            result.push([...path])
            return
        }

        for (let end = start; end < s.length; end++) {
            if (!paldrom(start, end)) continue;
            path.push(s.slice(start, end + 1))
            backrack(end + 1, path);
            path.pop()
        }
    }
    backrack(0, [])
    return result
}
// console.log(partition("aab"))

function permutation(nums) {//46
    let result = []
    let used = new Array(nums.length).fill(false)
    function backtrack(start, path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let i = start; i < nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            used[i] = true
            path.push(nums[i]);
            backtrack(start, path);
            path.pop()
            used[i] = false
        }
    }
    backtrack(0, [])
    return result

}
// console.log(permutation([1,1,2]))

function letterCasePermutation(s) {//784
    let result = [];

    function backtrack(start, path) {
        if (start === s.length) {
            result.push(path)
            return
        }

        let char = s[start]
        if (isNaN(char)) {
            backtrack(start + 1, path + char.toUpperCase())
            backtrack(start + 1, path + char.toLowerCase())
        } else {
            backtrack(start + 1, path + char)
        }
    }
    backtrack(0, "")
    return result

}
// console.log(letterCasePermutation("a1b2"))

function letterCombinations(digits) {//17
    let result = []
    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"]
    }
    function backtrack(index, path) {
        if (path.length === digits.length) {
            result.push(path)
            return
        }

        let letters = map[digits[index]]

        for (let char of letters) {
            backtrack(index + 1, path + char)
        }

    }
    backtrack(0, "")
    return result

}
// console.log(letterCombinations("23"))

function restoreIpAddresses(s) {//93
    let result = []
    function backtrack(start, path) {
        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join("."))
            }
            return
        }

        for (let len = 1; len <= 3; len++) {

            if (start + len > s.length) break;

            let segment = s.slice(start, start + len)
            if (Number(segment) > 255) continue;

            path.push(segment)
            backtrack(start + len, path)
            path.pop()
        }
    }
    backtrack(0, [])
    return result

}
// console.log(restoreIpAddresses("25525511135"))



/////////////////////////////////////////////

function exist(board, word) {//79
    let row = board.length
    let col = board[0].length;

    function dfs(r, c, ind) {
        if (ind === word.length) return true;

        if (r < 0 || c < 0 || r >= row || c >= col ||
            board[r][c] !== word[ind]) {
            return false
        }

        let temp = board[r][c]
        board[r][c] = "#"

        let fount = dfs(r + 1, c, ind + 1) ||
            dfs(r - 1, c, ind + 1) ||
            dfs(r, c + 1, ind + 1) ||
            dfs(r, c - 1, ind + 1)
        board[r][c] = temp;
        return fount
    }

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (dfs(r, c, 0)) return true
        }
    }
    return false
}
console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABFCE"))

function floodFill(image, sr, sc, color) {//733
    let row = image.length;
    let col = image[0].length;

    let statColor = image[sr][sc]

    if (statColor === color) return image;

    function dfs(r, c) {
        if (r < 0 || c < 0 || c >= col || r >= row) {
            return false
        }

        if (image[r][c] !== statColor) return

        image[r][c] = color;

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1)
    }
    dfs(sr, sc)
    return image

}
console.log(floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 2, 2))

function numIslands(grid) {//200
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0

    function dfs(r, c) {

        if (r < 0 || c < 0 || c >= cols || r >= rows ||
            grid[r][c] === "0"
        ) {
            return false;
        }

        grid[r][c] = "0"

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
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
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]))
//130, 417, 212,37,51


function solve(board) {//130
    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c) {
        if (r < 0 || c < 0 || c >= cols || r >= rows ||
            board[r][c] !== "O"
        ) {
            return
        }

        board[r][c] = "#"
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === "O") {
                dfs(r, c)
            }
        }
    }

    return board

}
console.log(solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"]]))



///////////////////////////////////////


function shortestPath(grid, k) {
    let row = grid.length
    let cols = grid[0].length

    let visited = Array.from({ length: row }, () => Array.from({ length: cols }, () => new Map()))

    let queue = [[0,0,k,0]]
    visited[0][0].set(k)

    let dir = [[1,0], [-1,0], [0,1], [0,-1]]

    while(queue.length > 0){
        let [r,c,k,steps] = queue.shift()

        if(r == row -1 && c == cols - 1){
            return steps
        }

        for(let [dr,dc] of dir){
            let nr = r + dr
            let nc = c + dc

            if(nr < 0 || nc < 0 || nr >= row || nc >= cols)continue

            let nk = k - grid[nr][nc]

            if(nk >= 0 && !visited[nr][nc].has(nk)){
                visited[nr][nc].set(nk)
                queue.push([nr,nc,nk,steps + 1])
            }
        }
    }
    return - 1

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
)








