import React from 'react'
import {NavLink} from 'react-router-dom'

import '../assets/css/header.css'
import graphicCart from '../assets/img/graphics-card.svg'
import shoppingCart from '../assets/img/shopping-cart.svg'

import {setCategory} from '../redux/filters'
import {useDispatch} from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const FetchNull = ()=>{
        dispatch(setCategory(null))
    }
    return (
        <header onClick={()=>FetchNull()}>
        <div className="content">
            <NavLink to='/' className="logo-name">
                <img src={graphicCart} alt="graphicCart"/>
                <p>REACT-PC</p>
            </NavLink>
            <NavLink to='/cart'>
            <div className="cart-nav">
                <p>555 ₽</p>
                <div>
                    <img src={shoppingCart} alt="shoppingCart"/>
                    <p>3</p>
                </div>
            </div>
            </NavLink>
        </div>
      </header>
    )
}

export default Header
