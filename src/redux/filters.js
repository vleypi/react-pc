const initialState = {
    category: {
        catIndex: null,
        name: 'Все товары:'
    },
    sort: {
        type: 'popular',
        name: 'популярности',
        order: 'desc'
    }
}

const filters = (state=initialState,action) =>{
    switch(action.type){
        case 'SET_CATEGORY':
            return{
                ...state,
                category: {
                    catIndex: action.payload,
                    name: action.payloadName
                }
            }
        case 'SET_SORT':
            return{
                ...state,
                sort: action.payload
            }    
        default: return state
    }
}

export const setSort = (type) =>({
    type: 'SET_SORT',
    payload: type,
})

export const setCategory = (catIndex,name) =>({
    type: 'SET_CATEGORY',
    payload: catIndex,
    payloadName: name
})

export default filters