import React from 'react'

function Items({image,name,price}) {
    return (
        <div class="item">
            <div className="img-content">
                <img src={image} alt={name}/>
            </div>
            <div class="info-item">
                <p>{name}</p>
                <div>
                    <p class="price">{price} ₽</p>
                    <p class="buy">Купить</p>
                </div>
            </div>
        </div>
    )
}

export default Items
