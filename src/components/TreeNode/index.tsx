import React, { useReducer, useState } from 'react';
import { Icon, IconWrapper, InoutWrap, MainInput, StyleTodo } from './style.tree'
import TodoReducer from './TreeReducer'
import RenderToDo from './RenderToDo'
import AddIcon from '../../icons/plus.svg'
import { Todo } from '../types'


function TodoTree() {
    const [todos, dispatch] = useReducer(TodoReducer, []);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const handleFormSubmit = () => {
        if (newTodo.trim()) {
            const newTodoItem: Todo = {
                id: Date.now(),
                text: newTodo,
                children: [],
            };

            dispatch({type: 'ADD_TODO', payload: {newTodo: newTodoItem}});
            setNewTodo('');
        }
    };

    const handleChildFormSubmit = (e: React.FormEvent<HTMLFormElement>, parentId: number) => {
        const newChildTodo: Todo = {
            id: Date.now(),
            text: newTodo,
            children: [],
        };

        dispatch({type: 'ADD_CHILD_TODO', payload: {parentId: parentId, newTodo: newChildTodo}});
        setNewTodo('');
    };
    // console.log(todos)

    return (
        <StyleTodo>
            <InoutWrap>
                <MainInput type="text" onChange={handleInputChange} placeholder="Category"/>
                <IconWrapper onClick={handleFormSubmit}>
                    <Icon src={AddIcon} alt="icon"/>
                </IconWrapper>
            </InoutWrap>
            <InoutWrap>
                {todos.map(({id, text, children}) =>
                    <RenderToDo
                        id={id}
                        text={text}
                        children={children}
                        handleChildFormSubmit={handleChildFormSubmit}
                    />
                )}
            </InoutWrap>
        </StyleTodo>
    );
}

export default TodoTree;
