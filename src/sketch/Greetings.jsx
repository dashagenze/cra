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
    import xiaomi from '../assets/xiaomi.jpg';
    import macbook from '../assets/macbook.jpg';
    import hoodie from '../assets/hoodie.jpg';

    await fetch(LINK, {
        method: 'POST',
        body: JSON.stringify({
            "title": "Черная толстовка как у мистера Робота",
            "img": "/static/media/hoodie.2a164628e082a0353f61.jpg",
            "amount": 1,
            "price": 3886,
            "id": "3"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(r => r.json())
}

<Button press={()=> post()} purpose={'post'}/>
export default Greetings