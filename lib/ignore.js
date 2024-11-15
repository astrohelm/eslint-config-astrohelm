'use strict';

module.exports = [
  // Logs
  'logs',
  '*.log',
  'npm-debug.log*',
  'yarn-debug.log*',
  'yarn-error.log*',
  'pnpm-debug.log*',
  'lerna-debug.log*',

  // Editor directories and files
  '.vscode/*',
  '!.vscode/extensions.json',
  '.idea',
  '.DS_Store',
  '*.suo',
  '*.ntvs*',
  '*.njsproj',
  '*.sln',
  '*.sw?',

  // Build
  '**/node_modules/',
  '**/dist/',
  '**/dist-ssr/',
  '*.local',
  '.env',
  '**/build/',
  '**/package/',
  '.env.*',
  '!.env.example',

  // Ignore files for PNPM, NPM and YARN
  'pnpm-lock.yaml',
  'package-lock.json',
  'yarn.lock',

  // Other
  '.git/',
];
