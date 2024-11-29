const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

   viewportWidth:2000,
   viewportHeight:1500,

   "defaultCommandTimeout":20000,

"video":true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
