import { CreateContext } from './index'
import React, { useState } from 'react'
import { ReactChildrenProps } from '../types'

export const ContextProvider: React.FC<ReactChildrenProps> = ({children}) => {

    const width = window.innerWidth / 2.1;
    const height = window.innerHeight / 4;

    const [position, setPosition] = useState({x: width, y: height})
    const handleSetAsDefault = () => setPosition({x: width, y: height})

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