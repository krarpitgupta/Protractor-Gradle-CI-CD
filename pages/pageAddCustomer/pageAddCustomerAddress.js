var actionLib = require('../../library/action.js');

var pageAddCustomerAddress = function(){

    this.dropDownType = by.id("addressType0");
    this.uiSwitchCorporate = by.model("partyAddressMaster.corporate");
    this.textBoxAddress1 = by.id("addressLine1PartyMaster0");
    this.textBoxAddress2 = by.model("partyAddressMaster.addressLine2");
    this.textBoxAddress3 = by.model("partyAddressMaster.addressLine3");
    this.textBoxContactName = by.id("conName0");
    this.textBoxEmail = by.id("addressemail0");
    this.textBoxPhoneNo = by.model("partyAddressMaster.phone");
    this.textBoxMobileNo = by.model("partyAddressMaster.mobileNo");
    this.textBoxFaxNo = by.model("partyAddressMaster.fax");
    this.dropDownCity = by.id("city0");
    this.textBoxZipCode = by.id("poZip0");
    this.dropDownStateProvince = by.id("stateProvince0");
    this.textBoxBranchSlNo = by.model("partyAddressMaster.partyCountryField.branchSlNo");
    this.textBoxBankDlrCodeNo = by.model("partyAddressMaster.partyCountryField.bankDLRCode");

    this.fillType = function (strType){
        var reqElement;
        reqElement = by.xpath("//select[@id='addressType0']/option[@label='" + strType + "']");
        actionLib.click(reqElement);
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerAddress = function(strType, strAddress1, strAddress2, strAddress3, strUiSwitch, 
        strContactName, strEmail, strPhoneNum, strMobileNum, strFaxNum, strCity, strZipCode, strStateProvince, 
        strBranchSlNum, strBankDlrCodeNum){
        if (strType != "none"){
            this.fillType(strType);
        }
        if (strAddress1 != "none"){
            actionLib.setText(this.textBoxAddress1, strAddress1);
        }
        if (strAddress2 != "none"){
            actionLib.setText(this.textBoxAddress2, strAddress2);
        }
        if (strAddress3 != "none"){
            actionLib.setText(this.textBoxAddress3, strAddress3);
        }
        if (strUiSwitch != "none"){
            actionLib.click(this.uiSwitchCorporate);
        }
        if (strContactName != "none"){
            actionLib.setText(this.textBoxContactName, strContactName);
        }
        if (strEmail != "none"){
            actionLib.setText(this.textBoxEmail, strEmail);
        }
        if (strPhoneNum != "none"){
            actionLib.setText(this.textBoxPhoneNo, strPhoneNum);
        }
        if (strMobileNum != "none"){
            actionLib.setText(this.textBoxMobileNo, strMobileNum);
        }
        if (strFaxNum != "none"){
            actionLib.setText(this.textBoxFaxNo, strFaxNum);
        }
        if (strCity != "none"){
            actionLib.setText(this.dropDownCity, strCity);
        }
        if (strZipCode != "none"){
            actionLib.setText(this.textBoxZipCode, strZipCode);
        }
        if (strStateProvince != "none"){
            actionLib.scrollToElement(this.dropDownStateProvince);
            actionLib.setText(this.dropDownStateProvince, strStateProvince);
        }
        if (strBranchSlNum != "none"){
            actionLib.scrollToElement(this.textBoxBranchSlNo);
            actionLib.setText(this.textBoxBranchSlNo, strBranchSlNum);
        }
        if (strBankDlrCodeNum != "none"){
            actionLib.scrollToElement(this.textBoxBankDlrCodeNo);
            actionLib.setText(this.textBoxBankDlrCodeNo, strBankDlrCodeNum);
        }
    }
};
module.exports = new pageAddCustomerAddress();
