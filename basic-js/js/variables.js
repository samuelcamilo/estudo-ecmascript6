
// variable types...

var _name1 = 'Ana'; // string
var _name2 = 'Json'; // string
var _name3 = `${_name1} ${_name2}`; // string
var _text = "This is first line\n and this is second line"; // string

var _age = 24; // int
var _isValid = true; // boolean
var _club; // undefined
var _food = null; // null
var _symbol = Symbol(); // symbol
var _object = {}; // complex object

// show...

console.log(`Name ${_name1} is typeof ${typeof _name1}`);
console.log(`Name ${_name2} is typeof ${typeof _name2}`);
console.log(`Name ${_name3} is typeof ${typeof _name3}`);
console.log(`Text ${_text} is typeof ${typeof _text}`);

console.log(`Age ${_age} is typeof ${typeof _age}`);
console.log(`is valid? ${_isValid} is typeof ${typeof _isValid}`);
console.log(`Club ${_club} is typeof ${typeof _club}`);
console.log(`Food ${_food} is typeof ${typeof _food}`);
// console.log(`Symbol ${_symbol} is typeof ${typeof _symbol}`); 
console.log(`Object ${_object} is typeof ${typeof _object}`);