import Form from '../../UI/Form'
import Input from '../../UI/Input'

export default function LoginForm({ userData, onSubmit, onChange }) {
	return (
		<Form className='min-h-[48rem] w-[40rem]' onSubmit={onSubmit} buttonCaption={'Zaloguj się'} title={'Login'}>
			<Input
				labelText='Email:'
				htmlFor='email'
				name='email'
				id='email'
				type='text'
				minLength='4'
				placeholder='Wpisz email'
				value={userData.email}
				onChange={onChange}
			/>
			<Input
				labelText='Hasło:'
				htmlFor='password'
				name='password'
				id='password'
				type='password'
				minLength='8'
				placeholder='Wpisz hasło'
				value={userData.password}
				onChange={onChange}
			/>

			<div className='login-links flex justify-evenly my-[2rem] w-[100%] text-[1.5rem] text-[var(--titleBg)]'>
				<p className='forgot-password-link p-[.4rem]'>
					<a href='/auth/forgot-password'>Zapomniałeś hasła?</a>
				</p>
				<p className='signup-link p-[.4rem]'>
					<a href='/auth/signup'>Zarejestruj się</a>
				</p>
			</div>
		</Form>
	)
}
