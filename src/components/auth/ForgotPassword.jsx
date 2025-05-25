import { useState, useContext } from 'react'
import { DarkModeContext } from '../../store/DarkModeContext'
import { motion } from 'motion/react'
import useHTTP from '../../hooks/useHTTP'
import Loading from '../Loading'
import Input from '../../UI/Input'
import Form from '../../UI/Form'

export default function ForgotPassword() {
	const currentModeCtx = useContext(DarkModeContext)
	const [email, setEmail] = useState('')
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest } = useHTTP()

	function handleUserEmail(e) {
		setEmail(e.target.value)
	}

	async function sendLink(e) {
		e.preventDefault()

		const resData = await sendRequest('https://wordlex-api.onrender.com/auth/forgot-password', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: email,
			}),
		})

		resData !== undefined &&
			setConfirmMessage('Na podany email wysłaliśmy link do zresetowania hasła, proszę sprawdzić swoją skrzynkę.')
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Wysyłam link na podany email, proszę czekać...' />
			) : (
				<motion.section
					className='reset flex flex-col items-center justify-center min-h-[90vh]'
					mode={currentModeCtx.currentMode}
					initial={{ y: '-30vh', opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { duration: 0.5 } }}
					onSubmit={sendLink}>
					<p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-green-600'>{confirmMessage}</p>
					<p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>
						{confirmMessage !== '' ? '' : error}
					</p>
					<Form className='min-h-[36rem] w-[40rem]' title={'Reset Hasła'} buttonCaption={'Wyślij email'}>
						<Input
							labelText='Email:'
							htmlFor='email'
							name='email'
							id='email'
							type='text'
							minLength='4'
							placeHolder='Wpisz email'
							onChange={handleUserEmail}
						/>
						<p className='m-[1rem] text-[1.4rem] text-center text-[var(--titleBg)]'>
							Podaj email do swojego konta, na który wyślemy link do zmiany hasła.
						</p>
					</Form>
				</motion.section>
			)}
		</>
	)
}
