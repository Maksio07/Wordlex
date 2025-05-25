import { useState } from 'react'
import { sliderData } from '../data/sliderData'
import Opinions from './Opinions'

export default function AboutUsOpinions() {
	const [current, setCurrent] = useState(0)
	const length = sliderData.length

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1)
	}

	if (!Array.isArray(sliderData) || sliderData.length <= 0) {
		return null
	}

	return (
		<div className='about-us__opinions relative flex flex-col items-center justify-center mb-[6rem] w-full'>
			<h2 className='mt-[6.2rem] mb-[3.2rem] text-center text-[3.6rem] font-medium text-[var(--titleBg)] max-[475px]:mt-[4rem]'>Opinie</h2>
			<Opinions current={current} length={length}/>
			<button type='button' onClick={nextSlide} aria-label='Następne' className='carret-controlls absolute top-[60%] right-[12%] p-1 max-[1841px]:right-[6%] max-[1590px]:right-[1%] max-[898px]:left-[62%] max-[720px]:left-[85%]'>
				<span className='text-[4.8rem] text-[var(--titleBg)] font-normal'>&#62;</span>
			</button>
			<button type='button' onClick={prevSlide} aria-label='Poprzednie' className='carret-controlls absolute top-[60%] left-[12%] p-1 max-[1841px]:left-[6%] max-[1590px]:left-[1%] max-[898px]:right-[62%] max-[720px]:right-[85%]'>
				<span className='text-[4.8rem] text-[var(--titleBg)] font-normal'>&#60;</span>
			</button>
		</div>
	)
}
