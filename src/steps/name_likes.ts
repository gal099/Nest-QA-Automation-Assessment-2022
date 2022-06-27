import { ICustomWorld } from '../support/custom-world';
import { selector } from '../utils/elements_selector';
import { Then } from '@cucumber/cucumber';

/**
 * Display the name and likes
 * @param {ICustomWorld} this
 */
Then(
  'The name and likes of the first one should be displayed',
  async function (this: ICustomWorld) {
    const page = this.page!;
    if (!page) throw new Error('no page');
    const postName = await page.locator(selector.postTitle).first().innerText();
    const postLikes = await page.locator(selector.likes).first().innerText();
    console.log(`\n Test results:\n Most voted post name: '${postName}'.\n Likes: ${postLikes}.`);
  },
);
