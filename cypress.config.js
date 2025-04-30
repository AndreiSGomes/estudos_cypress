const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "t2v3tw",
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    setupNodeEvents(on, config) {
      
    },
  },
});
