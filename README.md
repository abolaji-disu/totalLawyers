# Project Name

**TOTAL LAWYERS UI**

## Overview

This project is a UI for total lawyers that enables users to fill and submit their information electronically.
It includes setting up a vanilla JavaScript environment, configuring Jest for testing, and ensuring compatibility 
with modern JavaScript features like ES Modules.

## Table of Contents

1. [Installation](#installation)
2. [Project Setup](#project-setup)
3. [Configuration](#configuration)
4. [Testing](#testing)
5. [Usage](#usage)
6. [Key Decisions](#key-decisions)
7. [Future Improvements](#future-improvements)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/abolaji-disu/totalLawyers.git
   cd totalLawyers
   ```

2. **Install Dependencies**:
   Make sure you have Node.js installed. Run the following command to install the required packages:
   ```bash
   npm install
   ```

## Project Setup

1. **Initialize the Project**:
   Initialized a new Node.js project with:
   ```bash
   npm init -y
   ```

2. **Set Up Babel for ES6+ Support**:
   Installed Babel to enable support for modern JavaScript (ES6+):
   ```bash
   npm install --save-dev babel-jest @babel/core @babel/preset-env
   ```

3. **Configure Babel**:
   Created a `.babelrc` or `babel.config.js` file with the following configuration to transpile ES6+ code:
   ```json
   {
     "presets": ["@babel/preset-env"]
   }
   ```

4. **Install Jest**:
   Installed Jest for testing the JavaScript code:
   ```bash
   npm install --save-dev jest jest-environment-jsdom
   ```

## Configuration

1. **Jest Configuration**:
   Configured Jest in the `package.json` to use the `jsdom` environment and Babel for transformations:
   ```json
   {
     "scripts": {
       "test": "jest"
     },
     "jest": {
       "testEnvironment": "jest-environment-jsdom",
       "transform": {
         "^.+\.jsx?$": "babel-jest"
       }
     }
   }
   ```

2. **Export and Import Functions**:
   Ensured that JavaScript functions (`loadPage` and `attachNextStepHandler`) were properly exported in `main.js`:
   ```javascript
   export function loadPage(pageNumber) {
     // Function implementation
   }

   export function attachNextStepHandler() {
     // Function implementation
   }
   ```

## Testing

1. **Create Test Files**:
   Created a test file `loadPage.test.js` to test the functionality of the JavaScript functions using Jest.

2. **Mock HTML Structure**:
   In the test file, mocked the HTML structure to simulate the browser environment using `jsdom`.

3. **Write Tests**:
   Wrote unit tests for `loadPage` and `attachNextStepHandler` to ensure they perform as expected.

4. **Run Tests**:
   Executed the tests using the Jest test runner:
   ```bash
   npm test
   ```

## Usage

1. **Run the Project**:
   Include instructions on how to run your project, if applicable.

2. **Run Tests**:
   Run the following command to execute all tests:
   ```bash
   npm test
   ```

## Key Decisions

1. **Why Jest and Babel?**:
    - Chose Jest for its simplicity and powerful testing features, and Babel to ensure compatibility with ES6+ syntax.

2. **Modular Code Structure**:
   - Employed ES Module syntax (import and export) to enhance the modularity and maintainability of the codebase.
   - Using ES Modules allows each JavaScript file to be its own independent module, facilitating clear separation of concerns and easier code reuse. 
   - This structure enables developers to break down the application into smaller, manageable pieces, which can be individually developed, tested, and maintained. 
   - It also improves the scalability of the project as new features can be added without disrupting existing functionality.


## Future Improvements

1. **Expand Test Coverage**:
    - Add more unit tests to cover edge cases and ensure robust functionality.

2. **Create More Breakpoints**:
   - Add more media query breakpoints to ensure it fits rightly for all screen sizes.
   
3. **Documentation**:
    - Improve documentation to include more details on each function and its use cases.

## Conclusion

This project showcases the setup of a JavaScript environment with modern tools and testing frameworks. 
The steps provided ensure that the environment is compatible with ES6+ syntax and is properly configured for 
development and testing.

