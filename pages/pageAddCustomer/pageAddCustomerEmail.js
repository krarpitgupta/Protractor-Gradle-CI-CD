var actionLib = require('../../library/action.js');

var pageAddCustomerEmail = function(){

    this.tabEmail = by.className("btn paddmenu5 text-inherit btn-normal");
    this.textBoxEmail = by.id("partyEmailMapping0");
    this.dropDownLocation = by.xpath("//input[@ng-model='partyEmailMapping.locationMaster'][@aria-invalid='false']");
    this.dropDownOriginCountry = by.id("origin0");
    this.dropDownDestinCountry = by.id("destination0");
    this.uiSwitchHaz = by.id("imco0");

    this.fillLocation = function(){
        var reqElement;
        reqElement = by.xpath("//input[@ng-model='partyEmailMapping.locationMaster'][@aria-invalid='false']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerEmail = function (strEmail, strLocation, strOriginCountry, strDestinCountry, 
        strUiSwitchHaz){  

        if (strEmail != "none"){
            actionLib.setText(this.textBoxEmail, strEmail);
        }
        if (strLocation != "none"){
            this.fillLocation();
        }
        if (strOriginCountry != "none"){
            actionLib.setText(this.dropDownOriginCountry, strOriginCountry);
        }
        if (strDestinCountry != "none"){
            actionLib.setText(this.dropDownDestinCountry, strDestinCountry);
        }
        if (strUiSwitchHaz != "none"){
            actionLib.click(this.uiSwitchHaz);
        }
    }
};
module.exports = new pageAddCustomerEmail();
