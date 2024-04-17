import '../App.css'
import {Link} from "react-router-dom";
import React, {createContext, useContext, useEffect, useState} from "react";
import Item from "../components/Item";

;
const LINKTOCART = 'http://localhost:3000/CartItems'
const Cart = () => {

    const [cartItems, setCartItems] = useState(null);


    useEffect(() => {
        fetch(LINKTOCART)
            .then(response => response.json())
            // .then(json=> {console.log(json)})
            .then(result => {
                setCartItems(result)
                console.log(cartItems)
            })
            .catch(e=> console.log(e))
    }, []);


    return (
        <div>

            {cartItems && cartItems.map((item, index) => {

                if (item.amount > 0) {
                    return(
                        <>
                            <p>{item.amount}</p>
                            <Item key={index}
                                  name={item.name}
                                  price={item.price * item.amount}
                                  amount={item.amount}
                                  src={item.src}/>
                        </>
                    )
                }


                // <p>{}</p>
            })}
            {/*<Button press={()=> {}}/>*/}
            {/*<> {list.map((entry, index) => (*/}
            {/*    <div>*/}
            {/*        <input*/}
            {/*            className={'checked'}*/}
            {/*            type="checkbox"*/}
            {/*        />*/}
            {/*        <label key={index}>{entry}</label>*/}
            {/*        <button className={'btn'} onClick={()=> remove(entry)}>убрать</button>*/}
            {/*    </div>*/}
            {/*))}*/}

            {/*</>*/}

            {/*{ItemsData.map((entry, index) => {*/}
            {/*    console.log(entry.title)*/}
            {/*    return (*/}
            {/*        <ul>*/}
            {/*            <li key={index}>*/}
            {/*                /!*<Item />*!/*/}
            {/*            </li>*/}
            {/*            <hr className={'hr'}></hr>*/}
            {/*        </ul>*/}
            {/*    )*/}
            {/*})}*/}

        </div>
    )
}

export default Cart