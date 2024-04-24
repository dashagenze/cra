import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import '../App.css';
import useTest from "../hooks/useTest";

const ITEMSDATA = 'http://localhost:3000/ItemsData/';

const ItemsList = () => {

    let {itemsList} = useTest(ITEMSDATA)
    console.log(itemsList)


    return (
        <ul>
            {itemsList &&
                itemsList.map((item) => {

                return (
                    <div key={item.id}>
                        <li className={'flexItem'}>
                            <img src={`/assets/${item.img}`} className={'itemIcon'}/>
                            <Link className={'hover'} to={'/'+item.id}>{item.title}</Link>
                        </li>
                        <hr/>
                    </div>
                )
            })}
        </ul>
    )
}

export default ItemsList