export default class ToDoList {
  constructor(input, addButton, list, completed) {
    this.todoInput = document.querySelector(input);
    this.addButton = document.querySelector(addButton);

    this.todoList = document.querySelector(list);
    this.completedTasks = document.querySelector(completed);

    this.createTodo = this.createTodo.bind(this);
    this.checkTask = this.checkTask.bind(this);
  }

  createTodo() {
    if (this.todoInput.value) {
      const todoItem = document.createElement("li");
      const todoCheck = document.createElement("input");
      const todoTextSpan = document.createElement("span");
      const deleteButton = document.createElement("button");

      todoTextSpan.innerText = this.todoInput.value;
      todoCheck.setAttribute("type", "checkbox");
      todoCheck.addEventListener("click", this.checkTask);

      todoItem.classList.add("task");

      todoItem.appendChild(todoCheck);
      todoItem.appendChild(todoTextSpan);
      todoItem.appendChild(deleteButton);
      this.todoList.appendChild(todoItem);

      deleteButton.addEventListener("click", () => {
        if (todoItem.parentElement === this.todoList)
          this.todoList.removeChild(todoItem);
        else this.completedTasks.removeChild(todoItem);
      });

      this.todoInput.value = "";
    }
  }

  checkTask() {
    const todoCheckbox = document.querySelectorAll("input[type='checkbox']");
    Array.from(todoCheckbox).forEach((item) => {
      if (item.checked) {
        if (item.parentElement.parentElement === this.todoList)
          this.completedTasks.appendChild(item.parentElement);
      } else {
        this.todoList.appendChild(item.parentElement);
      }
    });
  }

  addButtonEvent() {
    this.addButton.addEventListener("click", this.createTodo);
  }

  inputEvent() {
    this.todoInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        this.createTodo();
      }
    });
  }

  init() {
    this.addButtonEvent();
    this.inputEvent();
    return this;
  }
}
