import React from 'react'

import { NavLink } from 'react-router-dom'

function Items({image,name,price,path,id}) {
    return (
        <div className="item">
            <NavLink to={`${path}/${id}`}>
            <div className="img-content">
                <img src={image} alt={name}/>   
            </div>
            </NavLink>
            <div className="info-item">
                <p>{name}</p>
                <div className="stopCLick">
                    <p className="price">{price} ₽</p>
                    <p className="buy">Купить</p>
                </div>
            </div>
        </div>
    )
}

export default Items
