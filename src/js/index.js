'use strict'
// Our application
const list = document.getElementById('list');
const input = document.getElementById('input');
const add = document.getElementById('add');
const clear = document.getElementById('clear');
const url = document.getElementById('url');
const load = document.getElementById('load');

const tasks = ['salle de sport','tourner des tours'];

// This is a function that adds the task to the DOM with a delete button for events.
function tasksDom(task){
     // if we have a non-empty string
      if (typeof task === 'string' && task.trim() !== "") {
        const li = document.createElement('li');
        li.className = "flex items-center justify-between gap-3 py-2 "
        const remove = document.createElement('button');
        remove.className = "bg-blue-500 h-10 px-4 py-2 text-white rounded hover:bg-blue-700";

        li.textContent = task;
        remove.textContent = 'REMOVE';

        remove.addEventListener("click" , 
        () => {
            list.removeChild(remove.parentNode);
            //To delete the child element from the list
        })

        li.appendChild(remove);

        list.insertBefore(li, list.firstChild);
    }
}
//Each task is added to the bulleted list 

// for(let i  = 0; i < tasks.length ; i++ ){
//    tasksDom(tasks[i])
// }
tasks.forEach( task => {
    tasksDom(task)
})


function newTask (){
input.focus(); //Performs a request to bring the window to the foreground

    // we manage the adding of tasks with button ADD and the touch "ENTER"
}

add.addEventListener('click',newTask);

// if we press on "Enter button" , my function newTasks is executed
input.addEventListener('keydown', e => {
     if(e.key === 'Enter'){
        newTask();
     }
});

// We clear the list from DOM and the browser
clear.addEventListener('click', () => {
list.innerHTML = ''; // To clear my list
});


load.addEventListener('click',() => {

})
