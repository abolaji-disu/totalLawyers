import page1 from "./pages/page1.js";
import page2 from "./pages/page2.js";

const pages = {
    1: page1,
    2: page2
}


function loadPage(pageNumber) {
    document.querySelector('.right-section').innerHTML = pages[pageNumber];
    console.log( document.querySelector('.right-section'));
    attachNextStepHandler(); // Re-attach event handlers after loading new content
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
    loadPage(1);
});