import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { When, Then } from '@cucumber/cucumber';

/**
 * Enter first topic
 * @param {ICustomWorld} this
 */
When('The user enters to the first topic', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  await page.locator(selector.courseCardTitle).first().click();
});

/**
 * Comments amount
 * @param {ICustomWorld} this
 */
Then('The comments amount should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  const topicName = await page.locator(selector.courseTitle).innerText();
  const opinionsAmount = await page.locator(selector.opinions).innerText();
  console.log(`\n Test results:\n The '${topicName}' topic has ${opinionsAmount} opinions.`);
});
