import { NavLink } from 'react-router-dom'

export default function MobileNoAuthNavigation({ handleMobileNavigation }) {
	return (
		<>
			<li className='home-link mt-[1.6rem] text-4xl p-2 text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : undefined)}>
					Home
				</NavLink>
			</li>

			<li className='about-us-link mt-[1.6rem] text-4xl p-2 text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to='/about-us' className={({ isActive }) => (isActive ? 'active' : undefined)}>
					O nas
				</NavLink>
			</li>
			<li className='contact-link mt-[1.6rem] text-4xl p-2 text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to='/contact' className={({ isActive }) => (isActive ? 'active' : undefined)}>
					Kontakt
				</NavLink>
			</li>
			<li className='header__signup mt-[1.6rem] p-2 text-4xl text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to='/auth/signup' className={({ isActive }) => (isActive ? 'active' : undefined)}>
					Signup
				</NavLink>
			</li>
			<li className='header__login mt-[1.6rem] p-2  text-4xl text-[var(--navLinks)]' onClick={handleMobileNavigation}>
				<NavLink to='/auth/login' className={({ isActive }) => (isActive ? 'active' : undefined)}>
					Login
				</NavLink>
			</li>
		</>
	)
}
