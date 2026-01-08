function decode(s) {
    let stack = []
    let currNum = 0
    let currStr = ""

    for (let ch of s) {
        if (ch >= "0" && ch <= "9") {
            currNum = currNum * 10 + Number(ch)
        }
        else if (ch === "[") {
            stack.push([currStr, currNum])
            currStr = ""
            currNum = 0
        } else if (ch === "]") {
            let [prevChar, num] = stack.pop()
            currStr = prevChar + currStr.repeat(num)
        }
        else {
            currStr += ch
        }
    }
    return currStr

}


// console.log(decode("3[a2[c]]"))

function validParanthesis(s) {
    let map = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    let stack = []

    for (let ch of s) {
        if (ch == "(" || ch == "{" || ch == "[") {
            stack.push(ch)
        }
        else {
            if (stack.length == 0) return false
            let top = stack.pop()
            if (top != map[ch]) return false
        }
    }

    return true

}

console.log(validParanthesis("(){}"))


function removeDuplicates(s) {
    let stack = [s[0]]

    for (let i = 1; i < s.length; i++) {
        let top = stack[stack.length - 1]
        if (top !== s[i]) {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    return stack.join("")

}

console.log(removeDuplicates("abbaca"))

function minRemoveToMakeValid(s) {

    let map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    let stack = []
    let string = []

    for(let ch of s){
        if(ch === "("){
            stack.push(ch)
            string.push(ch)
        }else if(ch === ")"){
            let top = stack.pop()
            if(top === map[ch]){
                string.push(ch)
            }
        }else{
            string.push(ch)
        }
    }
    return string.join("")

}
console.log(minRemoveToMakeValid("lee(t(c)o)de)"))