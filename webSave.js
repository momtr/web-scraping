const pupeteer = require('puppeteer');

async function saveAsPdf(url, name, filePath) {
    const browser = await pupeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url)
    const path = `${filePath}/${name}_${Date.now()}.pdf`;
    const format = 'A4';
    await page.pdf({ path, format });
    browser.close();
    return path;
}

module.exports = { saveAsPdf };