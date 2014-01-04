

//Get a random item from an array
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
var  randomItem = items[Math.floor(Math.random() * items.length)];

//Get a random number in a specific range
var x = Math.floor(Math.random() * (max - min + 1)) + min;

//Generate an array of numbers with numbers from 0 to max
var numbersArray = [] , max = 100;
for( var i=1; numbersArray.push(i++) < max;);  // numbers = [0,1,2,3 ... 100]

// Generate a random set of alphanumeric characters
function generateRandomAlphaNum(len) {
    var rdmstring = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);

}

//Shuffle an array of numbers
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
/* the array numbers will be equal for example to [120, 5, 228, -215, 400, 458, -85411, 122205]  */
