
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

// get input//

 document.addEventListener("submit", createChoice);

function createChoice (e) {
    const newChoice = document.querySelector("select").value;
     e.preventDefault();

    alert (`You chose ${newChoice} as your favorite breed.`);
 }

 // save input

