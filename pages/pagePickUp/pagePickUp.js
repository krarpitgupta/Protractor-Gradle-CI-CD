var actionLib = require('../../library/action.js');

var pageAddPickUp = function(){
    var reqElement;

    this.linkPickUp = by.xpath("//a[@href='#/myAirExportTask?activeTab=Pickup']");
    this.btnEdit = by.className("btn-icon ng-scope");
    this.subMenuPickUpDelivery = by.xpath("//span[@title='PickUp/Delivery']");
    this.textBoxProTrackingNo = by.id("shipment.serviceDetail.pickUpDeliveryPoint.proTracking.0");
    this.expandPickUp = by.xpath("//div[@ng-click='picksInfo=!picksInfo']");
    this.checkBoxOurPickUp = by.id("ourPickUp0");
    this.textBoxAddress1 = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.addressLine1.0");
    this.textBoxAddress2 = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.addressLine2.0");
    this.textBoxAddress3 = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.addressLine3.0");
    this.dropDownState = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.state.0");
    this.dropDownCity = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.city.0");
    this.textBoxZipCode = by.id("shipment.serviceDetail.pickUpDeliveryPoint.pickUpPlace.zipCode.0");
    this.textBoxContactDetails = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpContactPerson.0");
    this.textBoxPickUpEmail = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpEmail.0");
    this.textBoxMobileNo = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpMobileNo.0");
    this.textBoxPhoneNo = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpPhoneNo.0");
    this.calenderPickUpFollowUpDate = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpFollowUp.0");
    this.calenderPlannedPickUpDate = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpPlanned.0");
    this.calenderActualPickUpDate = by.id("shipmentServiceDetail.pickUpDeliveryPoint.pickUpActual.0");
    this.btnUpdate = by.xpath("//input[@ng-click='saveShipment()']");
    this.btnPopUpOk = by.xpath("//button[@ng-click='confirm(1)']");


    //specify "none" for parameters which you don't want to fill
    this.addPickUp = function(strPickUpAddress1, strPickUpAddress2, strPickUpAddress3, strPickUpState, 
        strPickUpCity, strPickUpZipCode, strPickUpContactDetails, strPickUpEmail, strPickUpMobileNo, 
        strPickUpPhoneNo, strPickUpFollowUpDate, strPlannedPickUpDate, strActualPickUpDate){
        
        if (strPickUpAddress1 != "none"){
            actionLib.setText(this.textBoxAddress1, strPickUpAddress1);
        }
        if (strPickUpAddress2 != "none"){
            actionLib.setText(this.textBoxAddress2, strPickUpAddress2);
        }
        if (strPickUpAddress3 != "none"){
            actionLib.setText(this.textBoxAddress3, strPickUpAddress3);
        }
        if (strPickUpState != "none"){
            actionLib.setText(this.dropDownState, strPickUpState);
        }
        if (strPickUpCity != "none"){
            actionLib.setText(this.dropDownCity, strPickUpCity);
        }
        if (strPickUpZipCode != "none"){
            actionLib.setText(this.textBoxZipCode, strPickUpZipCode);
        }
        if (strPickUpContactDetails != "none"){
            actionLib.setText(this.textBoxContactDetails, strPickUpContactDetails);
        }
        if (strPickUpEmail != "none"){
            actionLib.setText(this.textBoxPickUpEmail, strPickUpEmail);
        }
        if (strPickUpMobileNo != "none"){
            actionLib.setText(this.textBoxMobileNo, strPickUpMobileNo);
        }
        if (strPickUpPhoneNo != "none"){
            actionLib.setText(this.textBoxPhoneNo, strPickUpPhoneNo);
        }
        if (strPickUpFollowUpDate != "none"){
            actionLib.setText(this.calenderPickUpFollowUpDate, strPickUpFollowUpDate);
        }
        if (strPlannedPickUpDate != "none"){
            actionLib.setText(this.calenderPlannedPickUpDate, strPlannedPickUpDate);
        }
        if (strActualPickUpDate != "none"){
            actionLib.setText(this.calenderActualPickUpDate, strActualPickUpDate);
        }
    }
};
module.exports = new pageAddPickUp();
