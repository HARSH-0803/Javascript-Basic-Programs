// Number is odd or even :

// let num = Number(prompt("Enter the number for checking whether is even or odd :"));

// if(num % 2 == 0){
//     console.log("The number is even ");
// }
// else {
//     console.log("The number is odd")
// }



// Largest of the three number :

// let a = prompt("Enter the value of a :");   
// let b = prompt("Enter the value of b :");   
// let c = prompt("Enter the value of c :"); 

// if((a > b) && (a > c)){
//     console.log("The largest is a : " + a);
// }
// else if((b > a) && (b > c)){
//     console.log("The largest is b : " + b);
// }
// else {
//     console.log("The largest is c : " + c);
// }


//  Reverse a Number :

// let num = prompt("Enter the number you want to reverse :");
// let reverse = 0;

// while (num > 0){
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num/10);
// }
// console.log(reverse);

// Palindrome number : 

// let num = Number(prompt("Enter a number :"));
// let original = num ;
// let reverse = 0;
// while(num > 0){
//     let digit = num % 10;
//     reverse = reverse * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log("Reverse number is :" + reverse);

// if(original === reverse){
//     console.log("Number is Palindrome");
// }
// else {
//     console.log("Number is not Palindrome");
// }

// Factorial of the Number :


// let num = Number(prompt("Enter the number for factorial"));
// let result = 1;
// for(let i = 1 ; i <= num ; i++ ){
//   result = result*i;
// }         
// console.log(result);

// Fibonacci Series :

// let n = Number(prompt("Enter how many fibonacci number you want : "));
// let a = 0 ;
// let b = 1 ;
// for(let i = 0 ; i < n ; i++ ){
//     console.log(a)
//     let next = a + b ;
//     a = b ;
//     b = next ;
// }      



// Check whether the given number is prime or not :

// let n = Number(prompt("Enter the number : "));

// let IsPrime = true ;
// if(n <= 1){
//     IsPrime = false ;
// }
// else {
//     for(let i = 2 ; i < n ; i++){
//         if( n % i === 0){
//             IsPrime = false;
//             break ;
//         }
//     }
// }
// if(IsPrime){
//     console.log("It is a prime number !!");
// }
// else {
//     console.log("Not a prime number !!"); 
// }


// Sum of digit of a number :

// let n = Number(prompt("Enter the number you want sum : "));
// let sum = 0;
// while (n > 0) {
//     let digit = n % 10;          // to pick out the last digit
//     sum = sum + digit;          // to add the last digit to the sum which value is zero
//     n = Math.floor(n / 10);      // to remove the last digit from the set of the number given by the user so that it doen't include in the next iteration
// }
// console.log(sum);


// Count vowels in string :

// let str = prompt("Enter the string to count the vowel ");
// let vowel = "aeiou";
// let count = 0 ;
// for(let i = 0 ; i < str.length ; i++){
//     let char = str[i].toLowerCase()
//     if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
//     count++;
//     }
// }
// console.log("Number of vowels in the string is : " +count);


// Reverse a string :

// let str = prompt("Enter the string");
// let reversed = "";
// for(let i = str.length - 1 ; i >= 0 ; i--){
//     reversed += str[i]
// }
// console.log(reversed)



