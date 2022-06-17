# **Nest-QA-Automation-Assessment-2022**

Project in which I have developed the assessment for QA Automation Training of the Patagonian Nest Program 2022

---

## Requirements:

- node >=14

## Installation:

```bash
git clone https://github.com/gal099/Nest-QA-Automation-Assessment-2022.git

cd Nest-QA-Automation-Assessment-2022

npm i
```

---

## Commands for executing the assigned tests:

> Headless mode execution:
>
> > Note: Can also execute the tests in headed mode (step by step) changing the start of the command by `PWDEBUG=1`

```bash
# Access the site.
PWDEBUG=0 npx cucumber-js --name "A user navigate to the site"

# Topic search from the search bar.
PWDEBUG=0 npx cucumber-js --name "Search a topic"

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
