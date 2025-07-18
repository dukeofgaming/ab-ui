import StyleDictionary from 'style-dictionary';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { transforms, transformGroups, transformTypes } from 'style-dictionary/enums';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { attributeCti, nameConstant, sizePx, colorCss, timeSeconds } = transforms;
const { value: transformTypeValue, name } = transformTypes;

console.log('Build started...');
console.log('\n==============================================');

// Only include global tokens for the tokens.css build
StyleDictionary.registerFilter({
  name: 'isGlobal',
  filter: function(token) {
    return token.path[0] === 'global';
  }
});

// Only include theme tokens for the themes.css build
StyleDictionary.registerFilter({
  name: 'isTheme',
  filter: function(token) {
    return token.path[0] && token.path[0].startsWith('theme');
  }
});

// Custom format for theme classes
StyleDictionary.registerFormat({
  name: 'css/themeClasses',
  format: function({ dictionary }) {
    const themeGroups = {};
    dictionary.allTokens.forEach(token => {
      const themeKey = token.path[0];
      if (!themeGroups[themeKey]) themeGroups[themeKey] = [];
      themeGroups[themeKey].push(token);
    });
    return Object.entries(themeGroups)
      .map(([themeKey, tokens]) => {
        const className = `.theme-${themeKey.replace(/^theme[\/-]/, '').replace(/\//g, '-')}`;
        const lines = tokens.map(
          t => `  --global-color-${t.path[2]}: ${t.value};`
        );
        return `${className} {\n${lines.join('\n')}\n}`;
      })
      .join('\n');
  }
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const sd = new StyleDictionary(__dirname + '/config.json');

// FINALLY, BUILD ALL THE PLATFORMS
await sd.buildAllPlatforms();

console.log('\n==============================================');
console.log('\nBuild completed!');