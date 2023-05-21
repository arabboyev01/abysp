import React from 'react'
import { EditIcons, Icon, IconWrapper, InoutWrap, CloseIcon } from './style.todo'
import ToDoInput from './ToDoInput'
import { ReducerType } from '../types'
import EditIcon from '../../icons/edit.jpg'
import CloseIconPng from '../../icons/1398917_circle_close_cross_incorrect_invalid_icon.png'

const ToDoButtons: React.FC<ReducerType> = (props) => (
    <>
        <InoutWrap>
            <ToDoInput {...props} name={props.name}/>
            {!props.editIndex ? (
                <IconWrapper onClick={props.handleAddTodo}>
                    <Icon src={props.icon} alt="icon"/>
                </IconWrapper>
            ) : null}
        </InoutWrap>
        <InoutWrap>
            {props.name !== 'Category' ?
                !props.editIndex ?
                    <>
                        <EditIcons src={EditIcon} alt="icon" onClick={() => props.setEditIndex(true)}/>
                        <CloseIcon src={CloseIconPng} alt="icon" onClick={() => props.handleDeleteTodo(props.id)}/>
                    </> :
                    <>
                        <IconWrapper onClick={() => props.handleEditTodo(props.id)}>
                            <Icon src={props.icon} alt="icon"/>
                        </IconWrapper>
                        <CloseIcon src={CloseIconPng} alt="icon"/>
                    </>
                :
                null
            }
        </InoutWrap>
    </>
)

export default ToDoButtons