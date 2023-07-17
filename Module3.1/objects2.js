// Creating an object containing nested objects and arrays

var myDetails = {
    firstName : 'Hemanth',
    lastName : 'Kumar',
    age : 26,
    address : {
        city : 'Madanapalle',
        state : 'Andhra Pradesh',
        pincode : 517325
    },
    // Nested object and Array
    job : {
        company :'In10s Technologies',
        designation:'Associate Solution Engineer',
        experience : '2yr 8mos',
        department : 'Development',
        projects : ['ITD','Axis Bank','Airtel']
    }    
}

console.log(myDetails);

// Dot notation to access values of object

console.log(myDetails.firstName + " "+myDetails.lastName);

// Accessing nested object values using dot notation

console.log(myDetails.address.city);

// Accessing values of nested array inside an object

console.log(myDetails.job.projects[0]);


// Accesing nested objects using bracket notation

console.log(myDetails["address"]["city"]);

// Accessing nested array inside an object

console.log(myDetails["job"]["projects"][1]);