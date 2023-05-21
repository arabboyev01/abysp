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
    setValue: any
    handleAddTodo: any
    state: any
    name?: string
    value: string
    handleDeleteTodo: (e: number) => void
}