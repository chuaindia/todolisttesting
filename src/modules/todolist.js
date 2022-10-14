export default class ToDoList {
  constructor() {
    this.getTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  updateTasks() {
    localStorage.setItem('toDoList', JSON.stringify(this.listArray));
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  getTasks() {
    this.listArray = JSON.parse(localStorage.getItem('toDoList')) || [];
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  showTasks = () => JSON.parse(localStorage.getItem('toDoList')) || [];
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  setEdit(i) {
    const task = this.listArray.find(
      (item) => parseInt(item.index, 10) === parseInt(i, 10),
    );
    task.edit = true;
    this.updateTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  addTask(description) {
    const task = {
      description,
      completed: false,
      index: this.listArray.length + 1,
      edit: false,
    };
    this.listArray = [...this.listArray, task];
    this.updateTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  clearCompleted() {
    this.listArray = this.listArray.filter((item) => item.completed !== true);
    if (this.listArray.length > 0) {
      this.listArray = this.listArray.map((list, i) => {
        list.index = i + 1;
        return list;
      });
    }
    this.updateTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  removeTask(index) {
    this.listArray = this.listArray.filter((item) => item.index !== index);
    this.listArray = this.listArray.map((list, i) => {
      list.index = i + 1;
      return list;
    });
    this.updateTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  editTask(index, description) {
    this.listArray[index - 1].description = description;
    this.listArray[index - 1].edit = false;
    this.updateTasks();
  }
  /* eslint lines-between-class-members: ["error", "always", { "exceptAfterSingleLine": true }]*/
  changeComplete(i) {
    const status = this.listArray[i - 1].completed;
    this.listArray[i - 1] = {
      ...this.listArray[i - 1],
      completed: !status,
    };
    this.updateTasks();
  }
}
