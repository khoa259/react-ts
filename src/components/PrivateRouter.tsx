import React from 'react'
import { Navigate} from 'react-router-dom'
import { isAuthenticate } from '../utils/localstorage'
type PrivateRouterProps = {
    children: JSX.Element
}

const PrivateRoute = ({children}: PrivateRouterProps) => {
   const {user} = isAuthenticate()
   if(user){
       if(user.role == 0) {
           return <Navigate to={'/'}/>
       }
       return children
   }
}

export default PrivateRoute