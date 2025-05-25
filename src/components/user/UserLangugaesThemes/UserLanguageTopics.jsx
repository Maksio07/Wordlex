import { useState, useContext, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import { DarkModeContext } from '../../../store/DarkModeContext'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import useHTTP from '../../../hooks/useHTTP'
import UserTopicsList from './UserTopicsList'
import AddTopicForm from './AddTopicForm'
import EditTopicForm from './EditTopicForm'
import Loading from '../../Loading'
import CreateButton from '../../../UI/CreateButton'
import Plus from '../../icons/Action/Plus'

export default function UserLanguageTopics() {
	const currentModeCtx = useContext(DarkModeContext)
	const userId = useContext(IsUserAuthContext).userIDSession
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const setTopicIdSession = useContext(IsUserAuthContext).setTopicIdSession
	const [addThemeFormIsActive, setAddThemeFormIsActive] = useState(false)
	const [editTopicIsActive, setEditFormIsActive] = useState(false)
	const [languageTopicData, setLanguageTopicData] = useState({
		name: '',
		polishName: '',
	})
	const [newLanguageTopicData, setNewLanguageTopicData] = useState({
		newName: '',
		newPolishName: '',
	})
	const [topics, setTopics] = useState([])
	const [topicId, setTopicId] = useState('')
	const [language, setLanguage] = useState('')
	const [userWords, setUserWords] = useState('')
	const { isLoading, error, sendRequest } = useHTTP()
	let titleStyle = ''

	if (currentModeCtx.themeMode === 'dark') {
		titleStyle = ' text-shadow'
	}

	function handleAddTopicFormState() {
		document.body.classList.toggle('mobile-navigation-active')
		setAddThemeFormIsActive(prevState => !prevState)
	}

	function handleEditTopicFormState() {
		document.body.classList.toggle('mobile-navigation-active')
		setEditFormIsActive(prevState => !prevState)
	}

	const handleTopicId = value => {
		setTopicId(value)
	}

	function handleLanguageTopicData(e) {
		const target = e.target

		setLanguageTopicData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})
	}

	function handleNewLanguageTopicData(e) {
		const target = e.target

		setNewLanguageTopicData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})
	}

	if (addThemeFormIsActive || editTopicIsActive) {
		window.scrollTo({
			top: 50 + '%',
			behavior: 'smooth',
		})
	}

	const loadTopics = useCallback(async () => {
		const resData = await sendRequest(`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}`, {})

		if (resData !== undefined) {
			setTopics(resData.data[0].topics)
			setLanguage(resData.data[0])
			setUserWords(resData.words)
			setTopicIdSession('')
		}
	}, [])

	useEffect(() => {
		loadTopics()
	}, [])

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Pobieram dane, proszę czekać...' />
			) : (
				<>
					{addThemeFormIsActive || editTopicIsActive ? (
						<motion.div
							className='shadow'
							initial={{ opacity: 0, transition: { duration: 0.5 } }}
							animate={{ opacity: 1 }}></motion.div>
					) : (
						''
					)}
					<motion.section
						className='topics relative min-h-full w-full'
						mode={currentModeCtx.currentMode}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.6 } }}>
						<h2 className={'topics__title flex items-center justify-center mt-10 text-[3.6rem] text-center font-medium text-[var(--titleBg)] max-[560px]:text-[2.8rem] max-[420px]:items-start max-[375px]:text-[2.6rem] max-[375px]:flex-col-reverse max-[375px]:items-center' + titleStyle}>
							Stwórz lub wybierz temat
							<img
								className='ml-5 w-[6rem] max-[560px]:w-[5rem] max-[375px]:w-[6rem]'
								src={`/src/assets/flags/${languageId}.svg`}
								alt={`${languageId} Flag`}
							/>
						</h2>
						{error && <p className='error-text my-[1.8rem] text-[2.4rem] ] text-center text-red-600'>{error}</p>}

						<div className='flex flex-col w-[100vw] items-start'>
							<CreateButton onClick={handleAddTopicFormState} className={'mx-[1rem]'}>
								<Plus width={'3rem'} height={'3rem'} fill={'var(--navLinks)'} />
								<span className='mr-3'></span>
								Dodaj Temat
							</CreateButton>
							{addThemeFormIsActive && (
								<AddTopicForm
									handleAddTopicFormState={handleAddTopicFormState}
									handleLanguageTopicData={handleLanguageTopicData}
									languageTopicData={languageTopicData}
									language={language}
								/>
							)}
						</div>

						{editTopicIsActive && (
							<EditTopicForm
								handleEditTopicFormState={handleEditTopicFormState}
								handleNewLanguageTopicData={handleNewLanguageTopicData}
								languageTopicData={languageTopicData}
								newLanguageTopicData={newLanguageTopicData}
								language={language}
								topicId={topicId}
							/>
						)}
						<UserTopicsList
							topics={topics}
							userId={userId}
							languageId={languageId}
							handleEditTopicFormState={handleEditTopicFormState}
							handleTopicId={handleTopicId}
							userWords={userWords}
						/>
					</motion.section>
				</>
			)}
		</>
	)
}
