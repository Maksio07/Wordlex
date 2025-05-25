import { useContext, useState, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import { DarkModeContext } from '../../../store/DarkModeContext'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import AddWordForm from './AddWordForm'
import EditWordForm from './EditWordForm'
import WordsList from './WordsList'
import CreateButton from '../../../UI/CreateButton'
import Plus from '../../icons/Action/Plus'

export default function TopicWords({ topicId, userId, languageId }) {
	const currentModeCtx = useContext(DarkModeContext)
	const setWordId = useContext(IsUserAuthContext).setWordIdSession
	const [addWordFormIsActive, setAddFormIsActive] = useState(false)
	const [editWordFormIsActive, setEditFormIsActive] = useState(false)
	const [wordToEdit, setWordToEdit] = useState('')
	const [langName, setLangName] = useState('')
	const [words, setWords] = useState('')
	const { isLoading, error, sendRequest } = useHTTP()
	const topicName = topicId.replaceAll('-', ' ').split(' ').slice(1).join(' ').toUpperCase()
	let language
	let titleStyle

	if (currentModeCtx.themeMode === 'dark') {
		titleStyle = ' text-shadow'
	}

	function handleAddWordFormIsActive() {
		document.body.classList.toggle('mobile-navigation-active')
		setAddFormIsActive(prevState => !prevState)
	}

	function handleEditWordFormIsActive(e) {
		document.body.classList.toggle('mobile-navigation-active')
		handleWordToEdit(e)
		setEditFormIsActive(prevState => !prevState)
	}

	function handleWordToEdit(e) {
		setWordToEdit(e.target.closest('li'))
	}

	const loadWords = useCallback(async () => {
		const resData = await sendRequest(`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}/topics/${topicId}`)

		if (resData !== undefined) {
			setWords(resData.data.words)
			setLangName(resData.langName)
			setWordId('')
		}
	}, [])

	useEffect(() => {
		loadWords()
	}, [])

	if (langName !== '') {
		language = langName.toLowerCase() + 'm'
	}

	if (addWordFormIsActive || editWordFormIsActive) {
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
					{addWordFormIsActive || editWordFormIsActive ? (
						<motion.div
							className='shadow'
							initial={{ opacity: 0, transition: { duration: 0.5 } }}
							animate={{ opacity: 1 }}></motion.div>
					) : (
						''
					)}
					<motion.section
						className='words relative w-full'
						mode={currentModeCtx.currentMode}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.5 } }}>
						<h2 className={'mt-10 text-[3.6rem] text-center font-medium text-[var(--titleBg)]' + titleStyle}>
							{topicName}
						</h2>
						{error && <p className='error-text my-[1.8rem] text-[2.4rem] ] text-center text-red-600'>{error}</p>}
						<CreateButton onClick={handleAddWordFormIsActive} className={'mx-[1rem]'}>
							<Plus width={'3rem'} height={'3rem'} fill={'var(--navLinks)'} />
							<span className='mr-3'></span>
							Dodaj słowo
						</CreateButton>

						{addWordFormIsActive && (
							<AddWordForm
								handleAddWordFormIsActive={handleAddWordFormIsActive}
								topicId={topicId}
								userId={userId}
								languageId={languageId}
								language={language}
							/>
						)}

						{editWordFormIsActive && (
							<EditWordForm
								handleEditWordFormIsActive={handleEditWordFormIsActive}
								topicId={topicId}
								userId={userId}
								languageId={languageId}
								wordToEdit={wordToEdit}
								words={words}
								language={language}
							/>
						)}

						<WordsList
							words={words}
							userId={userId}
							languageId={languageId}
							topicId={topicId}
							handleEditWordFormIsActive={handleEditWordFormIsActive}
							setWordId={setWordId}
						/>
					</motion.section>
				</>
			)}
		</>
	)
}
