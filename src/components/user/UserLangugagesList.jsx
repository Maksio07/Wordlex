import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IsUserAuthContext } from '../../store/IsUserAuthContext'
import Plus from '../icons/Action/Plus'
import Delete from '../icons/Action/Delete'

export default function UserLanguageList({ languages, handleAddLanguageState, deleteLanguage, titleStyle }) {
	const userId = useContext(IsUserAuthContext).userIDSession
	const setLanguageId = useContext(IsUserAuthContext).setLanguageIdSession
	let ulStyle = languages.length >= 1 ? 'relative flex flex-wrap justify-center' : 'relative grid grid-cols-5 w-full'

	return (
		<motion.ul
			className={ulStyle}
			initial={{ y: '-20vh', opacity: 0, transition: { duration: 0.7 } }}
			animate={{ y: 0, opacity: 1 }}>
			<li className='create-language mx-[1.6rem] w-[30rem] my-[1.8rem] h-[40rem]'>
				<button
					onClick={handleAddLanguageState}
					type='button'
					aria-label='Dodaj język'
					className={'create flex flex-col items-center justify-center w-full h-full bg-[var(--createBtn)] text-[var(--navLinks)] rounded-[.8rem] text-[2.6rem] min-[375px]:justify-center' + titleStyle}>
					<Plus width={'3.2rem'} height={'3.2rem'} fill={'var(--navLinks)'}/>
					<span className='mb-[1rem]'></span>
					Dodaj Język
				</button>
			</li>

			{languages.length !== 0 &&
				languages.map(language => {
					const imageSize = window.innerWidth > 512 ? '-big.png' : '-small.png'
					const bgImage = '/flags/' + language.languageId + imageSize

					return (
						<li
							className='created-language relative my-[1.8rem] mx-[1.6rem] w-[30rem] h-[40rem] rounded-[.8rem] text-[var(--white)] text-[2.8rem]'
							key={language.name}
							style={{ backgroundImage: `url(${bgImage})` }}
							id={language.languageId}
							onClick={() => setLanguageId(language.languageId)}>
							<Link to={`/users/${userId}/languages`}>
								<div className='created-language-shadow'></div>
								<p className='created-language-text'>{language.name}</p>
							</Link>
							<button
								type='button'
								aria-label='Usuń'
								className='created-language-deleteBtn absolute top-4 right-4 p-[.6rem] z-20'
								onClick={deleteLanguage}>
								<Delete width={'2.4rem'} height={'2.4rem'} fill={'var(--white)'}/>
							</button>
						</li>
					)
				})}
		</motion.ul>
	)
}
