class UIManager{
    constructor(){
        
    }

    bindEventsListeners(){
        const addBox = document.querySelector(".addBox");
        const addTaskBtn = document.getElementById("add");
        const createTaskBtn = document.getElementById("input-send")
        
        console.log(createTaskBtn)

        createTaskBtn.onclick = () => {
            console.log("funciona");
        }

        addTaskBtn.onclick = () => {

            // Add new task
            const taskList = document.getElementById("task-list");
            const task = `<li class="task-list_item">
                    <p class="task"> Hacer compras en el supermercado </p>
                </li>`;
            taskList.innerHTML += task;
        }


    }
}

export default UIManager;