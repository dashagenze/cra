import '../App.css'
import {Link, useNavigate} from "react-router-dom";
import React, {createContext, useContext, useEffect, useState} from "react";
import Item from "../components/Item";
import Button from "../components/Button";

const LINKTOCART = 'http://localhost:3000/CartItems'
const Cart = () => {

    const [cartItems, setCartItems] = useState(null);
    const [total, setTotal] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(LINKTOCART)
            .then(response => response.json())
            .then(result => {
                setCartItems(result)
                console.log(cartItems)

                // {cartItems && cartItems.map((item) => {
                //     setTotal(total + item.price)
                // })}
            })
            .catch(e=> console.log(e))
    }, []);

    useEffect(() => {
        fetch(LINKTOCART)
            .then(response => response.json())
            .then(result => {
                console.log(cartItems)

                if (!cartItems.length) {
                    navigate('/error/emptycart')
                }

            })
            .catch(e=> console.log(e))
    }, [cartItems]);


const removeFromCart = async (id) => {
    await fetch(LINKTOCART+'/'+id, {
        method: 'DELETE'
    })
        .then(r => r.json())
        .then(newItems => {
            fetch(LINKTOCART)
                .then(r => r.json())
                .then(r => setCartItems(r))
                .catch(e=> console.log(e))

        })
        .catch(e=> console.log(e))
}
    return (
        <div>
            <Link to='/' className={'btn margin'}>Вернуться на главную</Link>

            <ul>
                {cartItems && cartItems.map((item) => {
                    if (item.isInCart) {
                        return (
                            <div key={item.id} className={''}>
                                <Item
                                    name={item.title}
                                    price={item.price * item.amount}
                                    amount={item.amount}
                                    src={item.img}/>
                                <p>x{item.amount}</p>
                                <Button style={{width: '100px', height: '50px'}} purpose={'убрать'} press={() => {
                                    removeFromCart(item.id)
                                }}/>
                                <hr/>
                            </div>
                        )
                    }
                })}
            </ul>
            <hr/>
            <div className={'flexItem'} style={{width: '500px'}}>
                <h3 style={{display: 'block'}}>Итого: {total}</h3>
                <Button purpose={'перейти к оплате'} press={() => alert('coming soon!')}/>
            </div>

        </div>
    )
}

export default Cart