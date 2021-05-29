import React from 'react'

import '../assets/css/cart.css'
import { NavLink } from 'react-router-dom'

import PreLoader from '../components/PreLoader'
import star from '../assets/img/blackstar.svg'

import {useSelector,useDispatch} from 'react-redux'
import cart, { updateCart } from '../redux/cart'
import CartNothing from '../components/cartNotThing'

function Cart() {
    const dispatch = useDispatch()
    const cartElem = useSelector(({cart}) => cart.cartElem)
    const totalCart = useSelector(({cart}) => cart.totalCart)
    const totalCost = useSelector(({cart}) => cart.totalCost)
    const [elem, setElem] = React.useState(cartElem)
    const [minusCost, setMinusCost] = React.useState(0)
    const remove = (index,price) =>{
        setMinusCost(price)
        const elemsFilter = cartElem.filter(el => {
            return el.id !== cartElem[index].id
        })
        setElem(elemsFilter)
    }
    const [cartValid,setCartValid] = React.useState(false)
    React.useEffect(()=>{
        dispatch(updateCart(elem,minusCost))
    },[elem])
    React.useEffect(()=>{
        if(cartElem.length > 0){
            setCartValid(true)
        }
        else{
            setCartValid(false)
        }
    },[cartElem])
    return (
        <div>
            {cartValid ? <section className="cart">
                <div className="content">
                    <h1>Корзина:</h1>
                    <div className="items_cart" >
                        {cartElem.map((obj,index)=>(
                            <div className="item_cart"  key={`${index}_item`}>
                                <NavLink to={`${obj.path}/${obj.id}`}>
                                    <img src={obj.images[0]} alt={obj.name}/>
                                </NavLink>
                                <div className="info-item_cart">
                                    <p className="cart_p">{obj.name}</p>
                                     <div className="prices">
                                        <p className="price_cart">{obj.price} ₽</p>
                                    </div>
                                    <div className="remove" onClick={()=>remove(index,obj.price)}>
                                        <p className="remove_cart">x</p>
                                    </div>
                                </div>
                             </div>
                        ))}
                        <div className="pay_cart">
                            <div className="total_cart">
                                <p className="product_cart">Всего товаров: {totalCart}</p>
                                <p className="sum_cart">Сумма заказа: {totalCost} ₽</p>
                            </div>
                            <div className="action_cart">
                                <NavLink to='/' className="backToHome">Вернуться назад</NavLink>
                                <p className="pay_sum">Оплатить</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> :
            <CartNothing />}
        </div>
    )
}

export default Cart
