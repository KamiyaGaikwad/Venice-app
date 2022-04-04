import {createContext,useContext,useState,useReducer} from "react";
import { wishReducer } from "../Reducer/wishReducer";

const defaultValue = {
    wish:[],
    wishItems:0
}

const WishContext = createContext(defaultValue);

const WishProvider = ({children})=>{
    
    const [wishstate, wishdispatch] = useReducer(wishReducer, {
        wish:[],
        wishItems: 0
      });

    return(
    <WishContext.Provider value={{wishstate,wishdispatch}}>
        {children}
    </WishContext.Provider>)
}

const useWish = () => useContext(WishContext);

export {useWish,WishProvider}; 