import React from "react";
import ItemTitle from "../components/ItemTitle";
import '../App.css'

class Glasses extends React.Component {

    render() {
        return (
            <div className={'margin'}>
                <img src={this.props.picSrc} className={'picture'}/>
                <ItemTitle name={this.props.name} price={this.props.price}/>
            </div>
        )
    }
}

export default Glasses