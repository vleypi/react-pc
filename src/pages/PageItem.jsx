import React from 'react'
import PreLoader from '../components/PreLoader'

//library
import {useDispatch,useSelector, connect} from 'react-redux'
import { withRouter } from 'react-router'
import ItemsPage from '../components/ItemsPage'


//redux
import {getItem} from '../redux/getItem'


function PageItem(props) {
    const dispatch = useDispatch()
    const isLoaded = useSelector(({getitem}) => getitem.isLoad)
    const windowItem  = useSelector(({getitem}) => getitem.windowItems)
    console.log(props)
    React.useEffect(()=>{
        dispatch(getItem(props.match.params.path,props.match.params.id))
    },[])
    return (
        <div className="content">
            {isLoaded ? windowItem.map((index)=>(
                <ItemsPage {...index} />
            )) : <PreLoader /> }
        </div>
    )
}

const PageItemWithRouter = withRouter(PageItem)

export default PageItemWithRouter
