export default function CreateButton({ children, props, onClick, className, disabled }) {
	return (
		<button
			type='button'
			className={
				'create-button flex items-center mr-[1rem] my-[2rem] px-[2rem] py-[.6rem] bg-[var(--createBtn)] text-[var(--navLinks)] rounded-[.8rem] text-[2.6rem] max-[840px]:mr-[2rem] ' +
				className
			}
			onClick={onClick}
			{...props}>
			{children}
		</button>
	)
}
