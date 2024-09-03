'use strict';

module.exports = [
  require('@eslint/js').configs.recommended,
  require('eslint-config-prettier'),
  {
    plugins: { prettier: require('eslint-plugin-prettier') },
    ignores: require('./lib/ignore.js'),
    rules: require('./lib/rules.js'),
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: require('./lib/globals.js'),
    },
  },
];
