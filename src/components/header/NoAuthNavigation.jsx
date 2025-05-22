import { useContext } from 'react'
import { DarkModeContext } from '../../store/DarkModeContext'
import { NavLink } from 'react-router-dom'
import Moon from '../icons/Action/Moon'
import Sun from '../icons/Action/Sun'

export default function NoAuthNavigation() {
	const currentModeCtx = useContext(DarkModeContext)

	return (
		<div className='nav-items__links flex justify-between w-screen'>
			<div className='nav-items__links--left flex flex-row items-center'>
				<li className='home-link text-3xl mx-[4.2rem] text-[var(--navLinks)]'>
					<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Home
					</NavLink>
				</li>

				<li className='about-us-link text-3xl mr-[4.2rem] text-[var(--navLinks)]'>
					<NavLink to='/about-us' className={({ isActive }) => (isActive ? 'active' : undefined)}>
						O nas
					</NavLink>
				</li>
				<li className='contact-link text-3xl mr-[4.2rem] text-[var(--navLinks)]'>
					<NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Kontakt
					</NavLink>
				</li>
			</div>
			<div className='nav-items__links--right flex flex-row items-center'>
				<li className='header__signup text-3xl mr-[4.2rem]'>
					<NavLink to='/auth/signup' className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Signup
					</NavLink>
				</li>
				<li className='header__login  mr-[4.2rem] text-3xl'>
					<NavLink to='/auth/login' className={({ isActive }) => (isActive ? 'active' : undefined)}>
						Login
					</NavLink>
				</li>
				<li
					className='mr-[4.2rem]'
					onClick={() => currentModeCtx.setThemeHandler(currentModeCtx.themeMode === 'light' ? 'dark' : 'light')}>
					<button type='button' className='mode-icon cursor-pointer'>
						{currentModeCtx.themeMode === 'light' ? (
							<Moon width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} />
						) : (
							<Sun width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} stroke={'var(--navLinks)'} />
						)}
					</button>
				</li>
			</div>
		</div>
	)
}
