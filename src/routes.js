import React from "react";
import { Route,BrowserRouter, Routes, Link} from "react-router-dom";


import  Home  from './pages/home';
import  Cardapio  from './pages/cardapio';
import  Pedido  from './pages/pedido';
import Bebida from "./pages/bebidas";
import PaginaAPI from "./pages/PaginaAPI";



const routes = () => {
   return(
       <BrowserRouter>
        <Routes>
           <Route  path="/" element={<Home/>} />
           <Route  path="/cardapio" element={<Cardapio/>} />
           <Route  path="/bebidas" element={<Bebida/>}/>
           <Route  path="/Pedido" element={<Pedido/>}/>
           <Route  path="/PaginaAPI" element={<PaginaAPI/>}/>
        </Routes>    
       </BrowserRouter>
   )

}   

export default routes;