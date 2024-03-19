'use strict';

module.exports = {
  extends: [
    'eslint:recommended',
    require.resolve('./rules/possible-errors'),
    require.resolve('./rules/best-practices'),
    require.resolve('./rules/strict-mode'),
    require.resolve('./rules/variables'),
    require.resolve('./rules/nodejs-and-commonjs'),
    require.resolve('./rules/stylistic-issues'),
    require.resolve('./rules/ecmascript-6'),
    require.resolve('./rules/plugin-import'),
    require.resolve('./rules/parser-options'),
    require.resolve('./rules/ecmascript-13'),
  ],
};
