import React from 'react'

//library
import {useDispatch,useSelector, connect} from 'react-redux'
import { withRouter } from 'react-router'
import ItemsPage from '../components/ItemsPage'


//redux
import {getItem} from '../redux/getItem'


function PageItem(props) {
    const dispatch = useDispatch()
    const windowItem  = useSelector(({getitem}) => getitem.windowItems)
    React.useEffect(()=>{
        dispatch(getItem(props.match.params.id))
    },[])
    console.log(props)
    return (
        <div>
            {windowItem.map((index)=>(
                <ItemsPage {...index} />
            ))}
        </div>
    )
}

const PageItemWithRouter = withRouter(PageItem)

export default PageItemWithRouter
