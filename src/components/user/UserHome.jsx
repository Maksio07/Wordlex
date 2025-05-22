import { useContext, useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import { DarkModeContext } from '../../store/DarkModeContext'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import useHTTP from '../../hooks/useHTTP'
import Loading from '../Loading'
import ChooseLanguage from './ChooseLanguage'
import UserLanguageList from './UserLangugagesList'

export default function UserHome({ id }) {
	const currentModeCtx = useContext(DarkModeContext)
	const [addLanguageIsActive, setAddLanguageIsActive] = useState(false)
	const [languages, setLanguages] = useState([])
	const setLanguageId = useContext(IsUserAuthContext).setLanguageIdSession
	const [userName, setUserName] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()

	let titleStyle = ''

	if (currentModeCtx.themeMode === 'dark') {
		titleStyle = ' text-shadow'
	}

	function handleAddLanguageState() {
		document.body.classList.toggle('mobile-navigation-active')
		setAddLanguageIsActive(prevState => !prevState)
	}

	const loadLanguages = useCallback(async () => {
		const resData = await sendRequest(`http://localhost:8080/users/${id}`, {})

		if (resData !== undefined) {
			setUserName(resData.userName)
			setLanguages(resData.data)
			setLanguageId('')
		} else {
			setError('Coś poszło nie tak, spróbuj ponownie.')
			return new Error('Coś poszło nie tak, spróbuj ponownie.')
		}
	}, [])

	useEffect(() => {
		loadLanguages()
	}, [])

	async function deleteLanguage(e) {
		const languageId = e.target.closest('li').id

		const resData = await sendRequest(`http://localhost:8080/users/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				languageId: languageId,
				userId: id,
			}),
		})

		resData !== undefined && window.location.reload()
	}

	if (addLanguageIsActive) {
		window.scrollTo({
			top: 50 + '%',
			behavior: 'smooth',
		})
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Pobieram dane, proszę czekać...' />
			) : (
				<>
					{addLanguageIsActive ? (
						<motion.div
							className='shadow'
							initial={{ opacity: 0, transition: { duration: 0.5 } }}
							animate={{ opacity: 1 }}></motion.div>
					) : (
						''
					)}
					<section mode={currentModeCtx.currentMode} className='user-home relative min-h-[100vh] w-full'>
						<motion.h1
							className={'mt-10 text-[3.6rem] text-center font-medium text-[var(--titleBg)]' + titleStyle}
							initial={{ y: '-10vh', opacity: 0, transition: { duration: 0.5 } }}
							animate={{ y: 0, opacity: 1 }}>
							Witaj, {userName}!
						</motion.h1>
						<motion.p
							className={'my-8 text-3xl font-medium text-center text-[var(--titleBg)]' + titleStyle}
							initial={{ y: '-10vh', opacity: 0, transition: { duration: 0.6 } }}
							animate={{ y: 0, opacity: 1 }}>
							To jest twój profil. Możesz tutaj wybrać języki, do których możesz dodawać słówka.
						</motion.p>
						{error && <p className='error-text my-[1.8rem] text-[2.4rem] ] text-center text-red-600'>{error}</p>}
						<UserLanguageList
							languages={languages}
							handleAddLanguageState={handleAddLanguageState}
							deleteLanguage={deleteLanguage}
							titleStyle={titleStyle}
						/>
						{addLanguageIsActive && <ChooseLanguage handleAddLanguageState={handleAddLanguageState} id={id} />}
					</section>
				</>
			)}
		</>
	)
}
