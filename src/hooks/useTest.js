import {useEffect, useState} from "react";

export default function useTest (url) {
    const [data, setData] = useState('')

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
                return data
            })
            .catch(e=> console.log(e))
    }, [url]);
    console.log(data)

    return {data}
}
