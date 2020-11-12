import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "store";
import Todo from "components/Todo";

function Home({ toDos, addTodo }) {
  const [state, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    addTodo(state);
    setText("");
  }

  function onChange(event) {
    const {
      target: { value },
    } = event;
    setText(value);
  }

  return (
    <>
      <h1>Todo</h1>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write todo" value={state} onChange={onChange}></input>
      </form>
      <ul>
        {toDos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
}

function getCurrenState(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => dispatch(actionCreators.addTodo(text)),
  };
}

export default connect(getCurrenState, mapDispatchToProps)(Home);
