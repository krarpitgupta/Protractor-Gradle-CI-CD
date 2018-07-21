var actionLib = require('../../library/action.js');

var pageAddCustomerProfiles = function(){
    var reqElement;

    this.tabProfiles = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'Profiles')]");
    this.dropDownService = by.id("serviceBusinessDetail0");
    this.dropDownTermsOfShipment = by.id("bussinessTos0");
    this.dropDownOrigin = by.id("bussinessOrigin0");
    this.dropDownDestination = by.id("bussinessDestination0");
    this.dropDownFrequency = by.id("bussinessFrequency0");
    this.dropDownCommodityGrp = by.id("bussinesscommodity0");
    this.dropDownUnit = by.id("businessUnit0");
    this.textBoxVolume = by.id("bussinessnoOfUnit0");
    this.textBoxNoOfShipment = by.id("noOfShipments0");
    this.textBoxEstRevenue = by.id("estimatedRevenue0");

    this.fillService = function(strService){
        actionLib.setText(this.dropDownService, strService);
        reqElement = by.xpath("//strong[contains(text(),'" + strService + "')]");
        actionLib.click(reqElement);
    }

    this.fillFrequency = function(strFrequency){
        actionLib.setText(this.dropDownFrequency, strFrequency);
        reqElement = by.xpath("//strong[contains(text(),'" + strFrequency + "')]");
        actionLib.click(reqElement);    
    }

    this.fillCurrentPotential = function (strCurrentPotential){
        reqElement = by.xpath("//select[@id='currentPotential0']/option[@label='" + strCurrentPotential + "']");
        actionLib.click(reqElement);
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerProfiles = function (strService, strTermsOfShipment, strOrigin, strDestination, 
        strFrequency, strCommodityGrp, strUnit, strVolume, strNoOfShipment, strEstRevenue, strCurrentPotential){  

        if (strService != "none"){
            this.fillService(strService);
        }
        if (strTermsOfShipment != "none"){
            actionLib.setText(this.dropDownTermsOfShipment, strTermsOfShipment);
        }
        if (strOrigin != "none"){
            actionLib.setText(this.dropDownOrigin, strOrigin);
        }
        if (strDestination != "none"){
            actionLib.setText(this.dropDownDestination, strDestination);
        }
        if (strFrequency != "none"){
            this.fillFrequency(strFrequency);
        }
        if (strCommodityGrp != "none"){
            actionLib.setText(this.dropDownCommodityGrp, strCommodityGrp);
        }
        if (strUnit != "none"){
            actionLib.setText(this.dropDownUnit, strUnit);
        }
        if (strVolume != "none"){
            actionLib.setText(this.textBoxVolume, strVolume);
        }
        if (strNoOfShipment != "none"){
            actionLib.setText(this.textBoxNoOfShipment, strNoOfShipment);
        }
        if (strEstRevenue != "none"){
            actionLib.setText(this.textBoxEstRevenue, strEstRevenue);
        }
        if (strCurrentPotential != "none"){
            this.fillCurrentPotential(strCurrentPotential);
        }
    }
};
module.exports = new pageAddCustomerProfiles();
