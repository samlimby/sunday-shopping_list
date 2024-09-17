// create and add content dynamically in the accordion with checkbox elements and have this be saved
// add checkbox element button to the accordion
// store the accordions in the array
// set the date of accordion creation in the title of the accordion
// ability to open and close the accordion 
// save to localStorage and Firebase/supabase

const createElement = document.getElementById("create-element"); 
const accordionSection = document.getElementById("accordion_section");

let accordionArray = [];
let accordionStatus = {};

createElement.addEventListener("click", function() {
    createAccordion();
    updateAccordion();
});

function createAccordion() {
    let accordion = document.createElement("div");
    accordion.classList.add("accordion");
    accordion.id = "accordion-item";

    let accordionId = `accordion-chevron-${Date.now()}`;

    accordion.innerHTML = `
        <div class="accordion-title_group">
            <p class="accordion_title">xxxxx</p>
            <img src="icons/down-icon.png" id="${accordionId}" class="accordion-arrow">
        </div>
    `;
    accordionSection.appendChild(accordion);
    accordionArray.push(accordion);
    accordionStatus[accordionId] = false;
    console.log(accordionArray);
    return accordion
}

function updateAccordion() {
    console.log(accordionStatus)
    for (let i = 0; i < accordionArray.length; i++) {
        const accordion = accordionArray[i];
        const accordionArrow = accordion.querySelector(".accordion-arrow");

        accordionArrow.addEventListener("click", function(){
            console.log("arrow selected")
            let id = accordionArrow.id;
            if (accordionStatus[id]) {
                accordionArrow.classList.add("accordion-arrow");
                accordionArrow.classList.remove("accordion-arrow_rotate");
                accordionStatus[id] = false;
            } else {
                accordionArrow.classList.add("accordion-arrow_rotate");
                accordionArrow.classList.remove("accordion-arrow");
                accordionStatus[id] = true;  
            }
            console.log(accordionStatus)
        });
    }
};

updateAccordion()


  

