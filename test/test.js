function reverse(string){

    if(typeof string !== "string" || string === null) return undefined
    if(string.length === 0) return ""

    let stringAfterTrim = string.trim()
    let str= []
    for(let i of stringAfterTrim){
        str.push(i)
    }

    let left = 0
    let right = str.length-1

    while(left < right){
        [str[left], str[right]] = [str[right], str[left]]
        left++;
        right--
    }

    let revers = ''
    
    for(let i of str){
        revers += i
    }

    return revers

}
console.log(reverse("hello"))