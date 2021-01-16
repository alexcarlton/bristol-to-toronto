# Design Document

## Architecture

## Design Decisions

### Framework

The project uses the [Next.js](https://nextjs.org/) React framework and is deployed using [Vercel](https://vercel.com/).

I am a big fan of this framework for a few reasons:

- Zero config to deployment
- Opinionated
- Server side rendering capabilities

As a result, you can [see the deployed site here!](https://bristol-to-toronto.vercel.app/)

### Linting and Formatting

The project has been setup with linting with [ESlint](https://eslint.org/) and code formatting with [Prettier](https://prettier.io/).

Both of these stages have been setup to be executed on staged changes, using the helper libraries [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

This stops us committing broken or un-formatted code! 🎉
