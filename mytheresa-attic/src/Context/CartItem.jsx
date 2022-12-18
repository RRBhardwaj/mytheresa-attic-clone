import { createContext } from "react";
import axios from "axios";

export const CartItem = createContext();

export const CartItemProvider = ({children}) =>{
    const handleCart = (data) => {
        return axios.post(`http://localhost:5000/cart`,{
            name: data.name,
            image: data.image,
            price: data.price,
            type:data.type,
            originalprice:data.originalprice,
        })
    }

    return <CartItem.Provider value={{handleCart}}>{children}</CartItem.Provider>
}
