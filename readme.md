# react-spring + Next.js

Simple Next.js app that uses an experimentatl version or [react-spring](https://github.com/drcmda/react-spring) that allows SSR.

## Installation

Using Yarn

```bash
yarn install
yarn dev
```

Or with NPM

```bash
npm run install
npm run dev
```

## Notes

Note that react-spring is installed using `yarn add https://github.com/CosmaTrix/react-spring` rather then `yarn add react-spring`. This is needed in order to install the experimental version of react-spring that is meant to work server side.

## Limitations

SSR doesn't currently work when:

1. the `immediate` prop is used

## Challenges

Keyframes without `from` and `async` state might be challenging, as it could be extremelly difficult to run the async function to completition to get the final state (hence the immediate style to render).

## React hooks

Due to the nature of hooks, should work out of the box. Further investigation is needed.
