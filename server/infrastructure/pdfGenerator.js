import puppeteer from 'puppeteer';

function getConfigA4(isLandscape) {
  return {
    format: 'A4',
    orientation: isLandscape ? 'landscape' : 'portrait',
    printBackground: true,
    margin: {
      left: '2cm',
      top: '0px',
      right: '2cm',
      bottom: '1cm',
    },
  };
}

export default async function generatePdf(html, isLandscape = false) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const loaded = page.waitForNavigation({
    waitUntil: 'load',
  });

  await page.setContent(html, { waitUntil: 'load' });
  const buffer = await page.pdf(getConfigA4(isLandscape));
  await browser.close();
  await loaded;
  return buffer;
}
