import { createContext } from 'react';
import { ContextTypes } from '../types'
export const CreateContext = createContext<ContextTypes>({
    position: {x: 800, y: 200},
    zoom: 1
});