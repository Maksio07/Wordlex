import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { motion } from 'motion/react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import Button from '../../../UI/Button'

export default function EndModal({ handleEndModalActive, words, userId, languageId, topicId }) {
	const changeWordId = useContext(IsUserAuthContext).setWordIdSession
	const firstWordId = words[0]._id

	const navigateToFirstWord = () => {
		changeWordId(firstWordId)
		handleEndModalActive()
		window.location.reload()
	}

	return (
			<motion.dialog
				open
				className='end-modal absolute top-[50%] left-[50%] w-[46rem] h-[26rem] rounded-lg bg-[var(--mobileNavBg)] z-[10] max-[468px]:w-[34rem] max-[468px]:h-[34rem] max-[375px]:w-[28rem] max-[375px]:h-[42rem]'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}>
				<h2 className='my-[1.6rem] text-[2.2rem] text-center font-medium text-[var(--titleBg)]'>Brawo! Zrobione!</h2>
				<p className='mx-[1rem] mb-[2rem] text-center text-[1.6rem] text-[var(--titleBg)] tracking-[1px]'>
					Wszystkie słowa z danego tematu zostały zrobione. Możesz zacząć od początku albo wrócić do innych tematów 😎
				</p>
				<div className='end-modal__controlls flex justify-evenly my-[2rem] max-[468px]:flex-col max-[468px]:items-center'>
					<Button onClick={navigateToFirstWord}>
						<Link to={`/users/${userId}/languages/${languageId}/topics/${topicId}/words/${firstWordId}`}>
							Zacznij od początku
						</Link>
					</Button>
					<Button onClick={handleEndModalActive}>
						<Link to={`/users/${userId}/languages/${languageId}`}>Przejdź do tematów</Link>
					</Button>
				</div>
			</motion.dialog>
	)
}
