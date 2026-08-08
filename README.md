# Ex03 To-Do List using JavaScript
## Date:08.08.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My To-Do List</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<div class="todo-container">

    <div class="top-bar">
        <h1>My To-Do List</h1>
        <button id="themeBtn" title="Toggle theme">🌙</button>
    </div>

    <div class="input-area">
        <input type="text" id="taskInput" placeholder="Add a new task...">
        <input type="date" id="dateInput">
        <select id="priorityInput">
            <option value="Low">Low</option>
            <option value="Medium" selected>Medium</option>
            <option value="High">High</option>
        </select>
        <button id="addBtn">Add</button>
    </div>

    <input type="text" id="searchInput" placeholder="🔎 Search tasks...">

    <div class="filters">
        <button class="filter active" data-filter="all">All</button>
        <button class="filter" data-filter="active">Active</button>
        <button class="filter" data-filter="completed">Completed</button>
    </div>

    <div id="taskList"></div>

    <div class="bottom">
        <span id="taskCount">0 items left</span>
        <button id="clearCompleted">Clear Completed</button>
    </div>

</div>

<script src="script.js"></script>
</body>
</html>
```

style.css
```
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:Arial,sans-serif;
}

body{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background:linear-gradient(135deg,#75d1d0,#8dbce5);
    padding:20px;
    transition:.3s;
}

.todo-container{
    width:100%;
    max-width:620px;
    background:white;
    padding:28px 30px 22px;
    border-radius:10px;
    box-shadow:0 8px 20px rgba(0,0,0,.18);
}

.top-bar{
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
}

h1{
    text-align:center;
    color:#333;
    font-size:26px;
    margin-bottom:18px;
}

#themeBtn{
    position:absolute;
    right:0;
    top:-5px;
    border:none;
    background:transparent;
    font-size:20px;
    cursor:pointer;
}

.input-area{
    display:flex;
    gap:7px;
    margin-bottom:12px;
}

#taskInput{
    flex:1;
}

input,select{
    height:36px;
    border:1px solid #d7d7d7;
    border-radius:5px;
    padding:0 10px;
    outline:none;
    font-size:13px;
}

input:focus,select:focus{
    border-color:#4caf50;
}

#dateInput{
    width:130px;
}

#priorityInput{
    width:105px;
}

#addBtn{
    height:36px;
    padding:0 15px;
    border:none;
    border-radius:5px;
    background:#4caf50;
    color:white;
    cursor:pointer;
}

#addBtn:hover{
    background:#3d9d46;
}

#searchInput{
    width:100%;
    margin-bottom:12px;
}

.filters{
    display:flex;
    justify-content:center;
    gap:8px;
    margin-bottom:12px;
}

.filter{
    border:1px solid #ddd;
    background:#f7f7f7;
    border-radius:20px;
    padding:6px 14px;
    cursor:pointer;
    font-size:12px;
}

.filter.active{
    background:#4caf50;
    color:white;
    border-color:#4caf50;
}

#taskList{
    border-top:1px solid #eee;
}

.task{
    display:flex;
    align-items:center;
    gap:9px;
    min-height:50px;
    border-bottom:1px solid #eee;
    padding:8px 2px;
}

.task-check{
    width:15px;
    height:15px;
    cursor:pointer;
}

.task-content{
    flex:1;
    min-width:0;
}

.task-text{
    font-size:13px;
    color:#333;
    word-break:break-word;
}

.task.completed .task-text{
    text-decoration:line-through;
    color:#999;
}

.task-info{
    display:flex;
    gap:8px;
    margin-top:4px;
    font-size:10px;
    color:#888;
}

.priority{
    padding:2px 6px;
    border-radius:8px;
    font-size:9px;
}

.priority.Low{
    background:#e5f5e8;
    color:#3c9146;
}

.priority.Medium{
    background:#fff1cc;
    color:#a87500;
}

.priority.High{
    background:#ffe1e1;
    color:#d33;
}

.task-actions{
    display:flex;
    gap:7px;
}

.edit-btn,.delete-btn{
    border:none;
    background:none;
    cursor:pointer;
    font-size:16px;
}

.edit-btn{
    color:#ff6b4a;
}

.delete-btn{
    color:#aaa;
}

.edit-btn:hover{
    color:#e44d2f;
}

.delete-btn:hover{
    color:#777;
}

.bottom{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding-top:14px;
    font-size:11px;
    color:#888;
}

#clearCompleted{
    border:none;
    background:none;
    color:#ff5f55;
    cursor:pointer;
    font-size:11px;
}

#clearCompleted:hover{
    text-decoration:underline;
}

.empty{
    text-align:center;
    padding:25px;
    color:#aaa;
    font-size:13px;
}

body.dark{
    background:linear-gradient(135deg,#202b36,#35485a);
}

body.dark .todo-container{
    background:#20252b;
}

body.dark h1,
body.dark .task-text{
    color:#eee;
}

body.dark input,
body.dark select{
    background:#30363d;
    color:#eee;
    border-color:#444;
}

body.dark .filter{
    background:#30363d;
    color:#ddd;
    border-color:#444;
}

body.dark .filter.active{
    background:#4caf50;
    color:white;
}

body.dark #taskList,
body.dark .task{
    border-color:#383d42;
}

body.dark .task.completed .task-text{
    color:#777;
}

@media(max-width:600px){
    .todo-container{
        padding:22px 18px;
    }

    .input-area{
        flex-wrap:wrap;
    }

    #taskInput{
        width:100%;
        flex:none;
    }

    #dateInput,
    #priorityInput{
        flex:1;
        width:auto;
    }

    #addBtn{
        flex:1;
    }
}
```

script.js
```
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
```

## OUTPUT

![alt text](<Screenshot 2026-08-08 141038.png>)

## RESULT
The program for creating To-do list using JavaScript is executed successfully.
