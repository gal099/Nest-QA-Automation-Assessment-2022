import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { When, Then } from '@cucumber/cucumber';

/**
 * Sort list
 * @param {ICustomWorld} this
 */
When('The user sorts the list by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.click(selector.filtersMenu);
  await page.click(selector.mostVoted);
  await page.waitForLoadState('domcontentloaded');
});

/**
 * Confirm list sorted
 * @param {ICustomWorld} this
 */
Then('The list should be sorted by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  const currentFilter = await page.locator(selector.activeFilter).innerText();
  try {
    if (currentFilter === selector.filterAssertion) {
      // eslint-disable-next-line no-console
      console.log('The list has be sort successfully');
    }
  } catch (error) {
    throw new Error(`The list is not sort properly\n${error}`);
  }
});