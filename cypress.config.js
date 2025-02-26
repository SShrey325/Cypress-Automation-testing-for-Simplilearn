const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs");
const Papa = require("papaparse");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.simplilearn.com",
    specPattern: "cypress/e2e/**/*.cy.js", // Ensure Cypress finds tests
    defaultCommandTimeout: 10000, // 10 seconds for all commands
    pageLoadTimeout: 60000, // 60 seconds for page loads
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("task", {
        readCSV() {
          const filePath = path.join(__dirname, "cypress", "fixtures", "course-urls.csv");
          const csvFile = fs.readFileSync(filePath, "utf8");

          return new Promise((resolve) => {
            Papa.parse(csvFile, {
              header: true,
              complete: (result) => resolve(result.data),
            });
          });
        },
      });
    },
  },
});
