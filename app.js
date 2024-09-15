// initialize and define DOM base elements
// create accordion elements when on click
// create and add content dynamically in the accordion with checkbox elements and have this be saved
// add checkbox element button to the accordion
// store the accordions in the array
// set the date of accordion creation in the title of the accordion
// ability to open and close the accordion 
// save to localStorage and Firebase/supabase

const createElement = document.getElementById("create-element"); 
const accordionSection = document.getElementById("accordion_section");

createElement.addEventListener("click", function() {
    console.log("pressed")
    createAccordion()
});

function createAccordion() {
    const baseAccordion = document.createElement("div");
    baseAccordion.classList.add("accordion");
    baseAccordion.innerHTML = `
        <div class="accordion-title_group">
            <p class="accordion_title">xxxxx</p>
            <img src="icons/down-icon.png" id="accordion-chevron" class="accordion-arrow">
        </div>
    `;
    accordionSection.appendChild(baseAccordion);

    const accordionArrow = document.getElementById("accordion-chevron");
    accordionArrow.addEventListener("click", function(){
        console.log('pressed12')
        if (baseAccordion.classList.contains("accordion")) {
            expandAccordion(baseAccordion)
            accordionArrow.classList.replace("accordion-arrow", "accordion-arrow_rotate");
        } else if (baseAccordion.classList.contains("accordion_active")) {
            expandAccordion(baseAccordion)
            accordionArrow.classList.replace("accordion-arrow_rotate", "accordion-arrow");
        }
    });
}

function removeAccordion(element) {
    element.remove()
}

function expandAccordion(element) {
    if (element.classList.contains("accordion")) {
        const accordionBody = document.createElement("div");
        accordionBody.classList.add("accordion-body");
        accordionBody.innerHTML = `
            <div class="accordion-body_divider"><div>
            <div class="accordion-item></div>
        `;
        element.appendChild(accordionBody);
        const accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionItem.innerHTML = `
            <div class="unchecked"></div>
            <p class="accordion-item_text">xxxx</p>
        `;
        accordionBody.appendChild(accordionItem);
        element.classList.replace("accordion", "accordion_active");
    } else {
        console.log("invalid accordion action due to already being active!!!")
    }
};

function collapseAccordion(element) {
    if (element.classList.contains("accordion-active")) {
        const accordionBody = document.querySelector("#accordion-body")
        element.style.display = "hidden";
    } else {
        console.log("a")
    }
}