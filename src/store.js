import { createStore } from "redux";
import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const addTodo = createAction("ADD");
const deleteTodo = createAction("DELETE");

const reducer = createReducer([], {
  [addTodo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteTodo]: (state, action) => state.filter((todo) => todo.id !== action.payload),
});

const store = configureStore({ reducer });

export default store;

export const actionCreators = {
  addTodo,
  deleteTodo,
};
