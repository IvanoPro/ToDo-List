function getTodo() {
  var todos = [];
  var todoLoc = localStorage.getItem("todo");
  if (todoLoc !== null) {
    todos = JSON.parse(todoLoc);
  }
  return todos;
}

function add() {
  var task = document.getElementById("task").value;
  var todos = getTodo();
  todos.push(task);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();
  return false;
}

function remove() {
  var id = this.getAttribute("id");
  var todos = getTodo();
  todos.splice(id, 1);
  localStorage.setItem("todo", JSON.stringify(todos));

  show();
  return false;
}

function show() {
  var todos = getTodo();
  var html = '<ul id="idUl">';
  for (var i = 0; i < todos.length; i++) {
    html +=
      "<li>" +
      '<input type="checkbox">' +
      todos[i] +
      '<button class="remove" id="' +
      i +
      '">x</button></li>';
  }
  html += "</ul>";

  document.getElementById("todos").innerHTML = html;

  var buttons = document.getElementsByClassName("remove");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", remove);
  }
}

document.getElementById("deLet").addEventListener("click", function() {
  localStorage.clear();
  var ele = document.getElementById("idUl");
  while (ele.firstChild) {
    ele.removeChild(ele.firstChild);
  }
});

document.getElementById("but").addEventListener("click", add);
show();
