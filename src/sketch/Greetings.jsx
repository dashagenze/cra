import React from "react";
import Button from "../components/Button";


class Greetings extends React.Component {
    render() {
        return (
            <div>
                <h1>БАНЖУР, {this.props.firstName}!!</h1>
            </div>
        )
    }
}


const post = async () => {

    import coffeecup from '../assets/coffeecup.png';

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
export default Greetings