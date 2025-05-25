import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import Facebook from './icons/Facebook'
import Linkedin from './icons/Linkedin'
import Instagram from './icons/Instagram'
import Telegram from './icons/Telegram'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	const currentTheme = useContext(DarkModeContext).themeMode
	let titleStyle = ''

	if (currentTheme === 'dark') {
		titleStyle = ' text-shadow'
	}

	return (
		<footer className='footer flex flex-col w-full h-[30rem] bg-[var(--mobileNavBg)] text-[var(--white)] max-[600px]:h-[42rem] max-[315px]:h-[60rem]'>
			<div className='footer__links flex justify-evenly my-[4.2rem] mx-[2rem] max-[700px]:flex-wrap max-[650px]:mx-0 max-[315px]:flex-col max-[315px]:items-center'>
				<div className='footer__links--help flex flex-col max-[315px]:text-center'>
					<h3 className={'mb-[2rem] text-[2.4rem] font-medium' + titleStyle}>Pomoc</h3>
					<Link
						to='https://android.com.pl'
						target='_blank'
						className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						Android
					</Link>
					<Link
						to='https://www.apple.com'
						target='_blank'
						className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						Apple
					</Link>
					<Link
						to='https://www.microsoft.com'
						target='_blank'
						className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						Windows
					</Link>
				</div>
				<div className='footer__links--useful flex flex-col max-[315px]:text-center max-[315px]:mt-[2rem]'>
					<h3 className={'mb-[2rem] text-[2.4rem] font-medium' + titleStyle}>Przydatne Linki</h3>
					<Link to='/' className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						Strona startowa
					</Link>
					<Link
						to='/about-us'
						className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						O nas
					</Link>
					<Link
						to='/auth/login'
						className='mb-[.6rem] text-[1.6rem] hover:scale-[1.12] transition-transform duration-300'>
						Login
					</Link>
				</div>
				<div className='footer__links--social max-[600px]:w-full max-[600px]:mx-[2rem] max-[600px]:flex max-[600px]:flex-col max-[600px]:items-center max-[600px]:mt-[3rem] max-[315px]:ml-[0rem]'>
					<h3 className={'mb-[2rem] text-[2.4rem] font-medium' + titleStyle}>Media Społecznościowe</h3>
					<div>
						<button
							type='button'
							aria-label='Facebook'
							className='ml-[2rem] p-[.6rem] border-solid border-[1px] border-[var(--white)] rounded-xl hover:scale-[1.12] transition-transform duration-300 max-[600px]:ml-0'>
							<Link to='https://www.facebook.com' target='_blank'>
								<Facebook height='2rem' width='2rem' fill='var(--white)' />
							</Link>
						</button>
						<button
							type='button'
							aria-label='Linkedin'
							className='ml-[2rem] p-[.6rem] border-solid border-[1px] border-[var(--white)] rounded-xl hover:scale-[1.12] transition-transform duration-300'>
							<Link to='https://www.linkedin.com' target='_blank'>
								<Linkedin height='2rem' width='2rem' fill='var(--white)' />
							</Link>
						</button>
						<button
							type='button'
							aria-label='Instagram'
							className='ml-[2rem] p-[.6rem] border-solid border-[1px] border-[var(--white)] rounded-xl hover:scale-[1.12] transition-transform duration-300'>
							<Link to='https://www.instagram.com'>
								<Instagram height='2rem' width='2rem' fill='var(--white)' />
							</Link>
						</button>
						<button
							type='button'
							aria-label='Telegram'
							className='ml-[2rem] p-[.6rem] border-solid border-[1px] border-[var(--white)] rounded-xl hover:scale-[1.12] transition-transform duration-300'>
							<Link to='https://www.telegram.org' target='_blank'>
								<Telegram height='2rem' width='2rem' fill='var(--white)' />
							</Link>
						</button>
					</div>
				</div>
			</div>
			<p className='mt-[1rem] mx-[1rem] text-center text-[1.4rem] tracking-[.08rem]'>
				Wszelkie prawa zastrzeżone &copy;{currentYear}, Wordlex S.A.
			</p>
		</footer>
	)
}
