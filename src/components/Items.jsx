import React from 'react'

function Items({image,name,price}) {
    return (
        <div className="item">
            <div className="img-content">
                <img src={image} alt={name}/>   
            </div>
            <div className="info-item">
                <p>{name}</p>
                <div>
                    <p className="price">{price} ₽</p>
                    <p className="buy">Купить</p>
                </div>
            </div>
        </div>
    )
}

export default Items
