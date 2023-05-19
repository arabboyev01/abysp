import React, { useState, useEffect, useRef, useContext } from 'react';
import { ReactChildrenProps } from '../types'
import { CreateContext } from '../state'

const Draggable: React.FC<ReactChildrenProps> = ({children}) => {

    const { position, zoom } = useContext(CreateContext)
    const [positions, setPosition] = useState(position);
    const isDragging = useRef(false);
    const initialPosition = useRef(position);
    const draggableRef = useRef<HTMLDivElement>(null);
    const [dragOffset] = useState({x: 0, y: 0});

    useEffect(() => {
        setPosition(position)
    }, [position])


    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            const offsetX = e.clientX - dragOffset.x;
            const offsetY = e.clientY - dragOffset.y;
            setPosition({x: offsetX, y: offsetY});
        };

        const handleMouseUp = () => {
            isDragging.current = false;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

    }, [dragOffset]);

    console.log(zoom)
    return (
        <div
            ref={draggableRef}
            style={{
                position: 'absolute',
                left: positions.x,
                top: positions.y,
                cursor: isDragging.current ? 'grabbing' : 'grab',
                transform: `scale(${zoom})`
            }}
            onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                isDragging.current = true;
                initialPosition.current = {x: e.clientX, y: e.clientY};
            }}
        >
            {children}
        </div>
    );
}

export default Draggable;