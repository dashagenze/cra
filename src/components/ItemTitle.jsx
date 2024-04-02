import React from "react";
import Button from "./Button";

class ItemTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.price}</h1>
                <Button/>
            </div>
        )
    }
}

export default ItemTitle