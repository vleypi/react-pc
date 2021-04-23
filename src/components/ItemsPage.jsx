import React from 'react'

function ItemsPage(props) {
    console.log(props)
    return (
        <div className="item">
            <div className="img-content">
                <img src={props.image} alt={props.name}/>
            </div>
            <div className="info-item">
                <p>{props.name}</p>
                <div>
                    <p className="price">{props.price}</p>
                    <p className="buy">Купить</p>
                </div>
            </div>
        </div>
    )
}

export default ItemsPage
