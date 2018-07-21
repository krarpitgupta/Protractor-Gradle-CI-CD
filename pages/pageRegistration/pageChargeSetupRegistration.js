var actionLib = require('../../library/action.js');

var pageChargeSetupRegistration = function(){

    this.textBoxChargeName = by.id("0chargeName");
    this.textBoxChargeCode = by.id("0chargeCode");
    this.buttonUploads = by.xpath("//a[@ng-click=\"chargeMasterUpload('chargeMaster','chargeBtn')\"]");
    this.fileUploadMultipleRecordsPath = by.xpath("//input[@type='file'][@ng-model='chargeMaster.file']");
    this.buttonNext = by.xpath("//button[@ng-click=\"saveChargeSetup('app.others')\"]");
    this.iconOthers = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Others')]");
    this.msgSuccessfulFileUpload = by.className("ui-notification ng-scope success clickable");
    this.strChildLocator = by.className("message ng-binding");
    
    this.fillChargeType = function(strChargeType){
        var reqElement;
        if(strChargeType != "none"){
            reqElement = by.xpath("//select[@id='0chargeType']/option[@label='" + strChargeType + "']");
            actionLib.click(reqElement);
        }
    }

    this.fillCalculationType = function(strCalculationType){
        var reqElement;
        if(strCalculationType != "none"){
            reqElement = by.xpath("//select[@id='0calculationType']/option[@label='" + strCalculationType + "']");
            actionLib.click(reqElement);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.signUpChargeSetupTab = function(strChargeName, strChargeCode, strChargeType, strCalculationType,
        fileUploadMultipleRecords){
        
        if (strChargeName != "none"){
            actionLib.setText(this.textBoxChargeName, strChargeName);
        }
        if (strChargeCode != "none"){
            actionLib.setText(this.textBoxChargeCode, strChargeCode);
        }
        if (strChargeType != "none"){
            this.fillChargeType(strChargeType);
        }
        if (strCalculationType != "none"){
            this.fillCalculationType(strCalculationType);
        }
        if (fileUploadMultipleRecords != "none"){
            actionLib.uploadFile(this.fileUploadMultipleRecordsPath, fileUploadMultipleRecords);
            actionLib.explicitWait(5000);
            actionLib.click(this.buttonUploads);
        }
    };
};
module.exports = new pageChargeSetupRegistration();
