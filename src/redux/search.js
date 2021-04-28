const initialState = {
    searchText: '',
    searchItem: [],
    boolean: false
}

const search = (state=initialState,action) =>{
    if(action.type === 'SET_TEXT_SEARCH'){
        return{
            ...state,
            searchText: action.payload,
            searchItem: action.payloadItem
        }
    }
    else if(action.type === 'GET_BOOLEAN_SEARCH'){
        return{
            ...state,
            boolean: action.payload
        }
    }
    return state
}

export const setTextSearchAC = (text,data) =>({
    type: 'SET_TEXT_SEARCH',
    payload: text,
    payloadItem: data
})

export const getBooleanSearch = (boolean) =>({
    type: 'GET_BOOLEAN_SEARCH',
    payload: boolean
})

export default search