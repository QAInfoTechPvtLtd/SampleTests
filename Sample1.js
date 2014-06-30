
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

driver.get("http://qad-ng.cengage.com/static/nb/login.html");
driver.findElement(webdriver.By.id("_username_id")).sendKeys("automationadmin@qait.com");
driver.findElement(webdriver.By.id("_password_id")).sendKeys("A111111");
driver.findElement(webdriver.By.className("goButton")).click()

driver.quit();
