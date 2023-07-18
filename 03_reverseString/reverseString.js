const reverseString = function(str) {
    let str2 = "";
    for(let i = str.length - 1; i >= 0; i-- ) {
        str2 = str2 + str.charAt(i);
    }
    return str2;
};
console.log(reverseString("hello there"));


// const reverseString = function(str) {
//     return str.split("").reverse().join("");
//     /*
//     str - string - "siddharth"
//     .split("") - function for splitting the str - ["s", "i", "d", "d", "h", "a", "r", "t", "h"]
//     .reverse() - reverse the array of string - ["h", "t", "r", "a", "h", "d", "d", "i", "s"]
//     .join("") - join the value without spacing
//     */
// }

// Do not edit below this line
module.exports = reverseString;
