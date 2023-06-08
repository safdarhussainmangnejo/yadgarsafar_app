import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    
    const auth = localStorage.getItem('token');

    return auth ? <Outlet /> : <Navigate to="SignIn" />
}
export default ProtectedRoute;