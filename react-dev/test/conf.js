var fs = require('fs');


exports.config = {
    framework: 'jasmine',
    baseUrl: 'computerdaw.tk',
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true,
    specs: ['pas.js'],
    chromeOnly: true,
    directConnect: true,
    onComplete: () => {
        console.log('onComplete');
    },

    onCleanUp: () => {
        console.log('onCleanUp');
    },

    afterLaunch: () => {
        console.log('afterLaunch');
    },
    capabilities: {
        browserName: 'chrome'
      }
  };

