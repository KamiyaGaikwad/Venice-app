import { createContext,useEffect } from "react";
import { useContext, useReducer } from "react";
import {productReducer,initialState} from "../Reducer/productReducer";
import axios from "axios";



const productContext = createContext(initialState);


const ProductProvider =({children}) =>{
    const [state,dispatch] = useReducer(productReducer,initialState);
    useEffect(() => {
      (async () => {
        try {
          const {
            data:  {products} ,
          } = await axios.get("/api/products");
          dispatch({
            type: "GOT_PRODUCTS",
            payload: products,
          });
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
    return(
      <productContext.Provider value={{state,dispatch}}>
        {children}
      </productContext.Provider>
    )
}

const useProducts =()=> useContext(productContext);

export {ProductProvider,useProducts};