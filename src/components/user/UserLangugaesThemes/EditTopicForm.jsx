import { useState, useContext } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import { isNotEmpty } from '../../../util/validation'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Form from '../../../UI/Form'
import Input from '../../../UI/Input'
import Xicon from '../../icons/Action/Xicon'

export default function EditTopicForm({
	language,
	handleEditTopicFormState,
	handleNewLanguageTopicData,
	newLanguageTopicData,
	topicId,
}) {
	const userId = useContext(IsUserAuthContext).userIDSession
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()
	let languageName = language.name.toLowerCase()

	async function editTopic(e) {
		e.preventDefault()

		if (!isNotEmpty(newLanguageTopicData.newName) || !isNotEmpty(newLanguageTopicData.newPolishName)) {
			setError('Uzupełnij wszystkie pola.')
			return new Error('Uzupełnij wszystkie pola.')
		}

		const resData = await sendRequest(`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				newTopicName: newLanguageTopicData.newName,
				newTopicPolishName: newLanguageTopicData.newPolishName,
				newTopicId: languageId + '-' + newLanguageTopicData.newName.toLowerCase().replace(/\s+/g, '-'),
				userId: userId,
				languageId: languageId,
				topicId: topicId,
			}),
		})

		resData !== undefined && setConfirmMessage('Temat został zmieniony.')
		handleEditTopicFormState(false)
		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Zmieniam temat, proszę czekać...'/>
			) : (
				<Form
					className='login__form topic__form  min-h-[42rem] w-[44rem] z-10'
					onSubmit={editTopic}
					title='Zmień nazwę tematu'
					buttonCaption='Zmień nazwę'>
					<button type='button' aria-label='Zamknij' className='create-collection__x-btn absolute' onClick={handleEditTopicFormState}>
						<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--white)'}/>
					</button>
					{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-[#28d818]'>{confirmMessage}</p>
					<Input
						labelText={`Nowa nazwa tematu po ${languageName.slice(0, -1) + 'u'}`}
						htmlFor='newName'
						name='newName'
						id='newName'
						type='text'
						placeHolder='Wpisz nazwę'
						onChange={handleNewLanguageTopicData}
					/>
					<Input
						labelText='Nowa nazwa tematu po polsku'
						htmlFor='newPolishName'
						name='newPolishName'
						id='newPolishName'
						type='text'
						placeHolder='Wpisz nazwę'
						onChange={handleNewLanguageTopicData}
					/>
				</Form>
			)}
		</>
	)
}
