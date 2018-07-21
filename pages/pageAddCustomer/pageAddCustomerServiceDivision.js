var actionLib = require('../../library/action.js');

var pageAddCustomerServiceDivision = function(){
    var reqElement;

    this.tabServiceDivision = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'service & division')]");
    this.dropDownLocation = by.id("locationService0");
    this.dropDownService = by.id("servicename0");
    this.dropDownTos = by.id("tosService0");
    this.dropDownDivision = by.id("divisionServiceName0");

    this.fillLocation = function(){
        reqElement = by.xpath("//input[@id='locationService0']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.fillService = function(strService){
        actionLib.setText(this.dropDownService, strService);
        reqElement = by.xpath("//strong[contains(text(),'" + strService + "')]");
        actionLib.click(reqElement);
    }

    this.fillSalesman = function(){
        reqElement = by.xpath("//input[@id='salesmanService0']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.fillCustomerService = function(){
        reqElement = by.xpath("//input[@id='customerService0']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.fillCompany = function(){
        reqElement = by.xpath("//input[@input-focus=''][@ng-model='partyCompany.companyMaster']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    //specify "none" for parameters which you don't want to fill
    this.addCustomerServiceDivision = function (strLocation, strService, strSalesman, strCustomerService, 
        strTos, strCompany, strDivision){  

        if (strLocation != "none"){
            this.fillLocation();
        }
        if (strService != "none"){
            this.fillService(strService);
        }
        if (strSalesman != "none"){
            this.fillSalesman();
        }
        if (strCustomerService != "none"){
            this.fillCustomerService();
        }
        if (strTos != "none"){
            actionLib.setText(this.dropDownTos, strTos);
        }
        if (strCompany != "none"){
            this.fillCompany();
        }
        if (strDivision != "none"){
            actionLib.setText(this.dropDownDivision, strDivision);
        }
    }
};
module.exports = new pageAddCustomerServiceDivision();
