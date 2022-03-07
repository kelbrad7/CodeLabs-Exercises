const addNotes = document.querySelector ("#add_notes");
const cssRadio = document.querySelector("#css_radio")
const jsRadio = document.querySelector ("#js_radio");
const form = document.querySelector ("#notes_form");
const addBtn = document.querySelector("#add_btn");

    
     
//add event listener

addBtn.addEventListener ("click", checkRadios);
addBtn.addEventListener ("click", storeSnipsArray);



//***function to check if radio has been selected***//
function checkRadios() {
    
    if (cssRadio.checked == false && jsRadio.checked == false) {
        alert("Please choose CSS or JS")
        return;
            }
    
    }
     //*** list variables ***//
     let cssNote = "";
     let jsNote = "";
     const listCS = document.querySelector("#css_ul");
     const listJS = document.querySelector("#js_ul");
    const snipsCSS = JSON.parse(localStorage.getItem("CSS")) || [];
    const snipsJS = JSON.parse(localStorage.getItem("JS")) || [];

    //*** grab value***//
 function storeSnipsArray(e) {
     e.preventDefault();
    if (cssRadio.checked==true) {
        cssNote = addNotes.value;
    }
        else if (jsRadio.checked== true) {
            jsNote = addNotes.value;
    } 
    if (cssNote ==false && jsNote== false) {
        alert ("Please add your note.");
        return;}
    
    //** push to local storage, append to list ***//
    if (cssRadio.checked==true) {
            snipsCSS.push(cssNote);
            const newCSS = document.createElement ("li");
            newCSS.innerHTML = cssNote;
            newCSS.className = "cssNote";
            listCS.appendChild(newCSS);
            const removeBut = document.createElement("button");
            removeBut.type = "submit";
            removeBut.innerText = "X";
            removeBut.className = "del_btn";
            newCSS.appendChild(removeBut);
    
            localStorage.setItem("CSS",JSON.stringify(snipsCSS))
        }
        else if (jsRadio.checked== true) {
            snipsJS.push(jsNote);
            const newJS = document.createElement ("li");
            newJS.innerHTML = jsNote;
            newJS.className = "jsNote";
            listJS.appendChild(newJS);
            const removeBut = document.createElement("button");
            removeBut.type = "submit";
            removeBut.innerText = "X";
            removeBut.className = "del_btn";
            newJS.appendChild(removeBut);
           localStorage.setItem("JS",JSON.stringify(snipsJS))
        }
            form.reset();
        }        
        

        //*** populate lists on page load ***/
     function displayList () {
       
         for (let snipC of snipsCSS){
            const itemCSS = document.createElement("li");
            itemCSS.innerHTML = snipC;
            itemCSS.className= "cssNote"
        listCS.appendChild(itemCSS);
        const removeBut = document.createElement("button");
            removeBut.type = "submit";
            removeBut.innerText = "X";
            removeBut.className = "del_btn";
            itemCSS.appendChild(removeBut);}
 
            for(let snipJ of snipsJS ) {
                const itemJS = document.createElement("li");
                itemJS.innerHTML = snipJ;
                itemJS.className = "jsNote";
            listJS.appendChild(itemJS);
            const removeBut = document.createElement("button");
            removeBut.type = "submit";
            removeBut.innerText = "X";
            removeBut.className = "del_btn";
            itemJS.appendChild(removeBut);
        }
             //localStorage.clear();
            }
            const delBtn = document.querySelector(".del_btn");

window.onload=function(){
            
            
            delBtn.addEventListener("click",removeNote);
            function removeNote(){
                (console.log("delcheck"))}}


            
            
 