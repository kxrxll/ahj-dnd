test('just a test for jest', () => {
  expect(2 * 2).toBe(4);
});

/*
import puppetteer from 'puppeteer';

jest.setTimeout(30000);
describe('Card form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => { await browser.close(); });
  describe('Card checking for mir', () => {
    test('should add .valid class for valid mir card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget=form]');
      const input = await form.$('[data-id=input]');
      await input.type('2201382000000013');
      const submit = await form.$('[data-id=submit]');
      submit.click();
      await page.waitForSelector('[data-id=input].valid');
    });
  });
  describe('Card checking failed', () => {
    test('should add .valid class for valid mir card number', async () => {
      await page.goto(baseUrl);
      const form = await page.$('[data-widget=form]');
      const input = await form.$('[data-id=input]');
      await input.type('123');
      const submit = await form.$('[data-id=submit]');
      submit.click();
      await page.waitForSelector('[data-id=input].failed');
    });
  });
});
*/
