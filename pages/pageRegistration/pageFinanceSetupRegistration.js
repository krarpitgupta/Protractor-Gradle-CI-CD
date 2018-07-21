var actionLib = require('../../library/action.js');

var pageFinanceSetupRegistration = function(){

    this.buttonNext = by.className("btn btn-primary btn-xs btn-property accent-btn");
    this.uiSwitchQuoteNeedApproval = by.id("quote"); 
    this.uiSwitchProvisionalCost = by.id("provisional");
    this.textBoxInvoiceHeaderNote = by.model("locationSetup.invoiceHeaderNote");
    this.textBoxInvoiceFooterNote = by.model("locationSetup.invoiceFooterNote");
    this.iconChargeSetup = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Charge Setup')]");
    
    //specify "none" for parameters which you don't want to fill
    this.signUpFinanceSetupTab = function(strUiSwitchQuoteNeedApproval, strUiSwitchProvisionalCost,
        strInvoiceHeaderNote, strInvoiceFooterNote){
        
        if (strUiSwitchQuoteNeedApproval != "none"){
            actionLib.click(this.uiSwitchQuoteNeedApproval);
        }
        if (strUiSwitchProvisionalCost != "none"){
            actionLib.click(this.uiSwitchProvisionalCost);
        }
        if (strInvoiceHeaderNote != "none"){
            actionLib.setText(this.textBoxInvoiceHeaderNote, strInvoiceHeaderNote);
        }
        if (strInvoiceFooterNote != "none"){
            actionLib.setText(this.textBoxInvoiceFooterNote, strInvoiceFooterNote);
        }
    };
};
module.exports = new pageFinanceSetupRegistration();
