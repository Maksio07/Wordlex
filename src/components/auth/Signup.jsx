import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import useHTTP from '../../hooks/useHTTP'
import { isEmail, canBePassword, isNotEmpty } from '../../util/validation'
import DarkModeContext from '../../store/DarkModeContext'
import Loading from '../Loading'
import SignupForm from './SignupForm'

export default function Signup() {
	const currentModeCtx = useContext(DarkModeContext)
	const navigate = useNavigate()
	const [confirmPassword, setConfirmPassword] = useState('')
	const [userData, setUserData] = useState({
		name: '',
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

		setConfirmPassword(prevState => {
			return target.name === 'confirmPassword' ? target.value : prevState
		})
	}

	async function registerNewUser(e) {
		e.preventDefault()

		if (!isEmail(userData.email)) {
			setError('Podany email nie odpowiada formatowi tekst@tekst.domena.')
			return new Error('Podany email nie odpowiada formatowi tekst@tekst.domena.')
		} else if (!isNotEmpty(userData.email || userData.name || userData.password || confirmPassword)) {
			setError('Wszystkie pola powinny być uzupewnione.')
			return new Error('Wszystkie pola powinny być uzupewnione.')
		} else if (!canBePassword(userData.password)) {
			setError(
				'Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków. '
			)
			return new Error(
				'Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków.'
			)
		} else if (userData.password !== confirmPassword) {
			setError('Hasła powinny być takie same.')
			return new Error('Hasła powinny być takie same.')
		} else {
			setError('')
		}

		const resData = await sendRequest('http://localhost:8080/auth/signup', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: userData.name,
				email: userData.email,
				password: userData.password,
			}),
		})

		resData !== undefined && navigate('/auth/login')
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Tworzę nowe konto, proszę czekać...' />
			) : (
				<motion.section
					className='signup flex flex-col items-center justify-center min-h-[90vh]'
					mode={currentModeCtx}
					initial={{  opacity: 0 }}
					animate={{  opacity: 1, transition: { duration: 0.6 } }}>
					{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<SignupForm
						onSubmit={registerNewUser}
						onChange={handleUserData}
						userData={userData}
						confirmPassword={confirmPassword}
					/>
				</motion.section>
			)}
		</>
	)
}
