import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'

export default function Users() {
	const id = useContext(IsUserAuthContext).userIDSession
	let error

	if (id !== null || id !== undefined) {
		return <Navigate to={`/users/${id}`} />
	} else {
		error = <p className='error'>Coś poszło nie tak, spróbuj ponownie!</p>
	}

	return <section>{error}</section>
}
