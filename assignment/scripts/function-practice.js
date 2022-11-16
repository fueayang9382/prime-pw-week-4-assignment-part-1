console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
console.log('1.---------------------------------------------start');

function hello() {
  console.log('Hello World!');
  return 'Hello World!';
}
hello();


// Call the function to test
console.log('Test - should say "Hello World!"', hello());

console.log('1.---------------------------------------------end');


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
console.log('2.---------------------------------------------start');

function helloName(name) {
  console.log('Hello,' + name );
  return helloName; 
}
helloName(' Jesse');
helloName(' Me');
helloName(' You');
// Remember to call the function to test

console.log('2.---------------------------------------------end');
console.log('3.---------------------------------------------start');
// 3. Function to add two numbers together & return the result
function addNumbers( ) {
  console.log('Doing addNumbers functionof 4 + 5');
let x = 4 + 5;
return x; 
}
// return firstNumber + secondNumber;

console.log( 'the sum is:', addNumbers());


console.log('3.---------------------------------------------End');




console.log('4.---------------------------------------------start');
// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3 ){
  console.log('multiply three numbers');
let answer = num1 * num2 * num3;
return answer; 
}

console.log('multiplying three numbers 2 & 5 & 10:', multiplyThree(2,5,10) );
console.log('multiplying three numbers 6 & 6 & 7:', multiplyThree(6,6,7) );
console.log('multiplying three numbers 5 & 6 & 5:', multiplyThree(5,6,5) );
console.log('4.---------------------------------------------end');




console.log('5.---------------------------------------------start');
// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise

function isPositive(number ) {
  if (number > 0){
    
    return true;
  }
  else{
    return false;
  }
}


console.log('only positives are true', isPositive(3));
console.log('only positives are true', isPositive(0));
console.log('only positives are true', isPositive(-3));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );




console.log('5.---------------------------------------------end');








// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
console.log('6.---------------------------------------------start');
array = [1, 2, 3, 4];
last =  function(array, n){
    if (array == null)
      return void 0; 
    if (n == null)
    return array[array.length - 1];
  return arrray.slice(Math.max(array.length - n, 0));
};

//function getLast( array ) {

//}

console.log('this is the last item of the array:', last([1,2,3,4]));


console.log('6.---------------------------------------------end');




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
console.log('7.---------------------------------------------start');
const array2 = [5, 10, 15];  
console.log('this is the array', array2)
function find( value, array2 ){
    for( i = 0; i< array2.length; i++)
        if(value === array2[i]){
          console.log('the value is in the array2 ;therefore,: ');
            return true;
        }
        
          console.log('the value is not in the array ;therefore,:');
          return false; 
        
  
  
}


console.log( 'is the value 4 in the array:', find(4, array2));
console.log( 'is the value 5 in the array:', find(5, array2));
console.log( 'is the value 10 in the array:', find(10, array2));
console.log( 'is the value 15 in the array:', find(15, array2));



console.log('7.---------------------------------------------end');

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
console.log('8.---------------------------------------------start');
function isFirstLetter(letter, string) {
      return true;
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );




console.log('8.---------------------------------------------end');



// 9. Function to return the sum of all numbers in an array
console.log('9.---------------------------------------------start');
let array3 = [2,4,6]
let sum = 0;
function sumAll() {
    while( sum <= 12){
      console.log(sum + array3.length);
    }
      sum++; 
    

  // TODO: loop to add items
  return sum;
}







console.log(' this is the total sum of the array',sum);

console.log('9.---------------------------------------------end');

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
console.log('10.---------------------------------------------start');













console.log('10.---------------------------------------------end');



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
console.log('11.---------------------------------------------start');








console.log('11.---------------------------------------------end');
