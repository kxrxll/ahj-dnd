export default class Popover {
  constructor(el) {
    this.body = el;
    this.button = this.body.querySelector('button');
  }

  bindToDOM() {
    this.button.addEventListener('click', this.onButtonPress.bind(this));
  }

  onButtonPress(evt) {
    evt.preventDefault();
    // Element creation
    const error = document.createElement('div');
    error.classList.add('error');
    const errorHeader = document.createElement('div');
    errorHeader.classList.add('header');
    error.appendChild(errorHeader);
    const title = document.createElement('p');
    title.textContent = 'So, here it is!';
    errorHeader.appendChild(title);
    const text = document.createElement('p');
    text.textContent = 'And some description!';
    error.appendChild(text);
    const triangle = document.createElement('div');
    triangle.classList.add('triangle');
    error.appendChild(triangle);
    // Calculation of popover
    error.style.bottom = `${this.button.offsetHeight * 1.5}px`;
    error.style.left = `${this.button.offsetWidth / 8}px`;
    this.button.appendChild(error);
    this.el.classList.add('valid');
  }
}
