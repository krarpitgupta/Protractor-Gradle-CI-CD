var actionLib = require('../../library/action.js');

var pageLoginCreationRegistration = function(){

    this.textBoxPosition = by.id('locationSetup.position');
    this.textBoxUserName = by.id('locationSetup.userName');
    this.textBoxPassword = by.id('password-field');
    this.textBoxconfirmPassword = by.id('locationSetup.confirmPassword');
    this.dropDownButtonSelectService = by.id("locationSetup.serviceList");
    this.linkSelectAllSelectService = by.xpath("//button[@class='btn btn-link btn-xs' and @ng-click='checkAll()']");
    this.buttonNext = by.className('btn btn-primary btn-xs btn-property accent-btn');
    this.iconConfiguration = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Configuration')]");

    //specify "none" for parameters which you don't want to fill
    this.signUpLoginCreationTab = function(strPosition, strUserName, strPassword, strConfirmPassword, 
        strSelectAllSelectService){

        if (strPosition != "none"){
            actionLib.setText(this.textBoxPosition, strPosition);
        }
        if (strUserName != "none"){
            actionLib.setText(this.textBoxUserName, strUserName);
        }
        if (strPassword != "none"){
            actionLib.setText(this.textBoxPassword, strPassword);
        }
        if (strConfirmPassword != "none"){
            actionLib.setText(this.textBoxconfirmPassword, strConfirmPassword);
        }
        if (strSelectAllSelectService != "none"){
            actionLib.click(this.dropDownButtonSelectService);
            actionLib.click(this.linkSelectAllSelectService);
        }
        actionLib.click(this.buttonNext);  
    };
};
module.exports = new pageLoginCreationRegistration();
