let addBtn = document.querySelector(".add-btn");
let model = document.querySelector(".model-cont");
let allPriorityColor = document.querySelectorAll(".priority-color");
let textArea = document.querySelector(".textarea-cont");
let mainCont = document.querySelector(".main-cont");
let delBtn = document.querySelector(".remove-btn");

let addModel = true;
let removeFlag = false;
let modelPriorityColor = "black";

var uid = new ShortUniqueId();

addBtn.addEventListener("click",function(){
    if (addModel){
        model.style.display = "flex";
        addModel = false;
    }else{
        model.style.display = "none";
        addModel = true;
    }

});

for (let i=0;i<allPriorityColor.length;i++){
    //console.log(allPriorityColor[i]);
    allPriorityColor[i].addEventListener("click",function(){
        for (let j=0;j<allPriorityColor.length;j++){
            if(allPriorityColor[j].classList.contains("active")){
                allPriorityColor[j].classList.remove("active");
            }
        }
        allPriorityColor[i].classList.add("active");
        //console.log(allPriorityColor[i].classList[1]);
        modelPriorityColor = allPriorityColor[i].classList[1]
    });
}
textArea.addEventListener("keydown",function(e){
    let key = e.key;
    let TextAr = textArea.value;
    //let color = findactiveColor();
    //console.log(color);
    if (key == "Enter"){
        createTicket(TextAr);
        textArea.value="";
        model.style.display="none";
        addModel = true;
    }
});

function createTicket(text){
        let id = uid.rnd();
        //console.log(id);
        let ticketCont = document.createElement('div');
        ticketCont.setAttribute("class","ticket-cont");
        ticketCont.innerHTML = `<div class="ticket-color ${modelPriorityColor}"></div>
                                <div class="ticket-id">${id}</div>
                                <div class="ticket-area">${text}</div>`;
                                //console.log(ticketCont);
        mainCont.append(ticketCont);
        ticketCont.addEventListener("click",function(){
            if (removeFlag){
                ticketCont.remove();
            }
        });

};


// function findactiveColor(){
//     let priorty;
//     for(let i=0;i<allPriorityColor.length;i++){
//         if (allPriorityColor[i].classList.contains("active")){
//             priorty = allPriorityColor[i].classList[1]; // Get the class name representing the color
//         }
//     }
//     return priorty;
// }

delBtn.addEventListener("click",function(){
    if (removeFlag){
        delBtn.style.color = "black";
        removeFlag = false;
    }else{
        delBtn.style.color = "red";
        removeFlag = true;
    }
    
});

