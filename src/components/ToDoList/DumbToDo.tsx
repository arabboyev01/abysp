import { StyleTodo, InoutWrap, IconWrapper, Icon, CloseIcon, EditIcons } from './style.todo'
import ToDoInput from './ToDoInput'
import React from 'react'
import { ReducerType } from '../types'
import PlusIcon from '../../icons/plus.svg'
import CloseIconPng from '../../icons/1398917_circle_close_cross_incorrect_invalid_icon.png'
import EditIcon from '../../icons/edit.jpg'

const DumbToDo: React.FC<ReducerType> = (props) => (
    <StyleTodo>
        <InoutWrap>
            <ToDoInput {...props} name="Category"/>
            <IconWrapper onClick={props.handleAddTodo}>
                <Icon src={PlusIcon} alt="icon"/>
            </IconWrapper>
        </InoutWrap>
        <InoutWrap>
            {!props.state.toDoData.length ? null :
                props.state.toDoData.map(({name, id}: { name: string, id: number }) =>
                    <>
                        <ToDoInput {...props} name={name}/>
                        <IconWrapper onClick={props.handleAddTodo}>
                            <Icon src={PlusIcon} alt="icon"/>
                        </IconWrapper>
                        <EditIcons src={EditIcon} alt="icon"/>
                        <CloseIcon src={CloseIconPng} alt="icon" onClick={() => props.handleDeleteTodo(id)}/>
                    </>
                )
            }
        </InoutWrap>
    </StyleTodo>
)

export default DumbToDo;