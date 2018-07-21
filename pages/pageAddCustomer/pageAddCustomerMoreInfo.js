var actionLib = require('../../library/action.js');

var pageAddCustomerMoreInfo = function(){

    this.tabMoreInfo = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'More Info')]");
    this.textCustomerType = by.xpath("//*[contains(text(),'Customer Type ')]");
    this.dropDownVerticals = by.model("form-control ng-touched ng-dirty ng-empty ng-valid-editable ng-valid ng-valid-parse");
    this.textBoxIataCode = by.id("iataCode");
    this.textBoxVatNo = by.id("vatCompliance");
    this.textBoxPanNo = by.id("panNo");
    this.textBoxSvtRegnNo = by.id("svtNo");
    this.textBoxTinNo = by.id("tinNo");
    this.textBoxRacNum = by.id("racNo");
    this.textBoxAccountNum = by.id("accNumber");
    this.uiSwitchQuoteOutput = by.model("partyMaster.partyDetail.matchInvoiceQuoteOutput");
    this.uiSwitchBlanketNomination = by.model("partyMaster.partyDetail.isBlanketNomination");
    this.uiSwitchDirectStatusUpdateToConsignee = by.model("partyMaster.partyDetail.directStatusUpdate");
    this.uiSwitchDefaulter = by.model("partyMaster.isDefaulter");
    this.textBoxPersonalIdNum = by.id("pin");
    this.textBoxTsaRegistrationNum = by.id("tsaNo");
    this.textBoxSpotNum = by.id("spotNo");

    //strCustomerType attribute is id of customer type field's option
    this.fillCustomerType = function (strCustomerType){
        var reqElement;
        reqElement = by.xpath("//label[@for='" + strCustomerType + "']");
        actionLib.click(reqElement);
    }

    //specify "none" for parameters which you don't want to fill
    this.addCustomerMoreInfo = function(strCustomerType, strVertical, strIataCode, strVatNo, strPanNo, strSvtRegnNo, strTinNo,
        strRacNum, strAccountNum, strUiSwitchQuoteOutput, strUiSwitchBlanketNomination, strUiSwitchUpdateToConsignee, 
        strUiSwitchDefaulter, strPersonalIdNum, strTsaRegistrationNum, strSpotNum){

        if (strCustomerType != "none"){
            this.fillCustomerType(strCustomerType);
        }
        if (strVertical != "none"){
            actionLib.setText(this.dropDownVerticals, strVertical);
        }
        if (strIataCode != "none"){
            actionLib.setText(this.textBoxIataCode, strIataCode);
        }
        if (strVatNo != "none"){
            actionLib.setText(this.textBoxVatNo, strVatNo);
        }
        if (strPanNo != "none"){
            actionLib.setText(this.textBoxPanNo, strPanNo);
        }
        if (strSvtRegnNo != "none"){
            actionLib.setText(this.textBoxSvtRegnNo, strSvtRegnNo);
        }
        if (strTinNo != "none"){
            actionLib.setText(this.textBoxTinNo, strTinNo);
        }
        actionLib.scrollToElement(this.textBoxSpotNum);
        if (strRacNum != "none"){
            actionLib.setText(this.textBoxRacNum, strRacNum);
        }
        if (strAccountNum != "none"){
            actionLib.setText(this.textBoxAccountNum, strAccountNum);
        }
        if (strUiSwitchQuoteOutput != "none"){
            actionLib.click(this.uiSwitchQuoteOutput);
        }
        if (strUiSwitchBlanketNomination != "none"){
            actionLib.click(this.uiSwitchBlanketNomination);
        }
        if (strUiSwitchUpdateToConsignee != "none"){
            actionLib.click(this.uiSwitchDirectStatusUpdateToConsignee);
        }
        if (strUiSwitchDefaulter != "none"){
            actionLib.click(this.uiSwitchDefaulter);
        }
        if (strPersonalIdNum != "none"){
            actionLib.setText(this.textBoxPersonalIdNum, strPersonalIdNum);
        }
        if (strTsaRegistrationNum != "none"){
            actionLib.setText(this.textBoxTsaRegistrationNum, strTsaRegistrationNum);
        }
        if (strSpotNum != "none"){
            actionLib.setText(this.textBoxSpotNum, strSpotNum);
        }
    }
};
module.exports = new pageAddCustomerMoreInfo();
