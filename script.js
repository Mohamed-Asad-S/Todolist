let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
let currentFilter="all";
let editId=null;

const taskInput=document.getElementById("taskInput");
const dateInput=document.getElementById("dateInput");
const priorityInput=document.getElementById("priorityInput");
const addBtn=document.getElementById("addBtn");
const taskList=document.getElementById("taskList");
const taskCount=document.getElementById("taskCount");
const searchInput=document.getElementById("searchInput");
const clearCompleted=document.getElementById("clearCompleted");
const themeBtn=document.getElementById("themeBtn");

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

function addTask(){
    const text=taskInput.value.trim();

    if(text===""){
        alert("Please enter a task.");
        taskInput.focus();
        return;
    }

    if(editId!==null){
        const task=tasks.find(t=>t.id===editId);

        if(task){
            task.text=text;
            task.date=dateInput.value;
            task.priority=priorityInput.value;
        }

        editId=null;
        addBtn.textContent="Add";
    }else{
        tasks.push({
            id:Date.now(),
            text:text,
            completed:false,
            date:dateInput.value,
            priority:priorityInput.value
        });
    }

    taskInput.value="";
    dateInput.value="";
    priorityInput.value="Medium";

    saveTasks();
    renderTasks();
}

function deleteTask(id){
    tasks=tasks.filter(task=>task.id!==id);
    saveTasks();
    renderTasks();
}

function toggleTask(id){
    const task=tasks.find(t=>t.id===id);

    if(task){
        task.completed=!task.completed;
    }

    saveTasks();
    renderTasks();
}

function editTask(id){
    const task=tasks.find(t=>t.id===id);

    if(!task)return;

    taskInput.value=task.text;
    dateInput.value=task.date||"";
    priorityInput.value=task.priority||"Medium";

    editId=id;
    addBtn.textContent="Update";
    taskInput.focus();
}

function getFilteredTasks(){
    let result=[...tasks];
    const search=searchInput.value.toLowerCase().trim();

    if(currentFilter==="active"){
        result=result.filter(task=>!task.completed);
    }

    if(currentFilter==="completed"){
        result=result.filter(task=>task.completed);
    }

    if(search){
        result=result.filter(task=>
            task.text.toLowerCase().includes(search)
        );
    }

    return result;
}

function renderTasks(){
    const filtered=getFilteredTasks();

    taskList.innerHTML="";

    if(filtered.length===0){
        taskList.innerHTML='<div class="empty">No tasks found</div>';
    }

    filtered.forEach(task=>{
        const div=document.createElement("div");
        div.className="task"+(task.completed?" completed":"");

        div.innerHTML=`
            <input class="task-check"
                   type="checkbox"
                   ${task.completed?"checked":""}
                   onchange="toggleTask(${task.id})">

            <div class="task-content">
                <div class="task-text">${escapeHTML(task.text)}</div>

                <div class="task-info">
                    <span class="priority ${task.priority}">
                        ${task.priority}
                    </span>

                    ${task.date?
                    `<span>📅 ${formatDate(task.date)}</span>`:""}
                </div>
            </div>

            <div class="task-actions">
                <button class="edit-btn"
                        onclick="editTask(${task.id})"
                        title="Edit">✏️</button>

                <button class="delete-btn"
                        onclick="deleteTask(${task.id})"
                        title="Delete">🗑️</button>
            </div>
        `;

        taskList.appendChild(div);
    });

    updateCount();
}

function updateCount(){
    const remaining=tasks.filter(task=>!task.completed).length;

    taskCount.textContent=
        remaining+" "+(remaining===1?"item":"items")+" left";
}

function formatDate(date){
    const d=new Date(date+"T00:00:00");

    return d.toLocaleDateString("en-IN",{
        day:"2-digit",
        month:"short",
        year:"numeric"
    });
}

function escapeHTML(text){
    const div=document.createElement("div");
    div.textContent=text;
    return div.innerHTML;
}

document.querySelectorAll(".filter").forEach(button=>{
    button.addEventListener("click",()=>{
        document.querySelectorAll(".filter")
            .forEach(btn=>btn.classList.remove("active"));

        button.classList.add("active");

        currentFilter=button.dataset.filter;

        renderTasks();
    });
});

searchInput.addEventListener("input",renderTasks);

clearCompleted.addEventListener("click",()=>{
    tasks=tasks.filter(task=>!task.completed);
    saveTasks();
    renderTasks();
});

addBtn.addEventListener("click",addTask);

taskInput.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        addTask();
    }
});

themeBtn.addEventListener("click",()=>{
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent="☀️";
        localStorage.setItem("theme","dark");
    }else{
        themeBtn.textContent="🌙";
        localStorage.setItem("theme","light");
    }
});

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
    themeBtn.textContent="☀️";
}

renderTasks();