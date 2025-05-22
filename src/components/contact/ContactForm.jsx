import { useContext } from 'react'
import { DarkModeContext } from '../../store/DarkModeContext'
import Input from '../../UI/Input'
import Button from '../../UI/Button'

export default function ContactForm({ onSubmit, onChange, isLoading }) {
	const currentTheme = useContext(DarkModeContext).themeMode
	let inputStyle = ''
	let labelStyle = ''

	if (currentTheme === 'dark') {
		inputStyle = ' contact__write-us'
		labelStyle = ' label-shadow'
	}

	return (
		<form
			className='flex flex-col justify-center items-center w-[50%] rounded-none bg-transparent max-[720px]:w-full max-[720px]:mt-[2rem]'
			onSubmit={onSubmit}>
			<Input
				className={
					'contact__write-us--input bg-[var(--white)] w-[50%] max-[1000px]:w-[80%] max-[720px]:w-[60%] max-[512px]:w-[80%]' + inputStyle
				}
				labelText='Imię'
				name='name'
				type='text'
				htmlFor='name'
				id='name'
				labelStyle={'text-[var(--mobileNavBg)]' + labelStyle}
				placeholder='Twoje imię'
				onChange={onChange}
			/>
			<Input
				className={
					'contact__write-us--input bg-[var(--white)] w-[50%] max-[1000px]:w-[80%] max-[720px]:w-[60%] max-[512px]:w-[80%]' + inputStyle
				}
				labelText='Email'
				name='email'
				type='email'
				htmlFor='email'
				id='email'
				labelStyle={'text-[var(--mobileNavBg)]' + labelStyle}
				placeholder='Twój email'
				onChange={onChange}
			/>
			<Input
				className={
					'contact__write-us--input bg-[var(--white)] w-[50%] max-[1000px]:w-[80%] max-[720px]:w-[60%] max-[512px]:w-[80%]' + inputStyle
				}
				labelText='Temat'
				name='subject'
				type='text'
				htmlFor='subject'
				id='subject'
				labelStyle={'text-[var(--mobileNavBg)]' + labelStyle}
				placeholder='Twój temat'
				onChange={onChange}
			/>
			<div className='flex flex-col items-center w-full'>
				<label htmlFor='message' className={'ui-label text-center text-[var(--mobileNavBg)]' + labelStyle}>
					Wiadomość
				</label>
				<textarea
					name='message'
					id='message'
					type='text'
					placeholder='Twoja wiadomość'
					className={'ui-input contact__write-us--input min-h-[6rem] h-[8rem] max-h-[18rem] w-[50%] bg-[var(--white)] max-[1000px]:w-[80%] max-[720px]:w-[60%] max-[512px]:w-[80%]' + inputStyle}
					onChange={onChange}></textarea>
			</div>
			<Button type='submit'>{isLoading ? 'Wysyłam wiadomość...' : 'Wyślij wiadomość'} </Button>
		</form>
	)
}
