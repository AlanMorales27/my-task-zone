class UIManager{
    constructor(){
        
    }

    bindEventsListeners(){
        const addTaskBtn = document.getElementById("add");

        addTaskBtn.onclick = () => {
            const taskList = document.getElementById("task-list");
            const task = `<li class="task-list_item">
                    <p class="task"> Hacer compras en el supermercado </p>
                </li>`;
            taskList.innerHTML += task;
        }
    }
}

export default UIManager;