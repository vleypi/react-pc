import React from 'react'

import '../assets/css/items.css'
import '../assets/css/categories.css'
import Items from '../components/Items'
import Sort from '../components/CategoryAndSort/Sort'
import { useSelector } from 'react-redux'

function Home() {
    const name = useSelector(({filters}) => filters.category)
    return (
        <>  
            <section className="all-items">
                <div className="content">
                    <div className="flex-sort">
                        <h1>{name.name}</h1>
                        <Sort />
                    </div>
                   <Items/>  
                </div>
            </section> 
        </>
    )
}

export default Home
