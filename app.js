// create and add content dynamically in the accordion with checkbox elements and have this be saved
// add checkbox element button to the accordion
// store the accordions in the array
// set the date of accordion creation in the title of the accordion
// ability to open and close the accordion 
// save to localStorage and Firebase/supabase

const createElement = document.getElementById("create-element"); 
const accordionSection = document.getElementById("accordion_section");
let accordionStatus = false;
let baseAccordion;
let accordionArrow;

createElement.addEventListener("click", function() {
    console.log("pressed")
    storedAccordion(true); 
});


function expandAccordion(accordionElement) {
    console.log("pressed213");
    if (!accordionElement) {
        console.error('Element not initialized'); 
        return;
    }

    if (accordionElement.classList.contains("accordion")) {
        console.log("test")
        let accordionBody = document.createElement("div");
        accordionBody.classList.add("accordion-body");
        accordionBody.innerHTML = `
            <div class="accordion-body_divider"><div>
            <div class="accordion-item"></div>
        `;
        accordionElement.appendChild(accordionBody);

        let accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionItem.innerHTML = `
            <div class="unchecked"></div>
            <p class="accordion-item_text">xxxx</p>
        `;
        accordionBody.appendChild(accordionItem);
        accordionElement.classList.replace("accordion", "accordion_active");
    } else {
        console.log("Invalid accordion action due to already being active!!!");
    }

    const accordionArrow = baseAccordion.querySelector(".accordion-arrow");
    accordionArrow.addEventListener("click", function () {
        console.log("pressed12");

        if (baseAccordion.classList.contains("accordion")) {
          expandAccordion(baseAccordion); 
          accordionArrow.classList.replace("accordion-arrow", "accordion-arrow_rotate");
        } else if (baseAccordion.classList.contains("accordion_active")) {
          collapseAccordion(baseAccordion); 
          accordionArrow.classList.replace("accordion-arrow_rotate", "accordion-arrow");
        }
    });
};

function collapseAccordion(accordionElement) {
    if (accordionElement.classList.contains("accordion_active")) {
        let accordionBody = accordionElement.querySelector(".accordion-body");
        if (accordionBody) {
            accordionElement.removeChild(accordionBody);
        }
        accordionElement.classList.replace("accordion_active", "accordion");
    } else {
        console.log("accordion has been closed already")
    }

};

function createAccordion() {
    accordionStatus = true;
    let baseAccordion = document.createElement("div");
    baseAccordion.classList.add("accordion");
    baseAccordion.innerHTML = `
        <div class="accordion-title_group">
            <p class="accordion_title">xxxxx</p>
            <img src="icons/down-icon.png" id="accordion-chevron" class="accordion-arrow">
        </div>
    `;
    accordionSection.appendChild(baseAccordion);

    const accordionArrow = baseAccordion.querySelector(".accordion-arrow");
    accordionArrow.addEventListener("click", function(){
        console.log('pressed12')
        if (baseAccordion.classList.contains("accordion")) {
            expandAccordion(baseAccordion)
            accordionArrow.classList.replace("accordion-arrow", "accordion-arrow_rotate");
        }
    });

    return baseAccordion
}

function storedAccordion(status) {
    if (status === true) {
        baseAccordion = createAccordion();
    } else {
        console.log("accordion not active")
    }
}

storedAccordion(accordionStatus)


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


function removeAccordion(element) {
    element.remove()
}

  

