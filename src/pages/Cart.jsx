import React from 'react'

import {useDispatch} from 'react-redux'
import {getBoolean} from '../redux/getItem'

function Cart() {
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getBoolean())
    })
    return (
        <div>
            def
        </div>
    )
}

export default Cart
