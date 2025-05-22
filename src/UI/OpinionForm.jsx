import { motion } from 'framer-motion'
import Confirm from '../components/icons/Opinions/Confirm'
import Star from '../components/icons/Opinions/Star'

export default function OpinionForm({ id, src, alt, userDescription, opinion, title }) {
	return (
		<motion.div
			className='about-us__opinions-box flex flex-col mt-[3rem] mx-[2.6rem] min-w-[40rem] w-[40rem] h-[25rem] bg-[var(--aboutUsCardBg)] text-[var(--titleBg)] rounded-lg max-[475px]:min-w-[36rem] max-[475px]:w-[36rem] max-[475px]:h-[28rem] max-[400px]:min-w-[32rem] max-[400px]:w-[32rem] max-[350px]:min-w-[28rem] max-[350px]:w-[28rem] '
			id={id}
			key={id}
			initial={{ opacity: 0}}
			whileInView={{ opacity: 1, transition: { duration: 1 } }}>
			<div className=' m-[1rem] flex items-center'>
				<img
					src={src}
					alt={alt}
					className={
						'about-us__opinions-box--img mx-[1rem] p-2 w-[12rem] h-[12rem] object-cover object-right rounded-[50%] max-[400px]:mx-0 max-[400px]:w-[10rem] max-[400px]:h-[10rem] max-[400px]:p-1'
					}
				/>
				<div className='flex flex-col items-center'>
					<div className='flex items-center'>
						<h3 className='ml-[1.2rem] mr-2 text-center text-[1.8rem] font-semibold max-[400px]:ml-[.6rem] max-[400px]:mr-[1rem]'>
							{title}
						</h3>
						<Confirm width={'2rem'} height={'2rem'} stroke={'green'}/>
					</div>
					<p className='mx-[1rem] text-center text-[1.4rem]'>{userDescription}</p>
				</div>
			</div>
			<div className='flex justify-center items-center mt-[1rem]'>
				<p className='mr-[1.2rem] text-[1.6rem]'>10</p>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
				<Star width={'2rem'} height={'2rem'} fill={'gold'}/>
			</div>
			<p className='mx-[1rem] my-[2rem] text-center text-pretty text-[1.4rem]'>{opinion}</p>
		</motion.div>
	)
}
