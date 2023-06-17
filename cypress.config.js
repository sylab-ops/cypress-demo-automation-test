const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        downloadFile
      })   
    },
  },
};
