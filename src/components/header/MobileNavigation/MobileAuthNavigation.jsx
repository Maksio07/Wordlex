import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import Logout from '../../auth/Logout'

export default function MobileAuthNavigation({ mobileNavigationIsActive, handleMobileNavigation }) {
	const userId = useContext(IsUserAuthContext).userIDSession

	return (
		<div
			className='flex flex-col items-center justify-center w-full'>
			<li className='profile-link mb-[1.6rem] text-3xl text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to={`/users/${userId}/profile`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
					Profil
				</NavLink>
			</li>
			<Logout handleMobileNavigation={handleMobileNavigation} mobileNavigationIsActive={mobileNavigationIsActive} />
		</div>
	)
}
