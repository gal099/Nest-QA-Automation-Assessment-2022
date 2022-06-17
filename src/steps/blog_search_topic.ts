import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * Post counting
 * @param {ICustomWorld} this
 */
Then('A list of post should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  await page.waitForLoadState('networkidle');
  const resultsList = await page.locator(selector.postList);
  const resultAmount = await resultsList.count();
  try {
    expect(resultAmount).toBeGreaterThan(0);
    // eslint-disable-next-line no-console
    console.log(`\n Test result: ${resultAmount} posts found.`);
  } catch (error) {
    throw new Error(`\n No post found. Retest this feature to gathering more info.\n ${error}`);
  }
});
