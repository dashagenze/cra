import {Link} from 'react-router-dom';
import '../App.css'
import programmer from '../assets/programmer.jpg';
import cartImg from '../assets/shopping_cart.png'
import Draggable from "react-draggable";
import Welcome from "../components/createh1";
import Search from "../components/Search";
import ItemsList from "../components/ItemsList";


const Page1 = () => {
    return (
        <div className={'margin'}>
            <div>
                <Welcome/>
            </div>

            <img src={programmer} className={'progPic'}/>

            <Search/>

            <h1>Товары:</h1>
            <div className={'cartIcon'}>
                <Link className={'hover'} to={'/cart'}>
                    <img src={cartImg}/>
                    <p>Корзина</p>
                </Link>
            </div>

            <ItemsList/>

        </div>
    )

}

export default Page1