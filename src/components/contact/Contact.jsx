import { useState } from 'react'
import useHTTP from '../../hooks/useHTTP'
import { isEmail, isNotEmpty } from '../../util/validation'
import ContactForm from './ContactForm'
import phoneBig from '../../assets/contact/phone-big.jpg'
import phoneSmall from '../../assets/contact/phone-small.jpg'

export default function Contact() {
	const [contactData, setContactData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()

	const handleContactData = e => {
		e.preventDefault()

		setContactData(prevState => {
			return {
				...prevState,
				[e.target.name]: e.target.value,
			}
		})
	}
	
	async function sendMessage(e) {
		e.preventDefault()

		if (!isEmail(contactData.email)) {
			setError('Podany email nie odpowiada formatowi tekst@tekst.domena.')
			return new Error('Podany email nie odpowiada formatowi tekst@tekst.domena.')
		} else if (!isNotEmpty(contactData.email || contactData.message || contactData.name || contactData.subject)) {
			setError('Wszystkie pola powinny być wypełnione.')
			return new Error('Wszystkie pola powinny być wypełnione.')
		} else {
			setError('')
		}

		const resData = await sendRequest('http://localhost:8080/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: contactData.name,
				email: contactData.email,
				subject: contactData.subject,
				message: contactData.message,
			}),
		})

		if (resData !== undefined) {
			setConfirmMessage('Wiadomość wysłana, odpowiemy tak szybko, jak tylko możemy 😊')
		}

		setTimeout(() => {
			setConfirmMessage('')
			window.location.reload()
		}, 3000)
	}

	return (
		<>
			<p className='error-text mb-[1.8rem] text-[1.8rem] text-center text-green-600'>{confirmMessage}</p>
			{error && <p className='error-text mb-[1.8rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
			<div className='contact__write-us flex justify-between h-[60rem] w-[94%] bg-[var(--aboutUsCardBg)] rounded-2xl max-[1080px]:mt-[3rem] max-[720px]:mt-[8rem] max-[720px]:flex-col max-[720px]:items-center max-[720px]:h-[90rem] max-[720px]:pb-[2rem]'>
				<img
					src={window.innerWidth > 512 ? phoneBig : phoneSmall}
					alt='A man in a suit with tablet and the city in the background.'
					className='contact__write-us--img w-[48%] h-[100%]  object-cover rounded-s-2xl max-[1000px]:object-left max-[720px]:w-full max-[720px]:h-[30rem] '
				/>
				<ContactForm onSubmit={sendMessage} onChange={handleContactData} isLoading={isLoading} />
			</div>
		</>
	)
}
