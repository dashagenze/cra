import {Link} from 'react-router-dom';
import '../App.css'
import programmer from '../assets/programmer.jpg';
import cartImg from '../assets/shopping_cart.png'
import profile from '../assets/profile.png'
import Draggable from "react-draggable";
import Welcome from "../components/createh1";
import Search from "../components/Search";
import ItemsList from "../components/ItemsList";
import Button from "../components/Button";
import React, {useState} from "react";
import TasksList from "../components/TasksList";
import TextInput from "../components/TextInput";
import ShopList from "./ShopList";

// const LINK = 'http://localhost:3000/ItemsData'

const Home = () => {

    const [user, setUser] = useState({})

    return (
        <div >
            <div className={'margin'}>
                <div>
                    <img src={profile} className={'profileIcon'}/>
                    <Link to={'/profile'}>ЛИЧНЫЙ КАБИНЕТ</Link>
                </div>

                <Welcome name={user.name}/>

                <ShopList/>
                <img src={programmer} className={'progPic'}/>

                <Search />

                <h1>Товары:</h1>
                <div className={'cartIcon'}>
                    <Link className={'hover'} to={'/cart'}>
                        <img src={cartImg}/>
                        <p>Корзина</p>
                    </Link>
                </div>

                <ItemsList/>

                <div className={'footer'}>
                    <h4>made by <a href={'https://github.com/dashagenze'}>dasha</a> w💕</h4>
                </div>
            </div>
        </div>
    )

}

export default Home