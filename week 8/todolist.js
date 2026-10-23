let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let input = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
console.log("App Loaded")



button.addEventListener("click" , function() {
    
    if (input.value.trim() === ""){
        alert("Enter a task")
        return;
    }
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    renderTasks();
    
});
function renderTasks(){

    let list = document.getElementById("taskList");

    list.innerHTML = "";
    tasks.forEach(function (task, index){
        let li = document.createElement("li");
        
        li.textContent = task;
        
        li.addEventListener("click", function (){
            li.classList.toggle("done");
        });


        let btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", function (e){
            e.stopPropagation();

            tasks.splice(index, 1);

            localStorage.setItem("tasks", JSON.stringify(tasks));

            renderTasks();
              
        })

        li.appendChild(btn);
        list.appendChild(li)
    })

    
}

