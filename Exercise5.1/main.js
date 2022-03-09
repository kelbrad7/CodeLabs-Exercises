const addNotes = document.querySelector ("#add_notes");
const cssRadio = document.querySelector("#css_radio")
const jsRadio = document.querySelector ("#js_radio");
const addBtn = document.querySelector("#add_btn");
const form = document.querySelector ("#notes_form");
const listCS = document.querySelector("#css_ul");
const listJS = document.querySelector("#js_ul");
const jsArray = JSON.parse(localStorage.getItem("JS")) || [];
const cssArray = JSON.parse(localStorage.getItem("CSS")) || [];
let cssNote = "";
let jsNote = "";


//***function to check if radio has been selected***//

addBtn.addEventListener ("click", checkInputs)
    
         //** check inputs and assign values  ***//

    function checkInputs() {
        if (cssRadio.checked==true) {
             cssNote = addNotes.value;
            }
        else if (jsRadio.checked== true) {
              jsNote = addNotes.value;
            } 
         else if (cssRadio.checked == false && jsRadio.checked == false) {
                alert("Please choose CSS or JS");
                return;
            }
        if (cssNote ==false && jsNote== false) {
                alert ("Please add your note.")
               return;
            }
        }

             //***create the lists **//

    addBtn.addEventListener ("click", createLists)
    function createLists(e){
    e.preventDefault();
     if (cssRadio.checked==true){
        const newCssLi = document.createElement ("li");
        newCssLi.innerText = cssNote;
        newCssLi.className = "cssNote";
        newCssLi.idName = cssNote;
        listCS.appendChild(newCssLi);
        const removeBut= document.createElement("button");
        removeBut.type = "submit";
        removeBut.innerText = "X";
        removeBut.className = "del_btn";
        newCssLi.appendChild(removeBut);
        cssArray.push(cssNote);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        form.reset();
        console.log(cssArray);
         }

        else if (jsRadio.checked== true){
        const newJsLi = document.createElement ("li");
        newJsLi.innerText = jsNote;
        newJsLi.className = "jsNote";
        listJS.appendChild(newJsLi);
        removeBut= document.createElement("button");
        removeBut.type = "submit";
        removeBut.innerHTML = "X";
        removeBut.className = "del_btn";
        newJsLi.appendChild(removeBut);
        jsArray.push(jsNote);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        console.log (jsArray);
        form.reset();
        }
     }

        //*** populate CSS list on page load ***/

    function populateNoteLists() {
            for (let note of cssArray){
        newCssLi = document.createElement("li");
        newCssLi.innerHTML = note;
        newCssLi.className= "cssNote"
        newCssLi.idName= note;
        listCS.appendChild(newCssLi);
        removeBut = document.createElement("button");
        removeBut.type = "submit";
        removeBut.innerText = "X";
        removeBut.className = "del_btn";
        newCssLi.appendChild(removeBut);
     }    
            for(let note of jsArray) {
        newJsLi= document.createElement("li");
        newJsLi.innerHTML = note;
        newJsLi.className = "jsNote";
        newJsLi.idName = note;
        listJS.appendChild(newJsLi);
        removeBut = document.createElement("button");
        removeBut.type = "submit";
        removeBut.innerHTML = "X";
        removeBut.className = "del_btn";
        newJsLi.appendChild(removeBut);
        }
            //localStorage.clear();
   }

         //***delete note***//

    listCS.addEventListener("click", function(e) {
        let target = e.target;
        const parent = target.parentNode.idName
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        for (notes of cssArray){
        if (notes===parent){
        const id = (cssArray.indexOf(notes))
        cssArray.splice(id,1);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        console.log (id)
        console.log(parent)
                    // console.log(notes);
                }
            }
        }})

    listJS.addEventListener("click", function(e) {
        let target = e.target;
            const parent = target.parentNode.idName
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        for (notes of jsArray){
        if (notes===parent){
        const id = (jsArray.indexOf(notes))
        jsArray.splice(id,1);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        console.log (id)
        console.log(parent)
                    // console.log(notes);
                }
            }
        }})


    
        
         
       

    

    