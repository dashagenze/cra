import React from "react";

class Button extends React.Component {

    constructor(props) {
        super(props);
        this.press = this.press.bind(this);
    }

    press() {
        alert('добавлено в корзину, честно')
    }
    render() {
        return (
            <button onClick={this.press}>ДОБАВИТЬ В КОРЗИНУ</button>
        )
    }
}

export default Button