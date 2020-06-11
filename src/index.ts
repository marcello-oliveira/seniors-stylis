import EStylis from '@emotion/stylis'
import { parseStylisTolegacy } from './parser';

export type Options = {
  global: false,
  preserve: false,
  keyframe: false,
  semicolon: true,
  cascade: true,
  compress: false,
  prefix: boolean | ((key: string, value: string, context: number) => boolean)
}

class Stylis {
  private stylis;

  constructor(options?: Options) {
    this.stylis = new EStylis(options);
  }

  /**
   *
   *
   * @param {string} selector
   * @param {string} properties
   * @param {boolean} legacy
   * @returns {string}
   * @memberof Stylis
   */
  build(selector: string, properties: string, legacy?: boolean): string {
    let style = this.stylis(selector, properties);
    if (legacy) {
      style = parseStylisTolegacy(style);
    }

    return style;
  }
}

export default Stylis;