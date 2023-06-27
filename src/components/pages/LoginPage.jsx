import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const LoginPage = () => {
	const { login, isLoading, error } = useAuth()
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const navigate = useNavigate()

	const handleChange = ({ target: { name, value } }) => {
		name === 'email' ? setEmail(value) : setPassword(value)
	}

	useEffect(() => {
		error && toast.error(error.data.message)
	}, [error])

	const handleSubmit = async (e) => {
		e.preventDefault()
		login({
			email,
			password,
		})
	}
	// const handleSubmit = async (e) => {
	// 	e.preventDefault()
	// 	try {
	// 		await dispatch(
	// 			loginThunk({
	// 				email,
	// 				password,
	// 			})
	// 		).unwrap()

	// 	} catch (error) {
	// 		toast.error(error)
	// 	}
	// }
	// const formData = new FormData()
	// formData.append('data',{})
	// fetch('', {
	// 	body: formData,
	// 	headers: {
	// 		'content-type':'multipart/json'
	// 	},
	// })

	return (
		<div className='container mt-3'>
			<button
				className='btn btn-primary m-3'
				onClick={() => {
					navigate('/')
				}}
			>
				Home
			</button>
			<form onSubmit={handleSubmit}>
				<div className='mb-3'>
					<label htmlFor='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						name='email'
						type='email'
						className='form-control'
						id='exampleInputEmail1'
						onChange={handleChange}
						value={email}
					/>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label
						htmlFor='exampleInputPassword1'
						className='form-label'
					>
						Password
					</label>
					<input
						name='password'
						type='password'
						className='form-control'
						id='exampleInputPassword1'
						onChange={handleChange}
						value={password}
					/>
				</div>

				{isLoading ? (
					<div className='spinner-border' role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				) : (
					<button
						type='submit'
						className='btn btn-primary me-3'
						disabled={!email || !password}
					>
						Login
					</button>
				)}
				<Link to='/signUp'>Sign Up</Link>
			</form>
		</div>
	)
}

export default LoginPage
