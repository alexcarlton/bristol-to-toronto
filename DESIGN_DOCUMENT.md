# Design Document

## Architecture

### Data

I have taken the functionality of the [browser quickstart example](https://developers.google.com/calendar/quickstart/js) and created custom providers and hooks, to make it more React friendly.

#### useScript

This custom hook fetches an external script. This was required as [React does not play nice with the inline `onload` function.](https://github.com/facebook/react/issues/13863)

```javascript
useScript({ id: STRING, src: STRING, onLoad: FUNCTION });
```

#### `<CalendarAPIProvider />`

This custom provider does the work to load the `gapi` script and to initialise the client. It then provides the values `loading` and `error` using React Context, so components further down the tree can check whether the `gapi` client is ready to use.

#### Authorization
Authorization for the application is managed with:
- `<SignedInProvider />`: Fetches and listens for changes to the `isSignedIn` state, and provides the value to the rest of the app. 
- `useAuth()` custom hook: Returns the current `isSignedIn` state value, and `signIn` and `signOut` methods.

`
### `<Layout />`

The `<Layout />` component provides the top level layout for the application, and is made up of `<Layout.Header />` and `<Layout.Body />` .

This abstraction means we can easily re-use the layout elsewhere in the application.

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

### Testing
The project uses [jest](https://jestjs.io/) as a test runner, and [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/) for testing React components.

I follow Kent C. Dodds' recommendations for testing, which are:
- [Write tests. Not too many. Mostly integration.](https://kentcdodds.com/blog/write-tests)
- [Avoid testing implementation details](https://kentcdodds.com/blog/testing-implementation-details)
- Test as close to user use as possible

These concepts allow us to write tests that give us confidence that our application works as expected, and are not susceptible to becoming brittle.
