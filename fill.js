const puppeteer = require('puppeteer');
const CREDS = require('./creds');

const INVITE_CODE = '#invite_code';
const USERNAME_SELECTOR = '#email';
const CONFIRM_USERNAME_SELECTOR = '#confirm-email';
const PASSWORD_SELECTOR = '#password';
const CONFIRM_PASSWORD_SELECTOR = '#confirm-password';
const FIRST_NAME_SELECTOR = '#first-name';
const LAST_NAME_SELECTOR = '#last-name';
const PHONE_NUMBER = '#phone';
const ADDRESS = '#street';
const CITY = '#city';
const STATE_SELECTOR = '#state';
const ZIP = '#zip';
const SSN = '#ssn';
const BIRTH_MONTH = '#dob-month';
const BIRTH_DATE = '#dob-day';
const BIRTH_YEAR = '#dob-year';
const GROSS_ANNUAL_INCOME = '#income';
const RENT = '#mortgage';

const BUTTON_SELECTOR = '#main-container > div > div:nth-child(1) > nav > div > ul > li:nth-child(2) > a';

async function run() {
  const browser = await puppeteer.launch({
  	headless : false
  });
  const page = await browser.newPage();
  
  await page.goto('https://www.int.simplycreditinc.com/staging/manage/#signup',40000);
  
  await page.click(INVITE_CODE);
  await page.keyboard.type(CREDS.invite);

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  
  await page.click(CONFIRM_USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.confirmusername);
  
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);
  
  await page.click(CONFIRM_PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.confirmpassword);
  
  await page.click(FIRST_NAME_SELECTOR);
  await page.keyboard.type(CREDS.firstname);

  await page.click(LAST_NAME_SELECTOR);
  await page.keyboard.type(CREDS.lastname);

  await page.click(PHONE_NUMBER);
  await page.keyboard.type(CREDS.phone);

  await page.click(ADDRESS);
  await page.keyboard.type(CREDS.address);

  await page.click(CITY);
  await page.keyboard.type(CREDS.city);

  await page.select(STATE_SELECTOR,CREDS.state);

  await page.click(ZIP);
  await page.keyboard.type(CREDS.zip);

  await page.click(SSN);
  await page.keyboard.type(CREDS.ssn);

  await page.select(BIRTH_MONTH,CREDS.dobmonth);
  await page.select(BIRTH_DATE,CREDS.dobdate);
  await page.select(BIRTH_YEAR,CREDS.dobyear);

  await page.click(GROSS_ANNUAL_INCOME);
  await page.keyboard.type(CREDS.grossannualincome);

  await page.click(RENT);
  await page.keyboard.type(CREDS.rent);

  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();
  
  browser.close();
}

run();
