const addNotes = document.querySelector ("#add_notes");
const cssRadio = document.querySelector("#css_radio")
const jsRadio = document.querySelector ("#js_radio");
const form = document.querySelector ("#notes_form");

//add event listener

form.addEventListener ("submit", checkRadios);
form.addEventListener ("submit", createSnip);
//form.addEventListener ("submit", storeSnipsArray);


//function to createSnip
function checkRadios(e) {
    
    if (cssRadio.checked == false && jsRadio.checked == false) {
        alert("Please choose CSS or JS");
        e.preventDefault();}
        

    //console.log("checkRadios");
}

let snip = "";
function createSnip() {
     snip = addNotes.value;
     const snipsCSS =[];
    //let snipsJS =[];
     //if (cssRadio.checked==true){ 
        snipsCSS.push(snip);
        console.log(snipsCSS)};
     
    //console.log (snip);}


 //function storeSnipsArray(){
     
    
       // localStorage.setItem("CSS",JSON.stringify(snipsCSS));}
    // else if (jsRadio.checked == true) {
    //     snipsJS.push(snip);
    //     localStorage.setItem("JS",JSON.stringify(snipsJS))};}
    



