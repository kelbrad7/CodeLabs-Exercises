
//Array of breeds
const breedsArr = ["Labrador Retriever", "French Bulldog", "German Shepherd", "Golden Retriever", "Border Collie", "Poodle", "Beagle", "Rottweiler", "German Shorthaired Pointer", "Dachshund", "Corgi", "Australian Shepherd", "Yorkshire Terrier", "Boxer", "Great Dane","Husky", "Cavaleir King Charles", "Doberman Pinscher", "Minature Schnauzer","Shih Tzu","Boston Terrier", "Bernese Mountain Dog","Pomeranian","Havanese", "Cane Corso", "Bulldog", "Goldendoodle", "Labradoodle"]
breedsArr.sort();


//function to add array of breeds to select box

let newOption;

    for (breed of breedsArr){
    const mySelect  = document.querySelector("select");
    newOption       = document.createElement("option");
    newOption.innerHTML = breed;
    newOption.value     = breed;

    mySelect.appendChild(newOption);
    
    //console.log (newOption);
}

//*****add event listener for submit button//

 document.addEventListener("submit", createChoice);

 //*****global variables
 const newChoice = ("");
 //const locStorArr = [];
 //const count = {};
 //breedKeys= Object.keys(sorted)
 //*****get input
function createChoice (e) {
    const newChoice = document.querySelector("select").value;
     e.preventDefault();

breedChoiceArr= [];
breedChoiceArr.push(newChoice);
console.log(breedChoiceArr);

    //alert (`You chose ${newChoice} as your favorite breed.`);

//***** store input in local storage
// locStorArr.push(newChoice);
// localStorage.setItem("chosenBreed",(JSON.stringify(locStorArr)));
// //console.log(locStorArr);


// //***** get stored array from local storage
// let storedArr = JSON.parse(localStorage.getItem("chosenBreed"));
// storedArr.sort()
//console.log(storedArr);

//count the number of occurrences for each breed
const counts = {};
for (const num of breedChoiceArr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
// console.log(counts);

//sort by number of occurrences for each bread
let entries = Object.entries (counts);
let sorted = entries.sort (function (a,b) {return b[1]-a[1]});

console.log (sorted);


list = document.querySelector('ul');
choice = "";
for (let item of sorted){
choice = document.createElement("li");
choice.innerHTML=item;

list.appendChild(choice);
}
}


