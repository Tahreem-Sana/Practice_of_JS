let tasks = [];

function addtask(task){
    tasks.push(task);
    console.log("Task is added: " + task);
}

function showtasks(){
    console.log("your task:");
    for(let i = 0; i < tasks.length; i++){
        console.log((i + 1) + ". " + tasks[i]);
    }
}

addtask("Namaz done");
addtask("JS practice done");
showtasks();