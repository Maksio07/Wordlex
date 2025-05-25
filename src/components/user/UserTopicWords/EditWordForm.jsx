import { useState } from 'react'
import { isNotEmpty } from '../../../util/validation'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Form from '../../../UI/Form'
import Input from '../../../UI/Input'
import Xicon from '../../icons/Action/Xicon'

export default function EditWordForm({
	handleEditWordFormIsActive,
	topicId,
	userId,
	languageId,
	words,
	wordToEdit,
	language,
}) {
	const { isLoading, error, sendRequest, setError } = useHTTP()
	const [confirmMessage, setConfirmMessage] = useState('')
	const word = words.find(w => {
		return w._id === wordToEdit.id
	})
	const [newWordData, setNewWordData] = useState({
		newName: word.name,
		newNameInPolish: word.nameInPolish,
		newExample: word.example,
		newImgURL: word.imgURL,
	})

	function handleNewWordData(e) {
		const target = e.target

		setNewWordData(prevState => {
			return {
				...prevState,
				[target.name]: target.value,
			}
		})
	}

	async function editWord(e) {
		e.preventDefault()

		if (!isNotEmpty(newWordData.newName) || !isNotEmpty(newWordData.newNameInPolish)) {
			setError('Uzupełnij wszystkie pola.')
			return new Error('Uzupełnij wszystkie pola.')
		}

		const resData = await sendRequest(
			`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}/topics/${topicId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: userId,
					topicId: topicId,
					wordId: word._id,
					newName: newWordData.newName,
					newNameInPolish: newWordData.newNameInPolish,
					newExample: newWordData.newExample,
					newImgURL: newWordData.newImgURL,
				}),
			}
		)

		resData !== undefined && setConfirmMessage('Słowo zostało zaktualizowane.')
		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Aktualizuję słowo, proszę czekać...'/>
			) : (
				<Form
					className='topic__form min-h-[62rem] w-[42rem] z-10'
					onSubmit={editWord}
					buttonCaption='Zmień słowo'
					title='Edytuj Słowo'>
					<button type='button' aria-label='Zamknij' className='create-collection__x-btn absolute' onClick={handleEditWordFormIsActive}>
						<Xicon width={'2.8rem'} heigth={'2.8rem'} stroke={'var(--white)'}/>
					</button>
					{error && <p className='error-text mb-[1rem] text-[1.8rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1rem] text-[1.8rem] text-center text-[#28d818]'>{confirmMessage}</p>

					<Input
						labelText={`Słowo w języku ${language}`}
						htmlFor='newName'
						name='newName'
						id='newName'
						type='text'
						placeHolder={`Wpisz słowo w języku ${language}`}
						value={newWordData.newName}
						onChange={handleNewWordData}
					/>
					<Input
						labelText='Słowo w języku polskim'
						htmlFor='newNameInPolish'
						name='newNameInPolish'
						id='newNameInPolish'
						type='text'
						placeHolder='Wpisz słowo w języku polskim'
						value={newWordData.newNameInPolish}
						onChange={handleNewWordData}
					/>
					<Input
						labelText='Podaj przykładowe zdanie (opcjonalnie)'
						htmlFor='newExample'
						name='newExample'
						id='newExample'
						type='text'
						placeHolder='Wpisz przykład'
						required={false}
						value={newWordData.newExample}
						onChange={handleNewWordData}
					/>
					<Input
						labelText='Dodaj link do obrazka (opcjonalnie)'
						htmlFor='newImgURL'
						name='newImgURL'
						id='newImgURL'
						type='text'
						placeHolder='Dodaj link do obrazka'
						required={false}
						value={newWordData.newImgURL}
						onChange={handleNewWordData}
					/>
				</Form>
			)}
		</>
	)
}
