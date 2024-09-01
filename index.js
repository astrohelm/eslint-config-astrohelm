'use strict';

const { recommended } = require('@eslint/js').configs;
//prettier-ignore
module.exports = [recommended, require('eslint-config-prettier'), {
  languageOptions: { ecmaVersion: 'latest', sourceType: 'commonjs', globals: require('./lib/globals.js') },
  plugins: { prettier: require('eslint-plugin-prettier') },
  ignores: require('./lib/ignore.js'),
  rules: Object.assign({}, ...[
    require('./rules/best-practices.js'),
    require('./rules/ecmascript-6.js'),
    require('./rules/ecmascript-13.js'),
    require('./rules/nodejs-and-commonjs.js'),
    require('./rules/possible-errors.js'),
    require('./rules/strict-mode.js'),
    require('./rules/stylistic-issues.js'),
    require('./rules/variables.js'),
  ])
}]
