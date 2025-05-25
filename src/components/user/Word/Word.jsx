import { useContext, useEffect, useState, useCallback } from 'react'
import { motion } from 'motion/react'
import { DarkModeContext } from '../../../store/DarkModeContext'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import WordData from './WordData'
import WordControlls from './WordControls'
import EndModal from './EndModal'

export default function Word({ userId, languageId, topicId, wordId }) {
	const currentModeCtx = useContext(DarkModeContext)
	const [word, setWord] = useState('')
	const [words, setWords] = useState([])
	const { isLoading, error, sendRequest } = useHTTP()
	const [endModalIsActive, setEndModalIsActive] = useState(false)

	const getWord = useCallback(async () => {
		const resData = await sendRequest(
			`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}/topics/${topicId}/words/${wordId}`
		)

		if (resData !== undefined) {
			setWords(resData.userWords)
			setWord(resData.word)
		}
	}, [])

	useEffect(() => {
		getWord()
	}, [])

	const currentWordIndex = words.findIndex(w => {
		if (word !== undefined) {
			return w._id === word._id
		}
	})

	const currentWord = words[currentWordIndex]
	let nextWord = words.length !== 0 ? words[currentWordIndex + 1] : ''
	let nextWordId

	const lastWord = words[words.length - 1]
	const firstWord = words[0]
	let previousWord = words.length !== 0 ? words[currentWordIndex - 1] : ''
	let previousWordId

	if (nextWord === lastWord) {
		nextWordId = lastWord._id
	} else if (nextWord !== undefined) {
		nextWordId = nextWord._id
	}

	if (previousWord === firstWord) {
		previousWordId = firstWord._id
	} else if (previousWord !== undefined) {
		previousWordId = previousWord._id
	}

	function handleNextWordData() {
		setWord(words[currentWordIndex + 1])
	}

	function handlePreviousWordData() {
		setWord(words[currentWordIndex - 1])
	}

	const handleEndModalActive = () => {
		document.body.classList.toggle('mobile-navigation-active')
		setEndModalIsActive(prevState => !prevState)
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Pobieram dane, proszę czekać...' />
			) : (
				<>
					{endModalIsActive ? (
						<motion.div
							className='shadow'
							initial={{ opacity: 0, transition: { duration: 0.5 } }}
							animate={{ opacity: 1 }}></motion.div>
					) : (
						''
					)}
					<motion.section
						mode={currentModeCtx.currentMode}
						className='word w-full max-[1400px]:justify-center max-[450px]:mb-[2rem]'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: { duration: 0.6 } }}>
						<WordControlls
							userId={userId}
							languageId={languageId}
							topicId={topicId}
							nextWordId={nextWordId}
							wordId={wordId}
							handleNextWordData={handleNextWordData}
							handlePreviousWordData={handlePreviousWordData}
							handleEndModalActive={handleEndModalActive}
							lastWord={lastWord}
							firstWord={firstWord}
							previousWordId={previousWordId}
							currentWord={currentWord}
						/>
						{error && <p className='error-text mb-[1.4rem] text-[2.2rem] text-center text-red-600'>{error}</p>}
						<WordData word={word} />
						{endModalIsActive && (
							<EndModal
								handleEndModalActive={handleEndModalActive}
								words={words}
								userId={userId}
								languageId={languageId}
								topicId={topicId}
							/>
						)}
					</motion.section>
				</>
			)}
		</>
	)
}
