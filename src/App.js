import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";

import Cart from "./pages/Cart";
import Error from "./pages/Error";
import UnexpectedError from "./pages/UnexpectedError";
import EmptyCart from "./pages/EmptyCart";



const App = () => {



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/cart' element={<Cart />}/>
                    <Route path="/" element={<Home />} />
                    <Route path=":id" element={<ItemPage />} />
                    <Route path="/error/404" element={<Error />} />
                    <Route path="/error/emptycart" element={<EmptyCart />} />
                    <Route path="/superError" element={<UnexpectedError />} />
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App;
