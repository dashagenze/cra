import React, {useEffect, useLayoutEffect, useState} from "react";
import '../App.css'
import Button from "../components/Button";
import {Link, Navigate, useParams} from "react-router-dom";
import Error from "../components/Error";
const LINKTOCART = 'http://localhost:3000/CartItems/'
const LINK = 'http://localhost:3000/ItemsData/'

const ItemPage = () => {

    const [item, setItem] = useState('');
    const [amount, setAmount] = useState(null)

    const params = useParams();
    const itemId = params.id;


    useEffect(async () => {
        try {
            await fetch(LINK + itemId)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else if (!item) { return <Navigate to='/error'/>}
                })
                .then(result => {
                    console.log(result)
                    setItem(result)
                    setAmount(item.amount)


                    console.log('kkk')
                    return item
                })
                .catch(e => console.log(e))
        } catch (e) {console.log(e)}

    }, [itemId]);


    const addItemToCart = async () => {
        try {
            const response = await fetch(LINKTOCART+itemId)
                if (response.ok) {


                    await fetch(LINKTOCART+itemId, {
                        method: 'PATCH',
                        body: JSON.stringify({
                            amount: amount,
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                        .then(r => r.json())
                        .then(r => console.log(r))
                        .catch(e => console.log(e))
                }
                else if (!response.ok) {

                    await fetch(LINKTOCART, {
                        method: 'POST',
                        body: JSON.stringify({
                            title: item.title,
                            price: item.price,
                            img: item.img,
                            id: item.id,
                            amount: 1,
                            isInCart: true
                        }),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                        .catch(e => console.log(e))
                }

        } catch (e) { console.log(e)}
    }

    return (
        <div className={'margin'}>
            <div>
                <div>
                    <img src={item.img} className={'picture'}/>
                    <h1>{item.title}</h1>
                    <h1>{item.price}₽</h1>
                </div>
            </div>

            <Button press={() => addItemToCart()} purpose={'ДОБАВИТЬ В КОРЗИНУ'}/>
        </div>
    )




}


export default ItemPage