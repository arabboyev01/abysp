import DumbToDo from './DumbToDo'
import React, { useState, useReducer } from 'react';
import ToDoReducer, { initialState } from './ToDoReducer'
import { ActionType } from './Actions'

const ToDoList = () => {
    const [state, dispatch] = useReducer(ToDoReducer, initialState);
    const [value, setValue] = useState('')
    const [editIndex, setEditIndex] = useState<boolean>(false);

    const handleAddTodo = () => {
        value.trim() !== '' &&
        dispatch({type: ActionType.ADD_TODO, payload: value});
        setValue('');
    };
    const handleDeleteTodo = (id: number) => {
        dispatch({type: ActionType.DELETE_TODO, payload: id});
    };

    const handleEditTodo = (id: number) => {
        const todoToEdit = state.toDoData.id;
        setValue(todoToEdit);
    };

    return (
        <DumbToDo
            setValue={setValue}
            handleAddTodo={handleAddTodo}
            state={state}
            value={value}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodo={handleEditTodo}
            editIndex={editIndex}
            setEditIndex={setEditIndex}
        />
    )
}

export default ToDoList;