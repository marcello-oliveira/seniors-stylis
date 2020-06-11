<div align="center">
  <h1 align="center">
    seniors-stylis
  </h1>
</div>

<p align="center">
  <a aria-label="Types" href="https://www.npmjs.com/package/seniors-stylis">
    <img alt="Types" src="https://img.shields.io/npm/types/seniors-stylis?style=for-the-badge&labelColor=24292e">
  </a>
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/seniors-stylis">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/seniors-stylis?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/seniors-stylis?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">
npm i seniors-stylis
yarn add seniors-stylis
</pre>

> A custom build of Stylis

`@emotion/stylis` is a version of [Stylis](https://github.com/thysultan/stylis.js) that has been modified slightly to make it smaller. The only Stylis option that can be changed is `prefix`, the rest of the options are already set to the values shown below and cannot be changed.

This package use the `@emotion/stylis` and deal with :host and ::slotted to legacy browsers.

```js
type Options = {
  global: false,
  preserve: false,
  keyframe: false,
  semicolon: true,
  cascade: true,
  compress: false,
  prefix: boolean | ((key: string, value: string, context: number) => boolean),
}
```

```jsx
import Stylis from 'seniors-stylis'

const stylis = new Stylis()

stylis.build(".css-hash", "display:flex;"); // .css-hash{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}

// to legacy browsers
const legacy = true;
stylis.build(".css-hash", ":host(.hi) { color: green }", legacy); // .css-hash.hi{color :green;}
```

# Thanks

- The [emotion](https://github.com/emotion-js) team did most of the work on this one, I just did some extra to work with :host and ::slotted in legacy browsers.
- Stylis was written by [Sultan Tarimo](https://github.com/thysultan).
