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
    loadPage(1);
});