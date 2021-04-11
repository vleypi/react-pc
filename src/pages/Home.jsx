import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

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
            <section className="categories-and-sort">
                <div className="content">
                    <Categories onClickCategory={onSelectCategory} items={categories}/>
                    <Sort sortName={sortName} onSelectSort={onSelectSort} activeSortType={sortName.type}/>
                </div>
            </section>
            <section className="all-items">
                <div className="content">
                    <h1>Все товары:</h1>
                    {element.map((obj)=>(
                        <Items {...obj} key={obj.id}/>
                    ))}
                </div>
            </section> 
        </div>
    )
}

export default Home
