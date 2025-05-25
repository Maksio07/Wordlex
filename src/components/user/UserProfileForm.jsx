import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Edit from '../icons/Edit'

export default function UserProfileForm({
	userData,
	inputIsActive,
	handleInputIsActive,
	handleNewUserData,
	updateUserData,
	error,
	confirmMessage,
    isLoading
}) {
	return (
		<form
			className='profile__form flex flex-col items-center my-[6rem] w-max-[86rem] p-[1rem] w-[75rem] w-min-[75rem] h-[58rem] bg-[var(--mobileNavBg)] rounded-2xl max-[760px]:w-[56rem] max-[576px]:w-[46rem] max-[470px]:w-[38rem] max-[470px]:h-[72rem] max-[390px]:w-[34rem] max-[375px]:w-[30rem] max-[310px]:w-[26rem]'
			onSubmit={updateUserData}>
			<h3 className='my-[2rem] text-[2.6rem] font-medium text-center text-[var(--navLinks)]'>Twoje Dane</h3>
			{error && <p className='absolute top-[10rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
			<p className='error-text absolute top-[10rem] text-[1.8rem] text-center text-[#28d818]'>{confirmMessage}</p>
			<div className='flex flex-col items-center w-full'>
				<h4 className='ui-label text-center'>Twoje Imię:</h4>
				<div className=' flex justify-between items-center my-[1.8rem] w-full max-[470px]:flex-col' id='name'>
					{!inputIsActive.name && (
						<p className='ml-[3rem] text-[var(--navLinks)] text-center text-[1.8rem] text-pretty max-[470px]:ml-0'>
							{userData.name}
						</p>
					)}
					{inputIsActive.name && (
						<div>
							<Input className='mb-0' name='name' defaultValue={userData.name} onChange={handleNewUserData} />
						</div>
					)}
					<button
						type='button'
						aria-label='Edytuj'
						className='flex items-center mr-[3rem] px-[1rem] py-[.4rem] border-solid border-[[var(--navLinks)] border-[.1rem] rounded-xl hover:scale-[1.12] transition-transform duration-300 max-[470px]:mr-0 max-[470px]:mt-[2rem]'
						onClick={handleInputIsActive}>
						<p className='mr-[.4rem] text-[var(--navLinks)] text-[1.4rem]'>
							{inputIsActive.name ? 'Zapisz' : 'Edytuj'}
						</p>
						<Edit width='2.4rem' height='2.4rem' fill='var(--navLinks)' />
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center w-full'>
				<h4 className='ui-label text-center'>Twój Email:</h4>
				<div
					className=' flex justify-between items-center mx-[1rem] my-[1.8rem] w-full max-[470px]:flex-col'
					id='email'>
					{!inputIsActive.email && (
						<p className='ml-[3rem] text-[var(--navLinks)] text-center text-[1.8rem] text-pretty max-[470px]:ml-0 max-[310px]:text-[1.6rem]'>
							{userData.email}
						</p>
					)}
					{inputIsActive.email && (
						<div>
							<Input className='mb-0' name='email' defaultValue={userData.email} onChange={handleNewUserData} />
						</div>
					)}
					<button
						type='button'
						aria-label='Edytuj'
						className='flex items-center mr-[3rem] px-[1rem] py-[.4rem] border-solid border-[[var(--navLinks)] border-[.1rem] rounded-xl hover:scale-[1.12] transition-transform duration-300 max-[470px]:mr-0 max-[470px]:mt-[2rem]'
						onClick={handleInputIsActive}>
						<p className='mr-[.4rem] text-[var(--navLinks)] text-[1.4rem]'>
							{inputIsActive.email ? 'Zapisz' : 'Edytuj'}
						</p>
						<Edit width='2.4rem' height='2.4rem' fill='var(--navLinks)' />
					</button>
				</div>
			</div>
			<div className='flex flex-col items-center w-full'>
				<h4 className='ui-label text-center'>Twoje Hasło:</h4>
				<div
					className='flex justify-between items-center mx-[1rem] my-[1.8rem] w-full max-[470px]:flex-col'
					id='password'>
					{!inputIsActive.password && (
						<p className='ml-[3rem] text-[var(--navLinks)] text-center text-[1.8rem] text-pretty max-[470px]:ml-0'>
							********
						</p>
					)}
					{inputIsActive.password && (
						<div className='flex flex-col items-center ml-[.8rem]'>
							<Input
								className='mb-0'
								name='password'
								defaultValue={''}
								placeholder='Wpisz nowe hasło'
								onChange={handleNewUserData}
								type='password'
							/>
							<Input
								className='mt-[1.4rem]'
								name='repeatPassword'
								type='password'
								defaultValue={''}
								placeholder='Powtórz hasło'
								onChange={handleNewUserData}
							/>
						</div>
					)}
					<button
						type='button'
						aria-label='Edytuj'
						className='flex items-center mr-[3rem] px-[1rem] py-[.4rem] border-solid border-[[var(--navLinks)] border-[.1rem] rounded-xl hover:scale-[1.12] transition-transform duration-300 max-[470px]:mr-0 max-[470px]:mt-[2rem]'
						onClick={handleInputIsActive}>
						<p className='mr-[.4rem] text-[var(--navLinks)] text-[1.4rem]'>
							{inputIsActive.password ? 'Zapisz' : 'Edytuj'}
						</p>
						<Edit width='2.4rem' height='2.4rem' fill='var(--navLinks)' />
					</button>
				</div>
			</div>
			<Button type='submit'>{isLoading ? 'Zapisuję zmiany...' : 'Zapisz zmiany'}</Button>
		</form>
	)
}
