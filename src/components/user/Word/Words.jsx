import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import Word from './Word'

export default function Words() {
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const userId = useContext(IsUserAuthContext).userIDSession
	const topicId = useContext(IsUserAuthContext).topicIdSession
	const wordId = useContext(IsUserAuthContext).wordIdSession
	let error

	if (wordId !== null || wordId !== undefined) {
		return (
			<>
				<Navigate to={`/users/${userId}/languages/${languageId}/topics/${topicId}/words/${wordId}`} />
				<Word topicId={topicId} languageId={languageId} userId={userId} wordId={wordId} />
			</>
		)
	} else {
		error = <p className='error'>Coś poszło nie tak, spróbuj ponownie!</p>
	}

	return <section>{error}</section>
}
