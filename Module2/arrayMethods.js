// Basic inbuilt array methods in Java Script.

// POP() - pop() method is used to delete the last element of an array

var arr1 = [10,20,30,40,50];
var popped = arr1.pop(); 
console.log("This is the popped value is" , popped);
console.log(arr1); // OUTPUT: [10,20,30,40]



// PUSH() - push() method is used to add an element at the end of an array

var arr2 = [10,20,30,40,50];
var pushed = arr2.push(60);
console.log(arr2); // OUTPUT: [10,20,30,40,50,60]



// SHIFT() - shift() method is used to delete the first element of an array

var arr3 = [10,20,30,40,50];
var shifted = arr3.shift();
console.log("The shifted value is ", shifted);
console.log(arr3); // OUTPUT: [20,30,40,50]


// UNSHIFT() - unshift() method is used to add elements at the beginning of an array

var arr4 = [20,30,40,50,60];
var unshifted = arr4.unshift(10);
// console.log(unshifted);
console.log(arr4); // OUTPUT: [10,20,30,40,50,60]