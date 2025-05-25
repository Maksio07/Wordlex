export default function Button({ children, onClick, className, ariaLabel, props }) {
	return (
		<button className={'ui-btn ' + className} aria-label={ariaLabel} onClick={onClick} {...props}>
			{children}
		</button>
	)
}
