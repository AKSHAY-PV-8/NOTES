const { use } = require("react");

function subsets(nums) {

    let result = [];

    function backtrack(start, path) {
        result.push([...path])

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop()
        }

    }

    backtrack(0, [])
    return result

}
// console.log(subsets([1, 2, 3]))

function premute(nums) {

    let result = []
    let used = new Array(nums.length).fill(false);

    function backtracking(path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i])
            backtracking(path);
            path.pop()
            used[i] = false
        }

    }
    backtracking([])
    return result
}
// console.log(premute([1, 2, 3]))

function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };

    let result = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path);
            return
        }

        let letters = map[digits[index]];
        for (let ch of letters) {
            backtrack(index + 1, path + ch)
        }
    }
    backtrack(0, "")
    return result
}

// console.log(letterCombinations("23"))

function subsetsWithDup(nums) {
    nums.sort((a, b) => a - b);
    let result = [];

    function backtrack(index, path) {
        result.push([...path])

        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] === nums[i - 1]) continue;
            path.push(nums[i])
            backtrack(i + 1, path);
            path.pop()
        }
    }
    backtrack(0, [])
    return result
}
// console.log(subsetsWithDup([1,2,2]))

function permuteUnique(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    let used = new Array(nums.length).fill(false)

    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            used[i] = true
            path.push(nums[i]);
            backtrack(path);
            path.pop()
            used[i] = false
        }

    }
    backtrack([])
    return result
}

// console.log(permuteUnique([1,2,3]))

function sub1(nums) {
    let result = [];

    function backtrack(index, path) {
        result.push([...path]);

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(i + 1, path);
            path.pop()
        }

    }
    backtrack(0, [])
    return result

}
// console.log(sub1([1,2,3]))

function perm(nums) {
    nums.sort((a, b) => a - b)
    let used = new Array(nums.length).fill(false)
    let result = [];

    function backrack(path) {
        if (nums.length === path.length) {
            result.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue

            if (i > 0 && nums[i] === nums[i - 1] && !used[i]) continue
            used[i] = true
            path.push(nums[i])
            backrack(path)
            path.pop()
            used[i] = false
        }

    }
    backrack([])
    return result

}
// console.log(perm([1,2,3]))

function combine(n, k) {
    let result = [];

    function backtrack(start, path) {
        if (path.length === k) {
            result.push([...path])
            return
        }

        for (let i = start; i <= n; i++) {
            path.push(i);
            backtrack(i + 1, path);
            path.pop()

        }
    }
    backtrack(1, []);
    return result;

}

// console.log(combine(4,2))


///////////////////////////////

function q1(nums) {//78
    let result = [];

    function backrack(index, path) {
        result.push([...path])

        for (let i = index; i < nums.length; i++) {
            path.push(nums[i]);
            backrack(i + 1, path);
            path.pop()
        }

    }
    backrack(0, [])
    return result
}
// console.log(q1([1,2,3]))

function q2(n, k) {//77
    let result = [];

    function backtrack(index, path) {
        if (path.length === k) {
            result.push([...path]);
        }

        for (let i = index; i <= n; i++) {
            path.push(i)
            backtrack(i + 1, path);
            path.pop()
        }

    }
    backtrack(1, [])
    return result;
}
// console.log(q2(4, 2))

function q3(nums) {//46

    nums.sort((a, b) => a - b)
    let result = [];
    let used = new Array(nums.length).fill(false)

    function backrack(path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] === nums[i - 1] && ![used[i]]) continue;

            used[i] = true
            path.push(nums[i])
            backrack(path);
            path.pop()
            used[i] = false
        }
    }
    backrack([])
    return result
}
// console.log(q3([1,2,3]))

function q4(digits) {
    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"]
    }
    let result = [];

    function backtrack(index, path) {

        if (path.length === digits.length) {
            result.push(path);
            return
        }

        let letters = map[digits[index]]

        for (let ch of letters) {
            backtrack(index + 1, path + ch)
        }
    }
    backtrack(0, "")
    return result

}
// console.log(q4("23"))

function q5(nums, k) {//39

    let result = [];

    function backtrack(start, path, sum) {

        if (sum === k) {
            result.push([...path])
            return
        }

        if (sum > k) return

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i])
            backtrack(i, path, sum + nums[i])
            path.pop()
        }

    }
    backtrack(0, [], 0)
    return result;
}
// console.log(q5([2,3,6,7], 7))

function q6(s) {//131

    let result = [];
    function palindrom(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false
            }
            i++
            j--
        }
        return true
    }
    function backtrack(start, path) {

        if (start === s.length) {
            result.push([...path])
            return
        }

        for (let i = start; i < s.length; i++) {
            if (!palindrom(start, i)) continue;


            path.push(s.slice(start, i + 1))
            backtrack(i + 1, path)
            path.pop()
        }

    }
    backtrack(0, [])
    return result
}
// console.log(q6("aaba"))\

function q7(s) {//93
    let result = [];

    function backtrack(start, path) {
        if (parseInt(path) <= 255) {
            result.push(path)
            return
        }

        for (let i = start; i < s.length; i++) {
            backtrack(i + 1, path + s[i])


        }

    }

    return result

}
// console.log(q7("25525511135"))

function generateParanth(n) {
    let result = [];

    function backrack(path, open, close) {
        if (path.length === n * 2) {
            result.push(path)
            return
        }
        if (open < n) {
            backrack(path + "(", open + 1, close)
        }
        if (close < open) {
            backrack(path + ")", open, close + 1)
        }

    }
    backrack("", 0, 0)
    return result
}
console.log(generateParanth(2))

function binaryString(n) {
    let result = [];

    function backtrack(path) {
        if (path.length === n) {
            result.push(path)
            return
        }

        backtrack(path + "0")
        backtrack(path + "1")
    }

    backtrack("")
    return result

}
console.log(binaryString(2))

function phn(digits) {
    let map = {
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"]
    }
    let result = []

    function backtrack(index, path) {
        if (path.length === digits.length) {
            result.push(path)
            return
        }

        let letters = map[digits[index]];


        for (let ch of letters) {
            backtrack(index + 1, path + ch)
        }

    }
    backtrack(0, "");
    return result

}
console.log(phn("23"))

function ab(n) {
    let result = [];

    function backtrack(path) {
        if (path.length === n) {
            result.push(path);
            return
        }

        backtrack(path + "a");
        backtrack(path + "b")
    }
    backtrack("")
    return result

}
console.log(ab(3))

function sub(nums) {
    let result = [];

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
console.log(sub([1, 2, 3]))

function per(nums) {
    let result = [];
    let used = new Array(nums.length).fill(false)

    function backtrack(path) {
        if (path.length === nums.length) {
            result.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue
            used[i] = true
            path.push(nums[i]);
            backtrack(path);
            path.pop()
            used[i] = false
        }

    }
    backtrack([])
    return result
}
console.log(per([1, 1, 2]))

function subStringOfString(s) {

    let result = [];

    function backtrack(index, path) {
        if (path.length !== 0) {
            result.push(path)
        }
        for (let i = index; i < s.length; i++) {
            backtrack(i + 1, path + s[i])
        }

    }
    backtrack(0, "");
    return result
}
console.log(subStringOfString("aks"))

function restoreIpAddresses(s) {
    const result = [];

    function backtrack(index, path) {
        if(path.length === 4){
            if(index === s.length){
                result.push(path.join("."))
            }
            return
        }

        for(let len = 1; len <= 3; len++){
            if (index + len > s.length) break;

            let part = s.slice(index, index+len)

            if(part.length > 1 && part[0] === '0') continue;
            if(Number(part) > 255) continue;

            path.push(part)
            backtrack(index+len, path)
            path.pop()
        }
    }

    backtrack(0, []);
    return result;
}
console.log(restoreIpAddresses("101023"))

function letterCasePermutation(s){
    let result = [];

    function backtrack(index, path){
        if(path.length === s.length){
            result.push(path)
            return
        }

        for(let i = index; i < s.length; i++){
            let char = s[i]

            if(isNaN(char)){
                backtrack(i + 1, path + char.toLowerCase());
                backtrack(i + 1, path + char.toUpperCase());
            }else{
                backtrack(i + 1, path + char)
            }
        }

    }
    backtrack(0,"")
    return result

}
console.log(letterCasePermutation("a1b2"));

function paldrom(s){
    let result = [];

    function ispalidrom(i,j){
        if(s[i] === s[j]) return true
        while(i < j){
            if(s[i] !== s[j]){
                return false
            }
            i++
            j--
        }
        return true
    }

    function backtrack(start, path){

        if(start === s.length){
            result.push([...path])
            return 
        }
        
        for(let i = start; i < s.length; i++){
            if(ispalidrom(start, i)){
                path.push(s.slice(start, i + 1))
                backtrack(i + 1, path)
                path.pop()
            }
        }
    }
    backtrack(0,[])
    return result

}
console.log(paldrom("aab"))

function parntheses(n){
    let result = [];

    function backtrack( path, open,close){
        if(path.length === n * 2){
            result.push(path)
        }

        if(open < n){
            backtrack(path + "(", open + 1, close)
        }
        if(close < open){
            backtrack(path+ ")", open, close + 1)
        }

    }
    backtrack([],0,0)
    return result

}
console.log(parntheses(2))


//////////////////////////////////////

function binary(n){
    let result = []
    
    function backtrack(index, path){
        if(path.length === n){
            result.push(path)
            return
        }

        for(let i = index; i < n; i++){
            backtrack(i+1,path+0)
            backtrack(i+ 1, path+1)
        }

    }
    backtrack(0, "")
    return result;
}
console.log(binary(3))


function phn(digit){
    let result = [];
    let map = {
        "2": ["a","b","c"],
        "3": ["d","e","f"]
    }
    function backtrack(index, path){
        if(path.length === digit.length){
            result.push(path)
            return
        }

        let letters = map[digit[index]]
        console.log(letters)

        for(let char of letters){
            backtrack(index + 1, path + char)
        }
        
    }
    backtrack(0, "")
    return result

}
console.log(phn("23"))

function perm(n){
    let result = [];

    function backtrack(index,path){
        if(path.length === n){
            result.push(path)
            return
        }

        backtrack(index+1, path + "a");
        backtrack(index+1, path + 'b')
        

    }
    backtrack(0, "")
    return result

}
console.log(perm(3))

function sub(nums){
    let result = [];
    function backtrack(index,path){
        result.push([...path]);

        for(let i = index; i < nums.length; i++){
            path.push(nums[i])
            backtrack(i + 1, path)
            path.pop()
        }

    }
    backtrack(0, [])
    return result
}
console.log(sub([1,2,3]))

