import React from 'react'

import {useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'

function SearchItems() {
    const search = useSelector(({elements})=>elements.search);
    const [length,setLength] = React.useState(false)
    React.useEffect(()=>{
        if(search.length > 0){
            setLength(true)
            console.log(true)
        }
        else if(search.length === 0){
            setLength(false)
            console.log(false)
        }
    },[])
    return (
        <>
            {search.map((obj)=>(
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

export default SearchItems
