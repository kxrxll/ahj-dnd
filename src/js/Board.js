import { taskCreation, saveState, loadState } from './utils';

export default class Board {
  constructor(element) {
    this.board = element;
    this.addNewTaskButtons = this.board.querySelectorAll('.new');
  }

  init() {
    if (localStorage.getItem('tasks')) {
      loadState(this.board);
    }
    this.addNewTaskButtons.forEach((element) => {
      element.addEventListener('click', taskCreation);
    });
    let draggedEl = null;
    let ghostEl = null;
    this.board.addEventListener('mousedown', (evt) => {
      evt.preventDefault();
      if (!evt.target.classList.contains('task')) {
        return;
      }
      document.body.style.cursor = 'grabbing';
      draggedEl = evt.target;
      ghostEl = evt.target.cloneNode(true);
      ghostEl.classList.add('dragged');
      evt.target.closest('.column').removeChild(draggedEl);
      document.body.appendChild(ghostEl);
      ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
      ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
    });
    this.board.closest('body').addEventListener('mousemove', (evt) => {
      evt.preventDefault();
      if (!draggedEl) {
        return;
      }
      ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px`;
      ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px`;
    });
    this.board.closest('body').addEventListener('mouseup', (evt) => {
      if (!draggedEl) {
        return;
      }
      document.body.style.cursor = 'auto';
      const closest = document.elementFromPoint(evt.clientX, evt.clientY);
      if (closest.classList.contains('column')) {
        closest.appendChild(draggedEl, closest);
        document.body.removeChild(ghostEl);
        ghostEl = null;
        draggedEl = null;
        saveState(this.board);
      } else
      if (evt.target.closest('.column')) {
        evt.target.closest('.column').appendChild(draggedEl);
        document.body.removeChild(ghostEl);
        ghostEl = null;
        draggedEl = null;
        saveState(this.board);
      } else {
        document.body.removeChild(ghostEl);
        ghostEl = null;
        draggedEl = null;
        saveState(this.board);
      }
    });
  }
}
