import { getAllIndexesOf } from "./utils/string";

/**
 * Generated style by @emotion/stylis doesn't work well with classes attached in <Host>
 * at browsers which don't have a shadowroot (legacy)
 * For instance, if we generate stylis('.a', '.b{ }') the desired string is: '.a.b{ }'
 * but stylis generate '.a .b{}' so .b class can't be applied
 * also :host break the css in IE11, need to be removed
 *
 * @param {string} style
 * @returns {string}
 */
export function parseStylisTolegacy(style: string) {
  const keys = {
      host: ':host(',
      slotted: '::slotted('
  }

  const indexes = {
      host: getAllIndexesOf(style, keys.host),
      slotted: getAllIndexesOf(style, keys.slotted),
  }
      
  const replacableSets: { [key: string]: Set<string> } = {
      host: new Set(),
      slotted: new Set()
  }

  Object.entries(indexes)
      .forEach(([key, value]) => {
          value.forEach(item => {
              var index = item;
              while(style[index] !== ')') {
                  index++;
              }
              replacableSets[key].add(style.substr(item, index - item + 1));
          });
      });

  Object.entries(replacableSets)
      .forEach(([key, replacableSet]) => {
          replacableSet.forEach(item => {
              style = style
                  .split(item)
                  .join(item.slice(keys[key].length).slice(0, -1));
          });
      });


  return style;
}
