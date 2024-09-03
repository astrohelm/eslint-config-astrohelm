<h1 align="center"> Astrohelm linter configuration </h1>

## Usage

**1**. Install required packages: <br/>

```bash
npm i -D eslint eslint-config-astrohelm
```

**2**. Import `eslint-config-astrohelm` in `eslint.config.js`

```js
'use strict';
const configAstrohelm = require('eslint-config-astrohelm');
module.exports = configAstrohelm; // or if you want to custom:
// module.exports = [...configAstrohelm, config];
```

**3**. **_(optional)_** Add following scripts

```json
// package.json
{
  "scripts": {
    "lint": "eslint ."
    //...
  }
  //...
}
```

<h2 align="center">Copyright & contributors</h2>

<p align="center">
Copyright © 2023 <a href="https://github.com/astrohelm/eslint-config-astrohelm/graphs/contributors">Astrohelm contributors</a>.
This library is <a href="./LICENSE">MIT licensed license</a>.<br/>
And it is part of <a href="https://github.com/astrohelm">Astrohelm ecosystem</a>.
</p>
