import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../store/DarkModeContext'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import Logout from '../auth/Logout'
import Moon from '../icons/Action/Moon'
import Sun from '../icons/Action/Sun'

export default function AuthNavigation() {
	const currentModeCtx = useContext(DarkModeContext)
	const userId = useContext(IsUserAuthContext).userIDSession

	return (
		<li className='nav-items__links flex flex-row items-center min-h-full h-full w-full'>
			<ul className='flex justify-between w-full'>
				<li className='profile-link text-3xl mx-[4.2rem] text-[var(--navLinks)]'>
					<NavLink to={`/users/${userId}/profile`} className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Profil
					</NavLink>
				</li>
				<Logout />
			</ul>
			<li
				className='mr-[4.2rem]'
				onClick={() => currentModeCtx.setThemeHandler(currentModeCtx.themeMode === 'light' ? 'dark' : 'light')}>
				<button type='button' className='mode-icon cursor-pointer' aria-label='Zmień kolor'>
					{currentModeCtx.themeMode === 'light' ? (
						<Moon width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} />
					) : (
						<Sun width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} stroke={'var(--navLinks)'} />
					)}
				</button>
			</li>
		</li>
	)
}
