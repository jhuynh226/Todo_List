/*
const todo_list = [];
const add_button = document.querySelector('.add_button');
const todo_input = document.querySelector('.todo_input');

add_button.onclick = function() {
  add_todo(todo_list);
}

todo_input.onkeydown = function() {
  if (event.key === 'Enter') {
    add_todo(todo_list);
  }
}

function add_todo(todo_list) {
  const todo_input = document.querySelector('.todo_input');
  todo_list.push(todo_input.value);
  console.log(todo_list);
  todo_input.value = '';
}
*/

//Second Todo List
let todo_list_two = [];
const add_button_two = document.querySelector('.add_button_two');
const todo_input_two = document.querySelector('.todo_input_two');

document.addEventListener("DOMContentLoaded", function () {
  const storedData = localStorage.getItem("todo_list_two");
  if (storedData) {
    todo_list_two = JSON.parse(storedData);
    show_todo_two(todo_list_two);
  }
});

add_button_two.onclick = function() {
  add_todo_two(todo_list_two);
}

todo_input_two.onkeydown = function() {
  if (event.key === 'Enter') {
    add_todo_two(todo_list_two);
  }
}

function add_todo_two(todo_list_two) {
  let todo_HTML = '';
  const todo_input = document.querySelector('.todo_input_two');
  const todo_date = document.querySelector('.todo_date_two');
  const todo_object = { };

  todo_object.name = todo_input.value;
  todo_object.date = todo_date.value;
  console.log(todo_object);


  if (todo_input.value != "") {
    todo_list_two.push(todo_object);
    console.log(todo_list_two);
  }

  else {

  }

  for(let i = 0; i < todo_list_two.length; i++) {
    console.log(todo_list_two);
    const HTML = `
      <div>${todo_list_two[i].name}</div>
      <div>${todo_list_two[i].date}</div>
      <button class = "delete_button" onclick = "
        todo_list_two.splice(${i}, 1);
        show_todo_two(todo_list_two);
      ">Delete</button>
    `;


    todo_HTML = todo_HTML + HTML;
    console.log(todo_HTML);
  }

  let todo_list_div = document.querySelector('.todo_list_div');
  todo_list_div.innerHTML = todo_HTML;

  todo_input.value = '';
  localStorage.setItem("todo_list_two", JSON.stringify(todo_list_two));
}

function show_todo_two (todo_list_two) {
  let todo_HTML = '';
  const todo_input = document.querySelector('.todo_input_two');
  const todo_date = document.querySelector('.todo_date_two');
  const todo_object = { };

  todo_object.name = todo_input.value;
  todo_object.date = todo_date.value;
  console.log(todo_object);

  for(let i = 0; i < todo_list_two.length; i++) {
    console.log(todo_list_two);
    const HTML = `
      <div>${todo_list_two[i].name}</div>
      <div>${todo_list_two[i].date}</div>
      <button class = "delete_button" onclick = "
        todo_list_two.splice(${i}, 1);
        show_todo_two(todo_list_two);
      ">Delete</button>
    `;


    todo_HTML = todo_HTML + HTML;
    console.log(todo_HTML);
  }

  let todo_list_div = document.querySelector('.todo_list_div');
  todo_list_div.innerHTML = todo_HTML;

  todo_input.value = '';
  localStorage.setItem("todo_list_two", JSON.stringify(todo_list_two));
}