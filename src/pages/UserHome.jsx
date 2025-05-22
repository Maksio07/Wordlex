import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../store/IsUserAuthContext'

import UserHome from '../components/user/UserHome'

export default function UserHomePage() {
	let { id } = useParams()
	id = useContext(IsUserAuthContext).userIDSession

	return (
			<UserHome  id={id}/>
	)
}
