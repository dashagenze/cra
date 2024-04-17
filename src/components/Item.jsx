const Item = (props) => {
    return (
        <div>
            <img src={props.src}/>
            <h3>{props.name}</h3>
            <h3>{props.amount}</h3>
            <h3>{props.price}</h3>
            <hr></hr>
        </div>
    )
}

export default Item