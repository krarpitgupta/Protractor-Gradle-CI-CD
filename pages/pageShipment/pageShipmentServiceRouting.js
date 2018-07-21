var actionLib = require('../../library/action.js');

var pageAddShipmentServiceRouting = function(){
    var reqElement;

    this.linkShipment = by.xpath("//a[@href='#/myAirExportTask?activeTab=Shipment']");
    this.btnCreateShipment = by.xpath("//button[@class='btn btn-primary btn-xs btn-property accent-btn']");
    this.uiSwitchDirect = by.id("shipment.serviceDetail.directShipment.0");
    this.uiSwitchFreight = by.id("shipment.serviceDetail.ppcc.0");
    this.uiSwitchRouted = by.id("shipment.serviceDetail.whoRouted.0");
    this.uiSwitchClearance = by.id("shipment.serviceDetail.isClearance.0");
    this.btnSave = by.xpath("//input[@ng-click='saveShipment()']");
    this.btnPopUpOk = by.xpath("//button[@ng-click='confirm(1)']");

    //routing and carrier Info section
    this.expandRoutingCarrierInfo = by.xpath("//div[@ng-click='routInfo=!routInfo']");
    this.dropDownCarrier = by.id("shipment.serviceDetail.carrier.0");
    this.textBoxFlightNo = by.id("shipment.serviceDetail.flightNo.0");
    this.textBoxMawbNo = by.id("shipment.serviceDetail.mawb.0");
    this.calenderEtd = by.id("shipment.serviceDetail.etd.0");
    this.calenderEta = by.id("shipment.serviceDetail.eta.0");
    
    //connections section
    this.expandConnections = by.xpath("//div[@ng-click='conInfo=!conInfo;']");
    this.dropDownMove = by.id("0connectionMove0");
    this.dropDownFrom = by.id("0polConnection0");
    this.dropDownTo = by.id("0podConnection0");
    this.calenderConnectionEtd = by.id("0etdConnectionDate0");
    this.calenderConnectionEta = by.id("0etaConnectionDate0");
    this.dropDownCarrierVessel = by.id("0carrierVessel0");
    this.textBoxVoyFltNo = by.id("0voyConnection0");
    this.dropDownStatus = by.id("0status0");

    //specify "none" for parameters which you don't want to fill
    this.addShipmentServiceRouting = function(strUiSwitchDirect, strUiSwitchFreight, strUiSwitchRouted, 
        strUiSwitchClearance){

        if (strUiSwitchDirect != "none"){
            actionLib.click(this.uiSwitchDirect);
        }
        if (strUiSwitchFreight != "none"){
            actionLib.click(this.uiSwitchFreight);
        }
        if (strUiSwitchRouted != "none"){
            actionLib.click(this.uiSwitchRouted);
        }
        if (strUiSwitchClearance != "none"){
            actionLib.click(this.uiSwitchClearance);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addShipmentRoutingCarrierInfo = function(strCarrier, strFlightNo, strMawbNo, strEtd, strEta){
        
        if (strCarrier != "none"){
            actionLib.setText(this.dropDownCarrier, strCarrier);
        }
        if (strFlightNo != "none"){
            actionLib.setText(this.textBoxFlightNo, strFlightNo);
        }
        if (strMawbNo != "none"){
            actionLib.setText(this.textBoxMawbNo, strMawbNo);
        }
        if (strEtd != "none"){
            actionLib.setText(this.calenderEtd, strEtd);
        }
        if (strEta != "none"){
            actionLib.setText(this.calenderEta, strEta);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addShipmentConnections = function(strMove, strFrom, strTo, strEtd, strEta, strCarrierVessel,
        strVoyFltNo, strStatus){
        
        if (strMove != "none"){
            actionLib.selectDropdown(this.dropDownMove, strMove);
        }
        if (strFrom != "none"){
            actionLib.setText(this.dropDownFrom, strFrom);
        }
        if (strTo != "none"){
            actionLib.setText(this.dropDownTo, strTo);
        }
        if (strEtd != "none"){
            actionLib.setText(this.calenderConnectionEtd, strEtd);
        }
        if (strEta != "none"){
            actionLib.setText(this.calenderConnectionEta, strEta);
        }
        if (strCarrierVessel != "none"){
            actionLib.setText(this.dropDownCarrierVessel, strCarrierVessel);
        }
        if (strVoyFltNo != "none"){
            actionLib.setText(this.textBoxVoyFltNo, strVoyFltNo);
        }
        if (strStatus != "none"){
            actionLib.selectDropdown(this.dropDownStatus, strStatus);
        }
    }
};
module.exports = new pageAddShipmentServiceRouting();
