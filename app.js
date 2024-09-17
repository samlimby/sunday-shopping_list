
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
        let accordionItems = [];

        accordionArrow.addEventListener("click", function(){
            console.log("arrow selected")
            let id = accordionArrow.id;
            if (accordionStatus[id]) {  
                accordionArrow.classList.add("accordion-arrow");
                accordionArrow.classList.remove("accordion-arrow_rotate");
                const accordionBody = accordion.querySelector("#accordion-container");

                if (accordionBody) {
                    accordionBody.remove();
                }

                accordion.classList.remove("accordion_active");
                accordion.classList.add("accordion"); 
                accordionStatus[id] = false; 
            } else {
                accordionArrow.classList.add("accordion-arrow_rotate");
                accordionArrow.classList.remove("accordion-arrow");
                accordionStatus[id] = true; 
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
                    <p class="accordion-item_text">xxxx</p>
                `;
                accordionBody.appendChild(accordionItem);
                accordion.classList.remove("accordion"); 
                accordion.classList.add("accordion_active");

            }
            console.log(accordionStatus)
        });
    }
};

updateAccordion()



// accordion check box created through an input turning from placeholder to default
// once an check box is turned from default from placeholder, another checkbox is created below
// when an accordion check box is created push it into an accordionitems array
// the value of an accordion items loops over the accordionitem array and creates as many items as there is length of the array
// when the accordion is closed all the items are destroyed
// accordionitem array is stored within the accordionstatus object under the specific property for the accordion as generated on line 18
  

