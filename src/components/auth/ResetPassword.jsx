import { useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { DarkModeContext } from '../../store/DarkModeContext'
import { canBePassword } from '../../util/validation'
import useHTTP from '../../hooks/useHTTP'
import Loading from '../Loading'
import Form from '../../UI/Form'
import Input from '../../UI/Input'

export default function ResetPassword() {
	const currentModeCtx = useContext(DarkModeContext)
	const navigate = useNavigate()
	const token = useParams()
	const [newPassword, setNewPassword] = useState('')
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()

	function handleUserNewPassword(e) {
		setNewPassword(e.target.value)
	}

	async function updatePassword(e) {
		e.preventDefault()

		if (!canBePassword(newPassword)) {
			setError('Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków.')
			return new Error(
				'Hasło powinno zawierać przynajmniej jedną dużą literę, znak specjalny, cyfrę oraz conajmniej 8 znaków.'
			)
		}

		const resData = await sendRequest(`https://wordlex-api.onrender.com/auth/reset-password`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newPassword: newPassword,
				token: token,
			}),
		})

		resData !== undefined && setConfirmMessage(resData.message)

		navigate('/auth/login')
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Zmieniam hasło, proszę czekać...'/>
			) : (
				<section
					className='reset flex flex-col items-center justify-center min-h-[90vh]'
					mode={currentModeCtx.currentMode}
					onSubmit={updatePassword}>
					<p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-green-600'>{confirmMessage}</p>
					{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<Form className='min-h-[34rem] w-[40rem]' title={'Reset Hasła'} buttonCaption={'Zaktualizuj hasło'}>
						<Input
							labelText='Nowe Hasło:'
							htmlFor='newPassword'
							name='newPassword'
							id='newPassword'
							type='password'
							minLength='8'
							placeHolder='Wpisz nowe hasło'
							onChange={handleUserNewPassword}
						/>
						<p className='my-[1rem] text-[1.4rem] text-center text-[var(--titleBg)]'>Wpisz nowe hasło</p>
					</Form>
				</section>
			)}
		</>
	)
}
