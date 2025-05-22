import { useState } from 'react'
import { motion } from 'motion/react'
import Button from '../../../UI/Button'

export default function WordData({ word }) {
	const [answerIsActive, setAnswerIsActive] = useState(false)

	const handleAnswerIsActiveState = () => {
		setAnswerIsActive(prevState => !prevState)
	}

	return (
		<>
			{word !== undefined && (
				<motion.div
					className='word-area flex flex-col items-center mt-[4rem]'
					initial={{ opacity: 0, y: '-40vh' }}
					animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}>
					{word.imgURL === '' ? (
						''
					) : (
						<img
							src={word.imgURL}
							alt={word.name}
							className='word-area__img w-[36rem] h-[42rem] rounded-lg object-cover max-[450px]:w-[32rem] max-[350px]:w-[28rem]'
						/>
					)}
					{answerIsActive ? (
						<motion.div
							className='word-area__answer my-[1.6rem] text-center text-[var(--titleBg)]'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: .8 } }}>
							<h2 className='word-area__answer--name mb-[1.6rem] text-[2.4rem] font-medium'>{word.name}</h2>
							<p className='word-area__answer--example text-[1.6rem]'>{word.example}</p>
						</motion.div>
					) : (
						<motion.h2
							className='word-area__nameInPolish my-[1.6rem] text-[2.4rem] font-medium text-center text-[var(--titleBg)]'
							initial={{ opacity: 0 }}
							animate={{ opacity: 1, transition: { duration: .8 } }}>
							{word.nameInPolish}
						</motion.h2>
					)}
					<Button
						onClick={handleAnswerIsActiveState}
						className=' word-area__show-answer-btn mt-2 uppercase text-[1.6rem] bg-[var(--mobileNavBg)]'>
						{answerIsActive ? 'ukryj odpowiedź' : 'pokaż odpowiedź'}
					</Button>
				</motion.div>
			)}
		</>
	)
}
