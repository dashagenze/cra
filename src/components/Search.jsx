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


    const newMarkup = () => {
        return (
            <>
                {itemsList.map((entry, index) => {
                    console.log(entry.title)
                    if (entry.title.includes(value) && value !== '') {
                        return (
                            <div key={index}>
                                <Link to={entry.link}>{entry.title}</Link>
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