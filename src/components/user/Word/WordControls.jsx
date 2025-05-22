import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import CreateButton from '../../../UI/CreateButton'

export default function WordControlls({
	userId,
	languageId,
	topicId,
	nextWordId,
	wordId,
	handleNextWordData,
	handleEndModalActive,
	lastWord,
	previousWordId,
	handlePreviousWordData,
	firstWord,
	currentWord,
}) {
	const handleWordId = useContext(IsUserAuthContext).setWordIdSession

	const navigateToNextWord = () => {
		handleWordId(nextWordId)
		handleNextWordData()
	}

	const navigateToPreviousWord = () => {
		handleWordId(previousWordId)
		handlePreviousWordData()
	}

	let controllsStyles =
		'word__controllers flex justify-evenly w-full max-[550px]:justify-center max-[350px]:flex-col max-[350px]:items-center'

	let buttonsStyles = 'w-[17rem] bg-[var(--mobileNavBg)] hover:bg-[var(--elementsBackground)] min-w-[14rem] mr-[2rem] max-[715px]:justify-center max-[715px]:mb-[0rem] max-[715px]:mx-[1rem]'

	if (currentWord !== firstWord) {
		controllsStyles =
			'word__controllers flex justify-evenly w-full max-[715px]:flex-col max-[715px]:items-center max-[550px]:justify-center max-[350px]:flex-col max-[350px]:items-center'
		buttonsStyles = 'w-[17rem] bg-[var(--mobileNavBg)] hover:bg-[var(--elementsBackground)] min-w-[14rem] mr-[2rem] max-[715px]:mb-[0rem] max-[715px]:mr-[0rem]'
	}

	return (
		<div className={controllsStyles}>
			<CreateButton className=' w-[17rem] min-w-[14rem] bg-[var(--mobileNavBg)] hover:bg-[var(--elementsBackground)] max-[715px]:mb-[0rem] max-[715px]:mr-[0rem]'>
				<Link to={`/users/${userId}/languages/${languageId}/topics/${topicId}`}>Wróć</Link>
			</CreateButton>
			{currentWord !== firstWord && (
				<CreateButton className={buttonsStyles}>
					<Link
						to={`/users/${userId}/languages/${languageId}/topics/${topicId}/words/${previousWordId}`}
						onClick={navigateToPreviousWord}>
						Poprzednie
					</Link>
				</CreateButton>
			)}
			<CreateButton className={buttonsStyles}>
				<Link
					onClick={lastWord && wordId === lastWord._id ? handleEndModalActive : navigateToNextWord}
					to={
						lastWord && wordId === lastWord._id
							? `/users/${userId}/languages/${languageId}/topics/${topicId}/words/${lastWord._id}`
							: `/users/${userId}/languages/${languageId}/topics/${topicId}/words/${nextWordId}`
					}>
					Następne
				</Link>
			</CreateButton>
		</div>
	)
}
