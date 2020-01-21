import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

import ToDo from './ToDo';

const ToDoList = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newToDo, setNewToDo] = useState('');
    console.log(state);
    

    return (
        <div className='todoList'>
            {props.state.map(todo => (
                <ToDo
                  key={todo.id}
                  todo={todo.item}
                  completed={todo.completed}
                  />
            ))}
        </div>
    )
}

export default ToDoList;