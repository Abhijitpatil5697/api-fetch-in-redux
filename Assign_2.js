import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './Assgn2Redux/fetchAction';

function Assign_2() {
    const dispatch=useDispatch();
    const state_n = useSelector(state =>state)
    console.log(state_n)

    useEffect(()=>{
        dispatch(fetchUser())
        // fetchUser()
    })
    return (
        
        <div>
        
            {/* {data.map((obj,i)=>{
                return<div>
                    <h1>{obj.title}</h1>
                </div>
            })} */}
           {state_n.loading? <h1> loading...</h1>:<h1>{state_n.error}</h1>}
        </div>
    )
}

export default  Assign_2
