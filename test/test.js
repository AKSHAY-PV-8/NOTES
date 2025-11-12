function reverse(string){
    let array = [...string]
    
    let left = 0
    let right = array.length - 1;

    while(left < right){
       [array[left], array[right]] = [array[right], array[left]]
       left ++
       right --
    }

    let result = ''

    for(let char of array){
        result += char
    }

    return result

}
// console.log(reverse("JavaScript"))

function palindrome(str){

    const isAlphabet = (string) => {
          
        const code = string.charCodeAt(0)

        return(
            (code >= 97 && code <= 122) ||
            (code >= 65 && code <= 90)
        )
    }

    let string = ''

    for (let char of str){
        if(isAlphabet(char)){
            string += char
        }
    }

    let left = 0, right = string.length - 1;

    while(left < right){
        if(string[left] != string[right]) return false
        left ++
        right --
    }

    return true
}

const text = "mom"

console.log(palindrome(text))
