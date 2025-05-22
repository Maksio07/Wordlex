import bradPittBig from '../assets/team/brad-pitt-big.jpg'
import bradPittSmall from '../assets/team/brad-pitt-small.jpg'
import barackObamaBig from '../assets/team/barack-obama-big.jpg'
import barackObamaSmall from '../assets/team/barack-obama-small.jpg'
import elonBig from '../assets/team/elon-big.jpg'
import elonSmall from '../assets/team/elon-small.jpg'
import portraitBig from '../assets/team/portrait-big.jpg'
import portraitSmall from '../assets/team/portrait-small.jpg'
import womanBig from '../assets/team/woman-big.jpg'
import womanSmall from '../assets/team/woman-small.jpg'
 
export default function AboutUsTeam() {
	return (
			<div className='about-us__team' id='about-us__team'>
				<h2 className='mt-[6.2rem] mb-[3.2rem] text-center text-[3.6rem] font-medium text-[var(--titleBg)]'>
					Nasz zespół
				</h2>
				<div className='about-us__team-container flex justify-center flex-wrap my-[3rem] mx-[2rem] w-full'>
					<div className='about-us__team-box mt-[3rem] mr-[4rem] w-[32rem] h-[52rem] bg-[var(--aboutUsCardBg)] rounded-lg'>
						<img
							src={window.innerWidth > 512 ? bradPittBig : bradPittSmall}
							alt='An image of Brad Pitt.'
							className='about-us__team-box--img h-[32rem] w-full rounded-t-lg'
						/>
						<h3 className=' mt-[1.2rem] text-center text-[2rem] font-semibold'>Brad Pitt</h3>
						<p className='mt-[.6rem] mb-[.4rem] text-center text-[1.6rem] font-medium'>Foundator && CEO</p>
						<span className='about-us__team-box--line'></span>
						<p className='mx-[.4rem] text-[1.2rem] text-pretty text-center'>
							Dynamiczny lider, który od lat wyznacza nowe stanardy w branży. Dzięki swojemu doświadczeniu, wizji i
							zaangażowaniu, firma osiągnęła imponujące wyniki, rozwijając się zarówno na rynku krajowym, jak i
							międzynarodowym.
						</p>
					</div>
					<div className='about-us__team-box mt-[3rem] mr-[4rem] w-[32rem] h-[52rem] bg-[var(--aboutUsCardBg)] rounded-lg s'>
						<img
							src={window.innerWidth > 512 ? elonBig : elonSmall}
							alt='An image of Elon Musk.'
							className='about-us__team-box--img h-[32rem] w-full rounded-t-lg'
						/>
						<h3 className=' mt-[1.2rem] text-center text-[2rem] font-semibold'>Elon Musk</h3>
						<p className='mt-[.6rem] mb-[.4rem] text-center text-[1.6rem] font-medium'>Chef Technology Officer</p>
						<span className='about-us__team-box--line'></span>
						<p className='mx-[.4rem] text-[1.2rem] text-pretty text-center'>
							Człowiek, który jest odpowiedzialny za kształtowanie i realizację strategii technologicznej w organizacji.
							Elon odgrywa kluczową rolę w wykorzystaniu technologii do osiągania celów biznesowych oraz budowania
							przewagi konkurencyjnej.
						</p>
					</div>
					<div className='about-us__team-box mt-[3rem] mr-[4rem] w-[32rem] h-[52rem] bg-[var(--aboutUsCardBg)] rounded-lg s'>
						<img
							src={window.innerWidth > 512 ? barackObamaBig : barackObamaSmall}
							alt='An image of Barack Obama.'
							className='about-us__team-box--img h-[32rem] w-full rounded-t-lg'
						/>
						<h3 className=' mt-[1.2rem] text-center text-[2rem] font-semibold'>Barack Obama</h3>
						<p className='mt-[.6rem] mb-[.4rem] text-center text-[1.6rem] font-medium'>Financial Director</p>
						<span className='about-us__team-box--line'></span>
						<p className='mx-[.4rem] text-[1.2rem] text-pretty text-center'>
							Barack jest kluczowym członkiem kadry zarządzającej, odpowiedzialnym za zarządzanie finansami firmy i
							wspieranie jej strategii biznesowej poprzez efektywne zarządzanie zasobami finansowymi.
						</p>
					</div>
					<div className='about-us__team-box mt-[3rem] mr-[4rem] w-[32rem] h-[52rem] bg-[var(--aboutUsCardBg)] rounded-lg s'>
						<img
							src={window.innerWidth > 512 ? portraitBig : portraitSmall}
							alt='A boy with the hut on his head.'
							className='about-us__team-box--img portrait h-[32rem] w-full rounded-t-lg'
						/>
						<h3 className=' mt-[1.2rem] text-center text-[2rem] font-semibold'>Gereon Wolter</h3>
						<p className='mt-[.6rem] mb-[.4rem] text-center text-[1.6rem] font-medium'>Chief Marketing Officer</p>
						<span className='about-us__team-box--line'></span>
						<p className='mx-[.4rem] text-[1.2rem] text-pretty text-center'>
							Jest naszym liderem odpowiedzialnym za strategię marketingową organizacji i nadzorowanie wszystkich
							działań związanych z budowaniem marki oraz przyciąganiem klientów. Gereon odgrywa kluczową rolę w
							zwiększaniu rozpoznawalności firmy i utrzymywaniu pozytywnego wizerunku na rynku.
						</p>
					</div>
					<div className='about-us__team-box mt-[3rem] mr-[4rem] w-[32rem] h-[52rem] bg-[var(--aboutUsCardBg)] rounded-lg s'>
						<img
							src={window.innerWidth > 512 ? womanBig : womanSmall}
							alt='An image of the Brad Pitt.'
							className='about-us__team-box--img woman h-[32rem] w-full rounded-t-lg'
						/>
						<h3 className=' mt-[1.2rem] text-center text-[2rem] font-semibold'>Gretta Marchewska</h3>
						<p className='mt-[.6rem] mb-[.4rem] text-center text-[1.6rem] font-medium'>Chief Graphic Designer</p>
						<span className='about-us__team-box--line'></span>
						<p className='mx-[.4rem] text-[1.2rem] text-pretty text-center'>
							Gretta jest odpowiedzialna za wizualny aspekt projektów realizowanych przez firmę. Jest kluczową osobą w
							firmie, ponieważ wpływa bezpośrednio na to, jak marka lub produkt jest odbierany przez klientów.
						</p>
					</div>
				</div>
			</div>
	)
}
