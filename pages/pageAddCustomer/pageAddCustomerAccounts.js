var actionLib = require('../../library/action.js');

var pageAddCustomerAccounts = function(){
    var reqElement;

    this.tabAccounts = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'accounts')]");
    this.dropDownPaymentSchedule = by.id("paymentSchedule");
    this.textBoxCafPercentage = by.id("caf");
    this.textBoxCcPercentage = by.id("cc");
    this.uiSwitchBillingActual = by.id("fscor");
    this.textBoxTdsPercentage = by.id("tds");
    this.textBoxCstNo = by.model("partyMaster.partyDetail.cstNo");
    this.dropDownAccount = by.id("accountsName0");
    this.dropDownCurrencyCode = by.id("currencyCode0");
    this.dropDownBillingAccountName = by.id("billingAccountName0");

    this.fillPaymentSchedule = function (strPaymentSchedule){
        actionLib.setText(this.dropDownPaymentSchedule, strPaymentSchedule);
        reqElement = by.xpath("//strong[contains(text(),'" + strPaymentSchedule + "')]");
        actionLib.click(reqElement);
    }

    this.fillLocation = function(){
        reqElement = by.xpath("//input[@input-focus=''][@ng-model='partyAccount.locationMaster']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }
    
    this.fillTermCode = function (strTermCode){
        reqElement = by.xpath("//select[@id='termCode0']/option[@label='" + strTermCode + "']");
        actionLib.click(reqElement);
    }

    this.fillTaxExempted = function (strTaxExempted){
        reqElement = by.xpath("//select[@id='taxExempted0']/option[@label='" + strTaxExempted + "']");
        actionLib.click(reqElement);
    }

    this.fillStatus = function (strStatus){
        reqElement = by.xpath("//select[@id='status0']/option[@label='" + strStatus + "']");
        actionLib.click(reqElement);
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerAccounts = function (strPaymentSchedule, strCafPercentage, strCcPercentage, strBillingOnActual, 
        strTdsPercentage, strCstno, strLocation, strAccount, strTermCode, strCurrencyCode, strBillingAccountName, 
        strTaxExempted, strStatus){  

        if (strPaymentSchedule != "none"){
            this.fillPaymentSchedule(strPaymentSchedule);
        }
        if (strCafPercentage != "none"){
            actionLib.setText(this.textBoxCafPercentage, strCafPercentage);
        }
        if (strCcPercentage != "none"){
            actionLib.setText(this.textBoxCcPercentage, strCcPercentage);
        }
        if (strBillingOnActual != "none"){
            actionLib.click(this.uiSwitchBillingActual);
        }
        if (strTdsPercentage != "none"){
            actionLib.setText(this.textBoxTdsPercentage, strTdsPercentage);
        }
        if (strCstno != "none"){
            actionLib.setText(this.textBoxCstNo, strCstno);
        }
        if (strLocation != "none"){
            this.fillLocation();
        }
        if (strAccount != "none"){
            actionLib.setText(this.dropDownAccount, strAccount);
        }
        if (strTermCode != "none"){
            this.fillTermCode(strTermCode);
        }
        if (strCurrencyCode != "none"){
            actionLib.setText(this.dropDownCurrencyCode, strCurrencyCode);
        }
        if (strBillingAccountName != "none"){
            actionLib.setText(this.dropDownBillingAccountName, strBillingAccountName);
        }
        if (strTaxExempted != "none"){
            this.fillTaxExempted(strTaxExempted);
        }
        if (strStatus != "none"){
            this.fillStatus(strStatus);
        }
    }
};
module.exports = new pageAddCustomerAccounts();
