import {useEffect, useState} from "react";

export default function useTest (url) {
    const [itemsList, setData] = useState('')
    const [isLoading, setIsLoading] = useState(null)

    useEffect( () => {
        fetch(url)
            .then(response => {
                if(response.ok){
                    return response.json()
                }

            })
            .then(data => {
                console.log(data)
                setData(data);
                console.log(data)
                setIsLoading(true)
                return data
            })
            .catch(e=> console.log(e))
    }, [url]);
    console.log(itemsList)

    useEffect(() => {
        return () => setIsLoading(false)
    });

    return {itemsList: itemsList, isLoading}
}
