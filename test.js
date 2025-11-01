//write a program to calculate the remainder of two numbers

//Answers

//without user input

// let num1=109
// let num2=239
// let dividend=4
// let reminder1=num1%dividend
// let reminder2=num2%dividend
// console.log(reminder1+','+reminder2)
// let sum =reminder1+reminder2
// console.log(sum)

//with user input

// let calculate=()=>{
//     let a=document.getElementById('num1').value
//     let b=document.getElementById('num2').value
//     let c=document.getElementById('dividend').value
//     a=Number(a)
//     b=Number(b)
//     c=Number(c)
//     let rem1=a%c
//     let rem2 =b%c
//     let result=rem1+rem2
//     document.getElementById('result').innerHTML='result : ' + result
// }

       

//without modulus function

// let calculate=()=>{
//     let a=document.getElementById('num1').value
//     let b=document.getElementById('num2').value
//     let c=document.getElementById('dividend').value
//     a=Number(a)
//     b=Number(b)
//     c=Number(c)
//     let q1=Math.floor(a/c)
//     console.log(q1)
//     let r1= a-(c*q1)
//     let q2=Math.floor(b/c)
//     console.log(q2)
//     let r2= b-(c*q2)
//     let sum=r1+r2
//     document.getElementById('result').innerHTML='result : ' + sum
// }

// let a=23
// let b=25
// let d=4
// function remindertwo(a,b,d){
//     let q1=0
//     tempA=a
//     while(tempA>=d){ 
//         tempA=tempA-d
//         q1++
//     }
//     let q2=0
//     tempB=b
//     while(tempB>=d){
//         tempB=tempB-d
//         q2++
//     }
//     let r1=a-(q1*d)
//     console.log(r1)
//     let r2=b-(q2*d)
//     console.log(r2)
//     let sum=r1+r2
//     console.log(sum)
// }
// console.log(remindertwo(a,b,d))

//write a program to find the average of an array of numbers

//with floor

// let arr=[1,2,10,4,5]
// let sum=0
// let ele=arr.length
// for(let i=0;i<ele;i++){
//     sum+=arr[i]
// }
// let result=Math.floor(sum/ele)
// console.log(result)

//without floor

// let arr=[1,2,10,4,5]
// let sum=0
// let ele=arr.length
// for(let i=0;i<ele;i++){
//     sum+=arr[i]
// }
// let result=~~(sum/ele)
// console.log(result)
// let random=Math.floor(Math.random()*10)+1  
// console.log('random '+ random)

// let arr=[1,2,3,4,5,6,7,8]
// function avg(arr){
//     let average=0
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     temp=sum
//     while(temp>=arr.length){
//         temp=temp-arr.length
//         average++
//     }
//     return average
// }
// console.log(avg(arr))

//write a program to add two matrices

// let a=[[1,2.3],[4,5,6]]
// let b=[[7,9,8],[6,8,5]]

// let result=[]
// for(let i=0 ; i<a.length;i++){
//     result[i]=[]
//     for(let j=0;j<a[i].length;j++){
//         result[i][j]=a[i][j]+b[i][j]
        
//     }
// }
// console.log(a)
// console.log(result)

// let a=[[1,2,3],[4,5,6]]
// let b=[[7,9,8],[6,8,5]]
// function addmatrix(a,b){
//     let result=[]
//     for(let i=0;i<a.length;i++){
//         result[i]=[]
//         for(let j=0;j<a[i].length;j++){
//              result[i][j]=a[i][j]+b[i][j]
//         }
//     }
//     return result
// }
// console.log(addmatrix(a,b))

//write a program to calculate the area of a rectangle, given its length and breadth

// let l=12
// let b=14
// let area=l*b
// console.log(area)

//write a program to check if the given matrix is a diagonal matrix

// let a=[
//         [1,0,0],
//         [0,1,0],
//         [0,0,1]
// ]
// let flag=false
// let flag2=true
// for(let i=0;i<a.length;i++){
//     if(flag2===false){
//         break
//     }
//     for(let j=0;j<a.length;j++){
//         if(i===j){
//             if(a[i][j]!=0){
//                 flag=true
//             }
//             else{
//                 flag=false
//                 flag2=false
//                 break
//             }
//         }
//         else{
//             if(a[i][j]!=0){
//                 flag=false
//                 flag2=false
//                 break
//             }
//         }
//     }
// }
// if(flag===true){
//     console.log('given matrix is diagonal matrix')
// }
// else{
//     console.log('given matrix is not a diagonal matrix')
// }

// let a=[
//         [0,0,0],
//         [0,1,0],
//         [0,0,1]
// ]
// let flag=true
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){ 
//         if((i!==j && a[i][j]!==0 || i===j && a[i][j]===0)){    
//             flag=false
//         }
//     }
// }
// if(flag===true){
//     console.log('given matrix is diagonal matrix')
// }
// else{
//     console.log('given matrix is not a diagonal matrix')
// }

// let a=[ 
//         [1,0,0],
//         [0,1,0],
//         [0,0,1]
// ]
// function diagonal(a){
//     let flag=true
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<a[i].length;j++){
//             if((i===j && a[i][j]===0) || (i!==j && a[i][j]!==0)){
//                 flag=false
//             }
//         }
//     }
//     if(flag){
//         console.log("diagonal")
//     }
//     else{
//         console.log("not diagonal")
//     }
// }
// diagonal(a)

//write a program to check if the given matrix is an identity maxtrix

// let a=[
//         [1,0,0],
//         [0,1,0],
//         [0,0,1]
// ]
// let flag=true
// for(let i=0;i<a.length;i++){
//     for(let j=0;j<a.length;j++){ 
//         if((i!==j && a[i][j]!==0 || i===j && a[i][j]!==1)){    
//             flag=false
//         }
//     }
// }
// if(flag===true){
//     console.log('given matrix is identity matrix')
// }
// else{
//     console.log('given matrix is not a identity matrix')
// }

//write a program that returns the transpose of a given matrix

// let a=[
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]
// ]
// let b=[]
// for(let i=0; i<a.length;i++){
//     b[i]=[]
//     for(let j=0;j<a[i].length;j++){
//          b[i][j]=a[j][i]
//     }
// }
// console.log(b)

// let a=[
//         [1,2,3],
//         [4,5,6]
// ]
// let b=[]

//     for(let i=0; i<a[0].length;i++){
//     b[i]=[]
//     for(let j=0;j<a.length;j++){
//          b[i][j]=a[j][i]
//     }
// }


// console.log(b)

//write a program to find the most repeated value in an array of numbers                                         

// let a=[1,2,3,4,2,3,1,4,2,2,2,3,4,2,12,3,3,3,3]
// let b=[]
// let c=0
// let maxcount=0
//     let num=null
// for(let i=0;i<a.length;i++){
//     let k=0
//     for(let j=0;j<a.length;j++){
//         if(a[i]===a[j]){
//             k++
//         }
//     }
//     b[a[i]]=k
//     if(b[a[i]]>maxcount){
//         maxcount=b[a[i]]
//         num=a[i]
//     }
// }
// console.log(num)

// let a=[1,2,3,4,2,3,1,4,2,2,2,3,4,2,12]
// let freq = {}

// for (let num of a) {               
//     freq[num] = (freq[num] || 0) + 1
// }

// let maxNum = null
// let maxCount = 0
// for (let num in freq) {
//     if (freq[num] > maxCount) {
//         maxCount = freq[num]
//         maxNum = num
//     }
// }

// console.log(maxNum)
// console.log(maxCount) 
// console.log(freq)

// let a=[1,2,3,4,2,3,1,4,2,2,2,3,4,2,12]
// let freq={}

// for(let num of a){
//     freq[num]=(freq[num] || 0) +1
// }
// let repeated=Object.keys(freq).reduce((a,b)=>
//     freq[a]>freq[b] ? a:b 
// )
// console.log(repeated)

// let a=[1,2,3,4,2,3,1,4,2,2,2,3,4,2,12,3,3,3,3]
// function repeat(a){
//     let freq=0
//     let ele={}
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<a.length;j++){
//             if(a[i]===a[j]){
//                 freq++
//             }
//         }
//         if(!ele[a[i]]){
//             ele[a[i]]=freq
//         }
//         freq=0
//     }
//     let maxnum=0
//     let maxkey=0
//     for(let key in ele){         
//         if(ele[key]>maxnum){
//             maxnum=ele[key]
//             maxkey=key
//         }
//     }
//     return maxkey
// }
// console.log(repeat(a))

//write a program that approximates the derivative of f(x)=x^n 

// function derivative(n,x){
//     return n*(x**(n-1))
// }
// console.log(derivative(3,2))

// function derivative(n, x, h = 1e-6) {
//   function f(x) {
//     return Math.pow(x, n);
//   }
//   return (f(x + h) - f(x - h)) / (2 * h);
// }
// console.log(derivative(3, 2));
// console.log(derivative(2, 5));

//write a program to check if the given number is a perfect  square or not

// function isPerfectSquare(num) {
//   if (num < 0) return false; 
//   let root = Math.sqrt(num);
//   return root === Math.floor(root);
// }
// console.log(isPerfectSquare(25));
// console.log(isPerfectSquare(26)); 
// console.log(isPerfectSquare(0));  
// console.log(isPerfectSquare(1));

// console.log(isPerfectSquare(25));
// console.log(isPerfectSquare(26)); 
// console.log(isPerfectSquare(0));  
// console.log(isPerfectSquare(1));
// function isPerfectSquare(num){
//     for(let i=0;i<=num;i++){
//         if(i*i===num){
//             return 'perfect'
//         }
//     }
//     return 'not perfect'
// }

//write a program to calculate the area of a triange given its base and height

// function triangleArea(base, height) {
//   return 0.5 * base * height;
// }

// console.log(triangleArea(10, 5));

//write a program to calculate the fibonacci series  of a given number 

// function fibonacci(n) {
//   let series = [0, 1];
//   for (let i = 2; i < n; i++) {
//     series.push(series[i - 1] + series[i - 2]);
//   }
//   return series.slice(0, n);
// }

// console.log(fibonacci(10));

// function fibonacci(n){
//     let series=[0,1]
//     for(let i=2;i<n;i++){
//         series[i]=series[i-1]+series[i-2]
//     }
//     return series
// }
// console.log(fibonacci(10))

//write a program to check whether  a given number is an armstrong number or not

// function isArmstrong(num) {
//   let digits = num.toString().split("");
//   let power = digits.length;
//   let sum = digits.reduce((acc, d) => acc + Math.pow(+d, power), 0);
//   return sum === num;
// }

// console.log(isArmstrong(153)); 
// console.log(isArmstrong(123));

// console.log(isArmstrong(153)); 
// console.log(isArmstrong(123));
// function isArmstrong(n){
//     let num=n
//     let temp=0
//     let rem=0
//     while(n>0){
//         rem=n%10
//         temp+=rem**3
//         n=~~(n/10)
//     }
//     if(num===temp){
//         return 'armstrong'
//     }
//     else{
//         return 'not armstrong'
//     }
// }

//write a program to check whether a given number is a perfect number or not 

// function isPerfect(num) {
//   if (num <= 1) return false;
//   let sum = 1;
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i === 0) sum += i;
//   }
//   return sum === num;
// }

// console.log(isPerfect(28));
// console.log(isPerfect(12));
                        
//write a program to covert the decimal number to a binary representation

//with tostring()

// function decimalToBinary(num) {
//   return num.toString(2);
// }
// console.log(decimalToBinary(10));

//with without tostring and with math.floor

// function decimalToBinary(num) {
//   if (num === 0) return "0";

//   let binary = "";
//   while (num > 0) {
//     let remainder = num % 2;
//     binary = remainder + binary;
//     num = Math.floor(num / 2);
//   }
//   return binary;
// }

// console.log(decimalToBinary(10));  
// console.log(decimalToBinary(255));
// console.log(decimalToBinary(1));
// console.log(decimalToBinary(0));

//without math.floor

// function decimalToBinary(num) {
//   if (num === 0) return "0";

//   let binary = "";
//   while (num > 0) {
//     let remainder = num % 2;  
//     binary = remainder + binary;
//     num = (num / 2) >> 0;
//   }
//   return binary;
// }
// console.log(decimalToBinary(10));
// console.log(decimalToBinary(255));

//write a program to check whether the given string is palindrome or not

//my code

// function palindrome(name){
//     let string=name.split('')
//     let string2=[]
//     let flag=0
//     for(let i=string.length-1;i>=0;i--){
//         string2.push(string[i])
//     }
//     for(i=0;i<string.length;i++){
//         if(string[i]===string2[i]){
//             flag=1
//         }
//         else{
//             flag=0
//             break
//         }
//     }
//     if(flag===1){
//         return 'palindrome'
//     }
//     else{
//         return 'not palindrome'
//     }
// }
// console.log(palindrome('madam'))

                    
// function palindrome(str){      
//     for(let i=0;i<str.length;i++){   
//         if(str[i]!==str[str.length-1-i]){
//             return 'not palindrome'
//         }
//     }
//     return 'palindrome'
// }
// console.log(palindrome('malayalam'))

//optimized code

// function palindrome(name){
//     let string=name.split('')
//     let string2=[]

//     for(let i=string.length-1;i>=0;i--){
//         string2.push(string[i])
//     }
//     for(i=0;i<string.length;i++){
//         if(string[i]!==string2[i]){
//             return 'not palindrome'
//         }
//     }
//     console.log(string2.join(''))
//     return 'palindrome'
// }
// console.log(palindrome('madam'))

//we can use .join to join the string

//without using split

// function palindrome(name){
//     let orginal=name
//     let reverse=""
//     for(let i=orginal.length-1;i>=0;i--){
//         reverse+=orginal[i]
//     }
//     return reverse===orginal?'palindrome':'not palindrome'
// }
// console.log(palindrome('madam'))

//write a program to find the greatest common divisor(GCD) of two numbers

// function gcd(a,b){
//     while(b!==0){    
//         let temp=b
//         b=a%b
//         a=temp
//     }
//     return a
// }
// console.log(gcd(48,18)) 
                                 
// console.log(gcd(48,18))
// function gcd(a,b){
//     while(b!==0){
//         temp=b
//         b=a%b
//         a=temp
//     }
//     return a
// }

//write a program to find the least common divisor of two numbers

// function lcm(a,b){
//     return Math.abs(a*b/gcd(a,b))
// }
// console.log(lcm(12,18))

//without using abs

// function lcm(a, b) {
//   let product = a * b;
//   if (product < 0) product = -product;
//   return product / gcd(a, b);
// }

// console.log(lcm(12, 18));
// console.log(lcm(-4, 6)); 

//write a program to count the number of vowels in a string

// function countvowels(str){
//     let vowels='aeiouAEIOU'
//     let count=0
//     for(let ch of str){
//         if(vowels.includes(ch)){
//             count++
//         }
//     }
//     return count
// }
// console.log(countvowels('roshan'))

// console.log(countvowels('aeiou'))
// function countvowels(str){
//     let count=0
//     for(let i=0;i<str.length;i++){ 
//         if(str[i] === 'a' ||str[i] ===  'e' ||str[i] ===  'i' ||str[i] ===  'o' ||str[i] ===  'u' ||str[i] ===  'A' ||
//             str[i] ===  'E' ||str[i] ===  'I' ||str[i] ===  'O' ||str[i] ===  'U'){
//             count++
//         }
//     }
//     return count
// }                  

//without using includes

// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let ch of str) {
//     for (let v = 0; v < vowels.length; v++) {
//       if (ch === vowels[v]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }

// console.log(countVowels("roshan"));
// console.log(countVowels("HELLO"));

//write a program to calculate the factorial of a number using a recursive method

// function factorial(n){
//     if(n===0 || n===1) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5))

//write a program to find  the first n prime numbers up to the given number

// function isprime(num){
//     if(num===1 || num===0) return false
//     for(let i=2;i<num;i++){
//         if(num%i===0)return false
//     }
//     return true
// }
// function prime(num){
//     let primes=[]
//     for(let i=2;i<num;i++)
//     if(isprime(i)){
//         primes[primes.length]=i
//     }
//     return primes
// }
// console.log(prime(20))                                                                


//write a program to remove duplicates in an array of numbers

// function removedup(arr){
//     let result=[]
//     for(let i=0;i<arr.length;i++){
//         let exists=false
//         for(let j=0;j<result.length;j++){
//             if(arr[i]===result[j]){
//                 exists=true
//                 break
//             }
//         }
//         if(!exists){
//             result[result.length]=arr[i]
//         }
//     }
//     return result
// }
// console.log(removedup([1,2,3,2,4,5,5,6,4]))


//write a program to check whether the given string with space is palindrome or not

// function palindrome(name){
//     let flag=true
//     let count=name.length-1
//     let i=0
//     while(i<name.length)
//     {
//         if(name[i]===' '){
//             i++
//         }
//         if(name[count]===' '){
//             count--
//         }
//         if(name[i]!== name[count]){
//             flag=false
//             break
//         }
//         i++
//         count--
//     }
//     if(flag){
//         return 'palindrome'
//     }
//     else{   
//         return 'not palindrome'
//     }
// }
// console.log(palindrome('step on no pets'))

//write a program to simplify  a fraction of two numbers to its lowest term

// function gcd(a, b) {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a < 0 ? -a : a;
// }

// function simplifyFraction(num, den) {
//   let g = gcd(num, den);
//   return (num / g) + "/" + (den / g);
// }

// console.log(simplifyFraction(8, 12));
// console.log(simplifyFraction(10, 100));

//write a program to check the sentence is palindrome or not with space

// function palindrome(name){
//     let cleaned=""
//     for(let i=0;i<name.length;i++){
//         if(name[i]!==" "){
//             cleaned+=name[i]
//         }
//     }
//     let left=0
//     let right=cleaned.length-1
//     while(left<right){
//         if(cleaned[left]!==cleaned[right]){
//             return 'not palindrome'
//         }
//         left++
//         right--
//     }
//     return 'palindrome'
// }

// console.log(palindrome("nurses run"));
// console.log(palindrome("a man a plan a canal panama")); 
// console.log(palindrome("roshan ali"))

//write a program to find the range (difference between the highest and lowest values) in an array of number

// function findRange(arr) {
//   let max = arr[0];
//   let min = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) max = arr[i];
//     if (arr[i] < min) min = arr[i];
//   }

//   return max - min;
// }

// console.log(findRange([4, 7, 1, 9, 3]));


// check the given number is positive , negative or zero

// function checknumber(num){
//     if(num>0){
//         console.log("positive")
//     }
//     else if(num<0){
//         console.log('negative')
//     }
//     else{
//         console.log('zero')
//     }
// }
// checknumber(10)
// checknumber(-5)
// checknumber(0)

//check if the given alphabet is vowel or consonant

// function checkalphabet(ch){
//     if(ch=== 'a'||ch=== 'e'||ch=== 'i'||ch=== 'o'||ch=== 'u'||ch=== 'A'||ch=== 'E'||ch=== 'I'||ch=== 'O'||ch=== 'U'){
//         console.log('vowel')
//     }
//     else{
//         console.log('consonant')
//     }
// }

// checkalphabet('a')
// checkalphabet('E')
// checkalphabet('b')

//check the given age is eligible for voting

// function check(age){
//     if(age>=18){
//         console.logd('eligible for voting')
//     }
//     else{
//         console.log('not eligibe for voting')
//     }
// }
// check(20)
// check(12) 

//check the given number is even or odd

// function checkevenodd(num){
//     if(num%2 === 0){
//         console.log('even')
//     }
//     else{
//         console.log('odd')
//     }
// }
// checkevenodd(10)
// checkevenodd(7)

//given a number x calculate the sum of n natural of x

// function sumnatural(x){
//     let sum=0
//     for(let i=1;i<=x;i++){
//         sum=sum+i
//     }
//     console.log('sum =',sum)
// }
// sumnatural(5)

//calculate the multiplication table of a given number

// function mutliplication(){
//     for(let i=0;i<=10;i++){
//         console.log(num + "x" + i + '=' + (num*i))
//     }
// }
// mutliplication(7)

//calculate the factorial of a given number

// function factorial(n){
//     let fact = 1
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     console.log(fact)
// }
// factorial(5)

//find the max value in an array of numbers

// function findmax(arr){
//     let max =arr[0]
//     for(let i = 1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(max)
// }
// findmax([1,2,3,4,5])

//calculate the average value in an array of  numbers

// function findaverage(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum=sum+arr[i]
//     }
//     let avg = sum/ arr.length
//     console.log(avg)
// }
// findaverage([10,20,30,40,50])

// To find the second largest number

// function secondlarge(num){
// let lg=-Infinity
// let sm=-Infinity
// for(let i=0;i<num.length;i++){
//     if(num[i]>lg){
//         sm=lg
//         lg=num[i]
//     }
//     else if(num[i]>sm && num[i]<lg){
//         sm=num[i]
//     }
// }
      
// return sm
// }
// console.log(secondlarge([10,10,8,5,9])) 
// console.log(secondlarge([7,5,2,18,11])) 
// console.log(secondlarge([10,10,10]))                         

//check if the given number is prime or not

// function isprime(num){
//     if(num<=1){
//         console.log('not prime')
//         return
//     }
//     for(let i=2;i<num;i++){
//         if(num % i === 0){
//             console.log('not prime')
//             return
//         }
//     }
//     console.log('prime')
// }
// isprime(7)
// isprime(10)


// the airport problem

// function boardingSystem(commands){ 
//     let queue=[]
//     for(let command of commands){
//         let parts=command.split(' ')
//         let action=parts[0]
//         let name=parts[1]
//         if(action=== 'ADD_NORMAL' && name){
//             queue.push(name)
//         }
//         else if(action==='ADD_PRIORITY' && name){
//             queue.unshift(name)
//         }
//         else if(action==='BOARD'){
//             if(queue.length>0){
//                 console.log(queue.shift())
//             }
//             else{
//                 console.log('no passenger in the line')
//             }
//         }
//         else{
//             console.log('invalid command')
//         }
//     }
// }
// const input=[
//     'ADD_NORMAL ALICE',
//     'ADD_NORMAL BOB',
//     'ADD_PRIORITY CAROL',
//     'BOARD',
//     'BOARD',
//     'ADD_NORMAL DAVE',
//     'BOARD'
// ]
// boardingSystem(input)

//without using methods

// function boardingSystem(commands){
//     let queue=[]
//     let size=0
//     let i=0
//     for(let command of commands){
//         let parts=[]
//         let word=''
//         for(i=0;i<command.length; i++){
//             if(command[i] !== ' '){
//                 word+=command[i]
//             }
//             else{
//                 if(word !== ''){
//                     parts[parts.length]=word
//                     word=''
//                 }
//             }
//         }
//         if(word !== ''){
//             parts[parts.length]=word
//         }
//         let action=parts[0]
//         let name=parts[1]
//         if(action === 'ADD_NORMAL' && name){
//             queue[size]=name
//             size++       
//         }
//         else if(action === 'ADD_PRIORITY' && name){
//             for(i=size;i>0;i--){
//                 queue[i]=queue[i-1]
//             }
//             queue[0]=name
//             size++
//         }
//         else if(action === 'BOARD'){
//             if(size>0){
//                 console.log(queue[0])
//             for(i=0;i<size;i++){
//                 queue[i]=queue[i+1]
//             }
//             size--
//             }
//             else{
//                 console.log('no passenger in line')
//             }
//         }
//         else{
//             console.log('invalid command')
//         }
//     }
// }
// const input=[
//     'ADD_NORMAL ALICE',
//     'ADD_NORMAL BOB',
//     'ADD_PRIORITY CAROL',
//     'BOARD',
//     'BOARD',
//     'ADD_NORMAL DAVE',
//     'BOARD',
//     'ADD_PRIORITY ROSHAN',
//     'BOARD'
// ]
// boardingSystem(input)

// swaping without temp variable

// function swap(a,b){
//     a=a+b
//     b=a-b
//     a=a-b
//     console.log(a,b)  
// }
// swap(7,8)


// sum of the array without using reduce method

// function sumArray(input){
//     let result=0     
//     for(let i=0;i<input.length;i++){
//         result+=input[i]
//     }
//     console.log(result)
// }            
// sumArray([1,2,3,4,5,6])

                    
// Reverse a string without using built-in methods

// function reverseString(str){
//     let revStr=''
//     for(let i=str.length-1;i>=0;i--){
//         revStr+=str[i]
//     }
//     console.log(revStr)
// }
// reverseString('roshan')

// check if a string is a palindrome
    
// function palindrome(str){
//     let str2=''
//     let str3=''
//     for(let i=0;i<str.length;i++){
//         if(str[i] !== ' '){
//             str3+=str[i]
//         }
//     }
//     for(let i=str.length-1;i>=0;i--){
//         if(str[i] !== ' '){
//             str2+=str[i]
//         }
//     }
//     console.log(str2)
//     for(let i=0;i<str.length;i++){
//         if(str3[i] !== str2[i]){
//             return false
//             break
//         }
//     }
//     return true
// }
// console.log(palindrome('roshan'))
// console.log(palindrome('malay alam'))

// Rotate an array K times to the right

// function rotateArr(input,k){
//     for(let i=0;i<k;i++){
//         let temp=input[0]
//         for(let j=0;j<input.length;j++){
//             if(j===input.length-1){
//                 input[j]=temp
//             }
//             else{
//                 input[j]=input[j+1]
//             }
//         }
//     }
//     console.log(input)    
// }
// rotateArr([1,2,3,4,5,6],7)

// function duplicates(input){
//     let result=[]
//     for(let i=0;i<input.length;i++){
//         let duplicate=false
//         for(let j=0;j<result.length;j++){
//             if(result[j]===input[i]){
//                 duplicate=true
//                 break
//             }
//         }
//         if(!duplicate){
//             result[result.length]=input[i]
//         }
//     }
//     console.log(result)
// }
// duplicates([2,3,5,4,3,2])

//find the longest string without repeating 
// str="abcabcbb"
// output: abc

// function longestsub(str){
//     let start =0
//     let maxlen=0
//     let current=''
//     let longest=''
//     for(let i=0;i<str.length;i++){
//         let repeated=false
//         for(let j=start;j<i;j++){
//             if(str[j]===str[i]){
//                 start=j+1
//                 repeated=true
//                 break
//             }
//         }
//         current=''
//         for(let k=start;k<=i;k++){
//             current+=str[k]
//         }
//         if(current.length>maxlen){
//             maxlen=current.length
//             longest=current
//         }
//     }
//     return longest
// }
// console.log(longestsub("abcabcbb"))
// console.log(longestsub("pwwkew"))
// console.log(longestsub("bbbbb"))

//find the longest common sub string
// input : ['flo',flow','flo'] 
// output:flo

// function longestcommon(arr){
//     let s=arr[0]
//     let result=""
//     for(let i=0;i<s.length;i++){
//         for(let j=i+1;j<=s.length;j++){
//             let sub=s.slice(i,j)
//             if(arr.every(a=>a.includes(sub)) && sub.length>result.length){
//                 result=sub
//             }
//         }
//     }
//     return result
// }

// console.log(longestcommon(['flo','flow','fl']))


//find the missing number in an array 1...n

// function findmissing(arr,n){
//     let expectedsum=(n*(n+1)/2)
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i]
//     }
//     return expectedsum-sum
// }
// console.log(findmissing([1,2,3,5,6,7,8],8))

// find first non-repeating character in a string



// function nonReapeating(str){
//     for(let i=0;i<str.length;i++){
//         let repeat=false
//         for(let j=0;j<str.length;j++){
//             if(str[i] === str[j] && i!==j){
//                 repeat=true
//                 break
//             }
//         }
//         if(!repeat){
//             return str[i]
//         }
//     }
// }
// console.log(nonReapeating('sagars'))

// convert given array into object




//convert nested array into single array

// let result=[]
// function flattenArray(arr){
//     for(let i=0; i<arr.length; i++){          
//         if(typeof arr[i]==='object' && arr[i].length !== undefined){   
//             flattenArray(arr[i],result)  
//         }
//         else{
//             result[result.length]=arr[i]
//         }
//     }
//     return result
// }
// let arr1=[1,2,3,4,5,[3,5,[3,4],7],[1,2]]
// console.log(flattenArray(arr1))
                 
// ARRAY TO OBJECT(EASY)

//1) convert array of key-value pairs into an object

//  const arr = [['name','Roshan'],['age',25],['city','kochi']]
//  function arrayToObject(arr1){
//     let obj={}
//     for(let i=0;i<arr1.length;i++){
//         obj[arr1[i][0]]=arr1[i][1]
//     }
//     return obj
//  }
// console.log(arrayToObject(arr))

//2) convert two arrays into an object

// const keys = ["id", "name", "age"];
// const values = [101, "Ali", 24];
// let obj={}
// function arrayToObject(keys,values){
//     for(let i=0;i<keys.length;i++){
//         for(let j=i;j<values.length;j++){
//             obj[keys[i]]=values[j]
//             break
//         }
//     }
//     return obj
// }
// console.log(arrayToObject(keys,values))   

//3) convert array of strings into object with values as their length

// const arr = ["apple", "banana", "kiwi"];
// console.log(arrayToObject(arr))
// function arrayToObject(){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         obj[arr[i]]=arr[i].length
//     }
//     return obj
// }

// ARRAY TO OBJECT (MEDIUM)

//1)group array elements into object by first letter

// const fruits = ["apple", "banana", "avocado", "blueberry"];
// function arrayToObject(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         let first=arr[i][0]
//         if(!obj[first]){
//             obj[first]=[]
//         }
//         obj[first][obj[first].length]=arr[i]
//     }
//     return obj
// }
// console.log(arrayToObject(fruits))

//2) convert array of objects into object using id as key

// const arr = [
//   { id: 1, name: "John" },
//   { id: 2, name: "Alice" },
//   { id: 3, name: "Bob" }
// ];
// function arrayToObject(arr){
//     let obj={}
//     let k=1
//     for(let i=0;i<arr.length;i++){
//         obj[k]=arr[i]
//         k++
//     }
//     return obj
// }
// console.log(arrayToObject(arr))

//3) count frequency of elements in array (convert to object)

// const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
// function arrayToObject(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         let count=0
//         for(let j=0;j<arr.length;j++){
//             if(arr[i]===arr[j]){
//                 count++
//             }
//         }
//         obj[arr[i]]=count
//     }
//     return obj
// }
// console.log(arrayToObject(arr))


// ARRAY TO OBJECT (DIFFICULT)

//nested array to nested object

// const arr = ["person", ["name", "Roshan"], ["age", 25], ["address", ["city", "Kochi", "state", "Kerala"]]];
// function arrayToObject(arr){
//     if(typeof arr[0] === 'string' && Array.isArray(arr[1])){
//         let obj={}
//         obj[arr[0]]={}
//         for(let i=1;i<arr.length;i++){
//            if(Array.isArray(arr[i])){
//             obj[arr[0]][arr[i][0]]=Array.isArray(arr[i][1])? arrayToObject(arr[i][1]):arr[i][1]
//            }
//         }
//         return obj
//     }
//     let obj={}
//     for(let i=0;i<arr.length;i+=2){
//         obj[arr[i]]=Array.isArray(arr[i+1])? arrayToObject(arr[i+1]):arr[i+1]
//     }
//     return obj
// }
// console.log(arrayToObject(arr))

//2) convert array of arrays into object with sum of values

// const arr = [["a", 10], ["b", 20], ["a", 5], ["c", 7], ["b", 3]];
// function arrayToObject(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         let key=arr[i][0]
//         let value=arr[i][1]
//         if(obj[key]===undefined){
//             obj[key]=0
//         }
//         obj[key]+=value
//     }
//     return obj
// }
// console.log(arrayToObject(arr))




//3) multi-level grouping 

// const arr = [
//   { name: "Alice", dept: "IT", role: "Developer" },
//   { name: "Bob", dept: "IT", role: "Tester" },
//   { name: "Charlie", dept: "HR", role: "Recruiter" },
//   { name: "David", dept: "IT", role: "Developer" }
// ];
// function arrayToObject(arr){
//     let obj={}
//     for(let i=0;i<arr.length;i++){
//         let {name,dept,role} = arr[i]
//         if(!obj[dept]){
//             obj[dept]={}
//         }
//         if(!obj[dept][role]){
//             obj[dept][role]=[]
//         }
//         obj[dept][role][obj[dept][role].length]=name 
//     }
//     return obj
// }
// console.log(arrayToObject(arr))

// THE STAR PROBLEM(IMPORTANT)

//      *
//     ***
//    *****
//     *** 
//      *

// function printStar(maxstars){
//     if(maxstars%2===0){
//         maxstars++
//     }
//     let star=0
//     mid=(maxstars+1)/2
//     for(let i=1;i<=maxstars;i++){
//         if(i<=mid){
//             star= 2*i-1
//         }
//         else{
//             star=2*(maxstars-i+1)-1 
//         }
//         let space=(maxstars-star)/2
//         let line=""
//         for(let i=0;i<space;i++){
//             line+=" "
//         }
//         for(let j=0;j<star;j++){
//             line+="*"
//         }
//         console.log(line)
//     }
// }
// printStar(6)

//    *
//   ***
//  ***** 

// printStar(6)
// function printStar(maxstars){
//     if(maxstars%2===0){
//         maxstars++
//     }
//     let mid=(maxstars+1)/2
//     let star=0
//     for(let i=1;i<=(maxstars/2)+1;i++){
//         if(i<=mid){
//             star=2*i-1
//         }
//         let space=(maxstars-star)/2
//         let line=""
//         for(let i=0;i<space;i++){
//             line+=" "
//         }
//         for(let j=0;j<star;j++){
//             line+="*"
//         }
//         console.log(line)
//     }
// } 

// write a program to reverse the given number

// function reverse(a=78987498){
//     let d=0
//     let result=0
//     let b=a
//     while(b>0){
//         b=Math.floor(b/10)
//         d++
//     }
//     while(a>0){
//         let q=0
//         let n=a%10
//         let temp=a
//         while(temp>=10){
//             temp=temp-10
//             q++
//         }
//         a=q
//         result+=n*(10**(d-1))
//         d--
//     }
//     console.log(result)
// }
// reverse()

// chatgpt

// let num= 12345
// let rev=0
// while(num>0){
//     let digit=num%10
//     rev=rev*10+digit
//     num=Math.floor(num/10)
// }
// console.log(rev)

// write a program to reverse the words 
// let a="THE PROMISE OF QUALITY & AUTHENTICITY"
// EXPECTED OUTCOME
// RESULT=AUTHENTICITY & QUALITY OF PROMISE THE


// function reverseword(str){
//     let a=[]
//     let word=''
//     for(let i=0;i<str.length;i++){
//         if(str[i]!==' '){
//             word+=str[i]
//         }
//         else{
//             a[a.length]=word
//             word=''
//         }
//     }
//     a[a.length]=word
//     word=''
//     for(let i=(a.length)-1;i>=0;i--){
//         word=word+a[i]+' '
//     }
//     return word
// }
// console.log(reverseword('THE PROMISE OF QUALITY & AUTHENTICITY'))
// console.log(reverseword('roshan ali is the real beast'))



// OBJECT TO ARRAY

// EASY LEVEL

// convert an object's values into an array
// const obj={a:1,b:2,c:3}
// output =[1,2,3]

// const obj={a:1,b:2,c:3}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]=obj[key]
//         i++
//     }
//     return arr
// }

// convert an object's keys into an array
// const obj={name:'alice',age:25,city:'delhi'}
// output = ["name","age","city"]

// const obj={name:'alice',age:25,city:'delhi'}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]=key
//         i++
//     }
//     return arr
// }

// convert both keys and values into an array of arrays
// const obj={x:10,y:20}
// output = [['x',10],['y',20]]

// const obj={x:10,y:20}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]=[]
//         arr[i][0]=key
//         arr[i][1]=obj[key]
//         i++
//     }
//     return arr
// }
    
// convert an object into an array of strings(key=value)
// const obj={a:10,b:20,c:30}
// output =['a=10','b=20','c=30']

// const obj={a:10,b:20,c:30}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]=`${key}=${obj[key]}`
//         i++
//     }
//     return arr
// }

// MEDIUM LEVEL

// convert an object into an array of objects(each key-value pair as one object)
// const obj ={id:1;name:'john',age:22}
// output = [{key:'id',value:1},{key:'name',value:'john'},{key:'age',value:22}]

// const obj ={id:1,name:'john',age:22}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]={}
//         arr[i]['key']=key
//         arr[i]['value']=obj[key]
//         i++
//     }
//     return arr
// }

// extract only numeric values from an object into an array
// const obj={a:10,b:'hello',c:30,d:true}
// output=[10,30]

// const obj={a:10,b:'hello',c:30,d:true}
// console.log(objectToArray(obj))
// function objectToArray(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             arr[i]=obj[key]
//             i++
//         }
//     }
//     return arr
// }

// get all key-value pairs where the value is greater than  50
// const scores={john:40,alice:70,Bob:90}
// output=[['alice',70],['Bob',90]]

// const scores={john:40,alice:70,Bob:90}
// console.log(arrayToObject(scores))
// function arrayToObject(obj){
//     let arr=[]
//     let i=0
//     for(let key in obj){
//         arr[i]=[]
//         if(obj[key]>50){
//             arr[i][0]=key
//             arr[i][1]=obj[key]
//             i++
//         }
//     }
//     return arr
// }

// convert a nested object to an array of key paths and values
// const obj ={a:{b:{c:5}}}
// output =[['a.b.c',5]]


// const obj ={a:{b:{c:5}}}
//  function objectToArray(obj,parentkey='',arr=[]){
//     let i=0
//     for(let key in obj){
//         const fullkey=parentkey ? `${parentkey}.${key}` : key
//         if(typeof obj[key]==='object'){
//             objectToArray(obj[key],fullkey,arr)
//         }
//         else{
//             arr[i]=[]
//             arr[i][0]=fullkey 
//             arr[i][1]=obj[key]
//             i++
//         }
//     }
//     return arr
//  }
//  console.log(objectToArray(obj))

// convert a complex nested object into a flat array of [keyPath,value]
// const obj ={user:{name:'Tom',address:{city:'ny',pin:1001}}}
// output = [['user.name','tom'],['user.address.city','ny'],['user.address.pin',1001]]


// const obj ={user:{name:'Tom',address:{city:'ny',pin:1001}}}
//  function objectToArray(obj,parentkey='',arr=[],i=0){
//     for(let key in obj){
//         const fullkey=parentkey ? `${parentkey}.${key}` : key
//         if(typeof obj[key]==='object' && obj[key] !== null){
//             objectToArray(obj[key],fullkey,arr,i)
//         }
//         else{
//             arr[i]=[]
//             arr[i][0]=fullkey 
//             arr[i][1]=obj[key]
//             i++
//         }
//     }
//     return arr
//  }
//  console.log(objectToArray(obj))

// convert an object of arrays into one combined array
// const obj = {a:[1,2],b:[3,4]}
// output=[1,2,3,4]

// const obj = {a:[1,2],b:[3,4]}
// function objectToArray(obj){
//     let result=[]
//     let k=0
//     for(let key in obj){
//         let arr=obj[key]
//         for(let i=0;i<arr.length;i++){
//             result[k]=arr[i]
//             k++
//         }
//     }
//     return result
// }
// console.log(objectToArray(obj))

// convert a nested object with multiple levels into a single array of values 
// const obj={x:1,y:{z:2,w:{p:3}}}
// output [1,2,3]

// function objectToArray(obj,result=[],i=0){
//     for(let key in obj){
//         if(typeof obj[key]==='object' && obj[key]!==null){
//             objectToArray(obj[key],result,i)
//         }
//         else{
//             result[i]=obj[key]
//             i++
//         }
//     }
//     return result
// }
// console.log(objectToArray(obj))

// convert an object containing functions
// return an array of function names degined inside an object
// const obj ={sum(){return 10;},multiply(){return 20;},data:{message:'hello'}}
// output =['sum','multiply']

// let result=[]
// for(let key in obj){
//     if(typeof obj[key]==='function'){
//         result[result.length]=key
//     }
// }
// console.log(result)

// convert object with arrays into all possible key-value Pairs
// if a keys value is an array make one entry per array element
// const obj={
//     name:'ravi',
//     skills:['HTML','CSS','JS']
// }
// output=[['name','ravi'],['skills','html'],['skills','css'],['skills','js']]

// let result=[]
// for(let key in obj){
//     if(typeof obj[key]=== 'object'&& obj[key].length !==undefined){
//         for(let i=0;i<obj[key].length;i++){
//             result[result.length]=[key,obj[key][i]]
//         }
//     }
//     else{
//         result[result.length]=[key,obj[key]]
//     }
// }
// console.log(result)

// find the sum of all values in a nested array
// input:[1,[2,[3,4]],5]
// output:15

// const arr=[1,[2,[3,4]],5]
// function findsum(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         if(typeof arr[i]==='object'&& arr[i].length !== undefined){
//             sum+=findsum(arr[i])
//         }
//         else{
//             sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(findsum(arr))

// implement a stack using an array =with push(),pop(),peek(),isEmpty()

// function createstack(){
//     let items = []
//     let size =0
//     function push(element){
//         items[size]=element
//         size++
//     }
//     function pop(){
//         if(size===0) return 'underflow'
//         size--
//         let top=items[size]
//         return top
//     }
//     function peek(){
//         if(size === 0) return 'empty stack'
//         return items[size - 1]
//     }
//     function isEmpty(){
//         return size === 0
//     }
//     return {push,pop,peek,isEmpty}
// }
// const stack=createstack()
// stack.push(10)
// stack.push(20)
// stack.push(30)

// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.peek())
// console.log(stack.isEmpty())
// console.log(stack.pop())


// implement a queue using two stacks

// function createstack(){
//     let items =[]
//     let size = 0
//     function push(element){
//         items[size]=element
//         size++
//     }
//     function pop(){
//         if(size===0) return 'underflow'
//         size--
//         let top =items[size]
//         return top
//     }
//     function isEmpty(){
//         return size ===0
//     }
//     function top(){
//         if(size===0) return 'empty'
//         return items[size-1]
//     }
//     return {push,pop,isEmpty,top}
// }
// function createqueue(){
//     let stack1=createstack()
//     let stack2=createstack()
//     function enqueue(element){
//         stack1.push(element)
//     }
    
//     function dequeue(){
//         if(stack2.isEmpty()){
//             while(!stack1.isEmpty()){
//                 let val=stack1.pop()
//                 stack2.push(val)
//            }                                                       
//         }
//         if(stack2.isEmpty()) return 'underflow' //reverse the order of insertion so it give the fifo effect by enqueue operation
//         return stack2.pop()
//     }
//     function isEmpty(){
//         return stack1.isEmpty() && stack2.isEmpty()
//     }
//     return {enqueue,dequeue,isEmpty}
// }
// const q=createqueue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)

// console.log(q.dequeue())
// console.log(q.dequeue())
// q.enqueue(40)
// console.log(q.dequeue())
// console.log(q.dequeue())
// console.log(q.isEmpty())

// evaluate a postifix expression
// input:['2','3','+','4','*']
// output:20


//  function evaluatepostfix(expr){
//     let stack =[]
//     let top =0
    
//     for(let i=0;i<expr.length;i++){
//         let token =expr[i]
//         if(token>='0' && token <= '9'){
//             stack[top]=Number(token)
//             top++
//         }
//         else{
//             top--
//             let val2=stack[top]
//             top--
//             let val1=stack[top]
//             let result
//             if(token === '+')result =val1 + val2
//             else if(token === '-')result=val1-val2
//             else if(token === '*') result=val1*val2
//             else if(token === '/') result=val1/val2
//             stack[top]=result
//             top++
//         }
//     }
//     return stack[0]
//  }
// const input =['2','3','+','4','*']
// console.log(evaluatepostfix(input))

// find the depth of a nested object
// input:{a:{b:{c:2}}}
// output:3

// function findDepth(obj){
//     let maxDepth = 0
//     for(let key in obj){
//         if(typeof obj[key]==='object'){
//             let depth =findDepth(obj[key])
//             if(depth>maxDepth){
//                 maxDepth=depth
//             }
//         }
//     }
//     return maxDepth+1
// }
// const input = { a: { b: { c: 3 } } };
// console.log(findDepth(input))
                                                                          
// implement a linked list class with insert(),delete(), and display() methods

// function createnode(value){
//     return{
//         value:value,
//         next:null
//     }
// }
//  const linkedlist={
//     head:null
//  }
//  function insert(list,value){
//     const newNode= createnode(value)
//     if(list.head === null){
//         list.head =newNode
//         return
//     }
//     let current =list.head
//     while(current.next !== null){
//         current =current.next
//     }
//     current.next=newNode
//  }                    
// function deletenode(list,value){
//     if(list.head === null)return
//     if(list.head.value === value){
//         list.head= list.head.next
//         return
//     }
//     let current =list.head
//     while(current.next !== null && current.next.value !== value){
//         current=current.next
//     }
//     if(current.next !== null){
//         current.next=current.next.next
//     }
// }
// function display(list){
//     let current =list.head 
//     let result=""
//     while(current !== null){
//         result += current.value + " "
//         current = current.next
//     }
//     console.log(result)
// }
// insert(linkedlist, 10);
// insert(linkedlist, 20);
// insert(linkedlist, 30);
// display(linkedlist); // Output → 10 20 30

// deletenode(linkedlist, 20);
// display(linkedlist); // Output → 10 30

// insert(linkedlist, 40);
// display(linkedlist); // Output → 10 30 40



// TRAPPING RAIN WATER PROBLEM

// Given an array arr[] of size n consisting of  non-negative integers, where each element represnts the height of a bar in an elevation map
// and the width of each bar is 1. determine the total amount of water that can be trapped between the after it rains

// example

// input arr[]=[3,0,1,0,4,0,2]
// output :10
// explanation : the expected rain water to be trapped is  shown in the above image

// input arr[]=[3,0,2,0,4]
// output : 7
// explanation : we trap 0 + 3 + 1 + 3 + 0 =7

// input : arr[]=[1,2,3,4]
// output : 0
// explantion: we cannot trap water as there is no height bound on both sides


// function trapwater(arr){
//     let n=arr.length
//     if(n===0)return
//     let leftmax= new Array(n)
//     let rightmax= new Array(n)
//     leftmax[0]=arr[0]
//     for(let i=1;i<n;i++){
//         leftmax[i]=Math.max(leftmax[i-1],arr[i])
//     }
//     rightmax[n-1]=arr[n-1]
//     for(let i=n-2;i>=0;i--){
//         rightmax[i]=Math.max(rightmax[i+1],arr[i])
//     }
//     let water=0
//     for(let i=0;i<n;i++){
//         water+=Math.min(leftmax[i],rightmax[i])-arr[i]
//     }
//     return water
// }
// console.log(trapwater([3, 0, 1, 0, 4, 0, 2]));
// console.log(trapwater([3, 0, 2, 0, 4]));
// console.log(trapwater([1, 2, 3, 4]));


// function trapwater(arr){
//     let n=arr.length
//     if(n===0) return 0
//     let leftmax= new Array(n)
//     let rightmax= new Array(n)
//     leftmax[0]=arr[0]
//     for(let i=1;i<n;i++){
//         if(leftmax[i-1]>arr[i]){
//             leftmax[i]=leftmax[i-1]
//         }
//         else{
//             leftmax[i]=arr[i]
//         }
//     }
//     rightmax[n-1]= arr[n-1]
//     for(let i=n-2;i>=0;i--){
//         if(rightmax[i+1]>arr[i]){
//             rightmax[i]=rightmax[i+1]
//         }
//         else{
//             rightmax[i]=arr[i]
//         }
//     }
//     let water=0
//     for(let i=0;i<n;i++){
//         let minheight=0
//         if(leftmax[i]>rightmax[i]){
//             minheight=rightmax[i]
//         }
//         else{
//             minheight=leftmax[i]
//         }
//         water+= minheight-arr[i]
//     }
//     return water
// }

    




































































































// javascript question and answers


//1) what is the disfference between == and === in javascript

// == is the loose equality operator which compares two values for equaltity after type coercion this means it
//  converts the operands to the same type  before comparing
// === is the strict equality operator which compares both values an their types without performing type conversion 
// examples 

// primitives 

// 100 === 100 => true
// "5" === 5 =>false

//objects

// let obj1={a:1}
// let obj2={a:1}
// obj1 === obj2 =>false(different memory reference)
// let obj3 = obj1
// obj1 === obj3 =>true

// let obj={a:1}
// let obj2=obj => same memory reference
// console.log(obj2===obj) => true

//arrays

// let arr1 = [1,2,3]
// let arr2 = [1,2,3]
// arr1 === arr2 => false
// arr1 === arr1 => true
// but arr1[0] === arr2[0] => true (comparing values)

// let arr1=[1,2,3]
// let arr2=arr1 => same memory reference
// console.log(arr1===arr2) =>true

//function

//function a() {}
//function b() {}
//a===b => false
//a===a => true

// same for the == operator

//2) what would by the result of 3+2+"7"

// 57

//3) is javascript compiled or interpreted

// javascript is mostly interpreted but modern browsers also compile it just-in-time to make it faster
// the browser reads you javascript code line by line and runs it directly
// modern browsers (like chromes v8 engine) mfirst translate parts of you code into machine code while running it , 
// so the computer can execute it much faster

// 4) whats the return-value difference between x++ and ++x

// x++: post-increment=> returns the old value , then increments
// ++x: pre-increment=> increments first then returns the new value

//example

// let x=5 
// console.log(x++) => 5
// console.log(x) => 6
// let y=5
//console.log(++y) => 6
//console.log(y) => 6

// let a=5
// let b=a++
//console.log(a) => 6
//console.log(b) => 5

// let x=5
//console.log(x++ + ++x) => 5 + 7 =12

//4) what is the difference between var,let,and const  and what is the temporal dead zone

// var : declares variables with function or global scope and allows re-declaration and updates within the same scope
// let : declares variables with block scope allowing updates but  not re-declaration within the same block
// const : declares block-scoped variables that cannot be reassigned after their initial assignment

//temporal dead zone(TDZ) :its the period between entering a scope and the point where a let or const variable is declared.
//during this time , accessing the variable causes referenceError, because the variable exists but hasnt been  initialzed yet



//example 
// console.log(x)
// let x=10 => referenceError 
// console.log(y)
// var y = 10 => undefined 

//5) what is variable scope in javascript

//global scope: outermost level
//local scope : inner functions can access variables from their parent functions due to lexical scoping
//function scope: variables are confined to the function they are declared in
//block scope : variables declared with let or const are confined to the nearest block

//example
 
//local scope

// function outer(){
//     let outerVar="i am from oter function"

//     function inner(){
//         console.log(outerVar) inner can access parents variable
//     }
//     inner()
// }
// outer()

//function scope

// function testfuncscope(){
//     var funcvar = "fekfsjfl"
//     console.log(funcvar)
// }
// testfuncscope()

//block scope

// if(true){
//     let block='jhwekjfwl'
//     const block2='sdjjd'
//     console.log(block)
//     console.log(block2)
// }

//6) what the difference between lexical and dynamic scoping

//lexical scoping                              

// scope is decided at write time
// inner functions look for variables in the environment where they are defined, not where they are called 
// javascript uses lexical scoping

//example

// let name ='global'
// function outer(){
//     let name = 'outer'
//      function inner(){
//         console.log(name)
//      }
//      return inner
// }
// outer(); output:'outer'
 

//dynamic scoping

// scoping is decided at run-time 
// the function would look up variables in the callers environment not where it was defined
// javascript doesnt support tis but lets imagine

// let name ="global"
//  function outer(){
//     let name ='outer'
//     inner()

// }

// function inner(){
//     console.log(name)
// }
// in dynamic scoping , inner() would look into outer() scope when called
// outer()
// dynamic scoping result would be : outer
// but in js (lexical scoping),result is : global

//7) what is the use of isNaN and how is it differernt from Number.isNaN

// the number isNan function determines whether the passed value is NaN(Not a Number) and is of the type Number 
// in javascript  the value Nan is considered a type of number . it returns true if the argument is not a number 
// , else it returns false 

//8)  what is negative infinity

// the negative infinity is a constant value represents the lowest available value it means that no other number 
// is lesser than this value. it can be generate using a self made function or by an arithmetic operation. javascript 
// shows the negative infinity  value as -infinity

//9) why is typeof null === 'object'
 
//its along standing historical bug in the original typeof tag encoding that cant be fixed wthout breking the web 
//null is a primitive , but type of null returrns object
               
//10) is it possible to break javascript code into several lines 

// yes it is a absolutely possible to break javascript code into multiple lines for better readability and maintainability
// examples
// let sum=
// 10+
// 20+
// 30
// console.log(Sum)

//11) what are truthy and falsy values in javascript

//falsy:false,0,empty string, null, undefined
//truthy:everything else (eg: any now empty string ,any non zero number, objects, arrays)

//11) what are undeclared and undefined  variables

 //undefined : it occurrs when a variable is declare  but not assign any value undefined is not a keyword
 //undeclared it occurs when we try to access any variable which is not initialize or declare  earlier 
 // using the var or const keyword if we use typeof operator to get the value of an undeclare variable 
 // we will face the runtime  error with the trturn value as undefine the scope of the undefined the scope 
 // of the undecalre variables is always global

//12) how to delete property specific values

// let gfg={course:'dsa',duration:30}
// delete gfg.course
// console.log(gfg)

//13) what is template literals and when do you use them

// we use then as ${item}

//14) can closures leak memory

//javascript closures capture variables from their outer scope but if not managed properly they can sometimes 
// lead to memory leaks

//memory leak possiblitiy : closues can leak memory when they unintentionally keep reference to variables or 
// objects that are no longer needed this prevents the garbage collector from freeing that memory

//15) does javascript allow multiple  inheritance

//javascript does not support multiple inheritance in the traditional sense but it provides ways to reuse and combine 
// functionality .

//16) is javascript statically typed or dynamically typed

// javascipt is dynamically typed because we dont have to tell javascript what kind of data a variable will hold when you 
// create it the type is decided auto maticlly when the program runs

//17) what is the 'this' keyword in javascript

// functions in javascript are essential object like objects it can be assign to variables pass to other furntions and 
// return from functions . and much like objects they have their own properties this stores the cururnt execution context 
// of the  javascript program

//18) explain the working of timers in javascript also explain the drawbacks of using the timer,if any

// javascript provides timers to schedule tasks after  a delay or at regular intervals these ar not part of the js engine 
// itself but come from the browser or node.js environment context

//settimeout

//executes a function once after a specified delay 

//setInterval

//executes a function repeatedly at a specified intervl until cleared

//clearTimeout/ clearinterval

//used to stop ascheduled timer

//19) what is the difference between viewstate and sessionState

// viewstate: it is specific to a single page in a session
// sessionstate: it is user specific that can access all the data on the web pages

//20) how to submit a form using javascript

// you can use document.form[0].submit() method to submit the form in javascript

//21) what is a template literal in javascript

// a template literal in javascript is a way to define strings that allow embedded expressions and multi-line formatting it
// uses backticks(`) instead of quotes and supports ${} for embedding variables or expressions inside the string

//22) what is a higher-order function in javascript

// a higher-order function in javascript is a function that either takes one or more functions as arguments or returns a 
// function as its result . these functions allow for more abstract and reusable code enabling functional programming patterns

//example

// map() and filter() are higher-order function because they take call back functions as arguments

//23) what is the difference between call() and apply() methods

// call() method : it calls the method taking the owner object as argument . this keyword this refers to the owner of the function
// or the object it belong to we can call a methods, we can call a method that can be used on different objects

// apply() method : the apply() method is used to write methods which can used on different objects it is different from the 
// function call() because it takes arguments as an array

//24) is javscript single threaded or multi-threaded

// javascript is single threaded but it uses asynchronous features to handle multiple tasks efficiently

// javascript runs on a single main thread meaning it execution one commands at a time in a sequence
// its was designed this way to simplify programming for the browser and avoid issues like race conditions when accessing the dom

//25) what is lexical scope in javascript

// lexical scope in javascript  refers to the way variables are resolved based on their location in the source code a variables
// scope is determined by the position of the code where it is defined and it is accessible to any nested functions or blocks
// this menas that functions have access to variables in their own scope and the outer (lexical) scopes , but not to variables in
// inner scopes

//example

// let outer = "I am outside"
// function inner(){
//     console.log(outer)
// }
// inner()

//26) what is this keyword and how does the call-site affect it

// javascript uses the this keyword as a reference to the object that is currently executing the code but its value depends 
// on the call site

// global/function context : in non-strict mode this refers to the global object in strict mode it is undefined

// in non-strict mode, this inside a functioin refers to the global object
// in strict mode , this is undefined

// object method : when a function is called as a method of an object this refers to that object

// when a function is called as a method of an object, this refers to that object

// constructor function /class : when used inside a constructor or clss this refers to  the newly created instance

// when using new, this refers to the newly created instance

// explicit binding:using call(),apply(), or bind() you can explicitly set what this refers to

// you can manually set this

// arrow functions : unlike normal functions arrow functions dont have their own this instead they capture this from their 
// surrounding scope

// they capture this from their surrounding scope

//27) what is called variabel typing in javascript 

//the variable typing is the type of variable used to store a number and using that same variable to assign a string

//example
//geeks = 42
//geeks = "geeksforgeeks"

//28) what is hoisting in javascript 

// hoisting in javascript is the behavior where variable and function declarations are moved to the top of their containing  
// scope duiring compilation before the code is executed

//29) explain how to detect the operating system on the client machine

// to detect the operating system  on the  client machine one can simply use navigator.app version or navigator.userAgent 
// property the navigator app version property is a read only property and it returns the string that represents the version
// information of the browser

//30) what are the types of popup boxes avbailable in javascript 

// there are three types of pop boces available  in javascript 
// alert
// confirm
// prompt 

//31) what are javascript modules and how do you import/export them

// javascript modules allow  you to split your code into smaller , reusable pieces they enable the export of varibles functions
// or objects from on file an the import of them into another to export an element you use export. to import it you use import 

//32) explain the concept of memoization in javascript

//memoization in javascript is an optimization technique that stores the results of expensive function calls and reuse them when 
// the same inputs occur again . this reduces the number if computations by caching  the results.
// memoization is typically implemented using an object or a map to store function  arguments and their correspoinding results.
// when the function is called with the same arguments the cached result is returned instead of recalculating it this improves 
//performance especially for functions with repeated calls and expensive

//33)explain the concept of memoization in javascript 

// memoization in javascript is an optimixzation technique that stores the results of expensive function calls and reuses then 
// when the same inputs occur again this reduce the number of computations by caching the results
// memoizartion is typically implemented using an object or a map to store function arguments and their corresponding results 
// .when the function is called with the same arguments the cached result is returned instead of recalculating it .this improves
// performance especially for functions with repeated calls and expensive computations

//34) how do call ,apply, and bind change this 

//javascript lets you control this using call,apply and bind they set whata this points to when a function runs and differ in
//  when they run and how they run and how they accept arguments 

//call : inckes the function immediately setting this to the first argument remaining argrument; remaining argumrnts are passed 
// one-by-one
//apply: invokes the function immediately like a call but takes the arguments as a single array
//bind: does not run immediately returns a new function with this permanently set ,javascript lets you control this using call,
// apply and bind ,they set what this points to when a function runs and differ in when they run and how hey accept arguments

//35) what is the strict mode in javascript and how can it be enabled

//strict mode is a new feature in ECMAScript 5 that allows you ot place a program or a functio in a strict operating context 
// this strict context prevents certain actions from being taken and throws more exceptions the statement use strict instructs
// the browser to us the strict mode which is a reduced and safer feature set of javascript

//36) explain the concept of promises and how they work

// a promise in javascript is an object that represents the result of an asynchronous operation it can be in one of three states:
//pending ,fulfilled(resolved),or rejected

//you create a promise using new promise(), passing an executor function widht resolve and reject callbacks when the operation 
// succeeds ,resolve() is called; if it fails , reject() is used promises are handled with .then() for success and catch()
// for failure they can be chained to handle sequences of asynchronous tasks in a more readable way

//37) how to explain closures in javascript and when to use it

// A closure is created when a function remembers the variables frim its outer scope even after that outer function has finished 
// executing
// in javascript , functions remember where they were defined (their lexical scope) ,not where they are called

// function outerFunction(){
//     let counter =0
//     function innnerFunction(){
//         counter++
//         console.log(counter)
//     }
//     return innnerFunction
// }
// const closureExample = outerFunction()
//  closureExample()
//  closureExample()
//  closureExample()

//38) illustrate and explain hoisting

// during the creation phase (before code runs),javascript moves variable and functions declarations to the top of 
// the their scope

// only declarations are hoisted,not initializations/assignments
// the scope could be function scope or global scope

//39) define differents between primitive and non-primitive

// primitive data types

// these are the basic, immutable building blocks of javascript

// examples: string,number,bigint,boolean,undefined,null,symbol

// non-primitive

// these are objects

//examples: object,array,function,date,regExp 

//40) call , apply and bind detailed explaination

// imagine you have three kids- ramu, somu and babu
// each of them knows how to play - but only ramu has the play function

// example
// const ramu={
//     name:'ramu',
//     play: function(toy){
//         console.log(this.name + 'is playing with' + toy)
//     }
// }

// now only ramu can call ramu.play('car')
// but what if somu or babu also wants to play using the same play function

// 1) call()

// you can borrow ramu play function and tell who should be this 
 
// const somu={name:'somu'}
// ramu.play.call(somu,'ball')

// output
//  somu is playing with ball

// 2) apply()

//its just like call but you give the toys in an array
// const babu= {name:'babu'}
// ramu.play.apply(babu,['train])

// output
//babu is playing with train

// 3) bind()
// this one is a little different - it doesnt play right away
// it ties the play function to another kid so they can play later

// const somuplaylater= ramu.play.bind(somu,'kite')
// somuplaylater()

// output 
// somu is playing with kite

// in short

// call() -calls ther function immediately, passing arguments one by one
// apply() -calls the function immediately, passing arguments as an array
// bind() -returns a new function that you can call later
    



























//namasthe javascript

//note

// javascript is a synchronous single-threaded language
// single threaded: which means execute one command at a time

// in this code x is undefined and getname

// console.log(getname)
//  console.log(x)
//  var x=7
//  function getname(){
//     console.log("namste javascript")
//  }
//  getname()

// reason  due to var the x is initialize to undefined so it shows undefined

//how the function works in javascript and variavle environment

//when you call a function in javascript

//* memory is allocated for that functions execution
//* a variable environment is created inside the function:
//                                                        stores all the functions variables
//                                                        stores function parameters
//                                                        stores any inner function declarations
//* the function executes line by line using its variable environment
//* after execution finishes its execution context is destroyed 

// variable environment(VE)

//the variable environment is like a box created whenever a function is invoked

//1) Synchronous

// means line by line execution one statement runs only after the previous one finishes

// when to use
// use when operations are quick and sequential
//* math calculatiion
//* simple loops 
//* DOM changes that must happen in order

//2) asynchronous

//code that doesnt block execution some tasks take time instead of waiting .javascript continues executing the next code
// //examples
// console.log('start')
// setTimeout(() => {
//     console.log('async task finished')
// }, 2000);
// console.log('end')

// when to use
// use when tasks are time=consuming or depend on outside systems
//* API calls (fetch user data)
//* database queries
//* file i/o (reading large files)
//* Timers

//3) callbacks (old async handling)
//a function passed as an argument to naother function executed later

// function fetchdata(callback){
//     console.log('fetching data ...')
//     setTimeout(() => {
//         callback('here is your data')
//     }, 2000);
// }
// fetchdata((data)=>{
//     console.log(data)
// })

//when to use callbacks

// use when you need to execute code ony after another task finishes

//4) promises

// a promises is an object representing the future value of an async operation
// it can be in 3 states
//* pending
//* resolved
//* rejected

// let promise =new promise((resolve,reject)=>{
//     let success =true
//     if(success){
//         resolve("task completed")
//     }
//     else{
//         reject('task failed')
//     }
// })

// promise.then((message)=>console.log(message)).catch((err)=>console.log(err))

//when to use callbacks

//use when you need to execute code only after another task finishes

//5) async/await

//a modern way to handle promises
//* async makes a function always return a promise
//* await pauses execution until the promise resolves

// function getdata(){
//     return new promise((resolve)=>{
//         setTimeout(() => {
//             resolve('data received')
//         }, 2000);
//     })
// }
// async function fetchdata(){
//     console.log('start')
//     let result = await getdata()
//     console.log(result)
//     console.log('end')
// }

// fetchdata()

// when to use 

//use when you want cleaner async handling without nested callbacks
//* chaining multiple async steps
//* handling success/error clearly
//* waiting for multiple async tasks(promise.all)

// react hook explaination

// function counter(){
//     const [count,setCount]=useState(0)
//     return(
//         <div>
//             <p>count:{count}</p>
//             <button onClick={()=>setCount(count+1)}>increase</button>
//         </div>
//     )
// }

//use when component needs to remember values between renders

// useEffect

//runs side effects (things outside reacts rendering)
//use when you need data fetching,event listeners,or cleanup

// usecontext

//access global data without prop drilling
//use fwhen multiple components needd the same data                  

// useRef 

// creates a mutable object that doesnt cause re-renders when changed
// use when you need to store values or access DOM element directly

// useMemo

// caches expensive calculations to improve performance runs only when dependencies change
// use when calculations are expensive and shouldnt re-run unnecessarily

// useCallback

// memorizes a function so it doesnt get recreated on every render useful when passing functions to child components
// use when padssing functions to children to prevent unnecessary re-renders

// useReducer

// alternative to usestate ,useful for complex state logic
// use when state transitions are complex or multiple actions

// custom Hooks

// you create your own hook by reusing logic
// use to reuse logic across components

