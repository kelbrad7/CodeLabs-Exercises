
const dogNames = {b:"Zoe", c:"Maggie",a:"Ruby"}
const keys = Object.keys (dogNames)
function sortObject(){
keys.sort();
const values =Object.values (dogNames)
values.sort();
console.log (keys);
console.log(values);}

sortObject();