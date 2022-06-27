import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

/**
 * Post counting
 * @param {ICustomWorld} this
 */
Then('The amount of posts found should be displayed', async function (this: ICustomWorld) {
  const page = this.page!;
  if (!page) throw new Error('no page');
  const resultsList = page.locator(selector.postList);
  await page.waitForTimeout(3000);
  const resultAmount = await resultsList.count();
  try {
    expect(resultAmount).toBeGreaterThan(0);
    console.log(`\n Test result:\n ${resultAmount} posts found.`);
  } catch (error) {
    throw new Error(`\n No post found. Retest this feature to gathering more info.\n ${error}`);
  }
});
