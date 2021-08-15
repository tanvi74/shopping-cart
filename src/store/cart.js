import React, {createContext, useState, useEffect} from 'react';
import { DATA } from '../constants/data';

function setLocalStorage(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.log(e);
    }
}

function getLocalStorage(key, initialValue) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      return initialValue;
    }
}

const AppContext = createContext({});

const AppProvider = ({children}) =>
{
    const [dataOfItems, setdataofItems] = useState(() => getLocalStorage("data", DATA.map(item => ({...item, quantity: 1}))));
    
    const setCurrentData = (arr) => 
    {
            setdataofItems(arr);
    };

    useEffect(()=>
    {
        setLocalStorage("data", dataOfItems);
    },[dataOfItems])

    const value = {
        dataOfItems,
        setCurrentData
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )

};

export {AppProvider, AppContext};