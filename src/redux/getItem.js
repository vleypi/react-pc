import axios from "axios"

const initialState = {
    windowItems: [{
        id:'',
        path:'',
        image:'',
        name:'',
        price: '',
        category:'',
        popular:'',
    }]
}

const getItemReducer = (state=initialState,action) =>{
   if(action.type === 'GET_ITEM'){
       return{
           ...state,
           windowItems: action.payload
       }
   }
   return state
}

export const getItemAC = (windowItem)=>({
    type: 'GET_ITEM',
    payload: windowItem
})

export const getItem = id => dispatch =>{
    axios.get(`http://localhost:3002/elem?id=${id}`).then(({data})=>{
        dispatch(getItemAC(data))
    })
}

export default getItemReducer