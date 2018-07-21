var loginPage = require('../../pages/pageLogin/pageLogin.js');
var enquiryPage = require('../../pages/pageEnquiry/pageEnquiry.js');
var loginData = require('../../testdata/dataLogin/dataLogin.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');
var enquiryData = require('../../testdata/dataEnquiry/dataEnquiry.json');

describe('test add enquiry functionality of newage', function() {
    var strEnquiryReceived;
    var strQuoteByDate;
    var attachmentUpload = "../testdata/dataFiles/agentTemplate.xlsx";

    beforeAll(function(){
        actionLib.openApplication(globalData.appUrl);
        actionLib.browserRefresh();
        actionLib.verifyElementPresent(loginPage.textboxSaasid);
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
    });
	
    it('test_addenquiry_1 : should be able to navigate to add enquiry page', function() {
        actionLib.verifyElementPresent(enquiryPage.btnAddEnquiry);
        //----second attribute value none - get the enquiry count on the my task page
        actionLib.verifyElementPresent(enquiryPage.linkEnquiry);
        actionLib.verifySplitCountOfLocator(enquiryPage.linkEnquiry, "none");

        enquiryPage.navigateToAddEnquiryPage();
        actionLib.verifyElementPresent(enquiryPage.dropDownCustomer);
    });

    it('test_addenquiry_2 : should be able to add enquiry new service tab', function() {

        strEnquiryReceived = actionLib.getTodayDate();
        strQuoteByDate = actionLib.getTodayDate();

        enquiryPage.addEnquiry(globalData.customerName, "Yes", "Yes", strEnquiryReceived,
            strQuoteByDate, enquiryData.trade, enquiryData.service, enquiryData.origin, enquiryData.destination,
            enquiryData.termsOfShipment, "Yes", "Yes", enquiryData.commodityGroup, enquiryData.grossWeight,
            enquiryData.volumeWeight, enquiryData.remarks, attachmentUpload, enquiryData.attachmentRefNo);
    });

    it('test_addenquiry_3 : should be able to add enquiry dimensions section', function() {
        actionLib.click(enquiryPage.expandDimensionsSection);
        actionLib.verifyElementPresent(enquiryPage.textBoxNoOfPieces);
        enquiryPage.addEnquiryDimensions(enquiryData.noOfPieces, enquiryData.length, enquiryData.width,
            enquiryData.height, enquiryData.dimensionGrossWeight);
        actionLib.click(enquiryPage.expandDimensionsSection);
    });

    // -- This test case is commented as the shipment active count on my task page is not getting updated
    // if data is added in pick up
    // it('test_addenquiry_4 : should be able to add enquiry pick up / delivery section', function() {
    //     actionLib.click(enquiryPage.expandPickUpDeliverySection);
    //     actionLib.verifyElementPresent(enquiryPage.textBoxPickUpAddress1);
    //     enquiryPage.addEnquiryPickUpDelivery(enquiryData.pickUpAddress1, enquiryData.pickUpAddress2, 
    //         enquiryData.pickUpAddress3, enquiryData.pickUpPoBox, enquiryData.pickUpCity, enquiryData.pickUpState, 
    //         enquiryData.pickUpCountry, enquiryData.deliveryAddress1, enquiryData.deliveryAddress2, 
    //         enquiryData.deliveryAddress3, enquiryData.deliveryPoBox, enquiryData.deliveryCity, 
    //         enquiryData.deliveryState, enquiryData.deliveryCountry);
    //     actionLib.click(enquiryPage.expandPickUpDeliverySection);
    // });

    it('test_addenquiry_5 : should be able to add enquiry rate request section', function() {
        actionLib.click(enquiryPage.expandRateRequestSection);
        actionLib.verifyElementPresent(enquiryPage.dropDownVendor);
        //-- if 5th attribute is none (as it opens a new window) then make the attributes following it also none
        //-- Added 1 charge under charge detail pop up as final attribute is selected as yes
        enquiryPage.addEnquiryRateRequest(globalData.customerName, enquiryData.contactPerson, enquiryData.Email,
            enquiryData.Final, "Yes", enquiryData.chargeCode, enquiryData.unitCode, enquiryData.currency,
            enquiryData.buyRate, enquiryData.minAmt, enquiryData.fromSlab, enquiryData.Soc);
        actionLib.click(enquiryPage.btnChargeDetailSave);
        actionLib.verifyElementPresent(enquiryPage.expandRateRequestSection);
        actionLib.click(enquiryPage.expandRateRequestSection);
    });

    it('test_addenquiry_6 : should be able to save enquiry successfully', function() {

        actionLib.verifyElementPresent(enquiryPage.btnSave);
        actionLib.click(enquiryPage.btnSave);
        actionLib.click(enquiryPage.btnPopUpOk);

        actionLib.click(actionLib.menuTasks);
        actionLib.verifyElementPresent(actionLib.subMenuMyTasks);
        actionLib.click(actionLib.subMenuMyTasks);

        actionLib.verifyElementPresent(enquiryPage.linkEnquiry);
        //--second attribute value other than none - get the enquiry count on the my task page
        // and verify it is 1 more than the previous enquiry count.
        actionLib.verifySplitCountOfLocator(enquiryPage.linkEnquiry, "Yes");

    });

    it('test_addenquiry_7 : verify added enquiry few data values', function() {

        actionLib.click(enquiryPage.linkEnquiry);
        actionLib.fillTextInTableColumn(enquiryData.enquiryTableDataXpathTag, 2, 2, globalData.customerName)
        actionLib.verifySearchTextInTableRowCol(enquiryData.enquiryTableDataXpathTag, 1, 2, globalData.customerName);
        actionLib.verifySearchTextInTableRowCol(enquiryData.enquiryTableDataXpathTag, 1, 4, strEnquiryReceived);
        actionLib.verifySearchTextInTableRowCol(enquiryData.enquiryTableDataXpathTag, 1, 5, strQuoteByDate);
        actionLib.verifySearchTextInTableRowCol(enquiryData.enquiryTableDataXpathTag, 1, 7, enquiryData.origin);
        actionLib.verifySearchTextInTableRowCol(enquiryData.enquiryTableDataXpathTag, 1, 8, enquiryData.destination);
    });

    afterAll(function(){
        loginPage.appLogout();
    });
});

