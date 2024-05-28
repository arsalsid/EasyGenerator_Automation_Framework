# Created By Muhammad Arsalan for EasyGenerator End To End Automation_Framework by using Cypress with mocha framework.

## Description:

This project contains automated tests for **Practice Page for Easy Generator** using JavaScript with Cypress and Mocha framework. The tests are designed to run both in UI mode and Headless mode, interacting with the application hosted locally on port 8080. Also, The tests follows Page Object Model Design pattern with Mochawsome reporting on headless mode. Moreover, The verison controlling we used for code deployment is GitHub.


## Dependencies:

- Node.js: v20.12.2
- Cypress: ^13.10.0
- cypress-file-upload: ^5.0.8
- http-server: ^14.1.1
- Mocha: ^10.0.0
- Mochawesome: ^7.1.3
- Mochawesome Report Generator: ^6.2.0
- start-server-and-test: ^1.15.4


## Prerequisites for Windows and Mac OS

- Clone the project from GitHub public Repository
- Open VS Code as compiler
- Install dependencies by running **npm install**
- Execute command **npm init** incase, if you have not installed node.js in your machine
- Execute command **npm install cypress --save-dev** incase, if you have not installed cypress in your machine


## Execution Method of Tests

- For running test on Ui mode execute command **npm run test:ui** on cmd or vs code terminal
- For running test on Headless mode execute command **npm run test:headless** on cmd or vs code terminal


##  Generating Reports on Headless Mode

After running tests, Mochawesome HTML reports will be generated automatically. You can find the reports in the **mochawesome-report**  directory.

### Successfull Execution Report
![Execution Successfull Report](cypress/images/Successfull%20Execution%20Result.png)

### Failure Execution Report
![Execution Failed Report](cypress/images/Failure%20Execution%20Result.png)

## Screenshots

**Proof of Testing incase of any test failure.**

![Test Failure Screenshot](cypress/images/Screenshot%20on%20Failure%20Execution.png)


## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a GitHub issue or submit a pull request.




# Thank you!!!