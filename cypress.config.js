const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "qnoiec",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1440,
    viewportHeight: 800,
    baseUrl: "https://loginxp.vercel.app"
  }
});
