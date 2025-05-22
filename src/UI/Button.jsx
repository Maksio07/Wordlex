export default function Button({ children, onClick, className, props }) {
	return (
		<button className={'ui-btn ' + className} onClick={onClick} {...props}>
			{children}
		</button>
	)
}
