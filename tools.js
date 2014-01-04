//Verify that a given argument is an array
function isArray(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
//Verify that a given argument is a number
function isNumber(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
//Transform the arguments object into an array
var argArray = Array.prototype.slice.call(arguments);

//Append an array to another array
var array1 = [12 , "foo" , {name "Joe"} , -2458];

var array2 = ["Doe" , 555 , 100];
Array.prototype.push.apply(array1, array2);
/* array1 will be equal to  [12 , "foo" , {name "Joe"} , -2458 , "Doe" , 555 , 100] */

//Get the max or the min in an array of numbers
var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411]; 
var maxInNumbers = Math.max.apply(Math, numbers); 
var minInNumbers = Math.min.apply(Math, numbers);

//Empty an array
var myArray = [12 , 222 , 1000 ];  
myArray.length = 0; // myArray will be equal to [].

//Use the map() function method to loop through an array’s items
var squares = [1,2,3,4].map(function (val) {  
    return val * val;  
}); 
// squares will be equal to [1, 4, 9, 16] 

//Check the properties of an object when using a for-in loop
for (var name in object) {  
    if (object.hasOwnProperty(name)) { 
        // do something with name                    
    }  
}
// Avoid using for-in loop for arrays
//Use switch/case statement with numeric ranges
function getCategory(age) {  
    var category = "";  
    switch (true) {  
        case isNaN(age):  
            category = "not an age";  
            break;  
        case (age >= 50):  
            category = "Old";  
            break;  
        case (age <= 20):  
            category = "Baby";  
            break;  
        default:  
            category = "Young";  
            break;  
    };  
    return category;  
}  
getCategory(5);  // will return "Baby"

//An HTML escaper function
function escapeHTML(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", "\"": "&quot;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}
