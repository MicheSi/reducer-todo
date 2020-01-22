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

  const toggleCompleted = todoId => {
    dispatch({type: 'TOGGLE_COMPLETED', payload: todoId})
  }

  const clearCompleted = todoCompleted => {
    dispatch({type: 'CLEAR_COMPLETED', payload: todoCompleted})
  }

  return (
    <div className="App">
      <h1>Things to Do</h1>
      <ToDoForm addNewToDo={addNewToDo}/>
      <ToDoList state={state} toggleCompleted={toggleCompleted} dispatch={dispatch} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
