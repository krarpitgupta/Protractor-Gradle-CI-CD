var loginPage = require('../../pages/pageLogin/pageLogin.js');
var customerCommonElementPage = require('../../pages/pageAddCustomer/pageAddCustomer.js');
var customerAddressPage = require('../../pages/pageAddCustomer/pageAddCustomerAddress.js');
var customerMoreInfoPage = require('../../pages/pageAddCustomer/pageAddCustomerMoreInfo.js');
var customerContactPage = require('../../pages/pageAddCustomer/pageAddCustomerContact.js');
var customerServiceDivisionPage = require('../../pages/pageAddCustomer/pageAddCustomerServiceDivision.js');
var customerAccountsPage = require('../../pages/pageAddCustomer/pageAddCustomerAccounts.js');
var customerCreditPage = require('../../pages/pageAddCustomer/pageAddCustomerCredit.js');
var customerEmailPage = require('../../pages/pageAddCustomer/pageAddCustomerEmail.js');
var customerProfilesPage = require('../../pages/pageAddCustomer/pageAddCustomerProfiles.js');
var loginData = require('../../testdata/dataLogin/dataLogin.json');
var customerData = require('../../testdata/dataAddCustomer/dataCustomer.json');
var customerAddressData = require('../../testdata/dataAddCustomer/dataCustomerAddress.json');
var customerMoreInfoData = require('../../testdata/dataAddCustomer/dataCustomerMoreInfo.json');
var customerContactData = require('../../testdata/dataAddCustomer/dataCustomerContact.json');
var customerServiceDivisionData = require('../../testdata/dataAddCustomer/dataCustomerServiceDivision.json');
var customerAccountsData = require('../../testdata/dataAddCustomer/dataCustomerAccounts.json');
var customerCreditData = require('../../testdata/dataAddCustomer/dataCustomerCredit.json');
var customerEmailData = require('../../testdata/dataAddCustomer/dataCustomerEmail.json');
var customerProfilesData = require('../../testdata/dataAddCustomer/dataCustomerProfiles.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');

describe('test add customer functionality of newage', function() {
    var reqElement;
    //customer name declared in global data as same will be used in enquiry/quotation etc workflows
    globalData.customerName = customerData.name + actionLib.getTodayTime();

    beforeAll(function(){
        actionLib.openApplication(globalData.appUrl);
        actionLib.browserRefresh();
        actionLib.verifyElementPresent(loginPage.textboxSaasid);
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
    });

    it('test_addcustomer_1 : should be able to navigate to add customer page', function() {

        customerCommonElementPage.navigateToAddCustomerPage();
        customerCommonElementPage.addCustomer(globalData.customerName, "none", customerData.country)
    });
	
    it('test_addcustomer_2 : should be able to add customer details on address tab', function() {
        
        customerAddressPage.addCustomerAddress(customerAddressData.Type, customerAddressData.address1, 
            customerAddressData.address2, customerAddressData.address3, "Yes", customerAddressData.contactName, 
            customerAddressData.email, customerAddressData.phoneNumber, customerAddressData.mobileNumber, 
            customerAddressData.faxNumber, customerAddressData.city, customerAddressData.zipCode,
            customerAddressData.stateProvince, customerAddressData.branchSlNo, customerAddressData.bankDlrCodeNo);
    });

   it('test_addcustomer_3 : should be able to add customer details on more info tab', function() {

       actionLib.scrollToElement(customerCommonElementPage.dropDownName);
       actionLib.verifyElementPresent(customerMoreInfoPage.tabMoreInfo);
       actionLib.click(customerMoreInfoPage.tabMoreInfo);
       actionLib.verifyElementPresent(customerMoreInfoPage.textCustomerType);

       //-- Below mentioned nos. cannot be used again if used once. so for testing
       //making these values as per combination of current hour, min and sec.
       var iataCode = actionLib.getTodayTime();
       var vatNumber = actionLib.getTodayTime();
       var PanNumber = actionLib.getTodayTime();
       var svtRegnNumber = actionLib.getTodayTime();
       var tinNumber = actionLib.getTodayTime();
       var racNum = actionLib.getTodayTime();
       var accountNum = actionLib.getTodayTime();
       var personalIdNum = actionLib.getTodayTime();
       var tsaRegistrationNum = actionLib.getTodayTime();
       var spotNum = actionLib.getTodayTime();

       //--Customer checkbox is checked by-default, so unchecked first so a new Customer Type can be selected
       customerMoreInfoPage.fillCustomerType(customerMoreInfoData.disableCustomerType);
       //--if remove below line (add agent customer), then make iataCode variable as "none"
       customerMoreInfoPage.fillCustomerType(customerMoreInfoData.agentCustomerType);
       customerMoreInfoPage.addCustomerMoreInfo(customerMoreInfoData.customerType, "none", iataCode, vatNumber,
           PanNumber, svtRegnNumber, tinNumber, racNum, accountNum, "Yes", "Yes", "Yes", "none", personalIdNum,
           tsaRegistrationNum, spotNum);
   });

    it('test_addcustomer_4 : should be able to add customer details on contact tab', function() {
        
        actionLib.scrollToElement(customerContactPage.tabContact);
        actionLib.click(customerContactPage.tabContact);
        actionLib.verifyElementPresent(customerContactPage.textBoxFirstName);
        
        customerContactPage.addCustomerContactOfficial(customerContactData.salutation, customerContactData.firstName, 
            customerContactData.lastName, "yes", "yes", "yes", customerContactData.designation, customerContactData.department, 
            customerContactData.address, customerContactData.officePhoneNum, customerContactData.mobileNum, 
            customerContactData.faxNum, customerContactData.email, customerContactData.assistantName, 
            customerContactData.assistantPhoneNum, customerContactData.preferredCallTime, 
            customerContactData.reportingTo, "yes", customerContactData.formerCompany);
        
        actionLib.click(customerContactPage.tabPersonalInfo);
        actionLib.verifyElementPresent(customerContactPage.textAreaPersonalAddress);
        //--9th attribute is to Add Relation, if this attribute is none then make all the following attributes
        //also none 
        reqElement = actionLib.getTodayDate();
        customerContactPage.addCustomerContactPersonal(customerContactData.personalAddress, customerContactData.homePhone, 
            customerContactData.personalMobileNum, customerContactData.personalFaxNum, customerContactData.personalEmail, 
            customerContactData.qualification, "yes", customerContactData.children, "yes", 
            customerContactData.relationSalutation, customerContactData.relationFirstName, customerContactData.relationLastName, 
            customerContactData.relationShip, customerContactData.event, reqElement, customerContactData.personalRemarks);
        
        actionLib.click(customerContactPage.tabRemarks);
        actionLib.verifyElementPresent(customerContactPage.textAreaRemarks);
        customerContactPage.addCustomerContactRemarks(customerContactData.remarks);
    });

    it('test_addcustomer_5 : should be able to add customer details on service & division tab', function() {
        
        actionLib.scrollToElement(customerServiceDivisionPage.tabServiceDivision);
        actionLib.verifyElementPresent(customerServiceDivisionPage.tabServiceDivision);
        actionLib.click(customerServiceDivisionPage.tabServiceDivision);
        actionLib.verifyElementPresent(customerServiceDivisionPage.dropDownLocation);

        customerServiceDivisionPage.addCustomerServiceDivision(customerServiceDivisionData.location, 
            customerServiceDivisionData.service, customerServiceDivisionData.salesman, 
            customerServiceDivisionData.customerService, customerServiceDivisionData.tos, 
            customerServiceDivisionData.company, "none");
    });

    it('test_addcustomer_6 : should be able to add customer details on accounts tab', function() {
        
        actionLib.scrollToElement(customerAccountsPage.tabAccounts);
        actionLib.verifyElementPresent(customerAccountsPage.tabAccounts);
        actionLib.click(customerAccountsPage.tabAccounts);
        actionLib.verifyElementPresent(customerAccountsPage.dropDownPaymentSchedule);
        var cstNumber = actionLib.getTodayTime();
        
        customerAccountsPage.addCustomerAccounts(customerAccountsData.paymentSchedule, customerAccountsData.cafPercentage, 
            customerAccountsData.ccPercentage, "Yes", customerAccountsData.tdsPercentage, cstNumber, 
            customerAccountsData.location, customerAccountsData.account, customerAccountsData.termCode, 
            customerAccountsData.currencyCode, "none", customerAccountsData.taxExempted,
            customerAccountsData.status);
    });

    it('test_addcustomer_7 : should be able to add customer details on credit tab', function() {
        
        actionLib.scrollToElement(customerCreditPage.tabCredit);
        actionLib.verifyElementPresent(customerCreditPage.tabCredit);
        actionLib.click(customerCreditPage.tabCredit);
        actionLib.verifyElementPresent(customerCreditPage.dropDownLocation);

        customerCreditPage.addCustomerCredit(customerCreditData.location, customerCreditData.service,
            "none", customerCreditData.creditDays, customerCreditData.publishedCreditDays,
            customerCreditData.creditAmount);
    });

    it('test_addcustomer_8 : should be able to add customer details on email tab', function() {
        
        actionLib.scrollToElement(customerEmailPage.tabEmail);
        actionLib.verifyElementPresent(customerEmailPage.tabEmail);
        actionLib.click(customerEmailPage.tabEmail);
        actionLib.verifyElementPresent(customerEmailPage.textBoxEmail);

        customerEmailPage.addCustomerEmail(customerEmailData.email, customerEmailData.location,
            customerEmailData.originCountry, customerEmailData.destinCountry, "Yes");
    });

    it('test_addcustomer_9 : should be able to add customer details on profiles tab', function() {
        
        actionLib.scrollToElement(customerProfilesPage.tabProfiles);
        actionLib.verifyElementPresent(customerProfilesPage.tabProfiles);
        actionLib.click(customerProfilesPage.tabProfiles);
        actionLib.verifyElementPresent(customerProfilesPage.dropDownService);

        customerProfilesPage.addCustomerProfiles(customerProfilesData.service, customerProfilesData.termsOfShipment,
            customerProfilesData.origin, customerProfilesData.destination, customerProfilesData.frequency,
            customerProfilesData.commodityGrp, customerProfilesData.unit, customerProfilesData.volume, 
            customerProfilesData.noOfShipment, customerProfilesData.estRevenue, customerProfilesData.currentPotential);
    });

    it('test_addcustomer_10 : verify that customer is added successfully', function() {
        
        actionLib.click(customerCommonElementPage.btnSave);
        actionLib.click(customerCommonElementPage.btnPopUpOk);
        actionLib.verifyElementPresent(customerCommonElementPage.btnCancel);
        actionLib.click(customerCommonElementPage.btnCancel);
        actionLib.fillTextInTableColumn(customerData.customerTableDataXpathTag, 2, 2, globalData.customerName);
        actionLib.verifySearchTextInTableRowCol(customerData.customerTableDataXpathTag, 1, 2, globalData.customerName);
        actionLib.verifySearchTextInTableRowCol(customerData.customerTableDataXpathTag, 1, 4, customerData.country);
    });

    afterAll(function(){
        loginPage.appLogout();
    });
});
