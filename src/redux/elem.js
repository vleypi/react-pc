import axios from "axios"

const initialState = {
    element: [],
}

const elements = (state=initialState, action) =>{
    switch(action.type){
        case 'SET_ELEM':
            return{
                ...state,
                element: action.payload,
            }
        default:
            return state
    }
}

export const setElem = (elem) =>({
    type: 'SET_ELEM',
    payload: elem,
})

export const fetchElem = (category,sort) => (dispatch) =>{
    axios.get(`http://localhost:3001/elem?${category !== null ? `category=${category}` : ''}&_sort=${sort.type}&_order=${sort.order}`).then(({ data }) => {
        dispatch(setElem(data));
    });
}

export default elements