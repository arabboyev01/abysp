import { Todo } from '../types'
import React from 'react'
import { Icon, IconWrapper, InoutWrap, MainInput, StyleTodo } from './style.tree'
import AddIcon from '../../icons/plus.svg'

const RenderChildren = ({id, text, handleInputChange, handleChildFormSubmit}: Todo) => (
    <InoutWrap key={id}>
        <MainInput type="text" onChange={handleInputChange} placeholder={text}/>
        <IconWrapper onClick={(e: React.FormEvent<HTMLFormElement>) => handleChildFormSubmit(e, id)}>
            <Icon src={AddIcon} alt="image"/>
        </IconWrapper>
    </InoutWrap>
)

const RenderToDo = ({id, text, children, handleInputChange, handleChildFormSubmit}: Todo) => {
    return (
        <StyleTodo>
            <InoutWrap key={id}>
                <MainInput type="text" onChange={handleInputChange} placeholder={text}/>
                <IconWrapper onClick={(e: React.FormEvent<HTMLFormElement>) => handleChildFormSubmit(e, id)}>
                    <Icon src={AddIcon} alt="image"/>
                </IconWrapper>
            </InoutWrap>
            <InoutWrap key={id}>
                {children!.map(({id, text, children, handleChildFormSubmit}) =>
                    <RenderChildren id={id}
                                    text={text}
                                    handleChildFormSubmit={handleChildFormSubmit}
                                    children={children}
                    />
                )}
            </InoutWrap>
        </StyleTodo>
    );
};

export default RenderToDo;