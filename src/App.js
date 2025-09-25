import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Restaurant from "./Components/Restaurent";
import {BrowserRouter, Routes, Route} from "react-router"
import Home from "./Components/Home";
import RestaurantMenu from "./Components/RestaurentMenu";
import SearchFood from "./Components/SearchFood";
// Header section: Let's build it
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./stored/Store";
import {Provider} from "react-redux"
import CheckOut from "./Components/CheckOut";
function App(){
    
    return(
       <>
       <Provider store={store}>
       <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route element={<SecondaryHome></SecondaryHome>}>
        <Route path="/restaurent" element={<Restaurant></Restaurant>}></Route>
        <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
        <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route>
        </Route>
        <Route path="/Checkout" element={<CheckOut></CheckOut>}></Route>
       </Routes>
       </BrowserRouter>
       </Provider>
       </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);


