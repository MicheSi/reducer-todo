import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from './reducers/reducer';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

import './App.css';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addNewToDo = todo => {
    dispatch({type: 'ADD_TODO', payload: todo})
  }

  return (
    <div className="App">
      <h1>Reducer To Do</h1>
      <ToDoForm addNewToDo={addNewToDo}/>
      <ToDoList state={state}/>
    </div>
  );
}

export default App;
