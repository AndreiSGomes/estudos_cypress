const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r4kw4w',
  e2e: {
    baseUrl: 'https://front.serverest.dev',
    setupNodeEvents(on, config) {

    },
  },
});
