import { 
    FETCH_ITEMS_PENDING, 
    FETCH_ITEMS_REJECT, 
    FETCH_ITEMS_SUCCESS,

} from "../actions/type";


const initialState = {
    items: [],
    item:{},
    errorMsg: "Something Error"

}

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ITEMS_PENDING:        
            return{
                ...initialState,
            }
        case FETCH_ITEMS_SUCCESS:     
            return{
                ...state,
                items: action.payload
            }
        case FETCH_ITEMS_REJECT:        
            return{
                ...state,
                errorMsg: action.payload
            }
        default:
            return state
    }
}


export default itemReducer