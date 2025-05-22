import axios from 'axios'
import { createContext, useState, useMemo, useEffect } from 'react'

export const IsUserAuthContext = createContext({
	token: '',
	setToken: () => {},
	session: '',
	userIDSession: '',
	setSession: () => {},
	setUserIDSession: () => {},
	languageIdSession: '',
	setLanguageIdSession: () => {},
	topicIdSession: '',
	setTopicIdSession: () => {},
	wordIdSession: '',
	setWordIdSession: () => {},
})

export default function IsUserAuthContextProvider({ children }) {
	const [token, setToken_] = useState(localStorage.getItem('token'))
	const [session, setSession_] = useState(sessionStorage.getItem('userName'))
	const [userIDSession, setUserIDSession_] = useState(sessionStorage.getItem('userID'))
	const [languageIdSession, setLanguageIdSession_] = useState(sessionStorage.getItem('languageID'))
	const [topicIdSession, setTopicIdSession_] = useState(sessionStorage.getItem('topicID'))
	const [wordIdSession, setWordIdSession_] = useState(sessionStorage.getItem('wordID'))

	function setToken(newToken) {
		setToken_(newToken)
	}

	function setSession(newSession) {
		setSession_(newSession)
	}

	function setUserIDSession(userId) {
		setUserIDSession_(userId)
	}

	function setLanguageIdSession(languageId) {
		setLanguageIdSession_(languageId)
	}

	function setTopicIdSession(topicId) {
		setTopicIdSession_(topicId)
	}

	function setWordIdSession(wordId) {
		setWordIdSession_(wordId)
	}

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
			localStorage.setItem('token', token)
		} else {
			delete axios.defaults.headers.common['Authorization']
			localStorage.removeItem('token')
		}
	}, [token])

	useEffect(() => {
		if (session && userIDSession) {
			window.sessionStorage.setItem('userName', session)
			window.sessionStorage.setItem('userID', userIDSession)
		} else {
			window.sessionStorage.removeItem('userName')
			window.sessionStorage.removeItem('userID')
		}
	}, [session, userIDSession])

	useEffect(() => {
		if (languageIdSession) {
			window.sessionStorage.setItem('languageID', languageIdSession)
		} else {
			window.sessionStorage.removeItem('languageID')
		}
	}, [languageIdSession])

	useEffect(() => {
		if (topicIdSession) {
			window.sessionStorage.setItem('topicID', topicIdSession)
		} else {
			window.sessionStorage.removeItem('topicID')
		}
	}, [topicIdSession])

	useEffect(() => {
		if (wordIdSession) {
			window.sessionStorage.setItem('wordID', wordIdSession)
		} else {
			window.sessionStorage.removeItem('wordID')
		}
	}, [wordIdSession])

	const value = useMemo(
		() => ({
			token,
			setToken,
			session,
			setSession,
			userIDSession,
			setUserIDSession,
			languageIdSession,
			setLanguageIdSession,
			topicIdSession,
			setTopicIdSession,
			wordIdSession,
			setWordIdSession,
		}),
		[token, session, userIDSession, languageIdSession, topicIdSession, wordIdSession]
	)

	return <IsUserAuthContext.Provider value={value}>{children}</IsUserAuthContext.Provider>
}
