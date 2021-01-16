# Design Document

## Architecture
### `<Layout />`
The `<Layout />` component provides the top level layout for the application, and is made up of `<Layout.Header />` and `<Layout.Body />` .

## Design Decisions

### Framework

The project uses the [Next.js](https://nextjs.org/) React framework and is deployed using [Vercel](https://vercel.com/).

I am a big fan of this framework for a few reasons:

- Zero config to deployment
- Opinionated
- Server side rendering capabilities

As a result, you can [see the deployed site here!](https://bristol-to-toronto.vercel.app/)

### Styling

The project uses [styled-components](https://styled-components.com/) for styling. I have used this library as it closely ties styles to specific components, and gives you the full power of JS in your CSS!

The project requires some specific setup to make styled components work nicely with server side rendering. This setup can be seen in `.babelrc` and `pages/_document.js`.

### Linting and Formatting

The project has been setup with linting with [ESlint](https://eslint.org/) and code formatting with [Prettier](https://prettier.io/).

Both of these stages have been setup to be executed on staged changes, using the helper libraries [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged).

This stops us committing broken or un-formatted code! 🎉
