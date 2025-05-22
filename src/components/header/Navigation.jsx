import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../store/DarkModeContext'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import AuthNavigation from './AuthNavigation'
import MobileNavigation from './MobileNavigation/MobileNavigation.jsx'
import NoAuthNavigation from './NoAuthNavigation'
import logo from '../../assets/logo.png'

export default function Navigation() {
	const currentModeCtx = useContext(DarkModeContext)
	const userID = useContext(IsUserAuthContext).userIDSession
	const [navBackground, setNavBackground] = useState(' transparent')
	let navBg
	let darkShadow = ''

	const windowWidth = window.innerWidth

	const handleScroll = () => {
		const scrollY = window.scrollY

		if (scrollY >= 250 && window.location.pathname === '/about-us') {
			setNavBackground(' bg-[var(--aboutUsNavBg)] fixed z-50')
		} else {
			setNavBackground(' transparent')
		}
	}

	if (window.location.pathname === '/') {
		navBg = ' bg-[var(--navBg)]'
	} else if (window.location.pathname === '/about-us' && window.scrollY <= 250) {
		navBg = ' bg-transparent fixed z-50'
	} else if (scrollY >= 250 && window.location.pathname === '/about-us') {
		navBg = ' bg-[var(--aboutUsNavBg)] fixed z-50'
	} else {
		navBg = ' bg-[var(--navigationBasicBg)]'
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
	}, [])

	if(currentModeCtx.themeMode === 'dark') {
		darkShadow = ' nav-icon-shadow'
	}

	return (
		<>
			{windowWidth >= 690 ? (
				<nav className={'desktop-nav relative'} mode={currentModeCtx.themeMode}>
					<ul
						className={
							'nav-items flex flex-row items-center justify-between w-[100vw] h-[7rem] ' + navBg + navBackground
						}>
						<li className='ml-[4.2rem]'>
							<NavLink to={userID ? `/users/${userID}` : '/'}>
								<img src={logo} alt='This is a logo.' className={'nav__logo-btn w-[7rem] h-[7rem] rounded-full ' + darkShadow} />
							</NavLink>
						</li>
						{userID ? <AuthNavigation /> : <NoAuthNavigation />}
					</ul>
				</nav>
			) : (
				<MobileNavigation navBg={navBg} />
			)}
		</>
	)
}
