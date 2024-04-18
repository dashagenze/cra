import React, {useEffect, useState} from "react";
import '../App.css'
import Button from "../components/Button";
import { useNavigate, useParams} from "react-router-dom";
const LINKTOCART = 'http://localhost:3000/CartItems/'
const LINK = 'http://localhost:3000/ItemsData/'

const ItemPage = () => {

    const [item, setItem] = useState('');
    const [amount, setAmount] = useState(1)
    let [itemId, setItemId] = useState(null)
    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        setItemId(params.id);
        try {
            if(!itemId) return
            fetch(LINK + itemId)
                .then(response => {
                    // навигейтим на страницу с ошибкой
                    if (response.status === 404) navigate('/error/404')
                    return response.json();
                })
                .then(result => {
                    setItem(result)
                    setAmount(item.amount)
                })
            // ошибка, которую не обработали выше
        } catch (e) {navigate('/error/error')}
    }, [itemId]);


    const addItemToCart = async () => {
        try {
            const response = await fetch(LINKTOCART+itemId)
            const data = await response.json();
            const test = {amount: data.amount};
                if (response.status === 200) {
                    test.amount = test.amount+1
                    console.log(amount+1)

                    await fetch(LINKTOCART+itemId, {
                        method: 'PATCH',
                        body: JSON.stringify(test),
                        headers: {
                            'Content-type': 'application/json; charset=UTF-8',
                        }
                    })
                        .then(r => r.json())
                        .then(r => console.log(r))
                        .catch(e => console.log(e))
                }
                else if (response.status === 404) {

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