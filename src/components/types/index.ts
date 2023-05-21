import React from 'react'

export interface ReactChildrenProps {
    children: React.ReactNode
}

export interface ContextTypes {
    handleSetAsDefault?: (x: number, y: number) => void
    position?: any
    zoom?: number
    zoomIn?: () => void
    zoomOut?: () => void
    zoomPer?: any
}

export type PerProps = {
    per: string
    value: number
}

export type ReducerType = {
    id?: number | any,
    setValue: any
    handleAddTodo: any
    state: any
    name?: any
    value: string
    handleDeleteTodo: (e: number) => void
    icon?: any
    editIndex: boolean
    handleEditTodo: (d: number) => void
    setEditIndex: any
}

export interface Todo {
    id: number;
    text: string;
    children: Todo[];
    handleInputChange?: any;
    handleChildFormSubmit?: any;
}

export interface Action {
    type: string;
    payload?: {
        parentId?: number;
        newTodo?: Todo;
    };
}
