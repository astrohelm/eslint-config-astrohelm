<h1 align="center"> Astrohelm ESLint rule set configuration </h1>

Javascript style guide for [Astrohelm](https://github.com/astrohelm) projects. Follow next steps to
make it work for you:

## Usage

**1**. Install required packages: <br/>

```bash
npm i -D eslint eslint-plugin-import eslint-config-astrohelm
```

**2**. Add `"extends": ["astrohelm"]` to your `.eslintrc`.

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
