var actionLib = require('../../library/action.js');

var pageCustomerAgentRegistration = function(){

    this.fileUploadCustomerPath = by.xpath("//input[@type='file'][@ng-model='customer.file']");
    this.fileUploadAgentPath = by.xpath("//input[@type='file'][@ng-model='agent.file']");
    this.buttonNext = by.xpath("//*[@ng-click=\"saveMetaConfigTab('app.finance')\"]");
    this.custDataValidationMessage = by.xpath("//*[@class='ui-notification ng-scope success clickable']/div");
    this.agentDataValidationMessage = by.xpath("//*[@class='ui-notification ng-scope success clickable']/div");
    this.msgSuccessfulFileUpload = by.className("ui-notification ng-scope success clickable");
    this.strChildLocator = by.className("message ng-binding");
    this.iconFinanceSetup = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Finance Setup')]");
    
    //specify "none" for parameters which you don't want to fill
    this.signUpCustomerAgentUploadTab = function(fileUploadCustomer, fileUploadAgent){
        
        if (fileUploadCustomer != "none"){
            actionLib.uploadFile(this.fileUploadCustomerPath, fileUploadCustomer);
        }
        if (fileUploadAgent != "none"){
            actionLib.uploadFile(this.fileUploadAgentPath, fileUploadAgent);
        }
    };
};
module.exports = new pageCustomerAgentRegistration();
