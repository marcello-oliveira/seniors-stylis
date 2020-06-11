/**
 * Get all firtst indexes of 'value' ocurrences
 * 
 * @export
 * @param {*} str
 * @param {*} value
 * @returns
 */
export function getAllIndexesOf(str: string, value: string) {
  const indexes = [];
  let index = -1;
  while ((index = str.indexOf(value, index + 1)) != -1) {
      indexes.push(index);
  }

  return indexes;
}

