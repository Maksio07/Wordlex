import { useState, useCallback } from 'react'

export default function useHTTP() {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)

	const sendRequest = useCallback(async (url, config) => {
		setIsLoading(true)
		setError(null)

		try {
			const res = await fetch(url, config)
			const resData = await res.json()

			if (!res.ok) {
				throw new Error(resData.message || 'Server nie odpowiada, sprawdź swoje połączenie z siecią i spróbuj ponownie.')
			}

			setData(resData)
			return resData
		} catch (err) {
			setError(
				err.message === 'Failed to fetch'
					? 'Server nie odpowiada, sprawdź swoje połączenie z siecią i spróbuj ponownie.'
					: err.message
			)
			throw err
		} finally {
			setIsLoading(false)
		}
	}, [])

	return {
		isLoading,
		error,
		data,
		sendRequest,
		setError,
	}
}
