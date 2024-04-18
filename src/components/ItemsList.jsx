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
        <ul>
            {itemsList && itemsList.map((item) => {
                return (
                    <div key={item.id}>
                        <li>
                            <img src={item.img} className={'itemIcon'}/>
                            <Link to={item.id}>{item.title}</Link>
                        </li>
                        <hr className={'hr'}></hr>
                    </div>
                )
            })}
        </ul>
    )
}

export default ItemsList