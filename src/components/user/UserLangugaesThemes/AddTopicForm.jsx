import { useContext, useState } from 'react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import { isNotEmpty } from '../../../util/validation'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Form from '../../../UI/Form'
import Input from '../../../UI/Input'
import Xicon from '../../icons/Action/Xicon'

export default function AddTopicForm({
	handleAddTopicFormState,
	handleLanguageTopicData,
	languageTopicData,
	language,
}) {
	const userId = useContext(IsUserAuthContext).userIDSession
	const languageId = useContext(IsUserAuthContext).languageIdSession
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest, setError } = useHTTP()
	let languageName = language.name.toLowerCase()

	async function addTopic(e) {
		e.preventDefault()

		if (!isNotEmpty(languageTopicData.name) || !isNotEmpty(languageTopicData.polishName)) {
			setError('Uzupełnij wszystkie pola.')
			return new Error('Uzupełnij wszystkie pola.')
		}

		const resData = await sendRequest(`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				topicName: languageTopicData.name,
				topicPolishName: languageTopicData.polishName,
				userId: userId,
				languageId: languageId,
				topicId: languageId + '-' + languageTopicData.name.toLowerCase().replace(/\s+/g, '-'),
			}),
		})

		resData !== undefined && setConfirmMessage('Temat został dodany.')
		handleAddTopicFormState(false)
		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Tworzę nowy temat, proszę czekać...'/>
			) : (
				<Form
					className='login__form topic__form min-h-[42rem] w-[42rem] z-10'
					onSubmit={addTopic}
					title='Stwórz Temat'
					buttonCaption='Dodaj temat'>
					<button type='button' className='create-collection__x-btn absolute' onClick={handleAddTopicFormState}>
						<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--white)'}/>
					</button>
					{error && <p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1.4rem] text-[1.8rem] text-center text-[#28d818]'>{confirmMessage}</p>
					<Input
						labelText={`Nazwa tematu po ${languageName.slice(0, -1) + 'u'}`}
						htmlFor='name'
						name='name'
						id='name'
						type='text'
						placeHolder='Wpisz nazwę'
						onChange={handleLanguageTopicData}
					/>
					<Input
						labelText='Nazwa tematu po polsku'
						htmlFor='polishName'
						name='polishName'
						id='polishName'
						type='text'
						placeHolder='Wpisz nazwę'
						onChange={handleLanguageTopicData}
					/>
				</Form>
			)}
		</>
	)
}
