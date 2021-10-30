export function newTask() {
  const newTaskDiv = document.createElement('div');
  newTaskDiv.className = 'task';
  const newInput = document.createElement('input');
  newInput.className = 'taskinput';
  newInput.type = 'textarea';
  newInput.placeholder = 'Start to type here!';
  const newCross = document.createElement('div');
  newCross.className = 'cross hidden';
  newCross.textContent = 'X';
  newTaskDiv.appendChild(newInput);
  newTaskDiv.appendChild(newCross);
  return newTaskDiv;
}

export function onClick(evt) {
  if (evt.target.className === 'cross') {
    evt.target.closest('.column').removeChild(evt.target.closest('.task'));
  } else if (evt.target.className === 'taskinput') {
    evt.target.focus();
  }
}

export function onEnter(evt) {
  evt.target.closest('.task').querySelector('.cross').classList.remove('hidden');
}

export function onLeave(evt) {
  evt.target.closest('.task').querySelector('.cross').classList.add('hidden');
}

export function taskCreation(evt) {
  const column = evt.target.closest('.column');
  const taskToAdd = newTask();
  taskToAdd.addEventListener('mouseenter', onEnter);
  taskToAdd.addEventListener('mouseleave', onLeave);
  taskToAdd.addEventListener('click', onClick);
  column.appendChild(taskToAdd);
}

export function saveState(element) {
  const saveObj = {};
  const column1 = element.querySelector('.column1');
  const column2 = element.querySelector('.column2');
  const column3 = element.querySelector('.column3');
  const column1Tasks = column1.querySelectorAll('.task');
  const column2Tasks = column2.querySelectorAll('.task');
  const column3Tasks = column3.querySelectorAll('.task');
  const column1Values = [];
  const column2Values = [];
  const column3Values = [];
  column1Tasks.forEach((item) => {
    column1Values.push(item.querySelector('.taskinput').value);
  });
  column2Tasks.forEach((item) => {
    column2Values.push(item.querySelector('.taskinput').value);
  });
  column3Tasks.forEach((item) => {
    column3Values.push(item.querySelector('.taskinput').value);
  });
  saveObj.column1 = column1Values;
  saveObj.column2 = column2Values;
  saveObj.column3 = column3Values;
  localStorage.setItem('tasks', JSON.stringify(saveObj));
}

export function loadState(element) {
  const savedData = JSON.parse(localStorage.getItem('tasks'));
  const column1 = element.querySelector('.column1');
  const column2 = element.querySelector('.column2');
  const column3 = element.querySelector('.column3');
  const column1Tasks = savedData.column1;
  const column2Tasks = savedData.column2;
  const column3Tasks = savedData.column3;
  if (column1Tasks !== undefined) {
    column1Tasks.forEach((item) => {
      const newTaskToAdd = newTask();
      newTaskToAdd.querySelector('.taskinput').value = item;
      newTaskToAdd.addEventListener('mouseenter', onEnter);
      newTaskToAdd.addEventListener('mouseleave', onLeave);
      newTaskToAdd.addEventListener('click', onClick);
      column1.appendChild(newTaskToAdd);
    });
  }
  if (column2Tasks !== undefined) {
    column2Tasks.forEach((item) => {
      const newTaskToAdd = newTask();
      newTaskToAdd.querySelector('.taskinput').value = item;
      newTaskToAdd.addEventListener('mouseenter', onEnter);
      newTaskToAdd.addEventListener('mouseleave', onLeave);
      newTaskToAdd.addEventListener('click', onClick);
      column2.appendChild(newTaskToAdd);
    });
  }
  if (column3Tasks !== undefined) {
    column3Tasks.forEach((item) => {
      const newTaskToAdd = newTask();
      newTaskToAdd.querySelector('.taskinput').value = item;
      newTaskToAdd.addEventListener('mouseenter', onEnter);
      newTaskToAdd.addEventListener('mouseleave', onLeave);
      newTaskToAdd.addEventListener('click', onClick);
      column3.appendChild(newTaskToAdd);
    });
  }
}
