import { StyleTodo } from './style.todo'
import React from 'react'
import { ReducerType } from '../types'
import PlusIcon from '../../icons/plus.svg'
import ToDoButtons from './ToDoButtons'

const DumbToDo: React.FC<ReducerType> = (props) => (
    <StyleTodo>
        <ToDoButtons {...props} icon={PlusIcon} name="Category"/>
        {!props.state.toDoData.length ? null :
            props.state.toDoData.map(({name, id}: { name: string, id: number }) =>
                <ToDoButtons {...props} name={name} id={id} icon={PlusIcon}/>
            )
        }
    </StyleTodo>
)

export default DumbToDo;