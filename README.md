<h1 align="center"> Astrohelm ESLint ruleset configuration </h1>

**1**. Install required packages: <br/>

```bash
npm i -D eslint prettier eslint-plugin-import eslint-config-sashapop10 eslint-config-prettier eslint-plugin-prettier
```

**2**. Add `"extends": ["astrohelm"]` to your `.eslintrc`.

**3**. _(optional)_ Add following scripts

```json
// package.json
{
  "scripts": {
    "lint": "eslint . && prettier --check \"**/*.js\" \"**/*.json\" \"**/*.md\" \".*rc\" \"**/*.yml\"",
    "fmt": "prettier --write \"**/*.js\" \"**/*.json\" \"**/*.md\" \".*rc\" \"**/*.yml\""
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
