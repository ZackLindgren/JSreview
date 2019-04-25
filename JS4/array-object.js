/*
    Zachary Lindgren
    4/24/19
    array-object.js
    The JavaScript file for the JS4 homework
 */

// this function takes an arrays and converts its contents into an object
// grouped by data types
const arrayConverter = function(arr)
{
    // setting up the arrays
    let strings = [];
    let numbers = [];
    let booleans = [];

    // looping through the input array and adding the elements to the correct array
    for (let element of arr)
    {
        if (typeof(element) === typeof(""))
        {
            strings.push(element);
        }
        else if (typeof(element) === typeof(0))
        {
            numbers.push(element);
        }
        else if (typeof(element) === typeof(true))
        {
            booleans.push(element);
        }
    }

    // creating the object and returning it
    return {
        strings: strings,
        numbers: numbers,
        booleans: booleans
    };
};

// creating a test array
let testArray = [1, "Hello", 0, false, "World", true];
let testObject = arrayConverter(testArray);

console.log(testObject);