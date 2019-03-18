console.log('Running todos.js');

const fs = require('fs');

var addTodo = (title) => {
  var todos = fetchTodos();
  var todo = {
    title: title,
    completed: false
  };

  var duplicatetodos = todos.filter((todo) => todo.title === title);
  if (duplicatetodos.length === 0){
    todos.push(todo);
    saveTodos(todos);
    return todo;
  }
};

var deleteTodo = (title) => {
  var todos = fetchTodos();
  var filteredtodos = todos.filter((todo) => todo.title !== title);
  saveTodos(filteredtodos);

  return todos.length !== filteredtodos.length;
};
var fetchTodos = () => {
  try {
    var todosString = fs.readFileSync('todos-data.json');
    return JSON.parse(todosString);
  } catch(e){
    return [];
  }
};

var saveTodos = (todos) => {
  fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};
module.exports = {
  addTodo,
  deleteTodo,
};
