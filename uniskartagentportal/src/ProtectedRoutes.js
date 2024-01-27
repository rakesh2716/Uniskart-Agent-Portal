import { Outlet, Navigate } from 'react-router-dom'
import { getLocalStorageItems } from './Utils/Helpers'

export const PrivateRoutes = () => {
   const token = getLocalStorageItems("token")
    return(
        token?.length ? <Outlet/> : <Navigate to="/login"/>
    )
}




export const Unauthenticated  = () => {
    const token = getLocalStorageItems("token")
    return(
        !token?.length ? <Outlet/> : <Navigate to="/"/>
    )
}

