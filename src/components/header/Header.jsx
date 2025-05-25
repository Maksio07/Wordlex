import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DarkModeContext } from '../../store/DarkModeContext'
import { motion } from 'motion/react'
import Navigation from '../header/Navigation'

export default function Header() {
	const currentModeCtx = useContext(DarkModeContext)
	let textShadow = ''

	if(currentModeCtx.themeMode === 'dark') {
		textShadow = 'text-shadow'
	}

	return (
		<>
			<motion.header
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}
				className='header'
				mode={currentModeCtx.currentMode}>
				<div className='hero-img min-h-screen bg-[url(../assets/header-large.jpg)] max-[512px]:bg-[url(../assets/header-small.jpg)]'>
					<Navigation />
					<div className='box-shadow'></div>
					<motion.div
						className='hero__text flex flex-col justify-center items-center min-h-[60vh]'
						initial={{ y: '-50%' }}
						animate={{ y: 0, transition: { duration: 0.6 } }}>
						<h1 className={'hero__text__title text-6xl font-bold text-[var(--navLinks)] ' + textShadow}>
							Wordlex - i nauka robi się przyjemniejsza!
						</h1>
						<p className={'hero__text__text mt-[4rem] text-4xl font-medium text-[var(--navLinks)] ' + textShadow}>
							Po prostu załóż konto i zacznij dodawać słowa 😉
						</p>
						<button type='button' aria-label='Zacznij' className={'hero__text__btn mt-[6rem] p-[2.4rem] text-[2.2rem] text-[var(--navLinks)] ' + textShadow}>
							<NavLink to='/auth/login' className={({ isActive }) => (isActive ? 'active' : undefined)}>
								Zacznij
							</NavLink>
						</button>
					</motion.div>
				</div>
			</motion.header>
		</>
	)
}
