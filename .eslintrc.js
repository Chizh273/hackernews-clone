// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  plugins: [
    'react'
  ],
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: ['standard', 'plugin:react/all'],
  // add your custom rules here
  'rules': {
    'indent': [2, 2, {SwitchCase: 1}],
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-no-literals': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-set-state': 0,
    'react/no-typos': 0,
    'react/prop-types': 0,
    'react/no-danger': 0,
    'react/require-optimization': 0,
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
