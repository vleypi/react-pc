import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { setSort } from '../../redux/filters';

const sortName = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'убыванию', type: 'price', order: 'desc' },
    { name: 'возрастанию', type: 'price', order: 'asc' },
];

const Sort = React.memo(function Sort() {
    const dispatch = useDispatch()
    const activeSort = useSelector(({filters})=> filters.sort.name)
    const [visableSort,setVisableSort] = React.useState(false)
    const ref = React.useRef()
    const onSelectSort = (index,name)=>{
        dispatch(setSort(index,name))
        setVisableSort(false)
    }
    React.useEffect(() => {
       document.body.addEventListener('click',onVisableSortTogle)
    }, [])
    const onVisableSortTogle = (click) =>{
        if(!click.path.includes(ref.current)){
            setVisableSort(false)
        }
    }
    const onVisableSort = () =>{
        setVisableSort(!visableSort)
    }

    return (
        <div className="sort" ref={ref}>
            <p>Сортировка по: <span onClick={onVisableSort}>{activeSort}</span></p>
            {visableSort && <div className="sort-block">
                <ul>
                    {sortName.map((sort,index)=>(
                        <li
                            onClick={()=> onSelectSort(sort,sort.name)}
                            key={`${index}_sort`}
                        >{sort.name}
                        </li>
                    ))}
                </ul>
            </div>}
        </div>
    )
})

export default Sort
