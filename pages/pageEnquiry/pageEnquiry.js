var actionLib = require('../../library/action.js');

var pageAddEnquiry = function(){
    var reqElement;

    this.linkEnquiry = by.xpath("//a[@href='#/myAirExportTask?activeTab=Enquiry']");
    this.btnAddEnquiry = by.xpath("//button[@ng-click='viewAddSalesEnquiry()']");
    this.dropDownCustomer = by.id("partyName");
    this.calenderEnquiryReceived = by.id("receivedOn");
    this.calenderQuoteByDate = by.id("quoteBy");
    this.dropDownOrigin = by.id("origin0");
    this.dropDownDestination = by.id("destination0");
    this.dropDownTermsOfShipment = by.id("tos0");
    this.uiSwitchClearance = by.xpath("//span[@id='clearance0']");
    this.uiSwitchHazardousGoods = by.xpath("//span[@id='hazardous0']");
    this.dropDownCommodityGrp = by.id("commodity0");
    this.textBoxGrossWeight = by.id("grossWeight0");
    this.textBoxVolumeWeight = by.model("enquiryDetail.volWeight");
    this.btnRemarks = by.xpath("//button[@ng-click='openRemarksPopUp($index)']");
    this.textAreaRemarks = by.id("notes0");
    this.btnRemarksSave = by.className("btn btn-primary btn-xs btn-property accent-btn ml0");
    this.btnAttachment = by.xpath("//button[@ng-click='openAttachmentPopUp($index)']");
    this.textBoxAttachmentRefNo = by.id("EnqSerAtt0attachRefNo0");
    this.btnFileUpload = by.css("input[type='file']");
    this.btnAttachmentSave = by.className("btn btn-primary btn-xs btn-property accent-btn ml0");
    this.btnSave = by.xpath("//input[@class='btn btn-primary btn-xs btn-property accent-btn']");
    this.btnPopUpOk = by.xpath("//button[@ng-click='confirm(1)']");
    this.menuTasks = by.xpath("//a[@data-title='Tasks']");
    this.subMenuMyTasks = by.className("col-xs-9 ptb14 pl10 ng-binding");

    //Add Enquiry Dimensions section
    this.expandDimensionsSection = by.className("fa fa-cube");
    this.textBoxNoOfPieces = by.id("EnqSer0noOfPiece0");
    this.textBoxLength = by.id("EnqSer0length0");
    this.textBoxWidth = by.id("EnqSer0width0");
    this.textBoxHeight = by.id("EnqSer0height0");
    this.textBoxDimensionsGrossWt = by.id("EnqSer0grossWeight0");

    //Add Enquiry Pick up/Delivery section
    this.expandPickUpDeliverySection = by.className("fa fa-truck rotate-y");
    this.textBoxPickUpAddress1 = by.id("pickupAddress.addressLine10");
    this.textBoxPickUpAddress2 = by.model("enquiryDetail.pickupAddress.addressLine2");
    this.textBoxPickUpAddress3 = by.model("enquiryDetail.pickupAddress.addressLine3");
    this.textBoxPickUpPoBox = by.model("enquiryDetail.pickupAddress.poBox");
    this.dropDownPickUpCity = by.id("enquiryDetail.pickupAddress.city.0");
    this.dropDownPickUpState = by.id("enquiryDetail.pickupAddress.state.0");
    this.dropDownPickUpCountry = by.id("enquiryDetail.pickupAddress.country.0");
    this.textBoxDeliveryAddress1 = by.id("deliveryAddress0");
    this.textBoxDeliveryAddress2 = by.model("enquiryDetail.deliveryAddress.addressLine2");
    this.textBoxDeliveryAddress3 = by.model("enquiryDetail.deliveryAddress.addressLine3");
    this.textBoxDeliveryPoBox = by.model("enquiryDetail.deliveryAddress.poBox");
    this.dropDownDeliveryCity = by.id("enquiryDetail.deliveryAddress.city.0");
    this.dropDownDeliveryState = by.id("enquiryDetail.deliveryAddress.state.0");
    this.dropDownDeliveryCountry = by.id("enquiryDetail.deliveryAddress.country.0");

    //Add Enquiry Rate Request section
    this.expandRateRequestSection = by.className("fa fa-hand-pointer-o");
    this.dropDownVendor = by.id("EnqRR0vendorName0");
    this.textBoxContactPerson = by.id("EnqRR0contactPerson0");
    this.textBoxEmail = by.id("EnqRR0email0");
    this.iconShowCharge = by.className("fa fa-external-link ng-scope");
    this.dropDownChargeCode = by.id("0chargeCodeField0");
    this.dropDownUnitCode = by.id("0unitMaster0");
    this.dropDownCurrency = by.id("0currency0");
    this.textBoxBuyRate = by.id("0buyRate0");
    this.textBoxMinAmt = by.id("0minAmt0");
    this.btnChargeDetailSave = by.xpath("//button[@class='btn accent-btn']");

    this.fillCustomer = function(strCustomer){
        reqElement = by.id("partyName");
        actionLib.setText(this.dropDownCustomer, strCustomer);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.fillRateRequestFinal = function(strFinal){
        reqElement = by.xpath("//select[@id='EnqRR0rateAccepted0']/option[@label='" + strFinal + "']");
        actionLib.click(reqElement);
    }

    this.fillSalesCoordinator = function(){
        reqElement = by.xpath("//input[@id='salesCoordinator']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }
    
    this.fillSalesman = function(){
        reqElement = by.xpath("//input[@id='salesMan']/../..//span");
        actionLib.click(reqElement);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.selectRadioBtnTrade = function(strTrade){
        reqElement = by.xpath("//md-radio-button[@value='" + strTrade + "']//div[@class='md-on']");
        actionLib.click(reqElement);
    }
    
    this.selectRadioBtnService = function(strService){
        reqElement = by.xpath("//md-radio-button[@value='" + strService + "']//div[@class='md-on']");
        actionLib.click(reqElement);
    }

    this.fillFromSlab = function(strFromSlab){
        reqElement = by.xpath("//select[@id='0unitSlap0']/option[@label='" + strFromSlab + "']");
        actionLib.click(reqElement);
    }   

    this.fillSoc = function(strSoc){
        reqElement = by.xpath("//select[@id='0soc0']/option[@label='" + strSoc + "']");
        actionLib.click(reqElement);
    }

    this.navigateToAddEnquiryPage = function(){
        actionLib.click(this.btnAddEnquiry);
    }

    //specify "none" for parameters which you don't want to fill
    this.addEnquiry = function(strCustomer, strSalesCoordinator, strSalesman, strEnquiryReceived,
        strQuoteByDate, strRadioBtnTrade, strRadioBtnService, strOrigin, strDestination, strTermsOfShipment, 
        strUiSwitchClearance, strUiSwitchHazardousGoods, strCommodityGrp, strGrossWt, strVolumeWt, strRemarks,
        strFileUpload, strAttachmentRefNo){

        if (strCustomer != "none"){
            this.fillCustomer(strCustomer);
        }
        if (strSalesCoordinator != "none"){
            this.fillSalesCoordinator();
        }
        if (strSalesman != "none"){
            this.fillSalesman();
        }
        if (strEnquiryReceived != "none"){
            actionLib.setText(this.calenderEnquiryReceived, strEnquiryReceived);
        }
        if (strQuoteByDate != "none"){
            actionLib.setText(this.calenderQuoteByDate, strQuoteByDate);
        }
        if (strRadioBtnTrade != "none"){
            this.selectRadioBtnTrade(strRadioBtnTrade);
        }
        if (strRadioBtnService != "none"){
            this.selectRadioBtnService(strRadioBtnService);
        }
        if (strOrigin != "none"){
            actionLib.setText(this.dropDownOrigin, strOrigin);
        }
        if (strDestination != "none"){
            actionLib.setText(this.dropDownDestination, strDestination);
        }
        if (strTermsOfShipment != "none"){
            actionLib.setText(this.dropDownTermsOfShipment, strTermsOfShipment);
        }
        if (strUiSwitchClearance != "none"){
            actionLib.click(this.uiSwitchClearance);
        }
        if (strUiSwitchHazardousGoods != "none"){
            actionLib.click(this.uiSwitchHazardousGoods);
        }
        if (strCommodityGrp != "none"){
            actionLib.setText(this.dropDownCommodityGrp, strCommodityGrp);
        }
        if (strGrossWt != "none"){
            actionLib.setText(this.textBoxGrossWeight, strGrossWt);
        }
        if (strVolumeWt != "none"){
            actionLib.setText(this.textBoxVolumeWeight, strVolumeWt);
        }
        if (strRemarks != "none"){
            actionLib.click(this.btnRemarks);
            actionLib.setText(this.textAreaRemarks, strRemarks);
            actionLib.click(this.btnRemarksSave);
        }
        if (strFileUpload != "none"){
            actionLib.click(this.btnAttachment);
            actionLib.setText(this.textBoxAttachmentRefNo, strAttachmentRefNo);
            actionLib.uploadFile(this.btnFileUpload, strFileUpload);
            actionLib.click(this.btnAttachmentSave);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addEnquiryDimensions = function(strNoOfPieces, strLength, strWidth, strHeight, strGrossWt){

        if (strNoOfPieces != "none"){
            actionLib.setText(this.textBoxNoOfPieces, strNoOfPieces);
        }
        if (strLength != "none"){
            actionLib.setText(this.textBoxLength, strLength);
        }
        if (strWidth != "none"){
            actionLib.setText(this.textBoxWidth, strWidth);
        }
        if (strHeight != "none"){
            actionLib.setText(this.textBoxHeight, strHeight);
        }
        if (strGrossWt != "none"){
            actionLib.setText(this.textBoxDimensionsGrossWt, strGrossWt);
        }        
    }

    //specify "none" for parameters which you don't want to fill
    this.addEnquiryPickUpDelivery = function(strPickUpAddress1, strPickUpAddress2, strPickUpAddress3, 
        strPickUpPoBox, strPickUpCity, strPickUpState, strPickUpCountry, strDeliveryAddress1, strDeliveryAddress2, 
        strDeliveryAddress3, strDeliveryPoBox, strDeliveryCity, strDeliveryState, strDeliveryCountry){

        if (strPickUpAddress1 != "none"){
            actionLib.setText(this.textBoxPickUpAddress1, strPickUpAddress1);
        }
        if (strPickUpAddress2 != "none"){
            actionLib.setText(this.textBoxPickUpAddress2, strPickUpAddress2);
        }
        if (strPickUpAddress3 != "none"){
            actionLib.setText(this.textBoxPickUpAddress3, strPickUpAddress3);
        }
        if (strPickUpPoBox != "none"){
            actionLib.setText(this.textBoxPickUpPoBox, strPickUpPoBox);
        }
        if (strPickUpCity != "none"){
            actionLib.setText(this.dropDownPickUpCity, strPickUpCity);
        }
        if (strPickUpState != "none"){
            actionLib.setText(this.dropDownPickUpState, strPickUpState);
        }
        if (strPickUpCountry != "none"){
            actionLib.setText(this.dropDownPickUpCountry, strPickUpCountry);
        }
        if (strDeliveryAddress1 != "none"){
            actionLib.setText(this.textBoxDeliveryAddress1, strDeliveryAddress1);
        }
        if (strDeliveryAddress2 != "none"){
            actionLib.setText(this.textBoxDeliveryAddress2, strDeliveryAddress2);
        }
        if (strDeliveryAddress3 != "none"){
            actionLib.setText(this.textBoxDeliveryAddress3, strDeliveryAddress3);
        }
        if (strDeliveryPoBox != "none"){
            actionLib.setText(this.textBoxDeliveryPoBox, strDeliveryPoBox);
        }
        if (strDeliveryCity != "none"){
            actionLib.setText(this.dropDownDeliveryCity, strDeliveryCity);
        }
        if (strDeliveryState != "none"){
            actionLib.setText(this.dropDownDeliveryState, strDeliveryState);
        }
        if (strDeliveryCountry != "none"){
            actionLib.setText(this.dropDownDeliveryCountry, strDeliveryCountry);
        }        
    }

    //specify "none" for parameters which you don't want to fill
    this.addEnquiryRateRequest = function(strVendor, strContactPerson, strEmail, strFinal,
        strBtnShowCharge, strChargeCode, strUnitCode, strCurrency, strBuyRate, strMinAmt,
        strFromSlab, strSoc){

        if (strVendor != "none"){
            actionLib.setText(this.dropDownVendor, strVendor);
        }
        if (strContactPerson != "none"){
            actionLib.setText(this.textBoxContactPerson, strContactPerson);
        }
        if (strEmail != "none"){
            actionLib.setText(this.textBoxEmail, strEmail);
        }
        if (strFinal != "none"){
            this.fillRateRequestFinal(strFinal);
        }
        if (strBtnShowCharge != "none"){
            actionLib.click(this.iconShowCharge);
        }
        if (strChargeCode != "none"){
            actionLib.setText(this.dropDownChargeCode, strChargeCode);
        }
        if (strUnitCode != "none"){
            actionLib.setText(this.dropDownUnitCode, strUnitCode);
        }
        if (strCurrency != "none"){
            actionLib.setText(this.dropDownCurrency, strCurrency);
        }
        if (strBuyRate != "none"){
            actionLib.setText(this.textBoxBuyRate, strBuyRate);
        }
        if (strMinAmt != "none"){
            actionLib.setText(this.textBoxMinAmt, strMinAmt);
        }
        if (strFromSlab != "none"){
            this.fillFromSlab(strFromSlab);
        }
        if (strSoc != "none"){
            this.fillSoc(strSoc);
        }
    }
};
module.exports = new pageAddEnquiry();
