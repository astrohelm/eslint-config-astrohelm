'use strict';

const rules = [
  'possible-errors',
  'best-practices',
  'strict-mode',
  'variables',
  'nodejs-and-commonjs',
  'stylistic-issues',
  'ecmascript-6',
  'plugin-import',
  'parser-options',
  'ecmascript-13',
].map(rule => require.resolve('./rules/' + rule));

module.exports = { extends: ['eslint:recommended', ...rules] };
