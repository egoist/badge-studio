# badge-studio

[![NPM version](https://img.shields.io/npm/v/badge-studio.svg?style=flat)](https://npmjs.com/package/badge-studio) [![NPM downloads](https://img.shields.io/npm/dm/badge-studio.svg?style=flat)](https://npmjs.com/package/badge-studio) [![CircleCI](https://circleci.com/gh/egoist/badge-studio/tree/master.svg?style=shield)](https://circleci.com/gh/egoist/badge-studio/tree/master)  [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## Install

```bash
yarn add badge-studio
```

## Usage

```js
const badge = require('badge-studio')

const buildPassing = badge({
  subject: 'build',
  status: 'passing'
})
// => <svg...
```

Then you will get an SVG string which renders:

<img src="https://ooo.0o0.ooo/2017/06/28/59536f4dd014a.png" height="40" />

## API

### badge(options)

#### options

##### template

Type: `string`<br>
Default: `default`<br>
Possible: `default` `square`

Choose a badge template.

##### color

Type: `string`

Text color for both `subject` and `status`.

##### shadowColor

Type: `string`

Shadow color for both `subject` and `status`. **No shadow in *square* template**.

##### subject/status

Type: `string` `Object`

`subject` is similar to `status` except that we put `subject` on the left and `status` on the right.

When it's a string, it's simply a shorthand of `{ text: string }`.

###### text

Type: `string`

The text to display.

###### color

Type: `string`

Text color for `subject` or `status`.

###### bgColor 

Type: `string`<br>
Default: `#555` for `subject`, `#4c1` for `status`

Background color for `subject` or `status`.

###### shadowColor

Type: `string`

Shadow color for `subject` or `status`.

##### font

Type: `string`<br>
Default: `Helvetica-Bold`<br>
See: https://github.com/devongovett/pdfkit/blob/master/docs/text.coffee.md#fonts

Use specific font for text.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**badge-studio** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/badge-studio/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@rem_rin_rin](https://twitter.com/rem_rin_rin)
