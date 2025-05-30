export default function Moon({width, height, fill}) {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} viewBox='0 0 1024 1024'>
			<path
				fill={fill}
				d='M240.448 240.448a384 384 0 1 0 559.424 525.696a448 448 0 0 1-542.016-542.08a390.592 390.592 0 0 0-17.408 16.384zm181.056 362.048a384 384 0 0 0 525.632 16.384A448 448 0 1 1 405.056 76.8a384 384 0 0 0 16.448 525.696z'
			/>
		</svg>
	)
}
