import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import SearchInput from "./SearchInput";
const ITEMSDATA = 'http://localhost:3000/ItemsData'


const Search = () => {
    const [value, setValue] = useState('')
    const [markup, setMarkup] = useState((
        <></>
    ))
    const [itemsList, setItemsList] = useState(null)

    useEffect(() => {
        fetch(ITEMSDATA)
            .then(response => response.json())
            // .then(json=> {console.log(json)})
            .then(result => {
                setItemsList(result)
                console.log(itemsList)
            })
            .catch(e=> console.log(e))
    }, []);

    //todo переписать поиск с модификацией строки запроса

    const newMarkup = () => {
        return (
            <>
                {itemsList.map((item, index) => {
                    console.log(item.title)
                    if (item.title.includes(value) && value !== '') {
                        return (
                            <div key={index}>
                                <Link to='/cart'>{item.title}</Link>
                            </div>
                        )}
                })}
            </>
        )
    }

    return (
        <>
            <h2>Найти товар</h2>
            <SearchInput searchValue={value} setValue={setValue}/>
            {markup}
            <button onClick={() => setMarkup(newMarkup)}>find an item</button>
        </>
    )
}

export default Search