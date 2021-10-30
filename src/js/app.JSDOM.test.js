import Popover from './Popover';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { document } = (new JSDOM('...')).window;

test('error appearance', () => {
  document.body.innerHTML = '<button>click to toggle popover</button>';
  const popover = new Popover(document.body);
  popover.bindToDOM();
  const button = document.querySelector('button');
  button.click();
  expect(document.body.classList.contains('valid')).toBeFalsy();
});
