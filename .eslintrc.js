// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    $: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    //'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    'no-debugger': 0,
    'no-extra-semi': 0,
    'new-cap': 0,
    'semi': 0,
    'no-throw-literal': 0,
    'curly': 0,
    'spaced-comment': 0,
    'indent': 0,
    'keyword-spacing': 0,
    'no-unused-vars': 0,
    'space-before-function-paren': 0
  }
}
