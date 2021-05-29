const initialState = {
    cartElem: [],
    totalCart: 0,
    totalCost: 0
}

const cart = (state=initialState,action) =>{
    if(action.type === 'SET_CART'){
        state.totalCost+=action.payload.price
        return{
            ...state,
            cartElem: [...state.cartElem,{...action.payload}],
            totalCart: state.cartElem.length+1,
        }
    }
    if(action.type === 'UPDATE_CART'){
        state.totalCost-=action.cost
        return{
            ...state,
            cartElem: action.payload,
            totalCart: action.payload.length
        }
    }
    return state
}

export const setCart = (item) => ({
    type: 'SET_CART',
    payload: item,
})

export const updateCart = (elem,cost) =>({
    type: "UPDATE_CART",
    payload: elem,
    cost
})

export default cart