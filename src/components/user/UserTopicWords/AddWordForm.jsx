import { useState } from 'react'
import { isNotEmpty } from '../../../util/validation'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Form from '../../../UI/Form'
import Input from '../../../UI/Input'
import Xicon from '../../icons/Action/Xicon'

export default function AddWordForm({ handleAddWordFormIsActive, topicId, languageId, userId, language }) {
	const { isLoading, error, sendRequest, setError } = useHTTP()
	const [confirmMessage, setConfirmMessage] = useState('')
	const [wordData, setWordData] = useState({
		name: '',
		nameInPolish: '',
		example: '',
		imgURL: '',
	})

	const handleWordData = e => {
		const target = e.target

		setWordData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})
	}

	async function addNewWord(e) {
		e.preventDefault()

		if (!isNotEmpty(wordData.name) || !isNotEmpty(wordData.nameInPolish)) {
			setError('Uzupełnij wszystkie pola.')
			return new Error('Uzupełnij wszystkie pola.')
		}

		const resData = await sendRequest(
			`http://localhost:8080/users/${userId}/languages/${languageId}/topics/${topicId}`,
			{
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: wordData.name,
					nameInPolish: wordData.nameInPolish,
					example: wordData.example,
					imgURL: wordData.imgURL,
					userId: userId,
					topicId: topicId,
					languageId: languageId,
				}),
			}
		)

		resData !== undefined && setConfirmMessage('Słowo zostało dodane.')

		handleAddWordFormIsActive(false)
		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Dodaję nowe słowo, proszę czekać...'/>
			) : (
				<Form
					className='topic__form min-h-[62rem] w-[42rem] z-10'
					onSubmit={addNewWord}
					title='Stwórz Słowo'
					buttonCaption='Dodaj słowo'>
					<button type='button' className='create-collection__x-btn absolute' onClick={handleAddWordFormIsActive}>
						<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--white)'}/>
					</button>
					{error && <p className='error-text mb-[1rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1rem] text-[1.8rem] text-center text-[#28d818]'>{confirmMessage}</p>
					<Input
						labelText={`Słowo w języku ${language}`}
						htmlFor='name'
						name='name'
						id='name'
						type='text'
						placeHolder={`Wpisz słowo w języku ${language}`}
						onChange={handleWordData}
					/>
					<Input
						labelText='Słowo w języku polskim'
						htmlFor='nameInPolish'
						name='nameInPolish'
						id='nameInPolish'
						type='text'
						placeHolder='Wpisz słowo w języku polskim'
						onChange={handleWordData}
					/>
					<Input
						labelText='Podaj przykładowe zdanie (opcjonalnie)'
						htmlFor='example'
						name='example'
						id='example'
						type='text'
						placeHolder='Wpisz przykład'
						required={false}
						onChange={handleWordData}
					/>
					<Input
						labelText='Dodaj link do obrazka (opcjonalnie)'
						htmlFor='imgURL'
						name='imgURL'
						id='imgURL'
						type='text'
						placeHolder='Dodaj link do obrazka'
						required={false}
						onChange={handleWordData}
					/>
				</Form>
			)}
		</>
	)
}
