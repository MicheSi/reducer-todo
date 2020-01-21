import React, {useState, useReducer} from 'react';
import { todoReducer, initialState } from '../reducers/reducer';

const ToDoForm = (props) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);
    const [newToDo, setNewToDo] = useState('');

    const handleChanges = e => {
        setNewToDo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.addNewToDo(newToDo);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
             required
             type='text'
             name='todo'
             placeholder='Enter New To Do'
             value={newToDo}
             onChange={handleChanges}
             />
             <button onClick={() => dispatch({type: 'ADD_TODO', payload: newToDo})}>Add To Do</button>
        </form>
    )
}

export default ToDoForm;