'use strict';

module.exports = {
  rules: {
    eqeqeq: ['error', 'always'],
    'no-loop-func': ['error'],
    'no-self-compare': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-useless-concat': ['error'],
    curly: ['error', 'multi-line', 'consistent'],
    'no-redeclare': ['error', { builtinGlobals: true }],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
  },
};
