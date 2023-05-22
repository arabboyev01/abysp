import { Todo } from '../types'
import React from 'react'
import { Icon, IconWrapper, InoutWrap, MainInput, StyleTodo , CloseIcon, EditIcons} from './style.tree'
import AddIcon from '../../icons/plus.svg'
import CloseIConPng from "../../icons/1398917_circle_close_cross_incorrect_invalid_icon.png"
import EditIconsPng from "../../icons/edit.jpg"

const RenderToDo = ({id, text, children, handleInputChange, handleChildFormSubmit, handleDeleteItem}: Todo) => {
    return (
        <StyleTodo>
            <InoutWrap key={id}>
                <MainInput type="text" onChange={handleInputChange} placeholder={text}/>
                <IconWrapper onClick={(e: React.FormEvent<HTMLFormElement>) => handleChildFormSubmit(e, id)}>
                    <Icon src={AddIcon} alt="image"/>
                </IconWrapper>
                <EditIcons src={EditIconsPng} alt='image' />
                <CloseIcon onClick={() => handleDeleteItem ? handleDeleteItem(id) : null} src={CloseIConPng} alt='image' />
            </InoutWrap>
            <InoutWrap key={id}>
                {children!.map(RenderToDo)}
            </InoutWrap>
        </StyleTodo>
    );
};

export default RenderToDo;