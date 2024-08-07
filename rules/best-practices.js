'use strict';

module.exports = {
  rules: {
    eqeqeq: ['error', 'always'],
    'no-loop-func': ['error'],
    'no-self-compare': ['error'],
    'no-unmodified-loop-condition': ['error'],
    'no-useless-concat': ['error'],
    curly: ['error', 'multi-line'],
    'no-redeclare': ['off'],
    'consistent-return': ['error', { treatUndefinedAsUnspecified: true }],
  },
};
