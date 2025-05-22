import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useContext } from 'react'
import { IsUserAuthContext } from '../store/IsUserAuthContext'
import RootLayout from './Root'
import Home from './Home'
import ProfilePage from './Profile'
import AboutUsPage from './AboutUs'
import ContactPage from './Contact'
import Signup from './Signup'
import Login from './Login'
import AuthRoot from './AuthRoot'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import Error from './Error'
import ProtectedRoute from './ProtectedRoute'
import Logout from './Logout'
import UserHomePage from './UserHome'
import Languages from '../components/user/UserLangugaesThemes/Languages'
import UserLanguageTopicsPage from './UserLanguageThemes'
import UserTopicWordsPage from './UserTopicWords'
import Topics from '../components/user/UserTopicWords/Topics'
import Words from '../components/user/Word/Words'
import Word from './Word'

export default function Routes() {
	const isAuth = useContext(IsUserAuthContext)
	const userId = isAuth.userIDSession
	const languageId = isAuth.languageIdSession
	const topicId = isAuth.topicIdSession

	const routesForPublic = [
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'about-us',
					element: <AboutUsPage />,
				},
				{
					path: 'contact',
					element: <ContactPage />,
				},
				{
					path: 'auth',
					element: <AuthRoot />,
					errorElement: <Error />,
					children: [
						{
							path: 'signup',
							element: <Signup />,
						},
						{
							path: 'login',
							element: <Login />,
						},
						{
							path: 'forgot-password',
							element: <ForgotPassword />,
						},
						{
							path: `reset-password/:token`,
							element: <ResetPassword />,
						},
					],
				},
				,
			],
		},
	]

	const routesForAuthenticatedOnly = [
		{
			path: '/users',
			element: <ProtectedRoute />,
			children: [
				{
					path: `${userId}`,
					element: <UserHomePage />,
				},
				{
					path: `${userId}/profile`,
					element: <ProfilePage />,
				},
				{
					path: `${userId}/languages`,
					element: <Languages />,
					children: [
						{
							path: `${languageId}`,
							element: <UserLanguageTopicsPage />,
						},
					],
				},
				{
					path: `${userId}/languages/${languageId}/topics`,
					element: <Topics />,
					children: [
						{
							path: `${topicId}`,
							element: <UserTopicWordsPage />,
						},
					],
				},
				{
					path: `${userId}/languages/${languageId}/topics/${topicId}/words`,
					element: <Words />,
					children: [
						{
							path: `:wordId`,
							element: <Word />,
						},
					],
				},
				{ path: `${userId}/profile`, element: <div>Twój profil!</div> },
				{
					path: 'logout',
					element: <Logout />,
				},
			],
		},
	]

	const router = createBrowserRouter([
		...routesForPublic,
		...(!userId ? routesForPublic : []),
		...routesForAuthenticatedOnly,
	])

	return <RouterProvider router={router} />
}
