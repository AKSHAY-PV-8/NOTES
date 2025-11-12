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
console.log(reverse("JavaScript"))