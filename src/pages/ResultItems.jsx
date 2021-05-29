import React from 'react'
import {NavLink} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import ResultNothing from '../components/search/resultNothing'
import PreLoader from '../components/PreLoader'
import { setCart } from '../redux/cart'

function ResultItemsSearch() {
    const dispatch = useDispatch()
    const isLoadSeacrh = useSelector(({search}) => search.isLoadSeacrh)
    const seacrText = useSelector(({search}) => search.searchText)
    const searchItem = useSelector(({search}) => search.searchItem)
    const cart = useSelector(({cart})=>cart.cartElem)
    const filter = searchItem.filter(item=>{
        return item.name.toLowerCase().includes(seacrText.toLowerCase())
    })
    const [resultIsNothing, setResultIsNothing] = React.useState(false)
    React.useEffect(()=>{
        if(filter.length > 0){
            setResultIsNothing(true)
        }
        else{
            setResultIsNothing(false)
        }
    },[filter])
    const postCart = (obj) =>{
        dispatch(setCart(obj)) 
    }
    return (
        <div className="content">
            {isLoadSeacrh === true ? 
                <div>
                    {resultIsNothing ? <div>
                        {filter.map((obj)=>(
                            <div className="item" key={`${obj.name}_${obj}`}>
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
                                        {cart.find((cartItem)=>cartItem.id==obj.id) ? <button className="buy"><NavLink className="buttonToCart" to="/cart">В корзине</NavLink></button> :  <button className="buy" onClick={()=>postCart(obj)}>Купить</button>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div> : <ResultNothing /> }
                </div>
            : <PreLoader />}
        </div>
    )
}

export default ResultItemsSearch


