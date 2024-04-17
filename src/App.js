import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";

import xiaomi from './assets/xiaomi.jpg';
import macbook from './assets/macbook.jpg';
import hoodie from './assets/hoodie.jpg';
import Cart from "./pages/Cart";
import Error from "./components/Error";



const App = () => {



    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/cart' element={<Cart/>}/>
                    <Route path="/" element={<Home />} />
                    <Route path=":id" element={<ItemPage />} />
                    <Route path="/error" element={<Error />} />
                    {/*<Route path="/:id" element={<ItemPage id={'1'} isInCart={false} picSrc={xiaomi} name={'Очки для компьютера Xiaomi MiJia Blu-ray Goggles Pro Transparent (HMJ02TS) Clear'} price={'1500p'} />} />*/}
                    {/*<Route path="/:id" element={<ItemPage id={'2'} isInCart={false} picSrc={macbook} name={'13,3" Ноутбук Apple MacBook Air M1/8/256 ГБ MGN63 серый'} price={'87 980 р'} />} />*/}
                    {/*<Route path="/:id" element={<ItemPage id={'3'} isInCart={false} picSrc={hoodie} name={'Черная толстовка как у мистера Робота'} price={'7 980 р'} />} />*/}
                </Routes>
            </BrowserRouter>

        </div>

    )
}

export default App;
