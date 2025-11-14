// Our application
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

const tasks = ['salle de sport','tourner des tours'];

function tasksDom(task){
     // if we have a non-empty string
      if (typeof task === 'string' && task.trim() !== "") {
        const li = document.createElement('li');
        li.className = "flex items-center justify-between gap-3 py-2 "
        const remove = document.createElement('button');
        remove.className = "bg-blue-500 h-10 px-4 py-2 text-white rounded hover:bg-blue-700";

        li.textContent = task;
        remove.textContent = 'REMOVE';

        li.appendChild(remove);

        list.insertBefore(li, list.firstChild);
    }
}
//Each task is added to the bulleted list 

for(let i  = 0; i < tasks.length ; i++ ){
   tasksDom(tasks[i])
}