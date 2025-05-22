import { useState, useContext } from 'react'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { DarkModeContext } from '../../store/DarkModeContext'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import { isEmail, isNotEmpty } from '../../util/validation'
import useHTTP from '../../hooks/useHTTP'
import LoginForm from './LoginForm'
import Loading from '../Loading'

export default function Login() {
	const navigate = useNavigate()
	const currentModeCtx = useContext(DarkModeContext)
	const setToken = useContext(IsUserAuthContext).setToken
	const setSession = useContext(IsUserAuthContext).setSession
	const setUserIDSession = useContext(IsUserAuthContext).setUserIDSession
	const [userData, setUserData] = useState({
		email: '',
		password: '',
	})
	const { isLoading, error, sendRequest, setError } = useHTTP()

	function handleUserData(e) {
		e.preventDefault()
		const target = e.target

		setUserData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})
	}

	async function loginUser(e) {
		e.preventDefault()

		if (!isEmail(userData.email)) {
			setError('Podany email nie odpowiada formatowi tekst@tekst.domena.')
			return new Error('Podany email nie odpowiada formatowi tekst@tekst.domena.')
		} else if (!isNotEmpty(userData.email || userData.password)) {
			setError('Wszystkie pola powinny być wypełnione.')
			return new Error('Wszystkie pola powinny być wypełnione.')
		} else {
			setError('')
		}

		const resData = await sendRequest('http://localhost:8080/auth/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: userData.email,
				password: userData.password,
			}),
		})

		if (resData !== undefined) {
			setSession(resData.data[3].username)
			setUserIDSession(resData.data[3].userID)
			setToken(resData.data[2])
		}

		navigate(`/users`)
	}

	return (
		<>
			{isLoading && <Loading loadingText='Loguję użytkownika, proszę czekać...' />}
			{!isLoading && (
				<motion.section
					className='login flex flex-col items-center justify-center min-h-[90vh]'
					mode={currentModeCtx}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.8 } }}>
					{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<LoginForm userData={userData} onSubmit={loginUser} onChange={handleUserData} />
				</motion.section>
			)}
		</>
	)
}
