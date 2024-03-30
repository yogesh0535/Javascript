let str='This is string revision.    ';
let str1='thnx'


console.log(str);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

// charat--> character at given index
console.log(str.charAt(3));

// concat--> adds two string
console.log(str.concat(str1));


// indexof--> finds index of given character.
console.log(str.indexOf('r'));

// slice -> cuts the part of string
console.log(str.slice(1,10));

// split --> split the part of string.
console.log(str1.split(2,10));

// tolower --> converts all characters to lower case
console.log(str.toLowerCase());
console.log(str.toUpperCase());

// trim --> removes spaces of string from both ends
console.log(str.trim());


// template literals
console.log(`Hello, ${str1}`);
