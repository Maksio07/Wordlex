import { useNavigate, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'

export default function Logout({ mobileNavigationIsActive, handleMobileNavigation }) {
	const setToken = useContext(IsUserAuthContext).setToken
	const setSession = useContext(IsUserAuthContext).setSession
	const setUserIDSession = useContext(IsUserAuthContext).setUserIDSession
	const navigate = useNavigate()

	async function logoutUser() {
		try {
			const res = await fetch('http://localhost:8080/auth/logout', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
			})
			const resData = await res.json()
			if (resData.status === 'success') {
			}
		} catch (err) {}
		setSession()
		setToken()
		setUserIDSession()
		navigate('/auth/login', { replace: true })
		mobileNavigationIsActive && handleMobileNavigation()
	}

	return (
		<li className='header__signup text-3xl mr-[4.2rem] max-[690px]:mr-0' onClick={logoutUser}>
			<NavLink to='/auth/login' className={({ isActive }) => (isActive ? 'active' : undefined)}>
				Logout
			</NavLink>
		</li>
	)
}
