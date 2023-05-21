import DumbToDo from './DumbToDo'
import React, { useState, useReducer } from 'react';
import ToDoReducer, { initialState } from './ToDoReducer'
import { ActionType } from './Actions'

const ToDoList = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);
    const [value, setValue] = useState('')

    const handleAddTodo = () => {
        value.trim() !== '' &&
        dispatch({type: ActionType.ADD_TODO, payload: value});
        setValue('');
    };
    const handleDeleteTodo = (id: number) => {
        dispatch({type: ActionType.DELETE_TODO, payload: id});
    };
    return (
        <DumbToDo
            setValue={setValue}
            handleAddTodo={handleAddTodo}
            state={state}
            value={value}
            handleDeleteTodo={handleDeleteTodo}
        />
    )
}

export default ToDoList;