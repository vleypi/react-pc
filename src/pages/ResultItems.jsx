import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import ResultItems from '../components/search/resultitems'
import ResultNothing from '../components/search/resultNothing'

function ResultItemsSearch() {
    const seacrText = useSelector(({search}) => search.searchText)
    const searchItem = useSelector(({search}) => search.searchItem)
    const [searchValid,setSearchValid] = React.useState(false)
    const filter = searchItem.filter(item=>{
        return item.name.toLowerCase().includes(seacrText.toLowerCase())
    })
    React.useEffect(()=>{
        if(filter.length === 0) setSearchValid(false)
        else setSearchValid(true)
    })
    return (
        <div className="content">
            {searchValid ? 
            <div>
                {filter.map((obj)=>(
                    <div className="item">
                        <NavLink to={`${obj.path}/${obj.id}`}>
                        <div className="img-content">
                            <img src={obj.images[0]} alt={obj.name}/>   
                        </div>
                        </NavLink>
                        <div className="info-item">
                            <NavLink to={`${obj.path}/${obj.id}`}>
                            <p>{obj.name}</p>
                            </NavLink>
                            <div className="stopCLick">
                                <p className="price">{obj.price} ₽</p>
                                <p className="buy">Купить</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div> : <ResultNothing />}
        </div>
    )
}

export default ResultItemsSearch
