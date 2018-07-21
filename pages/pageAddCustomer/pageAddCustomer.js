var actionLib = require('../../library/action.js');

var pageAddCustomer = function(){

    this.menuMaster = by.xpath("//*[@data-title='Masters']");
    this.menueCRM = by.xpath("//*[@class='col-xs-9 ptb14 pl10 ng-binding'][text()='eCRM']");
    this.menuCustomer = by.xpath("//*[@class='col-xs-9 ptb14 pl10 ng-binding'][text()='Customer']");
    this.btnAddCustomer = by.className("btn btn-primary btn-xs btn-property accent-btn ng-binding");
    this.dropDownName = by.id("partyName");
    this.dropDownGrade = by.id("gradeName");
    this.dropDownCountry = by.id("partyCountry");
    this.btnSave = by.className("btn accent-btn");
    this.btnCancel = by.className("btn cancel-btn");
    this.btnPopUpOk = by.xpath("//button[@ng-click='confirm(1)']");

    this.navigateToAddCustomerPage = function(){
        actionLib.verifyElementPresent(this.menuMaster);
        actionLib.click(this.menuMaster);
        actionLib.click(this.menueCRM);
        actionLib.performMouseHover(this.menuCustomer);
        actionLib.click(this.menuCustomer);
        actionLib.click(this.btnAddCustomer);
    }

    this.verifyAddedCustomer = function(strCustomerName){
        var reqElement;
        reqElement = by.xpath("//td[@title='" + strCustomerName + "']");
        return reqElement;
    }

    this.addCustomer = function(strName, strGrade, strCountry){
        if (strName != "none"){
            actionLib.setText(this.dropDownName, strName);
        }
        if (strGrade != "none"){
            actionLib.setText(this.dropDownGrade, strGrade);
        }
        if (strCountry != "none"){
            actionLib.setText(this.dropDownCountry, strCountry);
        }
    }
};
module.exports = new pageAddCustomer();