import React from "react";
import Greetings from "./Greetings";

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName : '',
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    onNameChange = event =>
        this.setState(() => {
            return {
                firstName: event.target.value
            }
        }
        )

    onSubmitHandler = e => {
        e.preventDefault()
        alert(this.state.firstName);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <Greetings firstName={this.state.firstName}/>
                    <input type={"text"} name={'firstName'} onChange={this.onNameChange}/>
                    <input type={"submit"}/>
                </form>
            </div>
        )
    }

}

export default NameForm