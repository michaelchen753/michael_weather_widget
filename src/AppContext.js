import React, { useState, createContext, useContext } from 'react';

export const AppContext = createContext();

export const useGlobalContext =()=> useContext(AppContext);

export const AppProvider =({children})=>{

    const [unit, setUnit] = useState('C');

    return (
        <AppContext.Provider 
        value ={{
            unit,
            setUnit
        }} >
            {children}
        </AppContext.Provider>
    )
 };
