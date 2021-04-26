import React from 'react'
import {useSelector,useDispatch} from 'react-redux'

import {getBoolean} from '../redux/getItem'


import '../assets/css/items.css'
import '../assets/css/categories.css'
import Items from '../components/Items'


function Home() {

    const dispatch = useDispatch();
    const element = useSelector(({elements})=>elements.element);
    React.useEffect(()=>{
        dispatch(getBoolean())
    },[])
    
    return (
        <>
            <section className="all-items">
                <div className="content">
                    <h1>Все товары:</h1>
                    {element.map((obj)=>(
                        <Items {...obj} key={obj.id}/>
                    ))}
                </div>
            </section> 
        </>
    )
}

export default Home
