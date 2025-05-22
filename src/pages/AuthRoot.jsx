import { Outlet } from 'react-router-dom'
import Navigation from '../components/header/Navigation'

export default function AuthRoot() {
	return (
		<>
			<Navigation />
			<main className='w-screen'>
				<Outlet />
			</main>
		</>
	)
}
