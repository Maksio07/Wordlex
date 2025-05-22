import Form from '../../UI/Form'
import Input from '../../UI/Input'

export default function SignupForm({ onSubmit, onChange, userData, confirmPassword }) {
	return (
		<Form className='signup__form min-h-[58rem] w-[40rem]' onSubmit={onSubmit} buttonCaption='Zarejestruj się' title='Utwórz konto'>
			<Input
				labelText='Imię:'
				htmlFor='name'
				name='name'
				id='name'
				type='text'
				value={userData.name}
				minLength='4'
				placeholder='Wpisz swoje imię'
				onChange={onChange}
			/>
			<Input
				labelText='Email:'
				htmlFor='email'
				name='email'
				id='email'
				type='text'
				value={userData.email}
				minLength='4'
				placeHolder='Wpisz email'
				onChange={onChange}
			/>
			<Input
				labelText='Hasło:'
				htmlFor='password'
				name='password'
				id='password'
				type='password'
				value={userData.password}
				minLength='8'
				placeHolder='Wpisz hasło'
				onChange={onChange}
			/>
			<Input
				labelText='Powtórz hasło:'
				htmlFor='confirmPassword'
				name='confirmPassword'
				id='confirmPassword'
				type='password'
				value={confirmPassword}
				minLength='8'
				placeHolder='Potwierdź hasło'
				onChange={onChange}
			/>
		</Form>
	)
}
