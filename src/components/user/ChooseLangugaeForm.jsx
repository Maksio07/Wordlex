import Form from '../../UI/Form'
import ArrowDown from '../icons/Action/ArrowDown'
import ArrowUp from '../icons/Action/ArrowUp'
import greatBritianIcon from '../../assets/flags/english.svg'
import germanyIcon from '../../assets/flags/german.svg'
import franceIcon from '../../assets/flags/french.svg'
import spainIcon from '../../assets/flags/spanish.svg'
import portugalIcon from '../../assets/flags/portugal.svg'
import russiaIcon from '../../assets/flags/russian.svg'
import Xicon from '../icons/Action/Xicon'

export default function ChooseLanguageForm({
	error,
	confirmMessage,
	chooseTheLanguage,
	submitTheLanguage,
	handleSelectDisposition,
	ulListStyles,
	handleAddLanguageState,
	choosenLanguage,
	selectIsActive,
}) {
	return (
		<Form
			className='relative min-h-[28rem] w-[40rem]'
			onSubmit={submitTheLanguage}
			buttonCaption={'Dodaj Język'}
			title={'Wybierz Język'}>
			<button type='button' className='create-collection__x-btn absolute' onClick={handleAddLanguageState}>
				<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--white)'} />
			</button>
			<p className='error-text mb-[.6rem] text-[1.8rem] ] text-center text-[#15e015e5]'>{confirmMessage}</p>
			{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-[#c92525b5]'>{error}</p>}
			<div
				className='create__select relative p-[1rem] w-[30rem] h-[4rem] cursor-pointer bg-[var(--white)] rounded-[.6rem] hover:bg-[var(--chooseLanguageHover)] transition-colors duration-300'
				onClick={handleSelectDisposition}>
				<img
					className='create__select--choosen-language-img absolute top-[50%] left-0 mx-[1rem] w-[3rem]'
					src={choosenLanguage !== '' && choosenLanguage.firstChild.src}
					alt={choosenLanguage !== '' && choosenLanguage.firstChild.alt}
				/>
				<p className='create__select--choosen-language-text absolute top-[50%] left-[5.5rem] text-[1.4rem] font-medium'>
					{choosenLanguage !== '' && choosenLanguage.lastChild.innerHTML}
				</p>

				<button type='button' className='create__select-arrow'>
					{selectIsActive ? (
						<ArrowUp width={'2.4rem'} height={'2.4rem'} fill={'var(--titlebg)'} />
					) : (
						<ArrowDown width={'2.4rem'} height={'2.4rem'} fill={'var(--titlebg)'} />
					)}
				</button>

				<ul className={ulListStyles} onClick={chooseTheLanguage}>
					<li className='create__select__li flex items-center p-[.4rem]' id='english'>
						<img src={greatBritianIcon} alt='Great Britian Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Angielski</p>
					</li>
					<li className='create__select__li flex items-center p-[.4rem]' id='french'>
						<img src={franceIcon} alt='France Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Francuzki</p>
					</li>
					<li className='create__select__li flex items-center p-[.4rem]' id='spanish'>
						<img src={spainIcon} alt='Spain Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Hiszpański</p>
					</li>
					<li className='create__select__li flex items-center p-[.4rem]' id='german'>
						<img src={germanyIcon} alt='Germany Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Niemiecki</p>
					</li>
					<li className='create__select__li flex items-center p-[.4rem]' id='portugal'>
						<img src={portugalIcon} alt='Portugal Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Portugalski</p>
					</li>
					<li className='create__select__li flex items-center p-[.4rem]' id='russian'>
						<img src={russiaIcon} alt='russian Flag' className='mx-[1rem] w-[3rem]' />
						<p className='text-[1.4rem] font-medium'>Rosyjski</p>
					</li>
				</ul>
			</div>
		</Form>
	)
}
