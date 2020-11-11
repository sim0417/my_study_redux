import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD";
const DELETE_TODO = "MINUS";

const addTodo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((doto) => doto.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text));
};

const dispatchDelateTodo = (event) => {
  let {
    target: {
      parentNode: { id },
    },
  } = event;

  id = parseInt(id);
  store.dispatch(deleteTodo(id));
};

const onSubmit = (event) => {
  event.preventDefault();
  const todo = input.value;
  input.value = "";
  dispatchAddTodo(todo);
};

store.subscribe(() => console.log(store.getState()));

const paintTodos = () => {
  const toDos = store.getState();
  ul.innerHTML = toDos
    .map((todo) => `<li id=${todo.id}>${todo.text} <button>DEL</button></li>`)
    .join("");

  ul.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", dispatchDelateTodo);
  });
};

store.subscribe(paintTodos);

form.addEventListener("submit", onSubmit);
