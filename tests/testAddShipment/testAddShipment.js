var loginPage = require('../../pages/pageLogin/pageLogin.js');
var enquiryPage = require('../../pages/pageEnquiry/pageEnquiry.js');
var quotationPage = require('../../pages/pageQuotation/pageQuotation.js');
var shipmentServiceRoutingPage = require('../../pages/pageShipment/pageShipmentServiceRouting.js');
var shipmentCargoDetailsPage = require('../../pages/pageShipment/pageShipmentCargoDetails.js');
var shipmentHawbPage = require('../../pages/pageShipment/pageShipmentHawb.js');
var loginData = require('../../testdata/dataLogin/dataLogin.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');
var enquiryData = require('../../testdata/dataEnquiry/dataEnquiry.json');
var quotationData = require('../../testdata/dataQuotation/dataQuotation.json');
var shipmentServiceRoutingData = require('../../testdata/dataShipment/dataShipmentServiceRouting.json');
var shipmentCargoDetailsData = require('../../testdata/dataShipment/dataShipmentCargoDetails.json');
var shipmentHawbData = require('../../testdata/dataShipment/dataShipmentHawb.json');

describe('test add shipment functionality of newage', function() {
    var strEta;
    var strEtd;
    var strConnectionsEta;
    var strConnectionsEtd;

    beforeAll(function(){
        actionLib.openApplication(globalData.appUrl);
        actionLib.browserRefresh();
        actionLib.verifyElementPresent(loginPage.textboxSaasid);
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
    });
	
    it('test_addshipment_1 : should be able to navigate to add shipment page', function() {
        
        actionLib.verifyElementPresent(shipmentServiceRoutingPage.linkShipment);
        //----second attribute value none - get the quotation count on the my task page        
        actionLib.verifySplitCountOfLocator(shipmentServiceRoutingPage.linkShipment, "none");        

        actionLib.verifyElementPresent(quotationPage.linkQuotation);
        actionLib.click(quotationPage.linkQuotation);
        actionLib.fillTextInTableColumn(quotationData.quotationTableDataXpathTag, 2, 2, globalData.customerName);
        actionLib.clickRowInAirExportTable(globalData.customerName, enquiryData.origin);
        actionLib.verifyElementPresent(shipmentServiceRoutingPage.btnCreateShipment);
    });
	
    it('test_addshipment_2 : should be able to add data on shipment service routing tab', function() {

        actionLib.click(shipmentServiceRoutingPage.btnCreateShipment);
        actionLib.verifyElementPresent(shipmentServiceRoutingPage.uiSwitchDirect);
        shipmentServiceRoutingPage.addShipmentServiceRouting("yes", "yes", "none", "yes");
    });

    it('test_addshipment_3 : should be able to add data on shipment routing carrier info section', function() {
        
        strEta = actionLib.getTodayDate();
        strEtd = actionLib.getTodayDate();

        if(element(shipmentServiceRoutingPage.textBoxFlightNo).isDisplayed() == false){
            actionLib.click(shipmentServiceRoutingPage.expandRoutingCarrierInfo);
        }
        shipmentServiceRoutingPage.addShipmentRoutingCarrierInfo(shipmentServiceRoutingData.carrier, 
            shipmentServiceRoutingData.flightNo, shipmentServiceRoutingData.mawbNo, strEtd, strEta);
        actionLib.click(shipmentServiceRoutingPage.expandRoutingCarrierInfo);
    });

    it('test_addshipment_4 : should be able to add data on shipment connections section', function() {
        
        strConnectionsEtd = actionLib.getTodayDate();
        strConnectionsEta = actionLib.getTodayDate();

        if(element(shipmentServiceRoutingPage.dropDownMove).isDisplayed() == false){
            actionLib.click(shipmentServiceRoutingPage.expandConnections);
        }
        shipmentServiceRoutingPage.addShipmentConnections(shipmentServiceRoutingData.connectionsMove, 
            shipmentServiceRoutingData.connectionsFrom, shipmentServiceRoutingData.connectionsTo, 
            strConnectionsEtd, strConnectionsEta, shipmentServiceRoutingData.connectionsCarrierVessel,
            shipmentServiceRoutingData.connectionsVoyFltNo, shipmentServiceRoutingData.connectionsStatus);
        actionLib.click(shipmentServiceRoutingPage.expandConnections);
    });

    it('test_addshipment_5 : should be able to add data on shipment cargo details tab', function() {
        actionLib.click(shipmentCargoDetailsPage.subMenuCargoDetails);
        actionLib.verifyElementPresent(shipmentCargoDetailsPage.uiSwitchHaz);
        shipmentCargoDetailsPage.addShipmentCargoDetails(globalData.customerName, "yes", "yes", "yes", "none",
            "yes", shipmentCargoDetailsData.sellRate, shipmentCargoDetailsData.holdReleaseNote);
    });

    it('test_addshipment_6 : should be able to add data on shipment hawb tab', function() {
        actionLib.click(shipmentHawbPage.subMenuHawb);
        actionLib.verifyElementPresent(shipmentHawbPage.dropDownConsignee);
        shipmentHawbPage.addShipmentHawb(globalData.customerName, globalData.customerName, globalData.customerName, 
            globalData.customerName, globalData.customerName, globalData.customerName, shipmentHawbData.handlingInfo,
            shipmentHawbData.accountingInfo, shipmentHawbData.commodityDescription, shipmentHawbData.marksNo);
    });

    it('test_addshipment_7 : should be able to save shipment successfully', function() {

        actionLib.verifyElementPresent(shipmentServiceRoutingPage.btnSave);
        actionLib.click(shipmentServiceRoutingPage.btnSave);
        actionLib.verifyElementPresent(shipmentServiceRoutingPage.btnPopUpOk);
        actionLib.click(shipmentServiceRoutingPage.btnPopUpOk);

        actionLib.click(actionLib.menuTasks);
        actionLib.verifyElementPresent(actionLib.subMenuMyTasks);
        actionLib.click(actionLib.subMenuMyTasks);

        actionLib.verifyElementPresent(shipmentServiceRoutingPage.linkShipment);
        //--second attribute value other than none - get the shipment count on the my task page
        // and verify it is 1 more than the previous shipment count.
        actionLib.verifySplitCountOfLocator(shipmentServiceRoutingPage.linkShipment, "Yes");  
        
        actionLib.click(shipmentServiceRoutingPage.linkShipment);
        actionLib.fillTextInTableColumn(shipmentHawbData.shipmentTableDataXpathTag, 2, 2, globalData.customerName);
        actionLib.verifySearchTextInTableRowCol(shipmentHawbData.shipmentTableDataXpathTag, 1, 2, globalData.customerName);        
        actionLib.verifySearchTextInTableRowCol(shipmentHawbData.shipmentTableDataXpathTag, 1, 6, enquiryData.origin);        
        actionLib.verifySearchTextInTableRowCol(shipmentHawbData.shipmentTableDataXpathTag, 1, 7, enquiryData.destination);
    });

    afterAll(function(){
        loginPage.appLogout();
    });
});

