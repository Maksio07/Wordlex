import Navigation from '../components/header/Navigation'

export default function Error() {
	return (
		<>
			<Navigation />
			<section className='flex flex-col items-center h-screen w-screen'>
				<h1 className='mt-[8rem] text-[9.8rem] text-[var(--titleBg)]'>4😭4</h1>
				<h2 className='mt-[3rem] text-[3.4rem] text-[var(--titleBg)] text-center'>Uuupss...</h2>
				<p className='mt-[3rem] text-[2.8rem] text-[var(--titleBg)] text-center'>Takiej strony nie istnieje </p>
			</section>
		</>
	)
}
