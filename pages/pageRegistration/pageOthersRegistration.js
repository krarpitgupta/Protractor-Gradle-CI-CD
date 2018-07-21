var actionLib = require('../../library/action.js');

var pageOthersRegistration = function(){

    this.tabCodeSetup = by.xpath("//li[@ng-click = \"setTab('job_no_tab')\"]");
    this.tabJobDateSetup = by.xpath("//li[@ng-click = \"setTab('job_date_tab')\"]");
    this.tabAccountDocNumberSetup = by.xpath("//li[@ng-click = \"setTab('accounts_tab')\"]");
    this.buttonExportETD = by.xpath("//button[@data-state='ETD']");
    this.buttonExportCurrentDate = by.xpath("//button[@id='exportTransportMode'][@data-state='Current Date']");
    this.buttonImportETA = by.xpath("//button[@data-state='ETA']");
    this.buttonImportCurrentDate = by.xpath("//button[@id='importTransportMode'][@data-state='Current Date']");
    this.textBoxDaybookCode = by.id("daybookObj.daybookCode0");
    this.textBoxDaybookName = by.id("daybookObj.daybookName0");
    this.dropDownDocumentType = by.id("documentTypeMaster");
    this.textBoxPrefix = by.id("daybookObj.prefix0");
    this.textBoxStartingNo = by.id("daybookObj.currentSequenceValue0");
    this.textBoxSuffix = by.id("daybookObj.suffix0");
    this.textBoxSeparator = by.id("daybookObj.separator0");
    this.textSignUpSuccessfulSubmission = by.className("modal-title text-center pt10");
    this.textSignUpEmailActivation = by.xpath("//*[@class='modal-title text-center']");
    this.buttonFinish = by.className('btn btn-primary btn-xs btn-property accent-btn');
    
    this.fillNoOfDigits = function(strNoOfDigits){
        var reqElement;
        if(strNoOfDigits != "none"){
            reqElement = by.xpath("//select[@id='daybookObj.noOfDigits0']/option[@label='" + strNoOfDigits + "']");
            actionLib.click(reqElement);
        }
    }

    this.fillYearOption = function(strYearOption){
        var reqElement;
        if(strYearOption != "none"){
            reqElement = by.xpath("//select[@id='daybookObj.isYear0']/option[@label='" + strYearOption + "']");
            actionLib.click(reqElement);
        }
    }

    this.fillMonthOption = function(strMonthOption){
        var reqElement;
        if(strMonthOption != "none"){
            reqElement = by.xpath("//select[@id='daybookObj.isMonth0']/option[@label='" + strMonthOption + "']");
            actionLib.click(reqElement);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.signUpCodeSetupTab = function(strDaybookCode){
        if (strDaybookCode != "none"){
            actionLib.setText(this.textBoxDaybookCode, strDaybookCode);
        }
    };

    //specify "none" for parameters which you don't want to fill
    this.signUpJobDateSetupTab = function(strExportOption, strImportOption){
        if (strExportOption != "none"){
            if (strExportOption == "ETD"){
                actionLib.click(this.buttonExportETD);
            }
            else{
                actionLib.click(this.buttonExportCurrentDate);
            }
        }
        if (strImportOption != "none"){
            if (strImportOption == "ETA"){
                actionLib.click(this.buttonImportETA);
            }
            else{
                actionLib.click(this.buttonImportCurrentDate);
            }
        }
    };

    //specify "none" for parameters which you don't want to fill
    this.signUpAccountingDocNumTab = function(strDaybookCode, strDaybookName, strDocumentType, strNoOfDigits, 
        strPrefix, strYearOption, strMonthOption, strStartingNumber, strSuffix, strSeparator){

        if (strDaybookCode != "none"){
            actionLib.setText(this.textBoxDaybookCode, strDaybookCode);
        }
        if (strDaybookName != "none"){
            actionLib.setText(this.textBoxDaybookName, strDaybookName);
        }
        if (strDocumentType != "none"){
            actionLib.setText(this.dropDownDocumentType, strDocumentType);
        }
        if (strNoOfDigits != "none"){
            this.fillNoOfDigits(strNoOfDigits);
        }
        if (strPrefix != "none"){
            actionLib.setText(this.textBoxPrefix, strPrefix);
        }
        if (strYearOption != "none"){
            this.fillYearOption(strYearOption);
        }
        if (strMonthOption != "none"){
            this.fillMonthOption(strMonthOption);
        }
        if (strStartingNumber != "none"){
            actionLib.setText(this.textBoxStartingNo, strStartingNumber);
        }
        if (strSuffix != "none"){
            actionLib.setText(this.textBoxSuffix, strSuffix);
        }
        if (strSeparator != "none"){
            actionLib.setText(this.textBoxSeparator, strSeparator);
        }
    };
};
module.exports = new pageOthersRegistration();
