
var webdriver = require('selenium-webdriver');

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.firefox()).
    build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('test automation');
driver.findElement(webdriver.By.xpath('.//*[@id="gbqfb"]')).click();
driver.findElement(webdriver.By.partialLinkText("Test automation")).click();
driver.findElement(webdriver.By.xpath('//span[@class="toctext"and contains(.,"API")]')).click();
driver.quit();
