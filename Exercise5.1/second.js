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
         else if (cssRadio.checked === false && jsRadio.checked === false) {
                alert("Please choose CSS or JS");
                return;
            }
        if (cssNote ===false && jsNote===false) {
                alert ("Please add your note.")
                form.reset();
               return;
            }
        }

             //***create the lists **//

    addBtn.addEventListener ("click", createLists)
    function createLists(e){
    e.preventDefault();
     if (cssRadio.checked==true){
        const newCssLi = document.createElement ("li");
        // newCssLi.innerText = cssNote;
        newCssLi.className = "cssNote";
        newCssLi.idName = cssNote;
        newCssLi.setAttribute("contentEditable", "false");
        addBtns (newCssLi);
        const newInput = document.createElement("input");
        listCS.appendChild(newCssLi);
        cssArray.push(cssNote);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        form.reset();
        console.log(cssArray);}
         

        else if (jsRadio.checked== true){
        const newJsLi = document.createElement ("li");
        newJsLi.innerText = jsNote;
        newJsLi.className = "jsNote";
        newJsLi.idName = jsNote;
        newJsLi.setAttribute("contentEditable", "false");
        listJS.appendChild(newJsLi);
        addBtns(newJsLi);
        jsArray.push(jsNote);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        console.log (jsArray);
        form.reset();
        }
     }

     function addBtns(list){
        const removeBtn= document.createElement("button");
        removeBtn.type = "submit";
        removeBtn.innerText = "X";
        removeBtn.className = "del_btn";
        removeBtn.setAttribute("contentEditable", "false");
        list.appendChild(removeBtn);
        const editBtn = document.createElement("button")
        editBtn.type = "submit";
        editBtn.innerText = "Edit";
        editBtn.className = "edit_btn";
        editBtn.setAttribute("contentEditable", "false");
        list.appendChild(editBtn);
        const doneBtn = document.createElement("button")
        doneBtn.type = "submit";
        doneBtn.innerText = "Done";
        doneBtn.className = "done_btn";
        doneBtn.setAttribute("contentEditable", "false");
        list.appendChild(doneBtn);
     }
        //*** populate CSS list on page load ***/

    function populateNoteLists() {
            for (let note of cssArray){
        newCssLi = document.createElement("li");
        newCssLi.innerHTML = note;
        newCssLi.className= "cssNote"
        newCssLi.idName= note;
        newCssLi.setAttribute("contentEditable", "false");
        listCS.appendChild(newCssLi);
        addBtns(newCssLi);
     }    
            for(let note of jsArray) {
        newJsLi= document.createElement("li");
        newJsLi.innerHTML = note;
        newJsLi.className = "jsNote";
        newJsLi.idName = note;
        newJsLi.setAttribute("contentEditable", "false");
        listJS.appendChild(newJsLi);
        addBtns(newJsLi);
        }
            
   }

         //***delete note***//

    listCS.addEventListener("click", function(e) {
        let target = e.target;
        const parentID = target.parentNode.idName
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        for (notes of cssArray){
        if (notes===parentID){
        const id = (cssArray.indexOf(notes))
        cssArray.splice(id,1);
        localStorage.setItem("CSS",JSON.stringify(cssArray));
        console.log (id)
        console.log(parentID)
     // console.log(notes);
                }
            }
        }})

    listJS.addEventListener("click", function(e) {
        let target = e.target;
            const parentID = target.parentNode.idName
    if (target.classList.contains("del_btn")) {
        target.parentNode.remove();
        for (notes of jsArray){
        if (notes===parentID){
        const id = (jsArray.indexOf(notes))
        jsArray.splice(id,1);
        localStorage.setItem("JS",JSON.stringify(jsArray));
        console.log (id)
        console.log(parentID)
                    // console.log(notes);
                }
            }
        }})
let id = ""
listCS.addEventListener("click", function(e) {
    let target = e.target;
    let parent = target.parentNode;
     const parentID = target.parentNode.childNodes[0].textContent
if (target.classList.contains("edit_btn")) {
    let oldInput = parentID;
    for (notes of cssArray){
    if (notes===parentID){
    id = (cssArray.indexOf(notes))}}}})

    //     listCS.addEventListener("click", function(e) {
    // if (e.target.classList.contains("done_btn")) {
    // const newText = e.target.parentNode.childNodes[0].textContent
    // cssArray.splice(id,1,newText);
    // localStorage.setItem("CSS",JSON.stringify(cssArray));
    // e.target.parentNode.setAttribute ("contentEditable", "false");

    // console.log (id)
    // console.log(parent)
    //      // console.log(notes);
    //                 }})
            //     }
            // }})
    
    
    

//  1. add Edit button to li
//  2. Either add Save button or change Edit to Save
//  3. Save current text.
//  4. use target.parentNode.replaceWith(element) to replace li with input
//  5. On save, Iterate through array to find index of oldtext, splice new text. 
//  6. set new array to local storage
    
        
         
       

    

    