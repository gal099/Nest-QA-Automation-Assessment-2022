# **Nest-QA-Automation-Assessment-2022**

Project in which I have developed the assessment for QA Automation Training of the Patagonian Nest Program 2022 using Cucumber, Playwright and TypeScript.

---

## Requirements:

- node =16.14.2

This project contains a `.nvmrc` file where the required node version is set.

## Installation:

```bash
nvm use

git clone https://github.com/gal099/Nest-QA-Automation-Assessment-2022.git

cd Nest-QA-Automation-Assessment-2022

npm i
```

## To check installation/configuration

```bash
PWDEBUG=1 npx cucumber-js --name "A user navigate to the site"
```

---

## Commands for executing the assigned tests:

```bash
# Access the site.
PWDEBUG=0 npx cucumber-js --name "A user navigate to the site"

# Topic search from the search bar.
PWDEBUG=0 npx cucumber-js --name "Topic search"

# Loop through the tags and count the pages of each one.
PWDEBUG=0 npx cucumber-js --name "Count tags pages"

# Enter to the first course and show the amount of opinions.
PWDEBUG=0 npx cucumber-js --name "Show the first topic comments amount"

# Access the blog and search for a topic.
PWDEBUG=0 npx cucumber-js --name "Blog topic search"

# Sort the list by "Most Voted".
PWDEBUG=0 npx cucumber-js --name "Sort the search list"

# Get the first one and return the name and the total of likes.
PWDEBUG=0 npx cucumber-js --name "Get the name and likes"
```

## Debug mode.

- To execute the tests step by step in debug mode change the start of the command by `PWDEBUG=1`

## To disable headless mode.

- Open src/support/config.ts

- Go to `Line 4` and set `headless: false`

## Browser selection

> By default I will use firefox to avoid the website captcha system. You can choose a diferent browser modifying the value of `browser` in `Ln 13, Col 36` in `src/support/config.ts` . Available options: chromium, firefox, webkit.

---

## Other commands:

```bash
#To run all tests
npm run test

# To opens generated reports
npm run report
```

---

> Ticket traking [here](https://app.clickup.com/3094033/v/s/49677462)
