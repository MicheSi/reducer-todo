import React, {useReducer} from 'react';

export const initialState = {
    todos: [
        {
            item: '',
            completed: false,
            id: Date.now()
        }
    ]
        
}

export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {...state, 
                todos: [...state.todos,
                    {item: action.payload,
                    completed: false,
                    id: Date.now()
                }]
            };
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => {
                    return !todo.completed;
                })
            } 
        default:
        return state;
    }
}