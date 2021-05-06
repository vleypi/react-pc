const initialState = {
    cartElem: []
}

const cart = (state=initialState,action) =>{
    if(action.type === 'SET_CART'){
        return{
            ...state,
            cartElem: [...state.cartElem,{...action.payload}]
        }
    }
    if(action.type === 'UPDATE_CART'){
        return{
            ...state,
            cartElem: action.payload
        }
    }
    return state
}

export const setCart = (item,count) => ({
    type: 'SET_CART',
    payload: item,
    count
})

export const updateCart = (elem) =>({
    type: "UPDATE_CART",
    payload: elem
})

export default cart