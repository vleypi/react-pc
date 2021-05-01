import React from 'react'

import {useDispatch, useSelector} from 'react-redux'

import Categories from './Categories'
import Sort from './Sort'
import {setCategory,setSort} from '../../redux/filters'
import {fetchElem} from '../../redux/elem'
import SortForSearch from './SortForSearch'

const categories = ['Видеокарты','Процессоры','Материнские платы', 'ОЗУ','Блоки питания','Корпуса','Накопители','Охлаждение']
const sortName = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'убыванию', type: 'price', order: 'desc' },
    { name: 'возрастанию', type: 'price', order: 'asc' },
  ];

  const sortNames = [
    { name: 'lol', type: 'popular', order: 'desc' },
    { name: 'убыванию', type: 'price', order: 'desc' },
    { name: 'возрастанию', type: 'price', order: 'asc' },
  ];


const CategoriesContainer = React.memo(function CategoriesContainer() {
    const dispatch = useDispatch();
    const {category,sort} = useSelector(({filters})=>filters)
    const isLoad = useSelector(({getitem})=>getitem.isLoad)
    const fromSearch = useSelector(({search})=>search.boolean)
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
        <nav className="categories-and-sort">
            <div className="content">
                <Categories onClickCategory={onSelectCategory} items={categories}/>
                {isLoad === false && fromSearch === false && <Sort sortName={sortName} onSelectSort={onSelectSort} activeSortType={sortName.type}/>}
                {/* {isLoad === false && fromSearch === true && <SortForSearch sortName={sortNames} onSelectSort={onSelectSort} activeSortType={sortName.type}/>} */}
            </div>
        </nav>
    )
})

export default CategoriesContainer
