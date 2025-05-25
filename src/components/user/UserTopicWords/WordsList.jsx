import { useState } from 'react'
import { Link } from 'react-router-dom'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Delete from '../../icons/Action/Delete'
import Edit from '../../icons/Action/Edit'

export default function WordsList({ words, userId, languageId, topicId, handleEditWordFormIsActive, setWordId }) {
	const { isLoading, error, sendRequest } = useHTTP()
	const [confirmMessage, setConfirmMessage] = useState('')
	let ulStyles = 'topics-ul flex flex-wrap mx-[1rem]'

	if (words.length > 2) {
		ulStyles = 'words-ul flex flex-wrap justify-center mx-[1rem]'
	}

	async function deleteWord(e) {
		e.preventDefault()

		const resData = await sendRequest(
			`https://wordlex-api.onrender.com/users/${userId}/languages/${languageId}/topics/${topicId}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					userId: userId,
					topicId: topicId,
					wordId: e.target.closest('li').id,
				}),
			}
		)

		resData !== undefined && setConfirmMessage('Słowo zostało usunięte.')
		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Aktualizuję dane, proszę czekać...' />
			) : (
				<>
					{error && <p className='error-text mb-[1.4rem] text-[2.2rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1.4rem] text-[2.2rem] text-center text-[#28d818]'>{confirmMessage}</p>
					<ul className={ulStyles}>
						{words !== '' &&
							words.map(word => {
								let textStyles = 'flex flex-col items-center ml-[3rem] w-[11.4rem] text-center max-[375px]:w-[10.2rem]'

								if (word.imgURL === '') {
									textStyles =
										'flex flex-col items-center ml-[3rem] w-[32rem] text-center max-[375px]:w-[24.2rem] max-[420px]:w-[26.2rem]'
								}

								return (
									<li
										key={word._id}
										id={word._id}
										className='word__li  relative flex items-center my-[3rem] mr-[3rem] py-[.4rem] w-[38rem] h-[9.4rem] rounded-lg cursor-pointer bg-[var(--mobileNavBg)] max-[560px]:mx-0 max-[420px]:w-[35rem] max-[375px]:mr-[0] max-[375px]:w-[30rem]'
										onClick={() => setWordId(word._id)}>
										<button type='click' className='deteleTopic-btn' onClick={deleteWord}>
											<Delete width={'2.4rem'} height={'2.4rem'} fill={'var(--navLinks)'} />
										</button>
										<button type='click' className='editTopic-btn' onClick={handleEditWordFormIsActive}>
											<Edit width={'2.4rem'} height={'2.4rem'} stroke={'var(--navLinks)'} />
										</button>
										<Link
											to={`/users/${userId}/languages/${languageId}/topics/${topicId}/words/${word._id}`}
											className='flex items-center'>
											{word.imgURL === '' ? (
												''
											) : (
												<img
													src={word.imgURL}
													alt={'A ' + word.name + ' image'}
													className='word__li-image ml-[1rem] h-[8.4rem] w-[15.2rem] rounded-[.6rem] max-[375px]:w-[9.2rem]'
												/>
											)}

											<div className={textStyles}>
												<p className='text-[1.8rem] font-medium text-[var(--navLinks)]'>{word.name}</p>
												<p className='mt-[1rem] text-[1.6rem] font-normal text-[var(--navLinks)]'>
													{word.nameInPolish}
												</p>
											</div>
										</Link>
									</li>
								)
							})}
					</ul>
				</>
			)}
		</>
	)
}
