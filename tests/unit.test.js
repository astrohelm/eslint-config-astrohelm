'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { ESLint } = require('eslint');
const config = require('../.eslintrc.json');

const eslint = new ESLint({
  baseConfig: config,
});

test('Correct loading', async () => {
  const code = `'use strict';\nconst foo = 1;\nconst bar = function () {};\nbar(foo);\n`;
  const [lintResult] = await eslint.lintText(code);
  console.log(lintResult);
  assert(lintResult.errorCount === 0, JSON.stringify(lintResult));
});
