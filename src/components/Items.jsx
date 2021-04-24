import React from 'react'

import { NavLink } from 'react-router-dom'

function Items({images,name,price,path,id}) {
    return (
        <div className="item">
            <NavLink to={`${path}/${id}`}>
            <div className="img-content">
                <img src={images[0]} alt={name}/>   
            </div>
            </NavLink>
            <div className="info-item">
                <NavLink to={`${path}/${id}`}>
                <p>{name}</p>
                </NavLink>
                <div className="stopCLick">
                    <p className="price">{price} ₽</p>
                    <p className="buy">Купить</p>
                </div>
            </div>
        </div>
    )
}

export default Items
