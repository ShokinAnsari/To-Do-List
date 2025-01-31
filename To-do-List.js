 function addTask()  // function to add task
{
    let newTask=document.createElement('li')
    let taskList=document.getElementById('taskList')
    taskList.appendChild(newTask)
    newTask.textContent=document.getElementById('inputTask').value  // Logic for adding new Task
    document.getElementById('inputTask').value=""
    deleteTask(newTask)
}

function deleteTask(newTask)   // Function for removing tasks after completion
{
    let deleteBTN=document.createElement('button')
    deleteBTN.textContent="Done"
    newTask.appendChild(deleteBTN);
    deleteBTN.onclick=function()    
    {
        newTask.remove();
    }

}