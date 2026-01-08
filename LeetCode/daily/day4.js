function subsets(nums) {
    let result = [];

    function backtrack(star, path) {

        result.push([...path]);
        for (let i = star; i < nums.length; i++) {
            if (i > star && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtrack(i + 1, path);
            path.pop()
        }
    }
    backtrack(0, [])
    return result

}
// console.log(subsets([1,2,2]))

function comninations(n, k) {
    let result = []

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path])
        }

        for (let i = start; i <= n; i++) {
            path.push(i)
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(1, [])
    return result
}
// console.log(comninations(4, 2))

function combinationSum(nums, target) {
    let result = []
    nums.sort((a,b) => a - b)

    function backtrack(start, path, sum) {
        
        if (sum === target) {
            result.push([...path])
            return
        }

        if (sum > target) return

        for (let i = start; i < nums.length; i++) {
            if(i > start && nums[i] === nums[i-1]) continue
            path.push(nums[i])
            backtrack(i + 1, path, sum + nums[i])
            path.pop()
        }
    }
    backtrack(0, [], 0)
    return result

}
// console.log(combinationSum([10,1,2,7,6,1,5], 8))

function palindrom(s){
    let result = [];

    function plaindrom(l, r){
        if(l == r) return true

        while(l < r){
            if(s[l] !== s[r]){
                return false
            }
            l++
            r--
        }
        return true
    }

    function backtrack(start, path){
        if(start === s.length){
            result.push([...path])
            return
        }

        for(let i = start; i < s.length; i++){
            let str = s.slice(start, i + 1);
            if(!plaindrom(start, i )) continue

            path.push(str)
            backtrack(i + 1, path)
            path.pop()
        }

    }
    backtrack(0,[])
    return result

}
// console.log(palindrom("aab"))

function permutation(nums){
    let result = [];
    let used = new Array(nums.length).fill(false)

    function backtrack(index,path){
        if(path.length === nums.length){
            result.push([...path]);
            return
        }

        for(let i = index; i < nums.length; i++){
            if(used[i]) continue;
            if(i > 0 && nums[i] === nums[i - 1] && !used[i - 1])continue
            used[i] = true
            path.push(nums[i])
            backtrack(index, path)
            path.pop()
            used[i] = false
        }

    }
    backtrack(0,[])
    return result

}
// console.log(permutation([1,2,3]))

function letterCasePermutation(s){
    let result = [];

    function backtrack(start, path){

        if(start === s.length){
            result.push(path)
            return
        }

        let char = s[start]
        if(isNaN(char)){
            backtrack(start+1, path+ char.toUpperCase())
            backtrack(start+1, path+ char.toLowerCase())
        }else{
            backtrack(start+1, path+ char)
        }

    }
    backtrack(0, "")
    return result;


}
// console.log(letterCasePermutation("a1b2"))

function letterCombinations(digits){

    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"]
    }

    let result = []

    function backtrack(index, path){
        if(path.length === digits.length){
            result.push(path)
            return
        }

        let letter = map[digits[index]]

        for(let char of letter){
            backtrack(index + 1, path + char)
        }

    }
    backtrack(0, "")
    return result

}
// console.log(letterCombinations("23"))

function restoreIpAddresses(s){
    let result = []

    function backtrack(start, path){
        if(path.length === 4){
            if(start === s.length){
                result.push(path.join("."))
            }
            return
        }

        for(let len = 0; len <= 3; len++){
            if(start + len > s.length) break
            let segment = s.slice(start, start + len)

            if(Number(segment) > 255) return;
            
            path.push(segment)
            backtrack(start + len, path)
            path.pop()
        }
        

    }
    backtrack(0, [])
    return result

}
// console.log(restoreIpAddresses("25525511135"))

//816, 1593, 784

function exist(board, word){
    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c, index){
        if(index === word.length) return true;

        if( r < 0 || c < 0 || r >= rows || c >= cols ||
            board[r][c] !== word[index]
        ){
            return false
        }

        let temp = board[r][c]
        board[r][c] = "#";

        let fount = dfs(r+1, c, index +1)||
                    dfs(r-1, c, index +1)||
                    dfs(r, c+1, index +1)||
                    dfs(r, c-1, index +1)
        board[r][c] = temp

        return fount

    }

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(dfs(r,c,0)) return true
        }
    }

    return false

}
// console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],  "ABCB"))

function floodFill(image, sr, sc, color){
    let rows = image.length;
    let cols = image[0].length
    let startColor = image[sr][sc]

    function dfs(r,c){
        if(r < 0 || c < 0 || c >= cols || r >= rows ||
            startColor !== image[r][c]
        ){
            return
        }

        image[r][c] = color

        dfs(r+1, c)
        dfs(r-1, c)
        dfs(r, c+1)
        dfs(r, c-1 )

    }

    dfs(sr, sc)
    return image
}
// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
