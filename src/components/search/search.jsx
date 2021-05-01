import React from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {setTextSearchAC,getBooleanSearch} from '../../redux/search'
import searchImg from '../../assets/img/search.svg'
import { getBoolean } from '../../redux/getItem'

function Search() {
    const dispatch = useDispatch()
    const [textSearch, setTextSearch] = React.useState('')
    const [buttonValid,setButtonValid] = React.useState(false)
    const onSetTextSearch = (text) =>{
        setTextSearch(text)
    }
    const postText = (text) =>{
        axios.get('http://localhost:3002/elem').then(({data})=>{
            dispatch(setTextSearchAC(text,data))
            dispatch(getBooleanSearch(true))
            dispatch(getBoolean())
        })
    }
    React.useEffect(()=>{
        if(textSearch === ''){
            setButtonValid(true)
       }
       else{
            setButtonValid(false)
       }
    },[textSearch])
    return (
        <div className="main-input">
            <input className="input-header" placeholder="Поиск по магазину..."  onChange={(e)=>onSetTextSearch(e.target.value)}/>
            <button disabled={buttonValid} className="ButtonSearch" onClick={()=>postText(textSearch)}>
                <NavLink className="searchClick" to={!buttonValid ? '/search' : '/'}>
                    <img src={searchImg} className={`search ${buttonValid ? 'SeacrhFalse' : ''}`}/>
                </NavLink>
            </button>
        </div>
    )
}

export default Search