import React from 'react'
import classNames from 'classnames'
import hamburger from '../../assets/img/hamburger_button_menu_icon_155296.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../../redux/filters'

const categories = ['Видеокарты','Процессоры','Материнские платы', 'ОЗУ','Блоки питания','Корпуса','Накопители','Охлаждение']
const Categories = React.memo(function Categories() {
    const dispatch = useDispatch()
    //active
    const activeItem = useSelector(({filters}) => filters.category)
    const onSelectCategory = (index)=>{
        dispatch(setCategory(index))
    }
    //visable
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
    const onVisable = () =>{
        setVisableCat(!visableCat)
    }
    return (
        <nav className="categories-main">
            <div className="content">
                <div className="Categories" ref={ref}>
                <div className="categories" onClick={onVisable}>
                    <p>Каталог</p>
                    <img src={hamburger} alt="hamburger"/>
                </div>
                <div className={`${"categories-block"} ${visableCat === true ? 'categories-block-active' : ''}`}>
                    <ul>
                        <NavLink to="/"><li onClick={()=> onSelectCategory (null)} className={activeItem === null ? 'actives' : ''}>Все</li></NavLink>
                        {categories.map((catName,index)=>(
                            <NavLink to="/"  key={`${index}_cat`}><li
                                onClick={()=> onSelectCategory(index)}
                                className={classNames({
                                    actives: activeItem === index,
                                })}
                            >
                                {catName}
                            </li>
                            </NavLink>
                        ))}
                    </ul>       
                </div>
                </div>
            </div>
        </nav>
    )
})

export default Categories
