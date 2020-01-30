import React from 'react';

const ToDo = (props) => {
    console.log(props.id);

    return (
        <div className={`todo${props.completed ? 'completed': ''}`} onClick={() => props.dispatch({type:'TOGGLE_COMPLETED', payload: props.id})}>
            <p>{props.todo}</p>
        </div>
    )
}

export default ToDo;