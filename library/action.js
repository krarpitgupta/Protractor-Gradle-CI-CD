/* 
Description : This file contains all the re-usable functions required 
*/

var action = function(){

    var expectedCondition = protractor.ExpectedConditions;
    var path = require('path');
    var longWait = 30000;
    var shortWait = 10000;
    var avgWait = 20000;
    this.linkCountBeforeAdd;
    this.linkCountAfterAdd;

    this.menuTasks = by.xpath("//a[@data-title='Tasks']");
    this.subMenuMyTasks = by.className("col-xs-9 ptb14 pl10 ng-binding");

    this.openApplication = function(strUrl) {
        browser.get(strUrl);
	    browser.manage().window().maximize();
    };

    this.setText = function(strLocator, strInput){
        browser.wait(expectedCondition.presenceOf(element(strLocator)), shortWait);
        var reqElement = element(strLocator);
        reqElement.clear();
        reqElement.sendKeys(strInput)
    };

    this.click = function(strLocator){
        browser.wait(expectedCondition.presenceOf(element(strLocator)), longWait);
        element(strLocator).click();
    };

    this.getPageTitle = function(){
        return browser.getTitle();
    };

    this.navigateToUrl = function(strUrl) {
        browser.get(strUrl);
    };

    this.dragAndDrop = function (strLocatorDrag, strLocatorDrop) {
        var dragElement = element(strLocatorDrag);
        var dropElement = element(strLocatorDrop);
        browser.actions().
            dragAndDrop(dragElement, dropElement).
            perform();
    };

    this.switchToFrame = function(strLocator) {
        var reqElement = element(strLocator);
        browser.switchTo().frame((reqElement).getWebElement());
    };

    this.handleAlert = function(strOperation) {
        // Waits for an alert pops up.
        browser.wait(expectedCondition.alertIsPresent(), shortWait);
        var alertWindow = browser.switchTo().alert();
        if (strOperation.toLowerCase() == "ok") {
            alertWindow.accept();
        } else if (strOperation.toLowerCase() == "cancel") {
            alertWindow.dismiss();
        } else {
            // added for future perspective
        }
    };

    this.verifyElementPresent = function(strLocator) {
        var reqElement = element(strLocator);
        browser.wait(expectedCondition.presenceOf(reqElement), avgWait);
        expect(reqElement.isDisplayed()).toBe(true);
    };

    this.VerifyElementDisappear = function(strLocator) {
        var reqElement = element(strLocator);
        browser.wait(expectedCondition.not(expectedCondition.presenceOf(reqElement)), avgWait);
        expect(reqElement.isDisplayed()).toBe(false);
    };
	
    //objElement = "none" for locator
    //strLocator = "none" for element
    this.verifyElementText = function(strLocator, objElement, strText) {
        var reqElement;
        if(objElement === "none")
        {  
            browser.wait(expectedCondition.presenceOf(element(strLocator)), avgWait);
            reqElement = element(strLocator);
        }
        else if(strLocator === "none")
        {
            reqElement = objElement;
        }
        expect(reqElement.getText()).toEqual(strText);
    };

    this.verifyElementPartialText = function(strLocator, strText) {
        browser.wait(expectedCondition.presenceOf(element(strLocator)), avgWait);
        var reqElement = element(strLocator);
        expect(reqElement.getText()).toContain(strText);      
    };

    this.compareString = function(strExpected, strActual) {
        expect(strExpected).toContain(strActual);      
    };

    this.switchToWindows = function() {
        browser.getAllWindowHandles().then(function(handles) {
            browser.switchTo().window(handles[1]);
        });
    };

    this.performMouseHover = function(strLocator) {
        var reqElement = element(strLocator);
        browser.actions().mouseMove(reqElement).perform();
    };

    this.getTextByLocator = function(strLocator) {
        var reqElement = element(strLocator);
        return reqElement.getText().then(function(text) {
            return text;
        });
    };

    //-- getText() gives promise so to verify the incremented value than the previous
    //first call with second attribute as none, then add enquiry/quotation etc and again call 
    // function to get updated count and to verify the same.
    this.verifySplitCountOfLocator = function(strLocator, strAttribute) {
        var reqElement = element(strLocator);
        reqElement.getText().then(function(text) {
            var splitText = text.split("(")[1].split(")");
            if (strAttribute == "none") {
                this.linkCountBeforeAdd = parseInt(splitText[0]);
            }
            else {
                this.linkCountAfterAdd = splitText[0];
                expect(this.linkCountAfterAdd).toEqual((this.linkCountBeforeAdd  + 1).toString());
            }
        });
    };
    
    this.selectDropdown = function (strLocator, strText) {
        browser.wait(expectedCondition.presenceOf(element(strLocator)), avgWait);
        reqElement = element(strLocator).element(by.xpath("option[@label='" + strText + "']"));
        reqElement.click();
    };

   // intIndex = 1 for first element
   // intIndex = 0 for last element
   // intIndex = 3 for element indexed at 3
   this.getRequiredElement = function(strLocator, intIndex){
       
       var reqElement;
       if(typeof(intIndex) == 'number')
       {
           browser.wait(expectedCondition.presenceOf(element(strLocator)), avgWait);
           var reqElements = element.all(strLocator);
       }
       if(intIndex == 0)
       {
           reqElement = reqElements.last();
       }
       else if(intIndex == 1)
       {
           reqElement = reqElements.first();
       }
       else
       {
           reqElement = reqElements.get(intIndex);
       }
       return reqElement;
    };
   
   this.getTodayTime = function(){
       var todayDate = new Date();
       var todayHour = todayDate.getHours();
       var todayMin = todayDate.getMinutes();
       var todaySec = todayDate.getSeconds();
       var strTodayTime = todayHour.toString() + todayMin.toString() + todaySec.toString() ;
       return strTodayTime;
    };

   this.getChainedElement = function(strParentLocator, strChildLocator){
       var reqElement;
       if(strParentLocator != "" && strChildLocator != "")
       {
           browser.wait(expectedCondition.presenceOf(element(strParentLocator).element(strChildLocator)), avgWait);
           reqElement = element(strParentLocator).element(strChildLocator);
       }
       else
       {
           reqElement = "";
       }
       return reqElement;
    };

   this.uploadFile = function(strLocator, strFileRelativePath){
       var strFileAbsPath = path.resolve(__dirname, strFileRelativePath);
       browser.wait(expectedCondition.presenceOf(element(strLocator)), longWait);
       var reqElement = element(strLocator);
       reqElement.sendKeys(strFileAbsPath)
   };

   this.verifyCssProperty = function(strLocator, strPropertyName, strExpectedPropertyValue){
       var reqElement;
       browser.wait(expectedCondition.presenceOf(element(strLocator)), avgWait);
       reqElement = element(strLocator);
       expect(element(reqElement).getCssValue(strPropertyName)).toBe(strExpectedPropertyValue);
    };

    this.explicitWait = function(strWait){
        browser.sleep(strWait);
    }

    this.scrollToElement = function(strLocator){
        var reqElement;
        reqElement = element(strLocator);
        browser.actions().mouseMove(reqElement).perform();
    }

    this.getTodayDate = function(){
        var strTodayDate;
        var objTodayDate = new Date();
        var todayDate = objTodayDate.getDate();
        var todayMonth = objTodayDate.getMonth() + 1; //January is 0 so add 1
        var todayYear = objTodayDate.getFullYear();
        if(todayDate < 10) {
            todayDate = '0' + todayDate;
        } 
        if(todayMonth < 10) {
            todayMonth = '0' + todayMonth;
        } 
        strTodayDate = todayDate + '-' + todayMonth + '-' + todayYear;
        return strTodayDate;
    }

    //-- enter text in table specific column 
    this.fillTextInTableColumn = function(strDataElement, intRowNum, intColumnNum, strText){
        var reqElement = by.xpath("//super-table[@data = '" + strDataElement + "']//thead/tr[" + intRowNum + "]/th[" + intColumnNum + "]//input");
        return this.setText(reqElement, strText);
    }

    //-- verify text in table specific row column 
    this.verifySearchTextInTableRowCol = function(strDataElement, intRowNum, intColumnNum, strText){
        var reqElement = element(by.xpath("//super-table[@data = '" + strDataElement + "']//tbody/tr[" + intRowNum + "]/td[" + intColumnNum + "]/span[@class='ng-binding']"));
        expect(reqElement.getAttribute('textContent')).toBe(strText);
//        this.verifyElementText(reqElement, "none", strText);
    }

    this.clickRowInAirExportTable = function(strCustomerName, strOtherColumnVal){
        var reqElement = by.xpath("//td[@title='" + strCustomerName + "']/../td[@title='" + strOtherColumnVal + "']");
        this.click(reqElement);
    }

    this.browserRefresh = function(){
        browser.refresh();   
    }
};
module.exports = new action();
