import Button from "../components/Button";
import coffeecup from '../assets/coffeecup.png';

const post = async () => {

    await fetch(LINK, {
        method: 'POST',
        body: JSON.stringify({
            "title": "Стакан для кофе и чая 360 мл",
            "img": coffeecup,
            "amount": 1,
            "price": 827,
            "id": "4"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(r => r.json())
}

<Button press={()=> post()} purpose={'post'}/>
