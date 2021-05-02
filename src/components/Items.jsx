import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchElem } from '../redux/elem';

function Items() {
    const dispatch = useDispatch()
    const element = useSelector(({elements})=>elements.element);
    const {category,sort} = useSelector(({filters})=>filters)
    React.useEffect(()=>{
        dispatch(fetchElem(category,sort))
    },[category,sort])
    return (
        <>
            {element.map((obj,index)=>(
                <div className="item" key={`${index}_item`}>
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
