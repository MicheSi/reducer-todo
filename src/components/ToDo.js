import React from 'react';

const ToDo = (props) => {
    console.log(props);
    return (
        <div className='todo'>
            <p>{props.todo}</p>
        </div>
    )
}

export default ToDo;