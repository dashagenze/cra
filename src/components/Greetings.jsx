import React from "react";

class Greetings extends React.Component {
    render() {
        return (
            <div>
                <h1>БАНЖУР, {this.props.firstName}!!</h1>
            </div>
        )
    }
}

export default Greetings