const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 1080,
  viewportWidth: 1920,

  e2e: {
    baseUrl: "https://novo-sig.homolog.ledes.net/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
