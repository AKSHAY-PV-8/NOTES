const string = (str) => {
    let left = 0;
    let right = str.length - 1;
    str = [...str];
    while (left < right) {
        [str[left], str[right]] = [str[right], str[left]]
        left++;
        right--;

    }
    let reuslt = "";
    for (let char of str) {
        reuslt += char
    }
    return reuslt
}
console.log(string("akshay"));

// const palindrom = (str) => {

//     if(typeof str !== "string") return false

//     const Charcters = (string) => {
//         const code = string.charCodeAt(0)
//         return(
//                 (code >= 97) && 

//         )
//     }
//     const string = "z"
//     console.log(string.charCodeAt(0))



// }

// console.log(palindrom())
const longest = (arr) => {
    const dp = Array(arr.length).fill(1)
    const prev = Array(arr.length).fill(-1)

    let maxIndex = 0

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && dp[i] < dp[j] + 1) {
                dp[i] = dp[j] + 1
                prev[i] = j
            }
        }

        if (dp[i] > dp[maxIndex]) {
            maxIndex = i
        }
    }

    // Reconstruct LIS
    let result = []
    while (maxIndex !== -1) {
        result.push(arr[maxIndex])
        maxIndex = prev[maxIndex]
    }

    return result.reverse()
}

console.log(longest([10, 15,1, 20, 2, 25, 4, 8, 9, 10]))