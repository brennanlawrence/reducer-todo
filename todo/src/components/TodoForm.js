import React, { useState, useReducer } from "react";
import reducer from "../reducers/reducer";
import initialState from "../reducers/initialState";
import "./TodoForm.css";

import { addAction, toggleAction, clearAction } from "../actions/index";

//let currentState = reducer(initialState, toggleAction(2));
//console.log(currentState);

const TodoForm = (props) => {
  const [formState, setFormState] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const change = (evt) => {
    setFormState(evt.target.value);
  };

  const submit = (evt) => {
    evt.preventDefault();
    //console.log(formState);
    dispatch(addAction(formState));
    setFormState("");
  };

  const toggle = (evt) => {
    evt.preventDefault();
    const indexToToggle = evt.target.getAttribute("index");
    dispatch(toggleAction(indexToToggle));
  };

  const clear = (evt) => {
    evt.preventDefault();
    dispatch(clearAction());
  };

  return (
    <div>
      <div>
        <h3>Todos</h3>
        <ul>
          {state.todos.map((evt, index) => (
            <li
              key={evt.id}
              index={index}
              className={evt.completed ? "completed" : ""}
              onClick={toggle}
            >
              {evt.item}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={submit}>
        <label>
          New Todo
          <input name="newTodo" value={formState} onChange={change} />
        </label>
        <button>Add New</button>
      </form>
      <button onClick={clear}>Clear Finished</button>
    </div>
  );
};

export default TodoForm;
