var actionLib = require('../../library/action.js');

var pageAddQuotation = function(){
    var reqElement;

    this.linkQuotation = by.xpath("//a[@href='#/myAirExportTask?activeTab=Quotation']");
    this.btnCreateQuotation = by.className("btn btn-primary btn-xs btn-property accent-btn  enqft");
    this.dropDownCustomer = by.id("partyMaster");
    this.btnGeneralNotes = by.xpath("//button[@ng-click='generalModel()']");
    this.textAreaGeneralNotes = by.id("gNote0");
    this.btnSubmit = by.xpath("//button[@class='btn accent-btn']");
    this.calenderLoggedOn = by.id("loggedOn");
    this.dropDownLoggedBy = by.id("loggedBy");
    this.calenderValidFrom = by.id("validFrom");
    this.calenderExpiresOn = by.id("expiresOn");
    this.dropDownQuoteType = by.id("quoteType");
    this.uiSwitchRouted = by.id("whoRouted");
    this.dropDownRoutedBy = by.xpath("//input[@ng-model='quotation.agent'][@input-focus='false']");
    this.textBoxAttention = by.id("attention");
    this.dropDownSalesman = by.id("salesman");
    this.dropDownSalesCoordinator = by.id("salesCoordinator");
    this.textBoxAttention = by.id("attention");
    this.dropDownServiceName = by.id("service");
    this.dropDownOrigin = by.id("origin");
    this.dropDownDestination = by.id("destination");
    this.dropDownTermsOfShipment = by.id("tos");
    this.textBoxReferenceNo = by.id("refNo");
    this.textBoxGrossWeight = by.model("quotationDetail.grossWeight");
    this.textBoxVolumeWeight = by.id("volumeWeight");
    this.btnSave = by.xpath("//input[@class='btn btn-primary btn-xs btn-property accent-btn']");
    this.btnPopUpOk = by.xpath("//button[@ng-click='confirm(1)']");
    this.menuTasks = by.xpath("//a[@data-title='Tasks']");
    this.subMenuMyTasks = by.className("col-xs-9 ptb14 pl10 ng-binding");
    this.btnApprove = by.xpath("//button[@ng-click='approve()']");
    this.btnApproveYes = by.xpath("//button[@ng-click='confirm(1)']");
    this.imageApprovedQuotation = by.xpath("//div[@class='col-xs-6'][@ng-show=\"quotation.approved!='Pending'\"]");

    //carrier charge section
    this.expandCarrierCharge = by.className("fa fa-money");
    this.dropDownCarrier = by.id("0mccarrier");
    this.textBoxTransitDays = by.id("0mmtransit");
    this.uiSwitchAllInclusive = by.id("allInclusive");
    this.textBoxAmtPerUnit = by.id("0msellRateAmountPerUnit0");
    this.textBoxMinAmount = by.model("charge.sellRateMinAmount");

    //Air Notes
    this.expandAirNotes = by.className("fa fa-sticky-note");
    this.textAreaNotes = by.id("airNote0");

    this.fillShipper = function(strShipper){
        reqElement = by.id("shipper");
        actionLib.setText(reqElement, strShipper);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.fillFrequency = function(strFrequency){
        reqElement = by.id("0mmfrequency");
        actionLib.setText(reqElement, strFrequency);
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    this.addGeneralNotes = function(strNotes){
        actionLib.click(this.btnGeneralNotes);
        actionLib.verifyElementPresent(this.textAreaGeneralNotes);
        actionLib.setText(this.textAreaGeneralNotes, strNotes)
    }

    this.fillRoutedBy = function(strRoutedBy){
        actionLib.setText(this.dropDownRoutedBy, strRoutedBy)
        reqElement = by.className("uib-typeahead-match ng-scope active");
        actionLib.click(reqElement);
    }

    //specify "none" for parameters which you don't want to fill
    this.addQuotation = function(strShipper,
                                strReferenceNo,
                                strUiSwitchRouted,
                                strRoutedBy,
                                strAttention,
                                strNotes){

        if (strShipper != "none"){
            this.fillShipper(strShipper);
        }
        if (strReferenceNo != "none"){
            actionLib.setText(this.textBoxReferenceNo, strReferenceNo);
        }
        if (strUiSwitchRouted != "none"){
            actionLib.click(this.uiSwitchRouted)
        }
        if (strRoutedBy != "none"){
            this.fillRoutedBy(strRoutedBy);
        }
        if (strAttention != "none"){
            actionLib.setText(this.textBoxAttention, strAttention);
        }
        if (strNotes != "none"){
            this.addGeneralNotes(strNotes);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addQuotationCarrierCharge = function(strCarrier, strTransitDays, strFrequency, 
        strAmtPerUnit, strMinAmount){

        if (strCarrier != "none"){
            actionLib.setText(this.dropDownCarrier, strCarrier);
        }
        if (strTransitDays != "none"){
            actionLib.setText(this.textBoxTransitDays, strTransitDays);
        }
        if (strFrequency != "none"){
            this.fillFrequency(strFrequency)
        }
        if (strAmtPerUnit != "none"){
            actionLib.setText(this.textBoxAmtPerUnit, strAmtPerUnit);
        }
        if (strMinAmount != "none"){
            actionLib.setText(this.textBoxMinAmount, strMinAmount);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addQuotationAirNotes = function(strNotes){

        if (strNotes != "none"){
            actionLib.setText(this.textAreaNotes, strNotes);
        }
    }
};
module.exports = new pageAddQuotation();
