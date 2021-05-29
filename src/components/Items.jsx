import React from 'react'

import PreLoader from '../components/PreLoader'
import star from '../assets/img/blackstar.svg'

import {useSelector,useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import { fetchElem } from '../redux/elem';
import { setCart } from '../redux/cart'

function Items() {
    const dispatch = useDispatch()
    const element = useSelector(({elements})=>elements.element);
    const isLoad = useSelector(({elements}) => elements.isLoadAllElement);
    const cart = useSelector(({cart})=>cart.cartElem)
    const {category,sort} = useSelector(({filters})=>filters)
    React.useEffect(()=>{
        dispatch(fetchElem(category.catIndex,sort))
    },[category,sort])

    const postCart = (obj) =>{
        dispatch(setCart(obj))
    }

    return (
        <>
            {isLoad ? 
            <>
                {element.map((obj,index)=>(
                    <div className="item" key={`${index}_item`}>
                        <NavLink to={`${obj.path}/${obj.id}`}>
                        <div className="img-content">
                            <img src={obj.images[0]} alt={obj.name}/>   
                        </div>
                        </NavLink>
                        <div className="info-item">
                            <div className="display_block_item">
                                <NavLink to={`${obj.path}/${obj.id}`}>
                                    <p>{obj.name}</p>
                                    <div className="popularItems">
                                        <img src={star} />
                                        <p>{obj.popular}</p>
                                    </div>
                                </NavLink>
                                <div className="compare">
                                    <div className={`checkbox`}></div>
                                    <p>сравнить</p>
                                </div>
                            </div>
                            <div className="stopCLick">
                                <p className="price">{obj.price} ₽</p>
                                {cart.find((cartItem)=>cartItem.id==obj.id) ? <button className="buy"><NavLink className="buttonToCart" to="/cart">В корзине</NavLink></button> :  <button className="buy" onClick={()=>postCart(obj)}>Купить</button>}
                            </div>
                        </div>
                    </div>
                ))}
            </> : <PreLoader />}
        </>
    )
}

export default Items
