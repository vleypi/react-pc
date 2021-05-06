import React from 'react'
import { NavLink } from 'react-router-dom'

import cartImg from '../assets/img/manWcart.png'

function CartNothing() {
    return (
        <section>
            <div className="content">
                <div className="cartNothing nothing_cart">
                    <h2>Корзина пустая...😕</h2>
                    <div className="cartP">
                        <p>Вероятно, вы ничего не добавляли сюда.</p>
                        <p>Для того, чтобы купить что-то, перейдите на главную страницу</p>
                    </div>
                    <div className="manWcart">
                        <img src={cartImg} alt="manWcart"/>
                    </div>
                    <NavLink to='/' className="backToHome">Вернуться на главную </NavLink>
                </div>
            </div>
        </section>
    )
}

export default CartNothing
