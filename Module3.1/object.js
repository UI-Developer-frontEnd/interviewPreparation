// 1. What is an Object ?

// An Object is an collection of unordered collection of data, which are specified in key-value pairs.
// Each key-value pair in an object is called a property.
// The most commonly used way to create an object is object literal notation

// CREATING AN OBJECT IS OBJECT LITERAL NOTATION

var person = {
    fName : 'Hemanth',
    lName : 'Kumar',
    age : 26,
    emplyed : true
}
console.log(person); // OUTPUT: { fName: 'Hemanth', lName: 'Kumar', age: 26, emplyed: true }



// 2.How to acces vales of an object ?

// There are two ways to access the values of an object.
//     - dot notation
//     - bracket notation

var personAge = person.age; // DOT NOTATION
console.log("The age of a person is ",personAge);

var personFirstName =  person["fName"] // BRACKET NOTATION
console.log("The first name of the person is ",personFirstName);