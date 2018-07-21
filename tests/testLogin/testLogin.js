var loginPage = require('../../pages/pageLogin/pageLogin.js');
var loginData = require('../../testdata/dataLogin/dataLogin.json');
var globalData = require('../../testdata/dataGlobal/dataGlobal.json');
var actionLib = require('../../library/action.js');

describe('test login functionality of newage', function() {

    beforeAll(function(){
        actionLib.openApplication(globalData.appUrl);
        actionLib.browserRefresh();
    });

    it('test_login_1 : should not be able to login with invalid username', function() {
        loginPage.appLogin(loginData.saasId, loginData.invalidUserName, loginData.password);
        actionLib.verifyElementText(loginPage.loginErrorMessage, 'none', 'Provided Username or Password is not correct.');
    });

    it('test_login_2 : should not be able to login with invalid password', function() {
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.invalidPassword);
        actionLib.verifyElementText(loginPage.loginErrorMessage, 'none', 'Provided Username or Password is not correct.');
    });

    it('test_login_3 : should not be able to login with invalid username and password', function() {
        loginPage.appLogin(loginData.saasId, loginData.invalidUserName, loginData.invalidPassword);
        actionLib.verifyElementText(loginPage.loginErrorMessage, 'none', 'Provided Username or Password is not correct.');
    });

    it('test_login_4 : should be able to login with valid credentials', function() {
        loginPage.appLogin(loginData.saasId, loginData.userName, loginData.password);
        actionLib.verifyElementPresent(loginPage.iconLoginSuccess);
    });

    afterAll(function(){
        loginPage.appLogout();
    });
});

