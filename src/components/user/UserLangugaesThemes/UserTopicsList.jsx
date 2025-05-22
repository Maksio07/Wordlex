import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { IsUserAuthContext } from '../../../store/IsUserAuthContext'
import useHTTP from '../../../hooks/useHTTP'
import Loading from '../../Loading'
import Delete from '../../icons/Action/Delete'
import Edit from '../../icons/Action/Edit'

export default function UserTopicsList({
	topics,
	userId,
	languageId,
	handleEditTopicFormState,
	handleTopicId,
	userWords,
}) {
	const setTopicId = useContext(IsUserAuthContext).setTopicIdSession
	const topicId = useContext(IsUserAuthContext).topicIdSession
	const [confirmMessage, setConfirmMessage] = useState('')
	const { isLoading, error, sendRequest } = useHTTP()

	let ulStyles = 'topics-ul flex flex-wrap mx-[1rem]'

	if (topics.length > 2) {
		ulStyles = 'topics-ul flex flex-wrap justify-center mx-[1rem]'
	}

	async function deleteTopic(e) {
		e.preventDefault()

		const resData = await sendRequest(`http://localhost:8080/users/${userId}/languages/${languageId}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				userId: userId,
				languageId: languageId,
				topicId: e.target.closest('li').id,
			}),
		})

		resData !== undefined && setConfirmMessage('Temat został usunięty.')

		window.location.reload()
	}

	return (
		<>
			{isLoading ? (
				<Loading loadingText='Ładuję dane, proszę czekać...' />
			) : (
				<>
					{error && <p className='error-text mb-[1.4rem] text-[2.2rem] text-center text-red-600'>{error}</p>}
					<p className='error-text mb-[1.4rem] text-[2.2rem] text-center text-[#28d818]'>{confirmMessage}</p>
					<ul className={ulStyles}>
						{topics.map(topic => {
							handleTopicId(topic.topicId)
							const topicWords = userWords.filter(w => w.topicId === topic.topicId)

							return (
								<li
									key={topic._id}
									id={topic.topicId}
									className='topic-li relative flex flex-col justify-center my-[3rem] mr-[3rem] py-[.4rem] w-[38rem] h-[9.4rem] rounded-lg cursor-pointer bg-[var(--mobileNavBg)] max-[560px]:mx-0 max-[420px]:w-[35rem] max-[375px]:w-[30rem]'
									onClick={() => setTopicId(topic.topicId)}>
									<button type='click' onClick={deleteTopic} className='deteleTopic-btn'>
										<Delete width={'2.4rem'} height={'2.4rem'} fill={'var(--navLinks)'} />
									</button>
									<button type='click' className='editTopic-btn' onClick={handleEditTopicFormState}>
										<Edit width={'2.4rem'} height={'2.4rem'} stroke={'var(--navLinks)'} />
									</button>
									<Link to={`/users/${userId}/languages/${languageId}/topics/${topicId}`}>
										<div className='flex justify-evenly items-center'>
											<p className='text-[1.6rem] font-medium text-[var(--navLinks)]'>{topic.name}</p>
											<span className='text-[1.6rem] font-medium text-[var(--navLinks)]'>-</span>
											<p className='mr-[3rem] text-[1.6rem] font-medium text-[var(--navLinks)]'>
												{topic.nameInPolish}
											</p>
										</div>
										<p className='mt-[1rem] mr-[3rem] text-center text-[1.6rem] font-normal text-[var(--navLinks)]'>
											Ilość dodanych słów: {topicWords.length}
										</p>
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
