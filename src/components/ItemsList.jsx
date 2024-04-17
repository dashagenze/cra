import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import '../App.css';

const ITEMSDATA = 'http://localhost:3000/ItemsData/';

const ItemsList = () => {

    const [itemsList, setItemsList] = useState(null)

    useEffect(() => {
        fetch(ITEMSDATA)
            .then(response => response.json())
            .then(result => {
                setItemsList(result)
            })
            .catch(e=> console.log(e))
    }, []);

    return (
        <>
            {itemsList && itemsList.map((item) => {
                return (
                    <ul>
                        <li key={item.id}>
                            <img src={item.img} className={'itemIcon'}/>
                            <Link to={item.id}>{item.title}</Link>
                        </li>
                        <hr className={'hr'}></hr>
                    </ul>
                )
            })}
        </>
    )
}

export default ItemsList