import { CreateContext } from './index'
import React, { useState } from 'react'
import { ReactChildrenProps } from '../types'

export const ContextProvider: React.FC<ReactChildrenProps> = ({children}) => {

    const [position, setPosition] = useState({x: 800, y: 200})
    const handleSetAsDefault = () => setPosition({x: 800, y: 200})

    const [scale, setScale] = useState(1);
    const zoomIn = () => setScale(scale + 0.1)
    const zoomOut = () => scale > 0.2 && setScale(scale - 0.1);
    const zoomPer = (e: number | any) => setScale(e)

    return (
        <CreateContext.Provider value={{
            position: position,
            zoom: scale,
            handleSetAsDefault,
            zoomIn,
            zoomOut,
            zoomPer
        }}>
            {children}
        </CreateContext.Provider>
    )
}