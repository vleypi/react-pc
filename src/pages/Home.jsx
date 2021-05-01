import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import '../assets/css/items.css'
import '../assets/css/categories.css'
import Items from '../components/Items'
import {getBoolean} from '../redux/getItem'
import { getBooleanSearch } from '../redux/search'


function Home() {
    const dispatch = useDispatch();
    const boolean = useSelector(({search}) => search.boolean)
    React.useEffect(()=>{
        dispatch(getBooleanSearch(false))
        dispatch(getBoolean())
    },[])
    
    return (
        <>
            <section className="all-items">
                <div className="content">
                    <h1>Все товары:</h1>
                   <Items />  
                </div>
            </section> 
        </>
    )
}

export default Home
