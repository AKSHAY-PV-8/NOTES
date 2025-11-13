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


class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParent(i){return Math.floor((i-1) /2)};
    getLeftChild(i){return (2 * i +1)}
    getRightChild(i){return (2 * i +2)}

    swap(i,j){
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp()
    }

    remove(){
        if(this.heap.length === 1) return this.heap.pop()

        const root = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown();
        return root;
    }
                           
                   
    heapifyUp(){
        let i = this.heap.length - 1;
        while(i > 0 && this.heap[this.getParent(i)] > this.heap[i]){
            this.swap(i, this.getParent(i))
            i = this.getParent(i);
        }
    }       
                              
    heapifyDown(){
        let index = 0;
        const length = this.heap.length;

        while(true){
            const left = this.getLeftChild(index);
            const right = this.getRightChild(index);

            let smallest = index;

            if(left < length && this.heap[left] < this.heap[smallest]) smallest= left;
            if(right < length && this.heap[right] < this.heap[smallest]) smallest = right;
                                               
            if(smallest != index){
                this.swap(smallest, index)
                index = smallest
            }else break  
        }
    }

    peek(){
        return this.heap[0];
    }

   
}

const SecondLargest = (array, n) => {


    const heap = new MinHeap()

    for(let i of array){
        heap.insert(i)
        if(heap.heap.length > n) heap.remove();
    }

    return heap.peek()
          
}             
console.log(SecondLargest([10, 5, 20, 8, 15], 4))


//Remove Duplicates from array;

const removeDuplicates = (array) => {
    if(!Array.isArray(array)) return undefined;
    if(array.length === 0) return []

    return [...new Set(array)]
}

console.log(removeDuplicates([1,1,1,1]));

                 
// Sum of digits 

const SumOfDigits = (number) => {

   if(number === null || number === undefined) return undefined;
   
   let num = typeof number === "string" ? Number(number) : number

   if(isNaN(num)) return undefined;

   num = Math.floor(num);

   let sum = 0;

   while(num > 0){
    const digit = num % 10
    sum += digit;
    num = Math.floor(num / 10)
   }
   return sum
}
console.log(SumOfDigits("2834"))
                                                                                                                                             
//Anagram


const anagram = (str1, str2) => {
    
        let array = Array(26).fill(0)
        
        for(let i of str1){
            const index = i.charCodeAt(0) - 97;
            array[index] ++
        }

        for(let i of str2){
            const index = i.charCodeAt(0) - 97;
            array[index] --
        }

        for(let i = 0; i < 26; i++){
            if(array[i] !== 0) return false
        }
        return true
}

console.log(anagram("listen", "silent"))


function Factorial(num){

        if(num === 0 || num ===  1){
           return 1
        }else{
            return num * Factorial(num - 1)
        }
                                                                                   
}
console.log(Factorial(5))

/*
🧠 First, what happens in recursion

When a function calls itself, JavaScript doesn’t “jump back” immediately.
Each function call is stored in the call stack — a special memory structure.

Each new call creates a new function frame (a copy of local variables, parameters, and return addresses).

When that call finishes, it’s popped off the stack and returns a value to the previous one.

🔍 Step-by-step for Factorial(5)

Let’s simulate exactly what happens in memory:

🧩 Step 1: Initial Call

You call:

Factorial(5)


Since 5 !== 0 && 5 !== 1,
JS executes:

return 5 * Factorial(4)


👉 It pauses Factorial(5) and calls a new function Factorial(4).

🧩 Step 2: Stack grows

Now stack looks like this:

| Factorial(5) waiting for Factorial(4) |
| Factorial(4) waiting for Factorial(3) |


And it keeps going:

Factorial(3)
Factorial(2)
Factorial(1)

🧩 Step 3: Base case reached

When Factorial(1) runs:

if (num === 0 || num === 1) return 1;


So it returns 1 immediately.
Now the stack begins to unwind (come back upward).

🧩 Step 4: Stack unwinds (returning values)

Now each waiting function multiplies and returns:

Function Call	What Happens	Returned Value
Factorial(1)	returns 1	1
Factorial(2)	2 * 1	2
Factorial(3)	3 * 2	6
Factorial(4)	4 * 6	24
Factorial(5)	5 * 24	120
🧠 In memory (call stack movement)
Before base case:
[Top of Stack]
Factorial(1)
Factorial(2)
Factorial(3)
Factorial(4)
Factorial(5)
[Bottom]

After returning:

Each frame returns and gets removed:

Factorial(1) → returns 1
Factorial(2) → returns 2
Factorial(3) → returns 6
Factorial(4) → returns 24
Factorial(5) → returns 120


Stack becomes empty again ✅

🧩 Final Output:
console.log(Factorial(5)); // 120
*/




                                                                           
                                                                                        
