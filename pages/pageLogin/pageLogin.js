var actionLib = require('../../library/action.js');

var pageLogin = function(){

    this.textboxSaasid = by.model('loginDto.saasId');
    this.textboxUsername = by.id('userName');
    this.textboxPassword = by.id('Password');
    this.buttonSignin = by.xpath('//input[@class="btn btn-block"]');
    this.expandLogout = by.xpath('//b[@class="caret"]');
    this.linkLogout = by.xpath('//a[contains(text(),"Logout")]');
    this.loginErrorMessage = by.xpath("//span[@class='ng-binding']");
    this.iconLoginSuccess = by.xpath("//span[@class='hexagonCard ng-binding']");
    
    this.appLogin = function(strSaasId, strUserName, strPassword){
        if (strSaasId != "none"){
            actionLib.setText(this.textboxSaasid, strSaasId);
        }
        if (strUserName != "none"){
            actionLib.setText(this.textboxUsername, strUserName);
        }
        if (strPassword != "none"){
            actionLib.setText(this.textboxPassword, strPassword);
        }
        actionLib.click(this.buttonSignin);
    }

    this.appLogout = function(){
        actionLib.verifyElementPresent(this.expandLogout);
        actionLib.click(this.expandLogout);
        actionLib.click(this.linkLogout);
    }
};
module.exports = new pageLogin();
