import { motion } from 'motion/react'
import Button from './Button'

export default function Form({ className, children, onSubmit, title, buttonCaption }) {
	return (
		<motion.form
			className={'login__form flex flex-col items-center bg-[var(--mobileNavBg)] rounded-xl ' + className}
			onSubmit={onSubmit}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}>
			<h2 className='login-title mt-[4rem] mb-[2rem] text-[2.6rem] font-bold'>{title}</h2>
			{children}
			<Button type='submit'>{buttonCaption}</Button>
		</motion.form>
	)
}
