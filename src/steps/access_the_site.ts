import { ICustomWorld } from '../support/custom-world';
import { urlMap } from '../pom';
import { selector } from '../utils/elements_selector';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * Open the browser
 * @param {ICustomWorld} this
 */
Given('That a user opens the browser', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('default'));
});

/**
 * Navigate to the website landing page
 * @param {ICustomWorld} this
 */
When('The user navigate to the site', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(urlMap.get('website'));
});

/**
 * Validate that the user has been directed to the landing page
 * @param {ICustomWorld} this
 */
Then('The user should see the landing page', async function (this: ICustomWorld) {
  const page = this.page!;
  expect(await page.waitForSelector(selector.loginBtn, { state: 'visible' })).toBeTruthy;
});
