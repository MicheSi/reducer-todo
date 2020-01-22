import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

import ToDo from './ToDo';

const ToDoList = (props) => {

    return (
        <div className='todoList'>
            {props.state.todos.map(todo => (
                <ToDo
                  key={todo.id}
                  id={todo.id}
                  todo={todo.item}
                  completed={todo.completed}
                  dispatch={props.dispatch}
                //   toggleCompleted={props.toggleCompleted}
                  />
            ))}
            <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    )
}

export default ToDoList;