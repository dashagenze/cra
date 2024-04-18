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
    const initialValue = 0;


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

                setTotal(cartItems.reduce((totalPrice,currentItem) => {
                    console.log(currentItem)
                    console.log(currentItem.price)
                    console.log(currentItem.amount)
                    totalPrice += (currentItem.price * currentItem.amount)
                    console.log(totalPrice)
                    return totalPrice
                }, initialValue))

            })
            .catch(e=> console.log(e))
    }, [cartItems]);

    useEffect(() => {
        fetch(LINKTOCART)
            .then(response => response.json())
            .then(result => {
                console.log(cartItems)
                console.log(total)


            })
            .catch(e=> console.log(e))


    }, [total]);


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
        <div className={'margin'}>
            <Link to='/' className={'btn margin'}>Вернуться на главную</Link>

            <h1>Корзина:</h1>
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
                                <h2>
                                    x{item.amount}
                                    <Button style={{width: '100px', height: '50px'}} purpose={'убрать'} press={() => {
                                        removeFromCart(item.id)
                                    }}/>
                                </h2>

                                <hr/>
                            </div>
                        )
                    }
                })}
            </ul>

            <div className={'flexItem'} style={{width: '500px'}}>
                <h3 style={{display: 'block'}}>Итого: {total}₽</h3>
                <Button purpose={'перейти к оплате'} press={() => alert(`с вас ${total}₽ оплатите улыбкой :)`)}/>
            </div>

        </div>
    )
}

export default Cart