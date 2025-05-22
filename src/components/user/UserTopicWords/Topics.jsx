import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import TopicWords from './TopicWords'

export default function Topics() {
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const userId = useContext(IsUserAuthContext).userIDSession
	const topicId = useContext(IsUserAuthContext).topicIdSession
	let error

	if (topicId !== null || topicId !== undefined) {
		return (
			<>
				<Navigate to={`/users/${userId}/languages/${languageId}/topics/${topicId}`} />
				<TopicWords topicId={topicId} languageId={languageId} userId={userId}/>
			</>
		)
	} else {
		error = <p className='error'>Coś poszło nie tak, spróbuj ponownie!</p>
	}

	return <section>{error}</section>
}
