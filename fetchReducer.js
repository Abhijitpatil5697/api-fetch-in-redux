import { defaultFormatUtc } from "moment"
import { bindActionCreators } from "redux"
import { FETCH_USER_FAILUER, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./fetchType"

const initialState={
    loading:false,
    user:[],
    error:''
}

const fetchReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                loading:true
            }

            case FETCH_USER_SUCCESS:
                return{
                    loading:false,
                    user:action.payload,
                    error:''
                }
                case FETCH_USER_FAILUER:
                    return{
                        loading:false,
                        user:[],
                        error:action.payload
                    }
                    default: return state
    }
}
export default fetchReducer