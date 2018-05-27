var fs = require('fs');
var confiPas={};
function takedata(){
    confiPas=fs.readFile('/home/test/Escritorio/protractor/config/configPas.json', 'utf8', function (err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        console.log(obj);
        console.log("obj");
        return obj;
      });
      return confiPas;
}

exports.config = {
    framework: 'jasmine',
    baseUrl: 'computerdaw.tk',
    showColors: true,
    defaultTimeoutInterval: 100000,
    isVerbose: true,
    specs: ['pas.js'],
    chromeOnly: true,
    directConnect: true,
    params: {
        "config":takedata()
    },
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

