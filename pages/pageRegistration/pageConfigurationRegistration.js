var actionLib = require('../../library/action.js');

var pageConfigurationRegistration = function(){

    this.dropDownCurrency = by.id('currencyMaster');
    this.dropDownLanguage = by.id('language');
    this.textBoxDecimal = by.model('locationSetup.currencyMaster.decimalPoint');
    this.textMeasurementOption = by.className('opc-5');
    this.uiSwitchMeasurement = by.model('locationSetup.measurement');
    this.calenderFinancialStartMonthYear = by.model('locationSetup.financialStartDate');
    this.calenderFinancialEndMonthYear = by.model('locationSetup.financialEndDate');
    this.buttonNext = by.className('btn btn-primary btn-xs btn-property accent-btn');
    this.iconCustomerAgent = by.xpath("//a[@class='bs-wizard-dot bs-wizard-dotchange']/../div[contains(text(),'Customer/Agent Upload')]");

    //To select current month and year as financial start date on configuration registration screen.
    this.getCurrentMonthYear = function(){

        var objCurrentDate = new Date();
        var strCurrentYear = objCurrentDate.getFullYear();
        var strCurrentMonth = objCurrentDate.getMonth() + 1; //january is 0 so adding 1
        if(strCurrentMonth == 12){
            strCurrentMonth = 1;
            strCurrentYear = strCurrentYear + 1;
        }
        return (strCurrentYear.toString() + "-" + strCurrentMonth.toString());
    };
    //specify "none" for parameters which you don't want to fill
    this.signUpConfigurationTab = function(strCurrency, strLanguage, strUiSwitch, strCurrentMonthYear){
        
        if (strCurrency != "none"){
            actionLib.setText(this.dropDownCurrency, strCurrency);
        }
        if (strLanguage != "none"){
            actionLib.setText(this.dropDownLanguage, strLanguage);
        }
        if (strUiSwitch != "none"){
            actionLib.click(this.uiSwitchMeasurement);
        }
        if (strCurrentMonthYear != "none"){
            actionLib.setText(this.calenderFinancialStartMonthYear, strCurrentMonthYear);
        }
        actionLib.click(this.buttonNext);
    };
};
module.exports = new pageConfigurationRegistration();
