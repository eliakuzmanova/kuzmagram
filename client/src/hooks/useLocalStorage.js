import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
 
    const [state, setState] = useState(() => {
      
        const persistedStateSerialized = localStorage.getItem(key);
      console.log(persistedStateSerialized);
        if (persistedStateSerialized && (persistedStateSerialized !== "undefined")) {
            console.log("hello");
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