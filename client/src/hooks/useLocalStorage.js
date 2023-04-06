import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
 
    const [state, setState] = useState(() => {
      
        const persistedStateSerialized = localStorage.getItem(key);
       
        if (persistedStateSerialized && (persistedStateSerialized !== undefined)) {
           console.log("hallo"); 
            const persistedState = JSON.parse(persistedStateSerialized);
          
           return persistedState;
        }
      
        return initialValue;
      
    });
   
    const setLocalStorageState = (value) => {
        setState(value);
      
        localStorage.setItem(key, JSON.stringify(value));
        
    };

    return [
        state,
        setLocalStorageState,
    ];
};