const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8080',
    viewportWidth : 1280,
    viewportHeight : 720,
    video : true,
    videoCompression : 32,
    screenshots : true,
    watchForFileChanges : false,
    setupNodeEvents(on, config) {
      specPattern: 'cypress/e2e/**/*.spec.js'
      
    },
  },
});
