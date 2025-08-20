import { createContext } from "react";
import { products } from "../assets/assets/frontend_assets/assets";



export const Shopcontext = createContext();
const ShopcontextProvider = (props) =>{

 const value = {

 }
 return(
    <Shopcontext.Provider value={value}>
        {props.childern}


    </Shopcontext.Provider>
 )
          
}