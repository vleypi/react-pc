import React from 'react'
import style from   '../assets/css/itemsPage.module.css'
import star from '../assets/img/blackstar.svg'

function ItemsPage(props) {
    return (
            <div className={style.item}>
                <div className={style.img_content}>
                    <img className={style} src={props.image} alt={props.name}/>   
                </div>
                <div className={style.info_item}>
                    <p className={style.info_item_name}>{props.name}</p>
                    <div className={style.popular}>
                        <img className={style.star} src={star} />
                        <p className={style.popularJson}>{props.popular}</p>
                    </div>
                    <div className={style.price_div}>
                        <p className={style.price}>{props.price} ₽</p>
                        <p className={style.buy}>Добавить</p>
                    </div>
                </div>
            </div>
    )
}

export default ItemsPage
