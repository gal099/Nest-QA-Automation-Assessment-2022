import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';
import { replace } from 'lodash';

/**
 * Count tag pages
 * @param {ICustomWorld} this
 */
Then(
  'The user should see the amount of pages of the current tag',
  async function (this: ICustomWorld) {
    const page = this.page!;
    if (!page) throw new Error('no page');
    const tagsAmount = await page.$$(selector.searchTabs);

    console.log(`\n Test results:`);

    for (let i = 1; i <= tagsAmount.length; i++) {
      const tag = replace(selector.tags, '{}', `${i}`);
      await page.locator(tag).click();
      const selectorText = (await page.locator(selector.activeTag).innerText()).split(' ');
      const pageAmount = await page.locator(selector.pages).count();
      console.log(` The '${selectorText[0]}' tag has ${pageAmount} pages.`);
    }
  },
);
