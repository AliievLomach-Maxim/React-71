import { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const PublicRoute = ({ children }) => {
	// const [isAuth, setIsAuth] = useState(false)
	const { isAuth } = useAuth()
	const location = useLocation()

	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
}
// const PublicRoute = ({ children }) => {
// 	const isAuth = useSelector((state) => state.auth.access_token)
// 	const location = useLocation()

// 	return !isAuth ? children : <Navigate to={location.state ?? '/'} />
// }

export default PublicRoute
