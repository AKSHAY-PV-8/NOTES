function subsets(nums) {
    let result = []
    function backtrack(index, path) {
        result.push([...path])
        for (let i = index; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(i + 1, path)
            path.pop()
        }
    }
    backtrack(0, [])
    return result

}
console.log(subsets([1, 2, 3]))

function combinations(n, k) {
    let result = []
    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path])
            return
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
console.log(combinations(4, 2))

function combinationalSum(nums, target) {
    nums.sort((a, b) => a - b)
    let result = []
    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path])
            return
        }

        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue
            path.push(nums[i])
            backtrack(i + 1, path, sum + nums[i])
            path.pop()
        }
    }
    backtrack(0, [], 0)
    return result

}
console.log(combinationalSum([10, 1, 2, 7, 6, 1, 5], 8))

function characterReplacement(s, k) {/////////
    let left = 0;
    let map = new Map()
    let maxfreq = 0
    let result = 0
    for (let right = 0; right < s.length; right++) {
        let char = s[right]
        map.set(char, (map.get(char) || 0) + 1)
        maxfreq = Math.max(maxfreq, map.get(char))

        while ((right - left + 1) - maxfreq > k) {
            map.set(s[left], map.get(s[left] - 1))
            left++
        }

        result = Math.max(result, right - left + 1)
    }

    return result

}
console.log(characterReplacement("ABAABA", 2))

function longest(s) {
    let longest = ""
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j < s.length; j++){
            let k = 0
            while(
                i + k < s.length &&
                j + k < s.length &&
                s[i+k] == s[j+k]
            ){
                k++
            }
            if(k > longest.length){
                longest = s.slice(i, i + k)
            }
        }
    }
    return longest

}
console.log(longest("ababcdfcdf"))

function long(strs){

    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length-1)
        }
    }
    return prefix

}

console.log(long(["flower", "flow", "flight"]))

function l1(s){
    let l = ""
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1 ; j< s.length; j ++){
            let k = 0

            while(i + k < s.length &&
                j+k < s.length &&
                s[i+k] === s[j+k]
            ){
                k++
            }
            if(k > l.length){
                l = s.slice(i, i + k)
            }
        }
    }
    return l
}
function l2(strs){

    let prefix = strs[0]
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix

}

function flattening(array){
    let result = []

    for(let item of array){
        if(Array.isArray(item)){
            result.push(...flattening(item))
        }else{
            result.push(item)
        }
    }
    return result
}

function decodeString(s) {
    let stack = [];
    let currentNum = 0;
    let currentStr = "";

    for (let ch of s) {
        if (!isNaN(ch)) {
            currentNum = currentNum * 10 + Number(ch);
        } 
        else if (ch === "[") {
            stack.push(currentStr);
            stack.push(currentNum);

            currentStr = "";
            currentNum = 0;
        } 
        else if (ch === "]") {
            let num = stack.pop();
            let prevStr = stack.pop();

            currentStr = prevStr + currentStr.repeat(num);
        } 
        else {
            currentStr += ch;
        }
    }

    return currentStr;
}

console.log(decodeString("3[a2[c]]")); // "accaccacc"