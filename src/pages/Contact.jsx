import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { DarkModeContext } from '../store/DarkModeContext'
import Navigation from '../components/header/Navigation'
import Contact from '../components/contact/Contact'
import Footer from '../components/Footer'
import contactUsSmall from '../assets/contact/contact-us-small1.jpg'
import contactUsBig from '../assets/contact/contact-us-big1.jpg'
import Facebook from '../components/icons/Facebook'
import Linkedin from '../components/icons/Linkedin'
import Instagram from '../components/icons/Instagram'
import Telegram from '../components/icons/Telegram'

export default function ContactPage() {
	const currentTheme = useContext(DarkModeContext).themeMode
	let titleStyle = ''
	let labelStyle = ''

	if (currentTheme === 'dark') {
		titleStyle = ' text-shadow'
		labelStyle = ' label-shadow'
	}

	return (
		<>
			<Navigation />
			<motion.section
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.5 } }}
				className='contact flex flex-col items-center w-full min-h-screen'>
				<div className='contact__header flex justify-evenly items-center h-[56rem] max-h-[60vh] w-full max-[690px]:flex-col max-[690px]:max-h-[100vh] max-[690px]:h-[76rem]'>
					<div className='ml-[2rem] max-[690px]:mt-[2rem] max-[690px]:ml-0 max-[690px]:mx-[1rem]'>
						<h2
							className={
								'mb-[2.6rem] text-[4.2rem] text-center font-medium text-[var(--navLinks)] max-[690px]:mb-[2rem]  max-[400px]:text-[3.8rem] ' +
								titleStyle
							}>
							Skontaktuj się z nami
						</h2>
						<p
							className={
								'my-[1rem] text-[2.6rem] text-center font-medium text-[var(--navLinks)] text-wrap  max-[400px]:text-[2.2rem] ' +
								titleStyle
							}>
							Masz pytania? Potrzebujesz więcej informacji? Jesteśmy do Twojej dyspozycji!
						</p>
					</div>
					<img
						className='contact__header--img mx-[2rem] w-[40rem] h-[40rem] object-cover rounded-xl max-[450px]:w-[36rem] max-[450px]:h-[36rem] max-[400px]:w-[26rem] max-[400px]:h-[26rem]'
						src={window.innerWidth > 512 ? contactUsBig : contactUsSmall}
						alt="Three sticks cards with 'contact us' sentence on the top."
					/>
				</div>
				<div className='contact__data flex items-center justify-evenly flex-wrap w-full h-[46rem] max-[1080px]:h-[50rem] max-[720px]:min-h-[64rem]'>
					<div className='contact__data--box mx-[1rem] px-[1.8rem] py-[.9rem] w-[34rem] h-[20rem] rounded-xl bg-[var(--aboutUsCardBg)] max-[1080px]:mt-[2rem] max-[720px]:mt-[3rem] max-[375px]:w-[28rem]  max-[320px]:w-[26rem]'>
						<h3
							className={'mb-[1.6rem] text-[2.6rem] text-[var(--mobileNavBg)]  max-[375px]:text-[2.4rem]' + labelStyle}>
							Gdzie jesteśmy
						</h3>
						<p className='text-[1.6rem]  max-[375px]:text-[1.4rem] text-center text-pretty text-[var(--titleBg)]'>
							Bydgoszcz, Lisia 40, 85-001
						</p>
					</div>
					<div className='contact__data--box mx-[1rem] px-[1.8rem] py-[.9rem] w-[34rem] h-[20rem] rounded-xl bg-[var(--aboutUsCardBg)] max-[1080px]:mt-[2rem] max-[720px]:mt-[3rem] max-[375px]:w-[28rem]  max-[320px]:w-[26rem]'>
						<h3
							className={'mb-[1.6rem] text-[2.6rem] text-[var(--mobileNavBg)]  max-[375px]:text-[2.4rem]' + labelStyle}>
							Telefon
						</h3>
						<p className='text-[1.6rem]  max-[375px]:text-[1.4rem] text-[var(--titleBg)]'>+48 123 123 123</p>
					</div>
					<div className='contact__data--box mx-[1rem] px-[1.8rem] py-[.9rem] w-[34rem] h-[20rem] rounded-xl bg-[var(--aboutUsCardBg)] max-[1080px]:mt-[2rem] max-[720px]:mt-[3rem] max-[375px]:w-[28rem]  max-[320px]:w-[26rem]'>
						<h3
							className={'mb-[1.6rem] text-[2.6rem] text-[var(--mobileNavBg)]  max-[375px]:text-[2.4rem]' + labelStyle}>
							Email
						</h3>
						<p className='text-[1.6rem]  max-[375px]:text-[1.4rem] text-[var(--titleBg)]'>wordlexinfo@outlook.com</p>
					</div>
				</div>
				<Contact />
				<div className='contact__call flex flex-col justify-center items-center my-[10rem] w-full h-[50rem] text-center bg-[var(--mobileNavBg)] text-pretty max-[430px]:h-[62rem] max-[375px]:h-[70rem]'>
					<div className='contact__call--text-block flex flex-col items-center mx-[2rem]'>
						<h2 className={'mb-[2.6rem] text-[4.2rem]  font-medium text-[var(--white)] max-[375px]:text-[3.2rem]' + titleStyle}>
							Zadzwoń Do Nas
						</h2>
						<h3 className={'mb-[2rem] text-[3.6rem]  font-medium text-[var(--white)] max-[375px]:text-[2.6rem]' + titleStyle}>
							Jeżeli Potrzebujesz Jakiejś Pomocy - Skontaktuj Się Z Nami!
						</h3>
						<p className={'max-w-[70%] text-[1.8rem] font-medium text-[var(--white)]' + titleStyle}>
							Jeżeli mają Państwo pytania, potrzebują dodatkowych informacji lub chcą nawiązać współpracę, zapraszamy do
							kontaktu. Jesteśmy do Państwa dyspozycji. Prosimy o przesyłanie zapytań, na które odpowiemy w najkrótszym
							możliwym terminie. Dziękujemy za zainteresowanie.
						</p>
					</div>
				</div>
				<div className='contact__map flex items-center justify-evenly mb-[10rem] min-h-[50rem] h-[50rem] w-full max-[760px]:flex-col max-[760px]:h-[100rem]'>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2393.5590399140506!2d17.8963259771922!3d53.13606087222916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47030db411c43eff%3A0x2217e44d1b30ff3f!2sKapliczka%20ko%C5%82o%20stawu%2C%20w%20dawnym%20centrum%20wsi%20Pr%C4%85dy!5e0!3m2!1spl!2spl!4v1745401484486!5m2!1spl!2spl'
						loading='lazy'
						className='contact__map--google-maps w-[44%] h-[44rem] rounded-[2.8rem] max-[760px]:w-[90%]'></iframe>

					<div className='contact__map--info flex flex-col ml-[2rem] w-[50%] max-[760px]:w-[96%] max-[760px]:items-center max-[760px]:ml-0'>
						<h3 className={'mb-[6rem] text-[3.6rem] font-medium text-[var(--mobileNavBg)] max-[300px]:text-center max-[300px]:mt-[2rem]' + labelStyle}>
							Bądź w Kontakcie
						</h3>
						<p className='mb-[3rem] max-w-[90%] text-[1.6rem] font-medium text-pretty text-[var(--titleBg)] max-[650px]:text-center'>
							Znajdź nas w mediach społecznościowych. Bądź na bieżąco z naszymi aktualnościami, ofertami i inspiracjami,
							śledząc nas na platformach społecznościowych. Dołącz do naszej społeczności i bądź częścią naszych
							działań!
						</p>
						<div className='contact__map--info-social-media flex flex-wrap max-[650px]:items-center max-[650px]:justify-center max-[300px]:flex-col'>
							<button
								type='button'
								className='mt-[3rem] px-[1.6rem] py-[.8rem] w-[14rem] rounded-lg bg-[var(--facebook)] max-[960px]:ml-[3rem]  max-[420px]:ml-[0] max-[323px]:ml-[3rem]  max-[300px]:ml-0 '>
								<Link to='https://www.facebook.com' target='_blank' className='flex items-center justify-center'>
									<Facebook fill='var(--white)' width='2rem' height='2rem' />
									<p className='ml-[.6rem] text-[1.6rem] text-[var(--white)]'>Facebook</p>
								</Link>
							</button>
							<button
								type='button'
								className='mt-[3rem] ml-[3rem] px-[1.6rem] py-[.8rem] w-[14rem] rounded-lg bg-[var(--linkedin)] max-[300px]:ml-0 '>
								<Link to='https://www.linkedin.com' target='_blank' className='flex items-center justify-center'>
									<Linkedin fill='var(--white)' width='2rem' height='2rem' />
									<p className='ml-[.6rem] text-[1.6rem] text-[var(--white)]'>Linkedin</p>
								</Link>
							</button>
							<button
								type='button'
								className='mt-[3rem] ml-[3rem] px-[1.6rem] py-[.8rem] w-[14rem] rounded-lg bg-[var(--instagram)] max-[420px]:ml-0 max-[323px]:ml-[3rem]  max-[300px]:ml-0 '>
								<Link to='https://www.instagram.com' target='_blank' className='flex items-center justify-center'>
									<Instagram fill='var(--white)' width='2rem' height='2rem' />
									<p className='ml-[.6rem] text-[1.6rem] text-[var(--white)]'>Instagram</p>
								</Link>
							</button>
							<button
								type='button'
								className='mt-[3rem] ml-[3rem] px-[1.6rem] py-[.8rem] w-[14rem] rounded-lg bg-[var(--telegram)] max-[300px]:ml-0'>
								<Link to='https://www.telegram.org' target='_blank' className='flex items-center justify-center '>
									<Telegram fill='var(--white)' width='2rem' height='2rem' />
									<p className='ml-[.6rem] text-[1.6rem] text-[var(--white)]'>Telegram</p>
								</Link>
							</button>
						</div>
					</div>
				</div>
			</motion.section>
			<Footer />
		</>
	)
}
