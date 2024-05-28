const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    viewportWidth : 1280,
    viewportHeight : 720,
    video : true,
    videoCompression : 32,
    screenshots : true,
    screenshotOnRunFailure: true,
    watchForFileChanges : false,

    env: {
      alertFilePath: 'alert-text.txt',
    },

    setupNodeEvents(on, config) {
      on('task', {
        readAlertText() {
          const filePath = path.resolve(__dirname, config.env.alertFilePath);
          return fs.readFileSync(filePath, 'utf8');
        },
      });
    },

    specPattern: 'cypress/e2e/**/*.spec.js',
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'mocha.json'
    },
    browser: 'chrome' // Set Chrome as the default browser
  },
});
