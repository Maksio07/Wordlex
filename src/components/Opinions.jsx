import { sliderData } from '../data/sliderData'
import OpinionForm from '../UI/OpinionForm'

export default function Opinions({ current, length }) {
	return (
		<div className='about-us__opinions-slider relative flex items-center justify-center my-[3rem] mx-[2rem] w-[100%] h-[30rem] max-[475px]:h-[32rem] max-[475px]:my-[1rem]'>
			{window.innerWidth > 1437 && (
				<>
					<OpinionForm
						id={sliderData[current].id}
						key={sliderData[current].id}
						src={sliderData[current].src}
						alt={sliderData[current].alt}
						title={sliderData[current].title}
						userDescription={sliderData[current].userDescription}
						opinion={sliderData[current].opinion}
					/>
					<OpinionForm
						id={current + 1 === length ? sliderData[0].id : sliderData[current + 1].id}
						key={current + 1 === length ? sliderData[0].id : sliderData[current + 1].id}
						src={current + 1 === length ? sliderData[0].src : sliderData[current + 1].src}
						alt={current + 1 === length ? sliderData[0].alt : sliderData[current + 1].alt}
						title={current + 1 === length ? sliderData[0].title : sliderData[current + 1].title}
						userDescription={
							current + 1 === length ? sliderData[0].userDescription : sliderData[current + 1].userDescription
						}
						opinion={current + 1 === length ? sliderData[0].opinion : sliderData[current + 1].opinion}
					/>
					<OpinionForm
						id={current + 2 === length ? sliderData[0].id : sliderData[current + 2 >= length ? 1 : current + 2].id}
						key={current + 2 === length ? sliderData[0].id : sliderData[current + 2 >= length ? 1 : current + 2].id}
						src={current + 2 === length ? sliderData[0].src : sliderData[current + 2 >= length ? 1 : current + 2].src}
						alt={current + 2 === length ? sliderData[0].alt : sliderData[current + 2 >= length ? 1 : current + 2].alt}
						title={
							current + 2 === length ? sliderData[0].title : sliderData[current + 2 >= length ? 1 : current + 2].title
						}
						userDescription={
							current + 2 === length
								? sliderData[0].userDescription
								: sliderData[current + 2 >= length ? 1 : current + 2].userDescription
						}
						opinion={
							current + 2 === length
								? sliderData[0].opinion
								: sliderData[current + 2 >= length ? 1 : current + 2].opinion
						}
					/>
				</>
			)}

			{window.innerWidth >= 898 && window.innerWidth <= 1437 && (
				<>
					<OpinionForm
						id={sliderData[current].id}
						key={sliderData[current].id}
						src={sliderData[current].src}
						alt={sliderData[current].alt}
						title={sliderData[current].title}
						userDescription={sliderData[current].userDescription}
						opinion={sliderData[current].opinion}
					/>
					<OpinionForm
						id={current + 1 === length ? sliderData[0].id : sliderData[current + 1].id}
						key={current + 1 === length ? sliderData[0].id : sliderData[current + 1].id}
						src={current + 1 === length ? sliderData[0].src : sliderData[current + 1].src}
						alt={current + 1 === length ? sliderData[0].alt : sliderData[current + 1].alt}
						title={current + 1 === length ? sliderData[0].title : sliderData[current + 1].title}
						userDescription={
							current + 1 === length ? sliderData[0].userDescription : sliderData[current + 1].userDescription
						}
						opinion={current + 1 === length ? sliderData[0].opinion : sliderData[current + 1].opinion}
					/>
				</>
			)}

			{window.innerWidth < 898 && (
				<OpinionForm
					id={sliderData[current].id}
					key={sliderData[current].id}
					src={sliderData[current].src}
					alt={sliderData[current].alt}
					title={sliderData[current].title}
					userDescription={sliderData[current].userDescription}
					opinion={sliderData[current].opinion}
				/>
			)}
		</div>
	)
}
