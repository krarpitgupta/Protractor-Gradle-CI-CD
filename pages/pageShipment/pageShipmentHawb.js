var actionLib = require('../../library/action.js');

var pageAddShipmentHawb = function(){
    var reqElement;
    
    this.subMenuHawb = by.xpath("//span[@title='HAWB']");
    this.dropDownConsignee = by.id("shipment.serviceDetail.0.document.consignee.0");
    this.dropDownNotifyCustomer1 = by.id("shipment.serviceDetail.0.document.firstNotify.0");
    this.dropDownNotifyCustomer2 = by.id("shipment.serviceDetail.0.document.secondNotify.0");
    this.dropDownForwarder = by.id("shipment.serviceDetail.0.document.forwarder.0");
    this.dropDownIssuingAgent = by.id("shipment.serviceDetail.0.document.issuingAgent.0");
    this.dropDownCustomHouseAgent = by.id("shipment.serviceDetail.0.document.chaAgent.0");
    this.textAreaHandlingInfo = by.id("shipment.serviceDetail.0.document.handlingInfo.0");
    this.textAreaAccountingInfo = by.id("shipment.serviceDetail.0.document.AccountingInfo.0");
    this.textAreaCommodityDescription = by.id("shipment.serviceDetail.0.document.commodityDescription.0");
    this.textAreaMarksNo = by.id("shipment.serviceDetail.0.document.marksAndNo.0");
    this.dropDownRateClass = by.model("documentDetail.rateClass");

    this.selectDropDownActiveElement = function(strLocator, strText){
        
        actionLib.setText(strLocator, strText);
        reqElement = by.xpath("//span[@class='ng-binding']/strong");
        actionLib.verifyElementPresent(reqElement);
        actionLib.click(reqElement);
    }

    //specify "none" for parameters which you don't want to fill
    this.addShipmentHawb = function(strConsignee, strNotifyCustomer1, strNotifyCustomer2, 
        strForwarder, strIssuingAgent, strCustomHouseAgent, strHandlingInfo, strAccountingInfo, 
        strCommodityDescription, strMarksNo){

        if (strConsignee != "none"){
            this.selectDropDownActiveElement(this.dropDownConsignee, strConsignee);
        }
        if (strNotifyCustomer1 != "none"){
            this.selectDropDownActiveElement(this.dropDownNotifyCustomer1, strNotifyCustomer1);
        }
        if (strNotifyCustomer2 != "none"){
            this.selectDropDownActiveElement(this.dropDownNotifyCustomer2, strNotifyCustomer2);
        }
        if (strForwarder != "none"){
            this.selectDropDownActiveElement(this.dropDownForwarder, strForwarder);
        }
        if (strIssuingAgent != "none"){
            this.selectDropDownActiveElement(this.dropDownIssuingAgent, strIssuingAgent);
        }
        if (strCustomHouseAgent != "none"){
            this.selectDropDownActiveElement(this.dropDownCustomHouseAgent, strCustomHouseAgent);
        }
        if (strHandlingInfo != "none"){
            actionLib.scrollToElement(this.textAreaHandlingInfo);
            actionLib.setText(this.textAreaHandlingInfo, strHandlingInfo);
        }
        if (strAccountingInfo != "none"){
            actionLib.scrollToElement(this.textAreaAccountingInfo);
            actionLib.setText(this.textAreaAccountingInfo, strAccountingInfo);
        }
        if (strCommodityDescription != "none"){
            actionLib.scrollToElement(this.textAreaCommodityDescription);
            actionLib.setText(this.textAreaCommodityDescription, strCommodityDescription);
        }
        if (strMarksNo != "none"){
            actionLib.scrollToElement(this.textAreaMarksNo);
            actionLib.setText(this.textAreaMarksNo, strMarksNo);
        }
    }
};
module.exports = new pageAddShipmentHawb();
