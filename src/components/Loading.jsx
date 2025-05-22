export default function Loading({ loadingText }) {
	return (
		<div className='loading-container'>
			<div className='spinner'></div>
			<p className='loading-text'>{loadingText}</p>
		</div>
	)
}
