var actionLib = require('../../library/action.js');

var pageAddCustomerCredit = function(){
    var reqElement;

    this.tabCredit = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'credit')]");
    this.dropDownLocation = by.id("locationName0");
    this.dropDownService = by.id("serviceCredit0");
    this.dropDownDivision = by.id("division0");
    this.textBoxCreditDays = by.id("creditDays0");
    this.textBoxPublishCreditDays = by.model("partyCredit.publishCreditDays");
    this.textBoxCreditAmount = by.model("partyCredit.creditAmount");

    this.fillLocation = function(){
        reqElement = by.xpath("//input[@id='locationName0']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }
    
    this.fillService = function(strService){
        actionLib.setText(this.dropDownService, strService);
        reqElement = by.xpath("//strong[contains(text(),'" + strService + "')]");
        actionLib.click(reqElement);
    }

    //specify "none" for parameters which you don't want to fill
    this.addCustomerCredit = function (strLocation, strService, strDivision, strCreditDays, 
        strPublishedCreditDays, strCreditAmount){  

        if (strLocation != "none"){
            this.fillLocation();
        }
        if (strService != "none"){
            this.fillService(strService);
        }
        if (strDivision != "none"){
            actionLib.setText(this.dropDownDivision, strDivision);
        }
        if (strCreditDays != "none"){
            actionLib.setText(this.textBoxCreditDays, strCreditDays);
        }
        if (strPublishedCreditDays != "none"){
            actionLib.setText(this.textBoxPublishCreditDays, strPublishedCreditDays);
        }
        if (strCreditAmount != "none"){
            actionLib.setText(this.textBoxCreditAmount, strCreditAmount);
        }
    }
};
module.exports = new pageAddCustomerCredit();
