
const addTaskInput = document.querySelector('#addTaskInput');
const addTaskButton = document.querySelector('#addTaskButton');
const taskDiv = document.querySelector('.taskDiv');
const taskUl = taskDiv.querySelector('ul');
const lis = taskUl.children;

addTaskButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addTaskInput.value;
  attachTaskItemButtons(li);
  ul.appendChild(li);
  addTaskInput.value = '';
});

function attachTaskItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);

}

for (let i = 0; i < lis.length; i += 1) {
  attachTaskItemButtons(lis[i]);
}

taskUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
    }
  }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
  }
});
