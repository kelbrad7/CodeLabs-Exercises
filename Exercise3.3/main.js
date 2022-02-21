
const dogNames = {b:"Zoe", c:"Maggie",a:"Ruby"}
const keys = Object.keys (dogNames)
const values =Object.values (dogNames)
function sortObject(){
keys.sort();
values.sort();
console.log (keys);
console.log(values);}

sortObject();
