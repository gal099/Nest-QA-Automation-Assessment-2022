import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { When, Then } from '@cucumber/cucumber';

/**
 * Sort list
 * @param {ICustomWorld} this
 */
When('The user sorts the list by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  await page.click(selector.filtersMenu);
  await page.click(selector.mostVoted);
});

/**
 * Confirm list sorted
 * @param {ICustomWorld} this
 */
Then('The list should be sorted by most voted', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  const currentFilter = await page.locator(selector.activeFilter).innerText();

  try {
    if (currentFilter === selector.filterAssertion) {
      console.log(`\n Test results:\n The list has been sorted successfully.`);
    }
  } catch (error) {
    throw new Error(
      `\n The list is not sort properly. Retest this feature to gathering more info.\n ${error}`,
    );
  }
});
