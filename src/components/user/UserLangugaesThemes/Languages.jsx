import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import UserLanguageTopics from './UserLanguageTopics'

export default function Languages() {
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const userId = useContext(IsUserAuthContext).userIDSession
	let error


	if (languageId !== null || languageId !== undefined) {
		return (
			<>
				<Navigate to={`/users/${userId}/languages/${languageId}`} />
				<UserLanguageTopics />
			</>
		)
	} else {
		error = <p className='error'>Coś poszło nie tak, spróbuj ponownie!</p>
	}

	return <section>{error}</section>
}
