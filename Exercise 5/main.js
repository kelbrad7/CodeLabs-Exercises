
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

// event listener//

 document.addEventListener("submit", createChoice);

 //global variables
 const newChoice = ("");
 const locStorArr = [];
 const count = {};

 //function to get and store input
function createChoice (e) {
    const newChoice = document.querySelector("select").value;
     e.preventDefault();

    //alert (`You chose ${newChoice} as your favorite breed.`);

locStorArr.push(newChoice);
localStorage.setItem("chosenBreed",(JSON.stringify(locStorArr)));
//console.log(locStorArr);

let storedArr = JSON.parse(localStorage.getItem("chosenBreed"));
storedArr.sort()
//console.log(storedArr);


const counts = {};

for (const num of storedArr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}
// console.log(counts);

// Object.entries(counts).sort((a,b) => b[1]-a[1]);

let entries = Object.entries (counts);
let sorted = entries.sort (function (a,b) {return b[1]-a[1]});

console.log (sorted);

}


