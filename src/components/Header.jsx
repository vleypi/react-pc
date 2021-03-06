import React from 'react'
import {NavLink} from 'react-router-dom'

import '../assets/css/header.css'
import graphicCart from '../assets/img/graphics-card.svg'
import shoppingCart from '../assets/img/shopping-cart.svg'

import {setCategory} from '../redux/filters'
import {useDispatch,useSelector} from 'react-redux'
import Search from './search/search'


function Header() {
    const dispatch = useDispatch()
    const totalCart = useSelector(({cart}) => cart.totalCart)
    const totalCost = useSelector(({cart}) => cart.totalCost)
    const FetchNull = ()=>{
        dispatch(setCategory(null,'Все товары:'))
    }
    return (
        <header>
        <div className="content">
            <NavLink to='/' className="logo-name" onClick={()=>FetchNull()}>
                <img src={graphicCart} alt="graphicCart"/>
                <p>REACT-PC</p>
            </NavLink>
            <Search />
            <NavLink to='/cart'>
            <div className="cart-nav">
                <p>{totalCost} ₽</p>
                <div>
                    <img src={shoppingCart} alt="shoppingCart"/>
                    <p>{totalCart}</p>
                </div>
            </div>
            </NavLink>
        </div>
      </header>
    )
}

export default Header
