import React from 'react'

import axios from 'axios'
import {NavLink} from 'react-router-dom'

import searchImg from '../assets/img/search.svg'
import {setSeacrh} from '../redux/elem'
import {useDispatch,useSelector} from 'react-redux'

const Search = React.memo(
function Search() {
    const dispatch = useDispatch()
    const [element,setElement] = React.useState('')
    const [elems,setElems]  = React.useState([])
     React.useEffect(() =>{
        axios.get('http://localhost:3002/elem').then(({data})=>{
            setElems(data)
        })
    },[])
    const disp = () =>{
        dispatch(setSeacrh(search,true))
    }
    const search = elems.filter(item =>{
        return item.name.toLowerCase().includes(element.toLowerCase())
    })

    return (
        <div className="main-input">
            <input className="input-header" placeholder="Поиск по магазину..." onChange={(e)=>setElement(e.target.value)}/>
            <NavLink className="searchClick" to="/"><img src={searchImg} className="search" onClick={()=>disp()}/></NavLink>
        </div>
    )
})

export default Search
