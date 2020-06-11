import Stylis from '../index';

const stylis = new Stylis();

const mock = `
  :host(.webcp-select) .option-container {
    display: none;
  }
  :host(.webcp-select) .option-container.expanded {
    display: flex;
    flex-direction: column;
  }
  :host(.webcp-select) ::slotted(option) {
    background-color: red;
  }
  :host(.webcp-select) ::slotted(option:hover) {
    background-color: red;
  }`;

const expected = {
  modern: stylis.build('', `
  .c:host(.webcp-select) .option-container {
    display: none;
  }
  .c:host(.webcp-select) .option-container.expanded {
    display: flex;
    flex-direction: column;
  }
  .c:host(.webcp-select) ::slotted(option) {
    background-color: red;
  }
  .c:host(.webcp-select) ::slotted(option:hover) {
    background-color: red;
  }`),
  legacy: stylis.build('', `
  .c.webcp-select .option-container {
    display: none;
  }
  .c.webcp-select .option-container.expanded {
    display: flex;
    flex-direction: column;
  }
  .c.webcp-select option {
    background-color: red;
  }
  .c.webcp-select option:hover {
    background-color: red;
  }`)
}

test("should work on modern browsers", () => {
  // given (mock)
  // when
  const style = stylis.build('.c', mock);
  // then
  expect(style).toBe(expected.modern);
});


test("should work on legacy browsers", () => {
  const stylis = new Stylis();
  // given (mock)
  // when
  const style = stylis.build('.c', mock, true);
  // then
  expect(style).toBe(expected.legacy);
});
