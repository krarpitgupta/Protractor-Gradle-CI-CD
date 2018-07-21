var reqConfig = require('./config/configuration.json');

var reqBrowserName = reqConfig.reqBrowser;

var HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
    //--The address of a running selenium server. We need to give this command if we execute test manually else not
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // --to invoke default browser
    directConnect: true,
    allScriptsTimeout: 20000,
  
    // --set browser configuration, specify "reqBrowser":"chrome#firefox" in Configuration.json file for both browser
    // else specify "reqBrowser":"firefox" for a particular browser
    multiCapabilities: [
        {
            'browserName': reqBrowserName,
            'chromeOptions': {
                args: [ "--headless", "--disable-gpu", "--window-size=1920,1080" ]
            }
        },
    ],

    //--Here we specify the name of the specs files.
    specs : [
        './tests/testLogin/testLogin.js',
        './tests/testRegistration/testCompanyRegistration.js',
        './tests/testRegistration/testRegistration.js',
        './tests/testAddCustomer/testAddCustomer.js',
        './tests/testAddEnquiry/testAddEnquiry.js',
        './tests/testAddQuotation/testAddQuotation.js' ,
        './tests/testAddShipment/testAddShipment.js' ,
    ],

    //--we can define which framework we are using
    //framework: 'jasmine2'
    jasmineNodeOpts: {
        defaultTimeoutInterval: 60000
    },
    
    onPrepare: function() {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: 'report',
        // Create images subfolder for screenshots
        screenshotsSubfolder: 'screenshots',
        // Create jsons subfolder for screenshots
        jsonsSubfolder: 'jsons',
        // Screenshots of failures only
        takeScreenShotsOnlyForFailedSpecs: true,
        // File name
        docName: 'TestReports.html',
        // Disable Browser logs
        gatherBrowserLogs: false,
        //Clear the base directory
        preserveDirectory: false
        }).getJasmine2Reporter());
    }
};
