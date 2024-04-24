import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import SearchInput from "./SearchInput";
import '../App.css'

const ITEMSDATA = 'http://localhost:3000/ItemsData'


const Search = () => {
    const [value, setValue] = useState('')
    const [itemsList, setItemsList] = useState(null)

    useEffect(() => {
        fetch(ITEMSDATA+'?title_like='+value)
            .then(response => response.json())
            .then(result => {
            })
            .catch(e=> console.log(e))
    }, [ITEMSDATA]);

    // example  http://localhost:3000/customer?name_like=rist

    //получить все товары
    useEffect(() => {
        fetch(ITEMSDATA)
            .then(response => response.json())
            // .then(json=> {console.log(json)})
            .then(result => {
                setItemsList(result)
            })
            .catch(e=> console.log(e))
    }, []);

    return (
        <div className={'searchField'}>
            <h2 >Найти товар:</h2>
            <SearchInput searchValue={value} setValue={setValue}/>

            <ul>
                {itemsList && itemsList.map((item) => {
                    if (item.title.includes(value) && value !== '') {
                    return (
                        <li key={item.id}>
                            <Link to={'/'+item.id}>{item.title}</Link>
                        </li>
                    )}
                })}
            </ul>

            {/*<button >find an item</button>*/}
        </div>
    )
}

export default Search