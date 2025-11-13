// Our application
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

// const tasks = ['salle de sport','tourner des tours'];
// //we recover the array of tasks 
// for(let i  = 0; i < tasks.length ; i++ ){
//     // if we have a non-empty string
//     if(typeof tasks[i]  === 'string' && tasks[i]){
//         const li = document.createElement('li');
//         const remove = document.createElement('button');
//         remove.className = "bg-blue-500 h-10 px-4 py-2 rounded hover:bg-blue-700";

//         li.textContent = tasks[i];
//         remove.textContent = 'REMOVE';

//         li.appendChild(remove);

//         list.insertBefore(li, list.firstChild);
//     }
// }