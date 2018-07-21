var companyRegistrationPage = require('../../pages/pageRegistration/pageCompanyRegistration.js');
var loginCreationRegistrationPage = require('../../pages/pageRegistration/pageLoginCreationRegistration.js');
var configurationRegistrationPage = require('../../pages/pageRegistration/pageConfigurationRegistration.js');
var customerAgentRegistrationPage = require('../../pages/pageRegistration/pageCustAgentUploadRegistration.js');
var financeSetupRegistrationPage = require('../../pages/pageRegistration/pageFinanceSetupRegistration.js');
var chargeSetupRegistrationPage = require('../../pages/pageRegistration/pageChargeSetupRegistration.js');
var othersRegistrationPage = require('../../pages/pageRegistration/pageOthersRegistration.js');
var companyData = require('../../testdata/dataRegistration/dataCompanyRegistration.json');
var loginCreationData = require('../../testdata/dataRegistration/dataLoginCreationRegistration.json');
var configurationData = require('../../testdata/dataRegistration/dataConfigurationRegistration.json');
var financeSetupData = require('../../testdata/dataRegistration/dataFinanceSetupRegistration.json');
var chargeSetupData = require('../../testdata/dataRegistration/dataChargeSetupRegistration.json');
var othersTabData = require('../../testdata/dataRegistration/dataOthersRegistration.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');

describe('test signup functionality of newage', function() {
  
    var fileUploadLogoPath = '../testdata/dataFiles/companyLogo.jpg';
    var fileUploadCustomerPath = '../testdata/dataFiles/customerTemplate.xlsx';
    var fileUploadAgentPath = '../testdata/dataFiles/agentTemplate.xlsx';
    var fileUploadChargeSetupPath = '../testdata/dataFiles/charge_template.xlsx';
    var strCompanyNameData;
    var strUserName;
    var reqElement;

      beforeAll(function(){
          actionLib.openApplication(globalData.appUrl);
          actionLib.browserRefresh();
      });


    it('test_signup_1 : should be able to provide details in company tab & navigate to next tab', function() {
    
        actionLib.browserRefresh();
        actionLib.verifyElementPresent(companyRegistrationPage.linkSignUp);
        actionLib.click(companyRegistrationPage.linkSignUp);

        strCompanyNameData = companyData.companyName + actionLib.getTodayTime();
        companyRegistrationPage.signUpCompanyTab(companyData.salutation, companyData.firstName, 
            companyData.lastName, companyData.email, companyData.countryName, companyData.phoneNumber,
            companyData.mobileNumber, strCompanyNameData, companyData.address1, companyData.address2,
            companyData.address3, companyData.area, companyData.cityName, companyData.stateProvince,
            companyData.timeZone, companyData.dateFormat, companyData.zipCode, fileUploadLogoPath);
        actionLib.verifyElementPresent(companyRegistrationPage.iconLoginCreation);
    });

    it('test_signup_2 : should be able to provide details in login creation tab & navigate to next tab', 
    function() {

        strUserName = companyData.firstName + companyData.lastName ;
        //when want to click on "check all" link under "Select service" dropdown then pass any string 
        //other than "none" in fifth attribute below
        loginCreationRegistrationPage.signUpLoginCreationTab(loginCreationData.position, strUserName, 
            loginCreationData.password, loginCreationData.confirmPassword, "selectAllSelectService");
        actionLib.verifyElementPresent(loginCreationRegistrationPage.iconConfiguration);
    });

    it('test_signup_3 : should be able to provide details in configuration tab  & navigate to next tab', 
    function() {
    
        //when want to click uiSwitch then pass any string other than "none" in third attribute below
        configurationRegistrationPage.signUpConfigurationTab(configurationData.currency, configurationData.language,
            "Yes", configurationRegistrationPage.getCurrentMonthYear());
        actionLib.verifyElementPresent(configurationRegistrationPage.iconCustomerAgent);
    });

    it('test_signup_4 : should be able to provide details in customer Agent tab & navigate to next tab', 
    function() {

        customerAgentRegistrationPage.signUpCustomerAgentUploadTab(fileUploadCustomerPath, "none");
        actionLib.explicitWait(5000);
        reqElement = actionLib.getChainedElement(customerAgentRegistrationPage.msgSuccessfulFileUpload, 
            customerAgentRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Customer data validated successfully");
        customerAgentRegistrationPage.signUpCustomerAgentUploadTab("none", fileUploadAgentPath);
        actionLib.explicitWait(5000);
        reqElement = actionLib.getChainedElement(customerAgentRegistrationPage.msgSuccessfulFileUpload,
            customerAgentRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Agent data validated successfully");
        actionLib.click(customerAgentRegistrationPage.buttonNext);
        actionLib.verifyElementPresent(customerAgentRegistrationPage.iconFinanceSetup);
    });

    it('test_signup_5 : should be able to provide details in finance setup tab  & navigate to next tab', 
    function() {
    
        //when want to click uiSwitch then pass any string other than "none" in first two attributes below
        financeSetupRegistrationPage.signUpFinanceSetupTab("Yes", "Yes", financeSetupData.invoiceHeaderNote,
            financeSetupData.invoiceFooterNote);
        actionLib.click(financeSetupRegistrationPage.buttonNext);
        actionLib.verifyElementPresent(financeSetupRegistrationPage.iconChargeSetup);
    });

    it('test_signup_6 : should be able to provide details in charge setup tab & navigate to next tab', 
    function() {

        chargeSetupRegistrationPage.signUpChargeSetupTab(chargeSetupData.chargeName, chargeSetupData.chargeCode,
            chargeSetupData.chargeType, chargeSetupData.calculationType, fileUploadChargeSetupPath);
        reqElement = actionLib.getChainedElement(chargeSetupRegistrationPage.msgSuccessfulFileUpload,
            chargeSetupRegistrationPage.strChildLocator);
        actionLib.verifyElementText("none", reqElement, "Charge data uploaded successfully");
        actionLib.click(chargeSetupRegistrationPage.buttonNext);
        actionLib.verifyElementPresent(chargeSetupRegistrationPage.iconOthers);
    });

    it('test_signup_7 : should be able to provide details in Others tab', function() {

        actionLib.click(othersRegistrationPage.tabJobDateSetup);
        othersRegistrationPage.signUpJobDateSetupTab(othersTabData.jobDateSetupExport, othersTabData.jobDateSetupImport);
        actionLib.click(othersRegistrationPage.tabAccountDocNumberSetup);
        othersRegistrationPage.signUpAccountingDocNumTab(othersTabData.daybookCode, othersTabData.daybookName,
            othersTabData.documentType, othersTabData.noOfDigits, othersTabData.prefix, othersTabData.yearOption, 
            othersTabData.monthOption, othersTabData.startingNumber, othersTabData.suffix, othersTabData.separator);
        actionLib.click(othersRegistrationPage.buttonFinish);
        actionLib.verifyElementText(othersRegistrationPage.textSignUpSuccessfulSubmission, "none", 
            "Your information has been submitted successfully");
        actionLib.verifyElementText(othersRegistrationPage.textSignUpEmailActivation, "none", 
            "Please check your email to activate your account");
    });
});

