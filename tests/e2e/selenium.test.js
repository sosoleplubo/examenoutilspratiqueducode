const { Builder } = require("selenium-webdriver");

(async function seleniumTest() {

    let driver = await new Builder().forBrowser("chrome").build();

    try {

        await driver.get("http://localhost:3000");

        const title = await driver.getTitle();

        console.log("Page title:", title);

    } finally {
        await driver.quit();
    }

})();