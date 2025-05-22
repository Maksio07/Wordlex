import { useContext, useCallback, useEffect, useState } from 'react'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import useHTTP from '../../hooks/useHTTP'
import { isEmail, isNotEmpty, canBePassword } from '../../util/validation'
import UserProfileForm from './UserProfileForm'
import Loading from '../Loading'

export default function UserProfile() {
	const userId = useContext(IsUserAuthContext).userIDSession
	const [userData, setUserData] = useState('')
	const [inputIsActive, setInputIsActive] = useState({
		name: false,
		email: false,
		password: false,
		repeatPassword: false,
	})
	const [repeatPasswordValue, setRepeatPasswordValue] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()
	const [confirmMessage, setConfirmMessage] = useState('')

	const loadUser = useCallback(async () => {
		const resData = await sendRequest(`http://localhost:8080/users/${userId}/profile`, {})

		if (resData !== undefined) {
			setUserData(resData.data)
			setRepeatPasswordValue(resData.data.password)
		} else {
			setError('Coś poszło nie tak, spróbuj ponownie.')
			return new Error('Coś poszło nie tak, spróbuj ponownie.')
		}
	}, [])

	useEffect(() => {
		loadUser()
	}, [])

	function handleInputIsActive(e) {
		const inputName = e.target.closest('div').id

		if (e.target.closest('button').firstChild.textContent === 'Edytuj') {
			setInputIsActive(prevState => {
				return {
					...prevState,
					[inputName]: true,
				}
			})
		} else {
			setInputIsActive(prevState => {
				return {
					...prevState,
					[inputName]: false,
				}
			})
		}
	}

	function handleNewUserData(e) {
		const target = e.target

		setUserData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})

		if (target.name === 'repeatPassword') {
			setRepeatPasswordValue(target.value)
		}
	}

	async function updateUserData(e) {
		e.preventDefault()

		if (inputIsActive.name || inputIsActive.email || inputIsActive.password || inputIsActive.repeatPassword) {
			setError('Nie można zapisać zmian, dopóki nie są zamknięte wszystkie okna edycji danych.')
			return new Error('Nie można zapisać zmian, dopóki nie są zamknięte wszystkie okna edycji danych.')
		}

		if (!isNotEmpty(userData.name) || !isNotEmpty(userData.email) || !isNotEmpty(userData.password)) {
			setError('Dane nie mogą być puste.')
			return new Error('Dane nie mogą być puste.')
		} else if (!isEmail(userData.email)) {
			setError('Podany email nie odpowiada formatowi tekst@tekst.domena.')
			return new Error('Podany email nie odpowiada formatowi tekst@tekst.domena.')
		} else if (userData.password !== repeatPasswordValue) {
			setError('Hasła powinny być takie same.')
			return new Error('Hasła powinny być takie same.')
		} else if (!canBePassword(userData.password) && userData.password.length !== 60) {
			setError(
				'Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków. '
			)
			return new Error(
				'Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków. '
			)
		} else {
			setError('')
		}

		const resData = await sendRequest(`http://localhost:8080/users/${userId}/profile`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newName: userData.name,
				newEmail: userData.email,
				newPassword: userData.password,
				userId: userId,
			}),
		})

		resData !== undefined && setConfirmMessage('Dane zostały zaktualizowane.')

		setTimeout(() => {
			window.location.reload()
		}, 1000)
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Pobieram dane, proszę czekać...' />
			) : (
				<UserProfileForm
					userData={userData}
					inputIsActive={inputIsActive}
					handleInputIsActive={handleInputIsActive}
					handleNewUserData={handleNewUserData}
					updateUserData={updateUserData}
					error={error}
					confirmMessage={confirmMessage}
					isLoading={isLoading}
				/>
			)}
		</>
	)
}
