const addNotes = document.querySelector ("#add_notes");
const cssRadio = document.querySelector("#css_radio")
const jsRadio = document.querySelector ("#js_radio");
const form = document.querySelector ("#notes_form");
     //const snipsCSS=[];
     const snipsJS=[];
     let cssNote = "";
     let jsNote = "";
//add event listener

form.addEventListener ("submit", checkRadios);
form.addEventListener ("submit", storeSnipsArray);
// form.addEventListener ("submit", displayList);


//function to createSnip
function checkRadios() {
    
    if (cssRadio.checked == false && jsRadio.checked == false) {
        alert("Please choose CSS or JS");
       // e.preventDefault();}
        

    //console.log("checkRadios");
    }}
    
 function storeSnipsArray(e) {
     e.preventDefault();
    if (cssRadio.checked==true) {
        cssNote = addNotes.value;
        //console.log(cssNote);
    }
        else if (jsRadio.checked== true) {
            jsNote = addNotes.value;
            //console.log(jsNote);
    } 

    const snipsCSS = JSON.parse(localStorage.getItem("CSS")) || [];
    if (cssRadio.checked==true) {
        snipsCSS.push(cssNote);
        localStorage.setItem("CSS",JSON.stringify(snipsCSS))
        const list = document.querySelector("#css_notes");
        const itemCSS="";
         for (let snip of snipsCSS){
             itemCSS = document.createElement("li");
             itemCSS.innerHTML = snip;
             itemCSS.className=note}
         list.appendChild(itemCSS);
        console.log (snipsCSS);
}
        else if (jsRadio.checked== true) {
        const oldDataJS = localStorage.getItem("JS");
       const snipJS = JSON.parse(oldDataJS) || [];
    snipsJS.push(jsNote);
   localStorage.setItem("JS",JSON.stringify(snipsJS))
   console.log (snipsJS);}
            form.reset();
        }
      

    //  function displayList () {
    //  if (cssRadio.checked==true) {
    //    const list = document.querySelector("#css_notes");
    //    const itemCSS="";
    //     for (let snip of snipsCSS){
    //         itemCSS = document.createElement("li");
    //         itemCSS.innerHTML = snip;
    //         itemCSS.className=note}
    //     list.appendChild(itemCSS);
    //     console.log (snipCSS);
    // }     } 
    
 