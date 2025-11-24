'use strict'

const { response } = require("express");

// DOM elements
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

// Storage
const storage = new ArrayStorage('tasks');
const tasks = storage.list;

// Add task to DOM
function tasksDom(task) {
    if (typeof task === 'string' && task.trim() !== "") {

        const li = document.createElement('li');
        li.className = "flex items-center justify-between gap-3 py-2";

        const remove = document.createElement('button');
        remove.className = "bg-blue-500 h-10 px-4 py-2 text-white rounded hover:bg-blue-700";
        remove.textContent = 'REMOVE';

        li.textContent = task;
        li.appendChild(remove);

        // Remove task
        remove.addEventListener("click", () => {
            const value = li.firstChild.textContent;
            storage.remove(value);
            list.removeChild(li);
        });

        list.insertBefore(li, list.firstChild);
        return true;
    }
    return false;
}

// Load existing tasks
tasks.forEach(task => tasksDom(task));

// Add new task
function newTask() {
    if (storage.list.indexOf(input.value) === -1 && tasksDom(input.value)) {
        storage.set(input.value);
        input.value = '';
    }
    input.focus();
}

add.addEventListener('click', newTask);

// Enter key
input.addEventListener('keydown', e => {
    if (e.key === 'Enter') newTask();
});

// Clear all
clear.addEventListener('click', () => {
    storage.clear();
    list.innerHTML = '';
});

// Load button 
load.addEventListener('click', () => {
fetch(url.value)
.then(response => {
    if(response.ok){
        return response.json()
    }
    throw new Error(`${response.statusText} (${response.status})`)
} )

.then(tasks => {
    if(Array.isArray(tasks)){

    }

   
})
});
