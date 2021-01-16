# Design Document

## Linting and Formatting

The project has been setup with linting with [ESlint](https://eslint.org/) and code formatting with [Prettier](https://prettier.io/).

Both of these stages have been setup to be executed on staged changes, using the helper libraries [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

This stops us committing broken or un-formatted code! 🎉
