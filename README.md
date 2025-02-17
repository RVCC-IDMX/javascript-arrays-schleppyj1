# JS Unit Testing with Vitest with Coverage

## JS Arrays

[![Tested with Vitest](https://img.shields.io/badge/tested_with-vitest-99424f.svg)](https://vitest.dev/)

This project is written in [Node.js](https://nodejs.org/en/) and is tested with [Vitest](https://vitest.dev/) – a blazing fast unit test framework.

- - -

## Vitest: Pass/Fail vs. Coverage

### Pass/Fail Status
- **What It Indicates:**
  Whether each individual test case ran successfully. A "pass" means the actual output matched the expected output for that specific scenario.
- **Purpose:**
  Confirm that your code behaves as intended for the cases you’ve explicitly tested.

### Code Coverage
- **What It Measures:**
  The percentage of your source code that gets executed during testing. This includes:
  - **Statements:** The proportion of executed statements.
  - **Branches:** The proportion of executed branches in conditional logic.
  - **Functions:** The proportion of executed functions.
  - **Lines:** The proportion of executed lines of code.
- **Purpose:**
  Reveal untested parts of your code, highlighting potential blind spots even if all tests pass.

### Summary
- **Pass/Fail Status:**
  Provides immediate feedback on whether tests pass or fail.
- **Coverage:**
  Offers insight into how thoroughly your code is being tested.

### The Assignment

Initially, when you run the tests the output may show failures (as illustrated below). This is expected until you complete the required changes in the source files.

![example: all tests fail](https://user-images.githubusercontent.com/13385801/189547187-9a6e14e8-0d1f-45e0-bde7-db0ffee09bff.png)

### Instructions

#### 1\. Install your dependencies

```
npm install
```

#### 2\. Run tests on a single file

Start with the first file:

```
npm run test:1
```

This command runs `tests/arrays-01.test.js` with verbose reporting. You can run the other test files individually using:

*   `npm run test:2`
*   `npm run test:3`
*   `npm run test:4`

#### 3\. Edit and test each file sequentially

Edit the source files (e.g. `src/arrays-01.js`, `src/arrays-02.js`, etc.) according to the instructions within each file. Save your changes, then run the corresponding test command to check your work.

#### 4\. Run all tests

Once you have completed all the individual files, run all tests together with:

```
npm test
```
This will run the tests and also create a coverage report.

#### 5\. Measuring Coverage

Coverage reports are generated in the `coverage` folder. To view the report, open the `index.html` file within that folder using Live Server (`Go Live`).

You can use the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for Visual Studio Code.

#### 6\. Completing the Assignment

When all tests pass, commit your changes and push to your repository. GitHub will run the same tests and report pass/fail.

- - -

For more details on Vitest, please see the [Vitest documentation](https://vitest.dev/).