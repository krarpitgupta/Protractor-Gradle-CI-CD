var actionLib = require('../../library/action.js');

var pageAddShipmentCargoDetails = function(){
    var reqElement;

    this.subMenuCargoDetails = by.xpath("//span[@title='Cargo Details']");
    this.dropDownCoLoader = by.id("shipment.serviceDetail.coLoader.0");
    this.dropDownDivision = by.id("shipment.serviceDetail.division.0");
    this.dropDownProject = by.id("shipment.serviceDetail.projectSp.0");
    this.uiSwitchHaz = by.xpath("//span[@id='shipment.serviceDetail.hazardous.0']");
    this.uiSwitchOverDimension = by.xpath("//span[@id='shipment.serviceDetail.overDimension.0']");
    this.uiSwitchMinShipment = by.xpath("//span[@id='shipment.serviceDetail.minShipment.0']");
    this.uiSwitchHold = by.xpath("//span[@id='shipment.serviceDetail.hold.0']");
    this.uiSwitchDimensionUnit = by.model("shipmentServiceDetail.documentList[0].dimensionUnit");
    this.textBoxSellRate = by.id("shipment.serviceDetail.0.document.0.ratePerCharge");
    this.textAreaHoldReleaseNote = by.id("shipment.serviceDetail.holdReleaseNote.0");
    
    //specify "none" for parameters which you don't want to fill
    this.addShipmentCargoDetails = function(strCoLoader, strUiHaz, strUiSwitchOverDimension, 
        strUiSwitchMinShipment, strUiSwitchHold, strUiSwitchDimensionUnit, strSellRate, 
        strHoldReleaseNote){

        if (strCoLoader != "none"){
            actionLib.setText(this.dropDownCoLoader, strCoLoader);
        }
        if (strUiHaz != "none"){
            actionLib.click(this.uiSwitchHaz);
        }
        if (strUiSwitchOverDimension != "none"){
            actionLib.click(this.uiSwitchOverDimension);
        }
        if (strUiSwitchMinShipment != "none"){
            actionLib.click(this.uiSwitchMinShipment);
        }
        if (strUiSwitchHold != "none"){
            actionLib.click(this.uiSwitchHold);
        }
        if (strUiSwitchDimensionUnit != "none"){
            actionLib.click(this.uiSwitchDimensionUnit);
        }
        if (strSellRate != "none"){
            actionLib.setText(this.textBoxSellRate, strSellRate);
        }
        if (strHoldReleaseNote != "none"){
            actionLib.scrollToElement(this.textAreaHoldReleaseNote);
            actionLib.setText(this.textAreaHoldReleaseNote, strHoldReleaseNote);
        }
    }
};
module.exports = new pageAddShipmentCargoDetails();
