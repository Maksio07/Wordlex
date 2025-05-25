import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { DarkModeContext } from '../../../store/DarkModeContext'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import MobileAuthNavigation from './MobileAuthNavigation'
import MobileNoAuthNavigation from './MobileNoAuthNavigation'
import logo from '../../../assets/logo.png'
import Moon from '../../icons/Action/Moon'
import Sun from '../../icons/Action/Sun'
import Burger from '../../icons/Action/Burger'
import Xicon from '../../icons/Action/Xicon'

export default function MobileNavigation({ navBg }) {
	const currentModeCtx = useContext(DarkModeContext)
	const userID = useContext(IsUserAuthContext).userIDSession
	const [mobileNavigationIsActive, setMobileNavigation] = useState(false)
	let darkShadow = ''

	function handleMobileNavigation() {
		setMobileNavigation(prevState => !prevState)
		document.body.classList.toggle('mobile-navigation-active')
	}

	if(currentModeCtx.themeMode === 'dark') {
		darkShadow = ' nav-icon-shadow rounded-full'
	}


	return (
		<nav className='nav-mobile relative' mode={currentModeCtx.themeMode}>
			{mobileNavigationIsActive ? (
				<motion.ul
					className='flex flex-col relative justify-center items-center h-screen w-screen bg-[var(--mobileNavBg)]'
					initial={{ opacity: 0, x: '-50%' }}
					animate={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}>
					<li className='absolute top-0 left-0 mt-4 ml-4'>
						<NavLink to={userID ? `/users/${userID}` : '/'}>
							<img src={logo} alt='This is a logo.' className={'nav__logo-btn w-[7rem] h-[7rem] ' + darkShadow} />
						</NavLink>
					</li>
					{userID ? (
						<MobileAuthNavigation
							handleMobileNavigation={handleMobileNavigation}
							mobileNavigationIsActive={mobileNavigationIsActive}
						/>
					) : (
						<MobileNoAuthNavigation handleMobileNavigation={handleMobileNavigation} />
					)}

					<li
						className='absolute right-0 mr-8 top-[8rem]'
						onClick={() => currentModeCtx.setThemeHandler(currentModeCtx.themeMode === 'light' ? 'dark' : 'light')}>
						<button type='button' className='mode-icon cursor-pointer' aria-label='Zmień kolor'>
							{currentModeCtx.themeMode === 'light' ? (
								<Moon width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} />
							) : (
								<Sun width={'2.2rem'} heigth={'2.2rem'} fill={'var(--navLinks)'} stroke={'var(--navLinks)'} />
							)}
						</button>
					</li>
					<button
						type='button'
						onClick={handleMobileNavigation}
						aria-label='Zmień kolor'
						className='nav-icon absolute right-0 top-5 mr-4 p-3 cursor-pointer'>
						{mobileNavigationIsActive ? (
							<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--navLinks)'} />
						) : (
							<Burger width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--navLinks)'} />
						)}
					</button>
				</motion.ul>
			) : (
				<ul className={'nav-items flex flex-row items-center justify-between w-[100vw] h-[7rem]' + navBg}>
					<li className='ml-[4.2rem]'>
						<NavLink to={userID ? `/users/${userID}` : '/'}>
							<img src={logo} alt='This is a logo.'className={'nav__logo-btn w-[7rem] h-[7rem] ' + darkShadow} />
						</NavLink>
					</li>
					<button
						type='button'
						aria-label='Zmień kolor'
						onClick={handleMobileNavigation}
						className='nav-icon absolute right-0 top-5 mr-4 p-3 cursor-pointer'>
						{mobileNavigationIsActive ? (
							<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--navLinks)'} />
						) : (
							<Burger width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--navLinks)'} />
						)}
					</button>
				</ul>
			)}
		</nav>
	)
}
