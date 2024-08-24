import page1 from "./pages/page1.js";
import page2 from "./pages/page2.js";
import page3 from "./pages/page3.js";
import page4 from "./pages/page4.js";
import page5 from "./pages/page5.js";

const pages = {
    1: page1,
    2: page2,
    3: page3,
    4: page4,
    5: page5
}


function loadPage(pageNumber) {
    console.log(pageNumber)
    const appSubheader = document.querySelector('#sub1');
    if (pageNumber === "5"){
        appSubheader.innerHTML = 'Enter your details for a free consult';
    }else {
        appSubheader.innerHTML = ' Answer a few questions to get started';
    }
    document.querySelector('.right-section').innerHTML = pages[pageNumber];
    attachNextStepHandler();
}

function attachNextStepHandler() {
    const nextButtons = document.querySelectorAll('.next-step');
    nextButtons.forEach(button => {
        button.addEventListener('click', function () {
            const nextPageNumber = this.getAttribute('data-next');
            loadPage(nextPageNumber);
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    loadPage("1");
});


// function moveElementBasedOnScreenWidth() {
//     const mediaQuery = window.matchMedia("(max-width: 800px)");
//     const rightSection = document.querySelector('.right-section');
//     const mainContainer = document.querySelector('.main-container');
//     const lowerContent = document.querySelector('.lower-content');
//     const baseParagraph = document.querySelector('.base-paragraph');
//
//     if (mediaQuery.matches) {
//         if (rightSection && lowerContent) {
//             lowerContent.parentNode.insertBefore(rightSection, lowerContent.nextSibling);
//         }
//     } else {
//         if (rightSection && mainContainer) {
//             mainContainer.appendChild(rightSection);
//         }
//     }
// }
//
// // Initial check on page load
// moveElementBasedOnScreenWidth();
//
// // Add an event listener for window resize
// window.addEventListener('resize', moveElementBasedOnScreenWidth);