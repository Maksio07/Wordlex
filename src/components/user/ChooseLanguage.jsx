import { useContext, useState } from 'react'
import { DarkModeContext } from '../../store/DarkModeContext'
import useHTTP from '../../hooks/useHTTP'
import ChooseLanguageForm from './ChooseLangugaeForm'
import Loading from '../Loading'

export default function ChooseLanguage({ handleAddLanguageState, id }) {
	const currentModeCtx = useContext(DarkModeContext)
	const [selectIsActive, setSelectIsActive] = useState(false)
	const [choosenLanguage, setChoosenLanguage] = useState('')
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()
	let ulListStyles = 'create__select__ul hidden'

	function handleSelectDisposition() {
		setSelectIsActive(prevState => !prevState)
	}

	if (selectIsActive) {
		ulListStyles =
			'create__select__ul absolute flex flex-col mt-[3.2rem] w-[30rem] bg-[var(--white)] rounded-[.6rem]'
	}

	function chooseTheLanguage(e) {
		setChoosenLanguage(e.target.closest('li'))
	}

	async function submitTheLanguage(e) {
		e.preventDefault()

		if (choosenLanguage.lastChild === undefined) {
			setError('Wybierz język.')
			return new Error('Wybierz język.')
		}

		const resData = await sendRequest(`http://localhost:8080/users/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: choosenLanguage.lastChild.innerHTML,
				flag: choosenLanguage.firstChild.src,
				userId: id,
				languageId: choosenLanguage.id,
			}),
		})

		resData !== undefined && setConfirmMessage('Wybrany przez Ciebie język został dodany 😉')

		window.location.reload()
		handleAddLanguageState()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Dodaję nowy język, proszę czekać...' />
			) : (
				<>
					<div
						mode={currentModeCtx.currentMode}
						className='create-collection absolute flex flex-col items-center justify-center z-[100]'>
						<ChooseLanguageForm
							error={error}
							confirmMessage={confirmMessage}
							chooseTheLanguage={chooseTheLanguage}
							submitTheLanguage={submitTheLanguage}
							handleSelectDisposition={handleSelectDisposition}
							ulListStyles={ulListStyles}
							handleAddLanguageState={handleAddLanguageState}
							choosenLanguage={choosenLanguage}
							selectIsActive={selectIsActive}
						/>
					</div>
				</>
			)}
		</>
	)
}
