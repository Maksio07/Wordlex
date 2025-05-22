import { motion } from 'framer-motion'
import Navigation from '../components/header/Navigation'
import AboutUsTeam from '../components/AboutUsTeam'
import AboutUsOpinions from '../components/AboutUsOpinions'

export default function AboutUsPage() {
	return (
		<>
			<Navigation />
			<motion.section
				id='about-us'
				className='about-us min-h-screen'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.6 } }}>
				<div className='about-us__hero relative flex w-screen h-[64rem] max-h-[70vh] z-10 bg-[url(../assets/book-big.jpg)] max-[812px]:bg-[80%] max-[545px]:h-[80rem] max-[545px]:max-h-[90vh]  max-[545px]:text-center max-[512px]:bg-[url(../assets/book-small.jpg)]  max-[400px]:h-[100vh] max-[400px]:max-h-[100vh] max-[365px]:h-[110vh] max-[365px]:max-h-[110vh] [@media(max-height:650px)]:max-h-[100vh]'>
					<div className='about-us__shadow'></div>
					<h2 className='absolute top-[10rem] left-[50%] translate-x-[-50%] text-[3.6rem] font-medium text-[var(--navLinks)] z-10'>
						O nas
					</h2>
					<p className='absolute top-[16rem] left-[50%] translate-x-[-50%] w-[90%] text-[2rem] font-medium text-[var(--navLinks)] text-center z-10'>
						Jesteśmy <span className='text-[var(--btnBg)]'>Wordlex</span> - i łączy nas nauka
					</p>
					<div className='about-us__left absolute top-[14rem] left-[8rem] w-[45%] h-full tracking-wide leading-9 max-[1480px]:min-w-[60%] max-[1090px]:min-w-[80%]  max-[825px]:min-w-[96%] max-[825px]:left-[2rem] max-[540px]:left-[1rem]'>
						<p className='mt-[12rem] mb-[2rem] text-[var(--navLinks)] text-[1.4rem] '>
							Jesteśmy zespołem pasjonatów języków obcych, których celem jest pomaganie w nauce języków obcych za darmo.
							Niezaleźnie od tego, czy chcesz utrwalić swoje umiejętności komunikacyjne czy opanować podstawy, jesteśmy
							tutaj, aby pomóc Ci na każdym kroku.
						</p>
						<p className='mb-[2rem] text-[var(--navLinks)] text-[1.4rem]'>
							Nasze nowoczesne metody nauczania łączą sprawdzone techniki z innowacyjnymi narzędziami, aby zapewnić
							skuteczną i przyjemną naukę. Dzięki temu, pierwsze efekty można zobaczyć już po 7 dniach. Wystarczy tylko
							założyć konto i można już zaczynać naukę poprzez dodawanie i powtarzanie słówek.
						</p>
						<p className='mb-[2rem] text-[var(--navLinks)] text-[1.4rem]'>
							Dlaczego warto? Bo dzięki nam będziesz się uczyć własnym tempem, podtrzymasz motywację do nauki, uczysz
							się gdziekolwiek chcesz i najważniejsze - bez ograniczeń.
						</p>
						<p className='text-[var(--navLinks)] text-[1.4rem]'>
							Dołącz do nas i zacznij swoją językową podróż już dziś. Razem przekroczymy wszelkie bariery – zarówno
							językowe, jak i kulturowe!
						</p>
					</div>
					<div className='about-us__right w-[50%]'></div>
				</div>
				<AboutUsTeam />
				<AboutUsOpinions />
			</motion.section>
		</>
	)
}
