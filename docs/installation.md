# Installation

You can find the latest version of the package on [npm](https://www.npmjs.com/package/@dukeofgaming/ab-ui).

## Upgrading

It is recommended you install a pre-release version of the package as an alias, so that you can selectively test new features for specific components without having to change your production dependencies.

```sh
npm install --save-dev @dukeofgaming/ab-ui-prerelease@npm:@dukeofgaming/ab-ui@0.3.0-dev.3
```

This will result in a package.json that looks like:

```json
{
  "dependencies": {
    "@dukeofgaming/ab-ui": "^0.3.0-dev.3",
    "@dukeofgaming/ab-ui-prerelease": "npm:@dukeofgaming/ab-ui@0.3.0-dev.3"
  }
}
```

Which will allow you to import multiple versions of the same package in a way components can coexist [[requirements#]], for example:

```jsx
import { Button } from '@dukeofgaming/ab-ui';
import { Button as ButtonPrerelease } from '@dukeofgaming/ab-ui-prerelease';
```
