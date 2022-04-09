import React from 'react'
import { Navigate} from 'react-router-dom'
import { isAuthenticate } from '../utils/localstorage'

type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRoute = (props: PrivateRouterProps) => {
   const user = isAuthenticate()
   
   if(user){
       if(user.user.role === 0) {
           return <Navigate to={'/'}/>
        }else{
            return props.children
        }

    }
    return <Navigate to={'/'}/>
}

export default PrivateRoute