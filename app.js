const createElement = document.getElementById("create-element"); 
const accordionSection = document.getElementById("accordion_section");

let accordionArray = [];
let accordionStatus = {}; 

createElement.addEventListener("click", function() {
    createAccordion();
});

function createAccordion() {
    let accordion = document.createElement("div");
    accordion.classList.add("accordion");

    let accordionId = `accordion-${Date.now()}`; 
    accordion.id = accordionId;

    accordion.innerHTML = `
        <div class="accordion-title_group">
            <input class="accordion_title" placeholder="New List">
            <img src="icons/down-icon.png" id="chevron-${accordionId}" class="accordion-arrow">
        </div>
    `;
    accordionSection.appendChild(accordion);
    accordionArray.push(accordion);
    accordionStatus[accordionId] = false; 
    
    const accordionArrow = accordion.querySelector(".accordion-arrow");
    accordionArrow.addEventListener("click", function() {
        toggleAccordion(accordionId);
    });
}

function toggleAccordion(accordionId) {
    const accordion = document.getElementById(accordionId);
    const accordionArrow = document.getElementById(`chevron-${accordionId}`);
    
    if (!accordion) return;

    if (accordionStatus[accordionId]) {  
        accordionArrow.classList.add("accordion-arrow");
        accordionArrow.classList.remove("accordion-arrow_rotate");
        
        const accordionBody = accordion.querySelector(".accordion-body");
        if (accordionBody) {
            accordionBody.remove();
        }

        accordion.classList.remove("accordion_active");
        accordion.classList.add("accordion"); 
        accordionStatus[accordionId] = false; 
    } else {
        accordionArrow.classList.add("accordion-arrow_rotate");
        accordionArrow.classList.remove("accordion-arrow");
        
        accordionStatus[accordionId] = true; 
        
        const accordionBody = document.createElement("div");
        accordionBody.classList.add("accordion-body");
        accordionBody.id = "accordion-container";
        accordionBody.innerHTML = `
            <div id="accordion-divider" class="accordion-body_divider"><div>
            <div class="accordion-item></div>
        `;
        
        accordion.appendChild(accordionBody);
        
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionItem.id = "accordion-item";
        accordionItem.innerHTML = `
            <div class="unchecked"></div>
            <input class="accordion-item_text" placeholder="Type new note">
        `;
        
        accordionBody.appendChild(accordionItem);
        
        accordion.classList.remove("accordion"); 
        accordion.classList.add("accordion_active");

        const inputElement = accordionItem.querySelector('.accordion-item_text');

        accordionItem.addEventListener("keypress", function(event){
            if (event.key === "Enter") {
                console.log("enter pressed")
                newInput()
            }
        })

        accordionItem.addEventListener("keydown", function(event) {
            console.log("return pressed")
            if (event.key === "Backspace" && inputElement.value === "") {
                console.log("return pressed")
                removeInput(accordionItem)
            }
        })
    }
}

function newInput() {
    const accordionBody = document.querySelector("#accordion-container")
    console.log(accordionBody)
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");
    accordionItem.id = "accordion-item";
    accordionItem.innerHTML = `
        <div class="unchecked"></div>
        <input class="accordion-item_text" placeholder="Type new note">
    `;
    
    accordionBody.appendChild(accordionItem);

}

function removeInput(accordionId) {
    accordionId.remove();
}

