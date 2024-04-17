import React from "react";

const Button = (props) => {

    return (
        <button onClick={props.press}>{props.purpose}</button>
    )

}

export default Button