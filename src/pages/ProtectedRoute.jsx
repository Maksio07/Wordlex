import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../store/IsUserAuthContext'
import Navigation from '../components/header/Navigation'
import Users from '../components/user/Users'

export default function ProtectedRoute() {
	const isAuth = useContext(IsUserAuthContext)
	const userID = isAuth.userIDSession

	if (!userID) {
		return <Navigate to='/auth/login'></Navigate>
	}

	return (
		<>
			<Navigation />
			<main className='w-full max-w-[2000px]'>
				<Users />
				<Outlet />
			</main>
		</>
	)
}
