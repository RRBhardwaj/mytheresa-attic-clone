import { Routes,Route } from "react-router-dom";
import React from 'react';
import Women from "../Pages/Women";
import Men from "../Pages/Men";
import Kids from "../Pages/Kids";
import Life from "../Pages/Life";
import NewArrival from "../Pages/NewArrival"; 
import Clothing from "../Pages/Clothing"; 
import Shoes from "../Pages/Shoes"; 
import Bags from "../Pages/Bags"; 
import Accessories from "../Pages/Accessories"; 
import Jewelry from "../Pages/Jewelry"; 
import Sale from "../Pages/Sale"; 
import { Login } from "../Components/Login";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Women/>}/>
            <Route path="/men" element={<Men/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/life" element={<Life/>}/>
            <Route path="/newarrival" element={<NewArrival/>}/>
            <Route path="/clothing" element={<Clothing/>}/>
            <Route path="/shoes" element={<Shoes/>}/>
            <Route path="/bags" element={<Bags/>}/>
            <Route path="/accessories" element={<Accessories/>}/>
            <Route path="/jewelry" element={<Jewelry/>}/>
            <Route path="/sale" element={<Sale/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
  )
}

/*const link = [{path:"/newarrival" , title:"NEWARRIVAL"},
    {path:"/clothing" , title:"CLOTHING"},
    {path:"/shoes" , title:"SHOES"},
    {path:"/bags" , title:"BAGS"},
    {path:"/accessories" , title:"ACCESSORIES"},
    {path:"/jewelry" , title:"JEWELRY"},
    {path:"/sale" , title:"SALE"},
]; */