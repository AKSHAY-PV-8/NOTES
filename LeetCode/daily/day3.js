function subsets(nums) {
    let result = [];
    function backtrack(start, path) {
        result.push([...path])

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtrack(i + 1, path);
            path.pop()
        }
    }
    backtrack(0, [])
    return result
}
// console.log(subsets([1,2,2]))

function combine(n, k) {

    let result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path]);
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
// console.log(combine(4,2))

function combinationSum(nums, target) {
    nums.sort((a, b) => a - b);

    let result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path])
            return
        }

        if (sum > target) return


        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue

            path.push(nums[i]);
            backtrack(i + 1, path, sum + nums[i])
            path.pop()
        }

    }
    backtrack(0, [], 0)
    return result

}
// console.log(combinationSum([10,1,2,7,6,1,5], 8))

function combinationSum3(k, n) {
    let result = []
    function backtrack(start, path, sum) {
        if (path.length === k) {
            if (sum === n) {
                result.push([...path])
            }
            return
        }
        if (sum > n) return;
        for (let i = start; i <= 9; i++) {
            path.push(i);
            backtrack(i + 1, path, sum + i)
            path.pop()
        }
    }
    backtrack(1, [], 0)
    return result

}
// console.log(combinationSum3(3, 7))

function partition(s) {
    let result = [];

    function palindrom(l, r) {
        if (l === r) return true;

        while (l < r) {
            if (s[l] !== s[r]) {
                return false
            }
            l++;
            r--
        }
        return true
    }

    function backtrack(start, path) {

        if (start === s.length) {
            result.push([...path])
            return
        }

        for (let end = start; end < s.length; end++) {
            if (!palindrom(start, end)) continue;

            let str = s.slice(start, end + 1)
            path.push(str)
            backtrack(end + 1, path)
            path.pop()

        }

    }
    backtrack(0, [])
    return result

}
// console.log(partition("aab"))

function permute(nums) {
    let result = [];
    let used = new Array(nums.length).fill(false)
    function backtrack(start, path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }


        for (let i = start; i < nums.length; i++) {
            if (used[i]) continue
            if (i > start && nums[i] === nums[i - 1] && !used[i - 1]) continue
            used[i] = true
            path.push(nums[i])
            backtrack(start, path)
            path.pop()
            used[i] = false
        }
    }
    backtrack(0, [])
    return result

}
// console.log(permute([1,2,3]))

function letterCasePermutation(s) {
    let result = []

    function backtrack(start, path) {
        if (s.length === path.length) {
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

function letterCombinations(digits) {
    let result = [];

    let map = {
        "2": ["a", "b", "c"],
        "3": ["e", "f", "g"]
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

function restoreIpAddresses(s) {
    let result = []

    function backtrack(start, path) {

        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join("."))
            }
            return
        }


        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break
            let segemnt = s.slice(start, start + len);
            if (Number(segemnt) > 255) continue;

            path.push(segemnt);
            backtrack(start + len, path)
            path.pop()
        }
    }
    backtrack(0, [])
    return result

}
// console.log(restoreIpAddresses("25525511135"))

function exist(board, word) {

    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c, index) {

        if (index === word.length) return true
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            board[r][c] !== word[index]
        ) {
            return false
        }

        let temp = board[r][c]
        board[r][c] = "#"

        let found = dfs(r + 1, c, index + 1) ||
            dfs(r - 1, c, index + 1) ||
            dfs(r, c + 1, index + 1) ||
            dfs(r, c - 1, index + 1)
        board[r][c] = temp

        return found
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (dfs(r, c, 0)) return true
        }
    }
    return false

}
// console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED"))

function floodfill(image, sr, sc, color) {
    let rows = image.length;
    let cols = image[0].length;

    let startingColor = image[sr][sc]

    function dfs(r, c) {
        if (r < 0 || c < 0 || r >= rows || c >= cols ||
            image[r][c] != startingColor
        ) {
            return
        }

        image[r][c] = color
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }
    dfs(sr, sc)
    return image
}
// console.log(floodfill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2))

function numIslands(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let count = 0

    function dfs(r, c) {
        if (r < 0 || c < 0 || c >= cols || r >= rows ||
            grid[r][c] !== "1"
        ) {
            return
        }

        grid[r][c] = "0"
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
// console.log(numIslands([
//     ["1", "1", "0", "0", "0"],
//     ["1", "1", "0", "0", "0"],
//     ["0", "0", "1", "0", "0"],
//     ["0", "0", "0", "1", "1"]
// ]))


//slidingWindow//////////////////////////////////////////


function sdf(nums, target) {
    let minLen = Infinity
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]

        while (sum >= target) {
            if (sum === target) {
                minLen = Math.min(minLen, right - left + 1)
            }
            sum -= nums[left];
            left++
        }

    }

    return minLen

}
// console.log(sdf([1,4,4], 4))

function checkInclusion(s1, s2) {//567
    let left = 0;
    let windowSize = s1.length;
    let window = ""

    function permutation(s) {
        let map = new Map()
        for (let char of s) {
            map.set(char, (map.get(char) || 0) + 1)
        }

        for (let char of s1) {
            map.set(char, (map.get(char) || 0) - 1)
        }
        for (let [key, value] of map) {
            if (value !== 0) {
                return false
            }
        }
        return true
    }

    for (let right = 0; right < s2.length; right++) {
        window += s2[right]
        while (right - left + 1 === windowSize) {
            if (permutation(window)) {
                return true
            }
            window = window.slice(1)
            left++
        }
    }
    return false
}
// console.log(checkInclusion("ab", "eidbaooo"))

function findAnagrams(s, p) {//438

    let left = 0;
    let windowSize = p.length;
    let window = ""
    let result = []

    function anagram(str) {
        let map = new Map()

        for (let char of str) {
            map.set(char, (map.get(char) || 0) + 1);
        }

        for (let char of p) {
            map.set(char, (map.get(char) || 0) - 1)
        }

        for (let [key, value] of map) {
            if (value !== 0) {
                return false
            }
        }

        return true

    }

    for (let right = 0; right < s.length; right++) {
        window += s[right]

        while (window.length === windowSize) {
            if (anagram(window)) {
                result.push(left)
            }
            window = window.slice(1)
            left++
        }
    }
    return result

}
// console.log(findAnagrams("abab", "ab"))

function numSubarrayProductLessThanK(nums, k){//713
    if (k <= 1) return 0;
    let product = 1;
    let left = 0;
    let count = 0;


    for(let right = 0; right < nums.length ; right++){
        product *= nums[right]
        
        while(product >= k){
            product /= nums[left]
            left++
        }
        count += right - left +1
    }

    return count

}
// console.log(numSubarrayProductLessThanK([1,2,3], 0))

function characterReplacement(s,k){//424
    let left = 0;
    let count = {}
    let maxFrq = 0
    let maxLen = 0  

    for(let right = 0; right < s.length; right++){
        let char = s[right]
        count[char] = (count[char] || 0) + 1

        maxFrq = Math.max(maxFrq, count[char])

        while((right - left + 1) - maxFrq > k){
            count[s[left]]--
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen
}
// console.log(characterReplacement("ABAB", 2))

function longestOnes(nums, k){//1004

    let left = 0;
    let count = {}
    let maxFrq = 0;
    let maxLen = 0;

    for(let right = 0; right < nums.length; right++){
        let char = nums[right]

        count[char] = (count[char] || 0) + 1

        maxFrq = Math.max(maxFrq, count[char])

        while((right - left + 1) - maxFrq > k){
            count[nums[left]]--
            left++
        }

        maxLen = Math.max(maxFrq, right - left + 1)
    }

    return maxLen

}
// console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3))

function minWindow(s, t){//76
    let left = 0;
    let map = new Map()
    for(let char of t){
        map.set(char, (map.get(char) || 0) + 1)
    }
    let start = 0;
    let minLen = Infinity
    let requied = map.size

    for(let right = 0; right < s.length ; right++){
        let rightChar = s[right]
        if(map.has(rightChar)){
            map.set(rightChar, (map.get(rightChar) - 1))
            if(map.get(rightChar) === 0){
                requied --
            }
        }

        while(requied === 0){
            if(minLen > right - left +1){
                minLen = right - left + 1
                start = left 
            }
            let leftChar = s[left];
            if(map.has(leftChar)){
                map.set(leftChar, (map.get(leftChar) || 0) + 1)
                if(map.get(leftChar) > 0){
                    requied++
                }
            }
            left++
        }
    }
    return s.substring(start, start + minLen)

}
// console.log(minWindow("ADOBECODEBANC", "ABC"))


/////PrefixSUm///////////////////////////////////////

//974, 525, 1248, 930

function subarraySum(nums, k){//560
    let sum = 0;
    let count = 0;
    let map = new Map();
    map.set(0,1)

    for(let i = 0 ; i < nums.length; i++){
        sum +=  nums[i]
        if(map.has(sum - k)){
            count += map.get(sum - k)
        }
        map.set(sum, (map.get(sum) || 0) + 1)

    }
    return count

}
// console.log(subarraySum([1,1,1], 2))

function subarraysDivByK(nums, k){//974
    let sum = 0;
    let count = 0
    let map = new Map();
    map.set(0, 1)

    for(let i = 0; i < nums.length; i++){
        sum += nums[i]

        let rem = sum % k

        if(map.has(rem)){
            count += map.get(rem)
        }

        map.set(rem, (map.get(rem) || 0) + 1)
    }
    return count
}
// console.log(subarraysDivByK([4,5,0,-2,-3,1], 5))




