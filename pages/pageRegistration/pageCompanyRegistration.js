var actionLib = require('../../library/action.js');

var pageCompanyRegistration = function(){

    this.linkSignUp = by.xpath("//ul[@class='list-inline pull-left']//a[contains(text(),'SIGN UP')]");
    this.iconCompany = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Company')]");
    this.textBoxFirstName = by.id('locationSetup.firstName');
    this.textBoxLastName = by.id('locationSetup.lastName');
    this.textBoxEmail = by.id('email');
    this.dropDownCountryName = by.id('locationSetup.countryMaster');
    this.dropDownTimeZone = by.id('timeZone');
    this.dropDownStateProvince = by.id('stateProvince');
    this.dropDownCityName = by.id('locCity');
    this.textBoxCompanyName = by.id('locationSetup.companyRegisteredName');
    this.textBoxPhoneNumber = by.id('locationSetup.phone');
    this.textBoxMobileNumber = by.id('locationSetup.mobile');
    this.textBoxAddress1 = by.id('locationSetup.addressLine1');
    this.textBoxAddress2 = by.id('locationSetup.addressLine2');
    this.textBoxAddress3 = by.id('locationSetup.addressLine3');
    this.textBoxArea = by.id('locationSetup.area');
    this.textBoxZipCode = by.id('zipCode');
    this.buttonNext = by.id('nextCompanyTab');
    this.iconLoginCreation = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Login Creation')]");
    this.fileToUploadPath = by.css('input[type="file"]');
    this.strChildLocator = by.xpath("//span[@class='error-message']");
    
    this.fillSalutation = function(strSalutation){
        var reqElement;
        if(strSalutation != "none"){
            reqElement = by.xpath("//select[@id='locationSetup.salutation']/option[@label='" + strSalutation + "']");
            actionLib.click(reqElement);
        }
    }

    this.fillDateFormat = function(strDateFormat){
        var reqElement;
        if(strDateFormat != "none"){
            reqElement = by.xpath("//select[@id='dateFormat']/option[@label='"+strDateFormat+"']");
            actionLib.click(reqElement);
        }
    }
    //specify "none" for parameters which you don't want to fill
    this.signUpCompanyTab = function(strSalutation, strFirstName, strLastName, strEmail, strCountryName, 
        strPhoneNumber, strMobileNumber, strCompanyName, strAddress1, strAddress2, strAddress3, strArea, 
        strCityName, strStateProvince, strTimeZone, strDateFormat, strZipCode, fileUpload){
        
        if (strSalutation != "none"){
            this.fillSalutation(strSalutation);
        }
        if (strFirstName != "none"){
            actionLib.setText(this.textBoxFirstName, strFirstName);
        }
        if (strLastName != "none"){
            actionLib.setText(this.textBoxLastName, strLastName);
        }
        if (strEmail != "none"){
            actionLib.setText(this.textBoxEmail, strEmail);
        }
        if (strCountryName != "none"){
            actionLib.setText(this.dropDownCountryName, strCountryName);
        }
        if (strPhoneNumber != "none"){
            actionLib.setText(this.textBoxPhoneNumber, strPhoneNumber);
        }
        if (strMobileNumber != "none"){
            actionLib.setText(this.textBoxMobileNumber, strMobileNumber);
        }
        if (strCompanyName != "none"){
            actionLib.setText(this.textBoxCompanyName, strCompanyName);
        }
        if (strAddress1 != "none"){
            actionLib.setText(this.textBoxAddress1, strAddress1);
        }
        if (strAddress2 != "none"){
            actionLib.setText(this.textBoxAddress2, strAddress2);
        }
        if (strAddress3 != "none"){
            actionLib.setText(this.textBoxAddress3, strAddress3);
        }
        if (strArea != "none"){
            actionLib.setText(this.textBoxArea, strArea);
        }
        if (strCityName != "none"){
            actionLib.setText(this.dropDownCityName, strCityName);
        }
        if (strStateProvince != "none"){
            actionLib.setText(this.dropDownStateProvince, strStateProvince);
        }
        if (strTimeZone != "none"){
            actionLib.setText(this.dropDownTimeZone, strTimeZone);
        }
        if (strDateFormat != "none"){
            this.fillDateFormat(strDateFormat);
        }
        if (strZipCode != "none"){
            actionLib.setText(this.textBoxZipCode, strZipCode);
        }
        if (fileUpload != "none"){
            actionLib.uploadFile(this.fileToUploadPath, fileUpload);
        }
        actionLib.click(this.buttonNext);
    };
};
module.exports = new pageCompanyRegistration();
