var companyRegistrationPage = require('../../pages/pageRegistration/pageCompanyRegistration.js');
var loginCreationRegistrationPage = require('../../pages/pageRegistration/pageLoginCreationRegistration.js');
var configurationRegistrationPage = require('../../pages/pageRegistration/pageConfigurationRegistration.js');
var companyData = require('../../testdata/dataRegistration/dataCompanyRegistration.json');
var loginCreationData = require('../../testdata/dataRegistration/dataLoginCreationRegistration.json');
var configurationData = require('../../testdata/dataRegistration/dataConfigurationRegistration.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');

describe('test company tab on registration screen', function() {

    var reqElement;
    var strCompanyNameData;

      beforeAll(function(){
          actionLib.openApplication(globalData.appUrl);
          actionLib.browserRefresh();
      });


    it('test_companytab_1 : user receives error message when click next button with empty first name field', 
    function() {
      
        actionLib.verifyElementPresent(companyRegistrationPage.linkSignUp);
        actionLib.click(companyRegistrationPage.linkSignUp);
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, "none", "none", "none", "none", 
            "none","none", "none", "none", "none", "none", "none", "none", "none","none", "none", "none", 
            "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxFirstName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "First name is mandatory");
    });

    it('test_companytab_2 : user receives error message when click next button with empty last name field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, "none", "none", 
            "none", "none","none", "none", "none", "none", "none", "none", "none", "none","none", "none", 
            "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxLastName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Last name is mandatory");
    });

    it('test_companytab_3 : user receives error message when click next button with empty email field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            "none", "none", "none","none", "none", "none", "none", "none", "none", "none", "none","none", 
            "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxEmail, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "eMail is mandatory");
    });

    it('test_companytab_4 : user receives error message when click next button with empty country field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, "none", "none","none", "none", "none", "none", "none", "none", "none", "none",
            "none", "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.dropDownCountryName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Country is mandatory");
    });

    it('test_companytab_5 : user receives error message when click next button with empty phone number field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, "none","none", "none", "none", "none", "none", "none", 
            "none", "none","none", "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxPhoneNumber, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Phone Number is mandatory");
    });

    it('test_companytab_6 : user receives error message when click next button with empty company name field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, companyData.phoneNumber, "none", "none", "none", 
            "none", "none", "none", "none", "none","none", "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxCompanyName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Company Name is mandatory");
    });

    it('test_companytab_7 : user receives error message when click next button with empty address 1 field', 
    function() {

        strCompanyNameData = companyData.companyName + actionLib.getTodayTime();
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, companyData.phoneNumber, "none", strCompanyNameData, 
            "none", "none", "none", "none", "none", "none","none", "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxAddress1, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Address 1 is mandatory");
    });

    it('test_companytab_8 : user receives error message when click next button with empty area field', 
    function() {

        strCompanyNameData = companyData.companyName + actionLib.getTodayTime();
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, companyData.phoneNumber, "none", strCompanyNameData, 
            companyData.address1, "none", "none", "none", "none", "none","none", "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxArea, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Area is mandatory");
    });

    it('test_companytab_9 : user receives error message when click next button with empty city field', 
    function() {

        strCompanyNameData = companyData.companyName + actionLib.getTodayTime();
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, companyData.phoneNumber, "none", strCompanyNameData, 
            companyData.address1, "none", "none", companyData.area, "none", "none","none", "none", "none", 
            "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.dropDownCityName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "City is mandatory");
    });

    it('test_companytab_10 : user receives error message when click next button with empty time zone field', 
    function() {

        strCompanyNameData = companyData.companyName + actionLib.getTodayTime();
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, companyData.lastName, 
            companyData.email, companyData.countryName, companyData.phoneNumber, "none", strCompanyNameData, 
            companyData.address1, "none", "none", companyData.area, companyData.cityName, "none","none", 
            "none", "none", "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.dropDownCityName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Timezone is mandatory");
    });

    it('test_companytab_11 : user receives error message when click next button with existing company name field', 
    function() {
        
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, 
            companyData.lastName, companyData.email, companyData.countryName, companyData.phoneNumber,
            companyData.mobileNumber, companyData.existingCompanyName, companyData.address1, companyData.address2,
            companyData.address3, companyData.area, companyData.cityName, companyData.stateProvince,
            companyData.timeZone, companyData.dateFormat, companyData.zipCode, "none");
        reqElement = actionLib.getChainedElement(companyRegistrationPage.textBoxCompanyName, 
            companyRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "This company name is already registered with us!");
    });
});

