var loginPage = require('../../pages/pageLogin/pageLogin.js');
var enquiryPage = require('../../pages/pageEnquiry/pageEnquiry.js');
var quotationPage = require('../../pages/pageQuotation/pageQuotation.js');
var loginData = require('../../testdata/dataLogin/dataLogin.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');
var enquiryData = require('../../testdata/dataEnquiry/dataEnquiry.json');
var quotationData = require('../../testdata/dataQuotation/dataQuotation.json');

describe('test add quotation functionality of newage', function() {
    var strEnquiryReceived;
    var strQuoteByDate;
    var attachmentUpload = "../testdata/dataFiles/agentTemplate.xlsx";

    beforeAll(function(){
        actionLib.openApplication(globalData.appUrl);
        actionLib.browserRefresh();
        actionLib.verifyElementPresent(loginPage.textboxSaasid);
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
    });
	
    it('test_addquotation_1 : should be able to navigate to add quotation page', function() {
        
        actionLib.verifyElementPresent(quotationPage.linkQuotation);
        //----second attribute value none - get the quotation count on the my task page        
        actionLib.verifySplitCountOfLocator(quotationPage.linkQuotation, "none");        
        
        actionLib.verifyElementPresent(enquiryPage.linkEnquiry);
        actionLib.click(enquiryPage.linkEnquiry);
        actionLib.fillTextInTableColumn(enquiryData.enquiryTableDataXpathTag, 2, 2, globalData.customerName);
        actionLib.clickRowInAirExportTable(globalData.customerName, enquiryData.origin);
        actionLib.verifyElementPresent(quotationPage.btnCreateQuotation);
    });
	
    it('test_addquotation_2 : should be able to add data on quotation page', function() {

        actionLib.click(quotationPage.btnCreateQuotation);
        actionLib.verifyElementPresent(quotationPage.dropDownCustomer);
        quotationPage.addQuotation(
                                globalData.customerName,
                                quotationData.referenceNo,
                                "yes",
                                globalData.customerName,
                                quotationData.attention ,
                                quotationData.generalNotes);

        actionLib.click(quotationPage.btnSubmit);
    });

    it('test_addquotation_3 : should be able to add data on quotation charge carrier section', function() {
    
        actionLib.click(quotationPage.expandCarrierCharge);
        actionLib.verifyElementPresent(quotationPage.dropDownCarrier);
        quotationPage.addQuotationCarrierCharge(quotationData.carrier, quotationData.transitDays, 
            quotationData.frequency, quotationData.amtPerUnit, quotationData.minAmount);
        actionLib.verifyElementPresent(quotationPage.dropDownCarrier);
        actionLib.click(quotationPage.expandCarrierCharge);
    });
    
    it('test_addquotation_4 : should be able to add data on quotation air notes section', function() {
	
        actionLib.verifyElementPresent(quotationPage.expandAirNotes);
        actionLib.click(quotationPage.expandAirNotes);
        actionLib.verifyElementPresent(quotationPage.textAreaNotes);
        quotationPage.addQuotationAirNotes(quotationData.notes);
        actionLib.click(quotationPage.expandAirNotes);
    });

    it('test_addquotation_5 : should be able to save quotation successfully', function() {
        
        actionLib.verifyElementPresent(quotationPage.btnSave);
        actionLib.click(quotationPage.btnSave);
        actionLib.verifyElementPresent(quotationPage.btnPopUpOk);
        actionLib.click(quotationPage.btnPopUpOk);

        actionLib.click(actionLib.menuTasks);
        actionLib.verifyElementPresent(actionLib.subMenuMyTasks);
        actionLib.click(actionLib.subMenuMyTasks);

        actionLib.verifyElementPresent(quotationPage.linkQuotation);
        //--second attribute value other than none - get the quotation count on the my task page
        // and verify it is 1 more than the previous shipment count.
        actionLib.verifySplitCountOfLocator(quotationPage.linkQuotation, "Yes");
    });

    it('test_addquotation_6 : should be able to approve quotation', function() {
        
        actionLib.click(quotationPage.linkQuotation);
        actionLib.fillTextInTableColumn(quotationData.quotationTableDataXpathTag, 2, 2, globalData.customerName);
        actionLib.verifySearchTextInTableRowCol(quotationData.quotationTableDataXpathTag, 1, 2, globalData.customerName);
        actionLib.clickRowInAirExportTable(globalData.customerName, enquiryData.origin);
        actionLib.verifyElementPresent(quotationPage.btnApprove);
        actionLib.click(quotationPage.btnApprove);
        actionLib.verifyElementPresent(quotationPage.btnApproveYes);
        actionLib.click(quotationPage.btnApproveYes);
        actionLib.verifyElementPresent(quotationPage.imageApprovedQuotation);
    });

    afterAll(function(){
        loginPage.appLogout();
    });
});

