import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'

function Items() {
    const element = useSelector(({elements})=>elements.element);
    return (
        <>
            {element.map((obj)=>(
                <div className="item">
                    <NavLink to={`${obj.path}/${obj.id}`}>
                    <div className="img-content">
                        <img src={obj.images[0]} alt={obj.name}/>   
                    </div>
                    </NavLink>
                    <div className="info-item">
                        <NavLink to={`${obj.path}/${obj.id}`}>
                        <p>{obj.name}</p>
                        </NavLink>
                        <div className="stopCLick">
                            <p className="price">{obj.price} ₽</p>
                            <p className="buy">Купить</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Items
