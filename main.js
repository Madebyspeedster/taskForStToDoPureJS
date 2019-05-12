const application = {};
application.elements = {};
application.elements.buttons = {};
application.elements.buttons.addTask = document.querySelector("#addTask");
application.elements.buttons.highPr = document.querySelector("#highPr");
application.elements.buttons.closeTodo = document.querySelector(".close_todo");
application.elements.inputs = {};
application.elements.inputs.taskInput = document.querySelector(".todo_input");
application.elements.inputs.checkBoxInput = document.querySelector(".todo_input_checkbox");
application.elements.list = document.querySelector("ul");
application.elements.mainContainer = document.querySelector(".todo_container");
application.elements.img = {};
application.elements.img.todoIcon = document.querySelector(".folder_icon");
application.elements.img.folderBlock = document.querySelector(".folder_block");
application.utils = {};
application.utils.methods = {};
application.utils.methods.removeTask = function (element) {
        if(element.tagName.toUpperCase() === "LI" && element.classList.contains("taskComplete")) {
            element.remove();
        }else if(element.tagName.toUpperCase() === "LI") {
            element.classList.add("taskComplete");
        }
};
application.utils.methods.addHighPrTask = function(parent, element) {
        if(application.elements.list.firstElementChild && application.elements.list.firstElementChild.classList.contains("highPr")) {
            application.elements.list.firstElementChild.classList.remove("highPr");
        }
        element.classList.add("highPr");
        return parent.insertBefore(element,parent["firstChild"])
};

// Listeners
application.elements.list.addEventListener("click", (event) => {
        application.utils.methods.removeTask(event.target)
});
application.elements.inputs.taskInput.addEventListener("keypress", (event) => {
    if(event["code"] === "Enter") {
        let el = document.createElement("li");
        let txt = document.createTextNode(application.elements.inputs.taskInput.value);
        el.appendChild(txt);
        if(el && txt.length) {
            application.elements.inputs.taskInput.blur();
            application.elements.inputs.checkBoxInput.checked ? application.utils.methods.addHighPrTask(application.elements.list,el) : application.elements.list.appendChild(el);
            event.target.value = "";
        }
    }
});
application.elements.img.todoIcon.addEventListener("dblclick", () => {
    application.elements.img.folderBlock.style.opacity = "0";
    application.elements.mainContainer.classList.toggle("openTodoContainer");
});
application.elements.buttons.closeTodo.addEventListener("click", () => {
    application.elements.mainContainer.classList.toggle("openTodoContainer");
    application.elements.img.folderBlock.style.opacity = "1";
});
