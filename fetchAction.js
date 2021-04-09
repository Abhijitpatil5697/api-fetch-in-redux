import { FETCH_USER_FAILUER, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./fetchType"
import axios from 'axios'
export const fetchUserRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess=(user)=>{
    return{
        type:FETCH_USER_SUCCESS,
        payload:user
    }
}
export const fetchUserFailure=(error)=>{
    return{
        type:FETCH_USER_FAILUER,
        payload:error
    }
}

export const fetchUser=()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest())
         axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            let data= response.data
        dispatch(fetchUserSuccess(data))
        }).catch((error)=>{
            let err=error.message
        dispatch(fetchUserFailure(err))
        })
    }
}