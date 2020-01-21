import React, {useState} from 'react';

const ToDoForm = (props) => {
    const [newToDo, setNewToDo] = useState('');

    const handleChanges = e => {
        setNewToDo(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
    
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
             <button>Add To Do</button>
        </form>
    )
}

export default ToDoForm;