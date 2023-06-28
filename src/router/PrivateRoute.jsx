import { Navigate, Outlet } from "react-router-dom"


export const PrivateRoute = () => {

    const isLogged = false;

            if (!isLogged) {
                return <Navigate to='/' />
            }

            return (
                <Outlet /> 
            )
}
