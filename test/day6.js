//STRING REVERSE
const reverse = (string) => {

    if (typeof string !== "string") return "";
    if (string.length === 0) return "";
    if (string.trim().length === 0) return "";
    
    let arr = [];
    for(let i = 0; i < string.length; i++){
        arr[i] = string[i]
    }

    let left = 0, right = string.length-1;

    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left ++;
        right --;
    }

    let reverse ="";

    for(let i = 0; i < arr.length; i++){
        reverse += arr[i]
    }
    return reverse
}
console.log(reverse("hello"))
/* if we write program like this 

    const reverse = (string) => {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
    }

    it take O(n^2)

    => because string is immuatable 

        it use do reversed += string[i] like this 

        => it always make a copy and ad character to it 

            for example :
                let reversed = "";
                // iterate characters: 'o','l','l','e','h'
                reversed += 'o'   // new string created: "o"      (copied 0 + 1 chars)
                reversed += 'l'   // new string created: "ol"     (copied 1 + 1 chars)
                reversed += 'l'   // new string created: "oll"    (copied 2 + 1 chars)
                reversed += 'e'   // new string created: "olle"   (copied 3 + 1 chars)
                reversed += 'h'   // new string created: "olleh"  (copied 4 + 1 chars)

                Count how many characters got copied overall:
                    first append copied 1 char
                    second append copied 2 chars
                    third copied 3 chars
                    fourth copied 4 chars
                    fifth copied 5 chars
                    Total copies = 1 + 2 + 3 + 4 + 5 = 15 = 5×(5+1)/2.
                    For a string of length n the total character copies ≈ n*(n+1)/2 → that's proportional to n². So time complexity is O(n²).
                    That is why this looks fine for short strings but becomes very slow for large n.

// EXTRA NOTE - WHAT IS IMMTABLE AND MUTABLE

    ->imagaine computers memory is like a set of labeled boxes(each box stores some data).

        EXAMPLE 1 : 

            let name = "hello",

            in MEMORY:
                variable  | address of variable | Value in that adress
                ----------|---------------------|---------------------
                name      |        1001         | "hello"


            then we do 

                name = name + "world";

                => js doesn't change "hello" (it cam't, immutable)
                instead, it create a new string "hello world" in  a new memmory box.

                Address   |   Value
                -----------|---------
                1001       |   "hello"
                1005       |   "hello world"

                then the variable name updatest to point to new address:

                Variable   |   Address it points to   |   Value
                ------------|--------------------------|----------
                name        |   1005                   |   "hello world"

            🧩 The old "hello" still exists temporarily, but since nothing points to it,
                JavaScript’s garbage collector will eventually clean it up.

                🧠 That’s what immutable means:

                    The data in the original memory box cannot be changed.
                    A new box is created every time you modify it.

        EXAMPLE 2:

            let arr = [1,2,3];

            Memory:

            Variable   | Address | Value
            ------------|----------|----------
            arr         | 2000     | [1, 2, 3]


            Now:
                arr[0] = 99;

                ✅ Here, JavaScript changes the data inside the same memory box (2000).
                    =>Address 2000: [99, 2, 3]

                => No new memory box was created.
                => So mutable = same memory address, changed contents.



    3) Why the two-pointer + array method is faster (what it does)

    Algorithm steps:

    Copy characters of the original string once into a mutable array (arr). — O(n)

    Swap characters in arr using two pointers (left & right). Each swap is constant time; you do ~n/2 swaps. — O(n)

    Build a string from the array once at the end by concatenating each array element — O(n)

    Total = O(n) + O(n) + O(n) = O(n) time.

    You avoid repeatedly copying all previously-built characters on every single append. 

*/


//PALINDROME

const palindrome = (string) => {

    if(typeof string !== "string") return false

    const isAlphabets = (string) => {
        const code = string.charCodeAt(0);

        return(
            (code >= 48 && code <= 57) ||
            (code >= 65 && code <= 90) ||
            (code >= 97 &&  code <= 122)   
        )            
    }
    let str = "";

    for(let char of string){
        if(isAlphabets(char)){
            str += char;
        }
    }
    
    let left = 0, right = str.length-1

    while(left < right){
        if(str[left] !== str[right]) return false;
        left ++
        right --;
    }
    return true
}
console.log(palindrome(null));
//.replace(/[^a-z0-9]/g, "");


//Find Maximum in Array (without Math.max)

const MaximmuInArray = (array) => {
    
    if(!Array.isArray(array) || array === null) return undefined;
    if(array.length === 0) return undefined;

    let largest = 0;
    for(let number of array){
        if(number > largest){
            largest = number
        }
    }

    return largest
}
console.log(MaximmuInArray(null))


//Count Occurrences of Each Character

const Occurrence = (string) => {
    const res = {}

    if(typeof(string) !== "string") return undefined

    for(let char of string){
        if(char !== " "){
            res[char] = (res[char] || 0) + 1;
        }
    }
    return res
}
console.log(Occurrence(null))


//Find Second Largest Number.

const SecondLargest = (array) => {

    if(!Array.isArray(array) || array === null) return undefined
    if(array.length === 0) return ""
    let larget = 0;
    let secondLaget = 0;
    for(let item of array){
        if(item >= larget ){
            larget = item
        }
        if(item < larget){
            secondLaget = item;
        }
    }

    return secondLaget
          
}
console.log(SecondLargest([10, 5, 20, 8, 15]))

