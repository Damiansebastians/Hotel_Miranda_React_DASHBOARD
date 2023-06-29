import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {

    const isLogged = localStorage.getItem("logged")

            if (!isLogged) {
                return <Navigate to='/' />
            }

            return (
                <Outlet /> 
            )
}
