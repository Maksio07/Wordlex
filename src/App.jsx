import Routes from './pages/Routes'
import DarkModeContextProvider from './store/DarkModeContext'
import IsUserAuthProvider from './store/IsUserAuthContext'
import './styles/index.css'

function App() {
	return (
		<DarkModeContextProvider>
			<IsUserAuthProvider>
				<Routes />
			</IsUserAuthProvider>
		</DarkModeContextProvider>
	)
}

export default App
