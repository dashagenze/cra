import React from "react";
import {Link} from 'react-router-dom';
import '../App.css'
import programmer from '../assets/programmer.jpg';
import cartImg from '../assets/shopping_cart.png'
import Draggable from "react-draggable";
import Welcome from "../components/createh1";
import Search from "../components/Search";
import ItemsList from "../components/ItemsList";



class Page1 extends React.Component {

    render() {
        return (
            <div className={'margin'}>
                <div>
                    <Welcome/>
                </div>

                <div className={'cartIcon'}>
                    <Link to={'/cart'}>
                        <img style={{width: '100px'}} src={cartImg}/>
                        <p>Корзина</p>
                    </Link>
                </div>

                <Search/>

                <img src={programmer} className={'progPic'}/>

                <ItemsList/>

            </div>
        )
    }
}

export default Page1