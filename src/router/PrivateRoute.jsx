import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export const PrivateRoute = () => {

    const isLogged = useSelector((state) => state.loginSlice.isLogged)

            if (!isLogged) {
                return <Navigate to='/' />
            }

            return (
                <Outlet /> 
            )
}
