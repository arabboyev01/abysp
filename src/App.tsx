import React from 'react';
import Header from './components/Header'
import Drags from './components/Drags'
import { ContextProvider } from './components/state/ContextProvider'

function App() {
    return (
        <ContextProvider>
            <Header/>
            <Drags/>
        </ContextProvider>
    );
}

export default App;
