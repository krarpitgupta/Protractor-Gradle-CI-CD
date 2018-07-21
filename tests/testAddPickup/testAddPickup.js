// var loginPage = require('../../pages/pageLogin/pageLogin.js');
// var enquiryPage = require('../../pages/pageEnquiry/pageEnquiry.js');
// var shipmentServiceRoutingPage = require('../../pages/pageShipment/pageShipmentServiceRouting.js');
// var pickUpPage = require('../../pages/pagePickUp/pagePickUp.js');
// var loginData = require('../../testdata/dataLogin/dataLogin.json');
// var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
// var actionLib = require('../../library/action.js');
// var enquiryData = require('../../testdata/dataEnquiry/dataEnquiry.json');
// var shipmentHawbData = require('../../testdata/dataShipment/dataShipmentHawb.json');
// var pickUpData = require('../../testdata/dataPickUp/dataPickUp.json');

// describe('test add pickup functionality of newage', function() {
//     var strPickUpFollowUpDate;
//     var strPlannedPickUpDate;
//     var strActualPickUpDate;

//     beforeAll(function(){
//         actionLib.openApplication(globalData.appUrl);
//         actionLib.browserRefresh();
//         actionLib.verifyElementPresent(loginPage.textboxSaasid);
//         loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
//     });
	
//     it('test_addpickup_1 : should be able to navigate to add pickup page', function() {
        
//         strPickUpFollowUpDate = actionLib.getTodayDate();
//         strPlannedPickUpDate = actionLib.getTodayDate();
//         strActualPickUpDate = actionLib.getTodayDate();

//         actionLib.verifyElementPresent(pickUpPage.linkPickUp);
//         //----second attribute value none - get the pick up count on the my task page        
//         actionLib.verifySplitCountOfLocator(pickUpPage.linkPickUp, "none");        

//         actionLib.verifyElementPresent(shipmentServiceRoutingPage.linkShipment);
//         actionLib.click(shipmentServiceRoutingPage.linkShipment);
//         actionLib.fillTextInTableColumn(shipmentHawbData.shipmentTableDataXpathTag, 2, 2, globalData.customerName);
//         actionLib.clickRowInAirExportTable(globalData.customerName, enquiryData.origin);

//     });
    
//     it('test_addpickup_2 : should be able to add pickup data', function() {
        
//         actionLib.verifyElementPresent(pickUpPage.btnEdit);
//         actionLib.click(pickUpPage.btnEdit);
//         actionLib.verifyElementPresent(pickUpPage.subMenuPickUpDelivery);
//         actionLib.click(pickUpPage.subMenuPickUpDelivery);
        
//         actionLib.click(pickUpPage.expandPickUp);
//         actionLib.click(pickUpPage.checkBoxOurPickUp);
//         pickUpPage.addPickUp(pickUpData.pickUpAddress1, pickUpData.pickUpAddress2, pickUpData.pickUpAddress3, 
//             pickUpData.pickUpState, pickUpData.pickUpCity, pickUpData.pickUpZipCode, pickUpData.pickUpContactDetails,
//             pickUpData.pickUpEmail, pickUpData.pickUpMobileNo, pickUpData.pickUpPhoneNo, strPickUpFollowUpDate, strPlannedPickUpDate,
//             strActualPickUpDate);
//         actionLib.click(pickUpPage.expandPickUp);
//     });

//     it('test_addpickup_3 : should be able to save pick up successfully', function() {

//         actionLib.verifyElementPresent(pickUpPage.btnUpdate);
//         actionLib.click(pickUpPage.btnUpdate);
    
//         actionLib.verifyElementPresent(pickUpPage.btnPopUpOk);
//         actionLib.click(pickUpPage.btnPopUpOk);

//         actionLib.click(actionLib.menuTasks);
//         actionLib.verifyElementPresent(actionLib.subMenuMyTasks);
//         actionLib.click(actionLib.subMenuMyTasks);

//         actionLib.verifyElementPresent(pickUpPage.linkPickUp);
//         //--second attribute value other than none - get the pick up count on the my task page
//         // and verify it is 1 more than the previous pick up count.
//         actionLib.verifySplitCountOfLocator(pickUpPage.linkPickUp, "Yes");
//         actionLib.click(pickUpPage.linkPickUp);
//         actionLib.fillTextInTableColumn(pickUpData.pickUpTableDataXpathTag, 2, 2, globalData.customerName);
//         actionLib.verifySearchTextInTableRowCol(pickUpData.pickUpTableDataXpathTag, 1, 2, globalData.customerName);
//     });
	
//     afterAll(function(){
//         loginPage.appLogout();
//     });
// });

