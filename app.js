function createNewThing() {
  const addTaskInput = document.getElementById('addTaskInput');
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addTaskInput.value;
  ul.appendChild(li);
  addTaskInput.value = '';
}

const addTaskButton = document.getElementById('addTaskButton');

addTaskButton.addEventListener('click', () => {
  createNewThing();
});
