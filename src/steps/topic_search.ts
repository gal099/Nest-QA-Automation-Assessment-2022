import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * Topic search
 * @param {ICustomWorld} this
 */
Then('A list of results should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  await page.waitForTimeout(2000);
  const resultList = await page.locator(selector.courseCard).count();
  try {
    expect(resultList).toBeGreaterThan(0);
    console.log(`\n Test results:\n ${resultList} topics found.`);
  } catch (error) {
    throw new Error(`\n No results found. Retest this feature to gathering more info.\n ${error}`);
  }
});
