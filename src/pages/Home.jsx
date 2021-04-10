import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'


import {fetchElem} from '../redux/elem'
import {setCategory,setSort} from '../redux/filters'

import '../assets/css/items.css'
import '../assets/css/categories.css'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import Items from '../components/Items'



const categories = ['Видеокарты','Процессоры','Материнские платы', 'ОЗУ','Блоки питания','Корпуса','Накопители','Охлаждение']
const sortName = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'убыванию', type: 'price', order: 'desc' },
    { name: 'возрастанию', type: 'price', order: 'asc' },
  ];


function Home() {
    const dispatch = useDispatch();
    const element = useSelector(({elements})=>elements.element);
    const {category,sort} = useSelector(({filters})=>filters)

    React.useEffect(()=>{
        dispatch(fetchElem(category,sort))
    },[category,sort])

    const onSelectCategory = (index)=>{
        dispatch(setCategory(index))
    }
    const onSelectSort = (index)=>{
        dispatch(setSort(index))
    }
    return (
        <div>
            <section class="categories-and-sort">
                <div class="content">
                    <Categories onClickCategory={onSelectCategory} items={categories}/>
                    <Sort sortName={sortName} onSelectSort={onSelectSort} activeSortType={sortName.type}/>
                </div>
            </section>
            <section class="all-items">
                <div class="content">
                    <h1>Все товары:</h1>
                    {element.map((obj)=>(
                        <NavLink to={`/${obj.id}`}><Items {...obj} key={obj.id}/></NavLink>
                    ))}
                </div>
            </section> 
        </div>
    )
}

export default Home
