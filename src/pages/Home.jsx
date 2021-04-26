import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {getBoolean} from '../redux/getItem'


import '../assets/css/items.css'
import '../assets/css/categories.css'
import Items from '../components/Items'
import SearchItems from '../components/searchItems'


function Home() {

    const dispatch = useDispatch();
    const boolean =  useSelector(({elements})=>elements.boolean);
    React.useEffect(()=>{
        dispatch(getBoolean())
    },[])
    
    return (
        <>
            <section className="all-items">
                <div className="content">
                    <h1>Все товары:</h1>
                    {boolean === false ? <Items /> : <SearchItems />}
                </div>
            </section> 
        </>
    )
}

export default Home
