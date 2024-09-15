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
        <p class="accordion_title">xxxxx</p>
        <img src="icons/down-icon.png" id="accordion-chevron">
    `;
    accordionSection.appendChild(baseAccordion);

    const accordionArrow = document.getElementById("accordion-chevron");
    accordionArrow.addEventListener("click", function(){
        console.log('pressed12')
        removeAccordion(baseAccordion)
    })
}

function removeAccordion(element) {
    element.remove()
}

