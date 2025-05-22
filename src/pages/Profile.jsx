import { motion } from 'framer-motion'
import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import UserProfile from '../components/user/UserProfile'

export default function ProfilePage() {
	const currentTheme = useContext(DarkModeContext).themeMode
	let titleStyle = ''

	if (currentTheme === 'dark') {
		titleStyle = ' text-shadow'
	}

	return (
		<motion.section
			mode={currentTheme.currentMode}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className='relative flex flex-col justify-center items-center w-full'>
			<h2 className={'mt-10 text-[3.6rem] text-center font-medium text-[var(--titleBg)]' + titleStyle}>Twój Profil</h2>
			<UserProfile />
		</motion.section>
	)
}
