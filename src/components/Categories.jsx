import React from 'react'
import classNames from 'classnames'

import hamburger from '../assets/img/hamburger_button_menu_icon_155296.svg'

const Categories = React.memo(function Categories({items,onClickCategory}) {

    const [activeItem,setActiveItem] = React.useState(null)
    const [visableCat,setVisableCat] = React.useState(false)
    const ref = React.useRef()

    React.useEffect(() => {
       document.body.addEventListener('click',falseVisable)
    },[])

    const falseVisable = (click) =>{
        if(!click.path.includes(ref.current)){
            setVisableCat(false)
        }
    }

    const onActiveItem = (index) =>{
        setActiveItem(index)
        onClickCategory(index)
    }

    const onAllActive = (index) =>{
        setActiveItem(index)
        onClickCategory(index)
    }

    const onVisable = () =>{
        setVisableCat(!visableCat)
    }




    return (
        <div className="Categories" ref={ref}>
            <div className="categories" onClick={onVisable}>
                <p>Каталог</p>
                <img src={hamburger}/>
            </div>
            <div className={`${"categories-block"} ${visableCat === true ? 'categories-block-active' : ''}`}>
                <ul>
                    <li onClick={()=>onAllActive(null)} className={activeItem === null ? 'active' : ''}>Все</li>
                    {items.map((catName,index)=>(
                        <li
                            onClick={()=> onActiveItem(index)}
                            className={classNames({
                                active: activeItem === index,
                            })}
                            key={`${index}_item`}
                        >
                            {catName}
                    </li>
                    ))}
                </ul>       
            </div>
        </div>
    )
})

export default Categories
