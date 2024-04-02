import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from "./pages/Home";
import ItemPage from "./pages/ItemPage";

import xiaomi from './pages/assets/xiaomi.jpg';
import macbook from './pages/assets/macbook.jpg';
import hoodie from './pages/assets/hoodie.jpg';



class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="glasses" element={<ItemPage picSrc={xiaomi} name={'Очки для компьютера Xiaomi MiJia Blu-ray Goggles Pro Transparent (HMJ02TS) Clear'} price={'1500p'} />} />
                        <Route path="macbook" element={<ItemPage picSrc={macbook} name={'13,3" Ноутбук Apple MacBook Air M1/8/256 ГБ MGN63 серый'} price={'87 980 р'} />} />
                        <Route path="hoodie" element={<ItemPage picSrc={hoodie} name={'Черная толстовка как у мистера Робота'} price={'7 980 р'} />} />
                    </Routes>
                </BrowserRouter>
            </div>

        )
    }
}

export default App;
