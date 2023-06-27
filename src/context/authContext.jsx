import { createContext, useContext, useState } from 'react'
import { useLoginMutation } from '../store/authApi'

const AuthContext = createContext({
	isAuth: '',
	setToken: () => Promise.resolve(),
})

const AuthProvider = ({ children }) => {
	const [loginQuery, { isLoading, error }] = useLoginMutation()
	const [isAuth, setToken] = useState('')
	const login = async (params) => {
		const { data } = await loginQuery(params)
		if (data) {
			setToken(data.access_token)
			localStorage.setItem('token', data.access_token)
		}
	}
	return (
		<AuthContext.Provider value={{ isAuth, login, isLoading, error }}>
			{children}
		</AuthContext.Provider>
	)
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }
