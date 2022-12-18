import { createContext} from "react";
import axios from 'axios';
import { useState } from "react";

export const SearchContext = createContext();

export const SearchContextProvider = ({children}) =>{
    const [data,setData] = useState([]);
    const handleSearch = (query) => {
        axios.get(`http://localhost:5000/${query}?_limit=15`)
        .then((res)=>{
        //   console.log(res.data);
          setData(res.data);
        }).catch(err=>console.log(err))
      }
    return <SearchContext.Provider value={{data,handleSearch}}>{children}</SearchContext.Provider>
}