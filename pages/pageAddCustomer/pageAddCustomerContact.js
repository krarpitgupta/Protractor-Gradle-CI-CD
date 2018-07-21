var actionLib = require('../../library/action.js');

var pageAddCustomerContact = function(){
    var reqElement;

    //Official Info tab under Contact
    this.tabContact = by.xpath("//button[@class='btn paddmenu5 btn-normal'][contains(text(),'Contact')]");
    this.textBoxFirstName = by.id("firstNameContact0");
    this.textBoxLastName = by.model("contact.lastName");
    this.uiSwitchCall = by.model("contact.isCall");
    this.uiSwitchSendEmail = by.model("contact.isSendMail");
    this.uiSwitchPrimary = by.model("contact.isPrimary");
    this.textBoxDesignation = by.id("designation0");
    this.textBoxDepartment = by.model("contact.department");
    this.textAreaAddress = by.model("contact.officalAddress");
    this.textBoxOfficePhone = by.model("contact.officalPhone");
    this.textBoxMobileNum = by.model("contact.officalMobile");
    this.textBoxFax = by.model("contact.officalFax");
    this.textBoxEmail = by.id("officalEmail0");
    this.textBoxAssistantName = by.model("contact.assistantName");
    this.textBoxAssistantPhoneNo = by.model("contact.assistantPhone");
    this.textBoxPreferredCallTime = by.model("contact.preferredCallTime");
    this.textBoxReportingTo = by.model("contact.reportingTo");
    this.uiSwitchEngagedUsPrevious = by.id("engagedPrevious");
    this.textBoxFormerCompany = by.model("contact.formerCompany");

    //Personal Info tab under Contact
    this.tabPersonalInfo = by.xpath("//*[contains(text(),'Personal Info')]");
    this.textAreaPersonalAddress = by.id("personalAddress0");
    this.textBoxHomePhone = by.model("contact.personalPhone");
    this.textBoxPersonalMobileNo = by.model("contact.personalMobile");
    this.textBoxPersonalFax = by.model("contact.personalFax");
    this.textBoxPersonalEmail = by.id("contactpersonemail0");
    this.textBoxQualification = by.model("contact.qualification");
    this.uiSwitchMarried = by.model("contact.isMarried");
    this.textBoxChildren = by.model("contact.noOfChildren");
    this.btnAddRelation = by.xpath("//button[@class='btn btn-primary btn-xs accent-btn']");
    this.textBoxRelationFirstName = by.id("rFirstName0");
    this.textBoxRelationLastName = by.model("relation.lastName");
    this.calenderEventDate = by.id("eventDate0");
    this.textBoxRemarks = by.id("rNote0");

    //Remarks tab under Contact
    this.tabRemarks = by.xpath("//button[@class='btn default'][contains(text(),'Remarks')]");
    this.textAreaRemarks = by.id("contactRemarks0");

    this.fillSalutation = function(strSalutation){
        reqElement = by.xpath("//select[@id='contactSalutation0']/option[@label='" + strSalutation + "']");
        actionLib.click(reqElement);
    }

    this.fillRelationSalutation = function(strSalutation){
        reqElement = by.xpath("//select[@id='PartyRelatSaluation0']/option[@label='" + strSalutation + "']");
        actionLib.click(reqElement);
    }

    this.fillRelationShip = function(strRelationShip){
        reqElement = by.xpath("//select[@ng-model='relation.relationShip']/option[@label='" + strRelationShip + "']");
        actionLib.click(reqElement);
    }

    this.fillRelationEvent = function(strEvent){
        reqElement = by.xpath("//select[@id='rPersonalEvent0']/option[@label='" + strEvent + "']");
        actionLib.click(reqElement);
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerContactOfficial = function (strSalutation, strFirstName, strLastName, strUiSwitchCall, 
        strUiSwitchSendEmail, strUiSwitchPrimary, strDesignation, strDepartment, strAddress, strOfficePhone, 
        strMobileNo, strFax, strEmail, strAssistantName, strAssistantPhoneNo, strPreferredCallTime, 
        strReportingTo, strUiSwitchEngagedUsPrevious, strFormerCompany){  

        if (strSalutation != "none"){
            this.fillSalutation(strSalutation);
        }
        if (strFirstName != "none"){
            actionLib.setText(this.textBoxFirstName, strFirstName);
        }
        if (strLastName != "none"){
            actionLib.setText(this.textBoxLastName, strLastName);
        }
        if (strUiSwitchCall != "none"){
            actionLib.click(this.uiSwitchCall);
        }
        if (strUiSwitchSendEmail != "none"){
            actionLib.click(this.uiSwitchSendEmail);
        }
        if (strUiSwitchPrimary != "none"){
            actionLib.click(this.uiSwitchPrimary);
        }
        if (strDesignation != "none"){
            actionLib.setText(this.textBoxDesignation, strDesignation);
        }
        if (strDepartment != "none"){
            actionLib.setText(this.textBoxDepartment, strDepartment);
        }
        if (strAddress != "none"){
            actionLib.setText(this.textAreaAddress, strAddress);
        }
        if (strOfficePhone != "none"){
            actionLib.setText(this.textBoxOfficePhone, strOfficePhone);
        }
        if (strMobileNo != "none"){
            actionLib.setText(this.textBoxMobileNum, strMobileNo);
        }
        if (strFax != "none"){
            actionLib.scrollToElement(this.textBoxFax);
            actionLib.setText(this.textBoxFax, strFax);
        }
        if (strEmail != "none"){
            actionLib.scrollToElement(this.textBoxEmail);
            actionLib.setText(this.textBoxEmail, strEmail);
        }
        if (strAssistantName != "none"){
            actionLib.scrollToElement(this.textBoxAssistantName);
            actionLib.setText(this.textBoxAssistantName, strAssistantName);
        }
        if (strAssistantPhoneNo != "none"){
            actionLib.scrollToElement(this.textBoxAssistantPhoneNo);
            actionLib.setText(this.textBoxAssistantPhoneNo, strAssistantPhoneNo);
        }
        if (strPreferredCallTime != "none"){
            actionLib.scrollToElement(this.textBoxPreferredCallTime);
            actionLib.setText(this.textBoxPreferredCallTime, strPreferredCallTime);
        }
        if (strReportingTo != "none"){
            actionLib.scrollToElement(this.textBoxReportingTo);
            actionLib.setText(this.textBoxReportingTo, strReportingTo);
        }
        if (strUiSwitchEngagedUsPrevious != "none"){
            actionLib.scrollToElement(this.uiSwitchEngagedUsPrevious);
            actionLib.click(this.uiSwitchEngagedUsPrevious);
        }
        if (strFormerCompany != "none"){
            actionLib.scrollToElement(this.textBoxFormerCompany);
            actionLib.setText(this.textBoxFormerCompany, strFormerCompany);
        }
    }
    
    //specify "none" for parameters which you don't want to fill
    this.addCustomerContactPersonal = function (strPersonalAddress, strHomePhone, strPersonalMobileNum, 
        strPersonalFax, strPersonalEmail, strQualification, strUiSwitchMarried, strChildren, strAddRelation, 
        strPersonalSalutation, strRelationFirstName, strRelationLastName, strRelationShip, strEvent, 
        strEventDate, strRemarks){  

        if (strPersonalAddress != "none"){
            actionLib.setText(this.textAreaPersonalAddress, strPersonalAddress);
        }
        if (strHomePhone != "none"){
            actionLib.setText(this.textBoxHomePhone, strHomePhone);
        }
        if (strPersonalMobileNum != "none"){
            actionLib.setText(this.textBoxPersonalMobileNo, strPersonalMobileNum);
        }
        if (strPersonalFax != "none"){
            actionLib.setText(this.textBoxPersonalFax, strPersonalFax);
        }
        if (strPersonalEmail != "none"){
            actionLib.setText(this.textBoxPersonalEmail, strPersonalEmail);
        }
        if (strQualification != "none"){
            actionLib.scrollToElement(this.textBoxQualification);
            actionLib.setText(this.textBoxQualification, strQualification);
        }
        if (strUiSwitchMarried != "none"){
            actionLib.scrollToElement(this.uiSwitchMarried);
            actionLib.click(this.uiSwitchMarried);
        }
        if (strChildren != "none"){
            actionLib.scrollToElement(this.textBoxChildren);
            actionLib.setText(this.textBoxChildren, strChildren);
        }
        if (strAddRelation != "none"){
            actionLib.scrollToElement(this.btnAddRelation);
            actionLib.click(this.btnAddRelation);
        }

        actionLib.scrollToElement(this.textBoxRelationFirstName);

        if (strPersonalSalutation != "none"){
            this.fillRelationSalutation(strPersonalSalutation);
        }
        if (strRelationFirstName != "none"){
            actionLib.setText(this.textBoxRelationFirstName, strRelationFirstName);
        }
        if (strRelationLastName != "none"){
            actionLib.setText(this.textBoxRelationLastName, strRelationLastName);
        }
        if (strRelationShip != "none"){
            this.fillRelationShip(strRelationShip);
        }
        if (strEvent != "none"){
            this.fillRelationEvent(strEvent);
        }
        if (strEventDate != "none"){
            actionLib.setText(this.calenderEventDate, strEventDate);
        }
        if (strRemarks != "none"){
            actionLib.setText(this.textBoxRemarks, strRemarks);
        }
    }

    //specify "none" for parameters which you don't want to fill
    this.addCustomerContactRemarks = function (strRemarks){  

        if (strRemarks != "none"){
            actionLib.setText(this.textAreaRemarks, strRemarks);
        }
    }
};
module.exports = new pageAddCustomerContact();
