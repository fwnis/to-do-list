import ToDoList from "./modules/to-do-list.js"

const todoList = new ToDoList("#add-task", ".add", ".tasks", ".completed-tasks")
todoList.init()
