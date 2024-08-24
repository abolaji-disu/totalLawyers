// loadPage.test.js

import { loadPage, attachNextStepHandler } from './main';

// Mock HTML structure
document.body.innerHTML = `
  <div class="right-section"></div>
  <div id="sub1"></div>
  <div class="next-step" data-next="2"></div>
`;

jest.mock('./pages/page1.js', () => '<div>Page 1 Content</div>', { virtual: true });
jest.mock('./pages/page2.js', () => '<div>Page 2 Content</div>', { virtual: true });
jest.mock('./pages/page3.js', () => '<div>Page 3 Content</div>', { virtual: true });
jest.mock('./pages/page4.js', () => '<div>Page 4 Content</div>', { virtual: true });
jest.mock('./pages/page5.js', () => '<div>Page 5 Content</div>', { virtual: true });

describe('loadPage function', () => {
    beforeEach(() => {
        // Clear DOM changes before each test
        document.querySelector('.right-section').innerHTML = '';
        document.querySelector('#sub1').innerHTML = '';
    });

    test('loads page content into the right section', () => {
        loadPage('1');
        expect(document.querySelector('.right-section').innerHTML).toBe('<div>Page 1 Content</div>');
    });

    test('updates subheader text correctly for page 5', () => {
        loadPage('5');
        expect(document.querySelector('#sub1').innerHTML).toBe('Enter your details for a free consult');
    });

    test('updates subheader text correctly for other pages', () => {
        loadPage('2');
        expect(document.querySelector('#sub1').innerHTML).toBe(' Answer a few questions to get started');
    });
});

describe('attachNextStepHandler function', () => {
    beforeEach(() => {
        // Set up initial state
        loadPage('1');
    });

    test('attaches click event handler to next step buttons', () => {
        attachNextStepHandler();

        const button = document.querySelector('.next-step');
        button.click();

        expect(document.querySelector('.right-section').innerHTML).toBe('<div>Page 2 Content</div>');
    });
});
