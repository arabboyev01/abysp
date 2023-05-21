import { MainInput } from './style.todo'
import React from 'react'
import { ReducerType } from '../types'

const ToDoInput: React.FC<ReducerType> = ({setValue, name, value}) => (
    <MainInput
        type="text"
        name="input"
        // value={value}
        placeholder={name}
        onChange={(e: any) => setValue(e.target.value)}
    />
)

export default ToDoInput;