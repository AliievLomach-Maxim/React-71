import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signUp } from '../../api/auth'
import { toast } from 'react-hot-toast'

const SignUpPage = () => {
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [email, setEmail] = useState('')

	const navigate = useNavigate()

	const handleChange = ({ target: { name, value } }) => {
		name === 'email'
			? setEmail(value)
			: name === 'name'
			? setName(value)
			: setPassword(value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		signUp({
			email,
			password,
			name,
			avatar: 'https://api.lorem.space/image/face?w=640&h=480&r=867',
		}).then(() => {
			toast.success('Sign Up successfully')
			navigate('/login')
		})
	}

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
					<label htmlFor='exampleInputName' className='form-label'>
						Name
					</label>
					<input
						name='name'
						type='text'
						className='form-control'
						id='exampleInputName'
						onChange={handleChange}
						value={name}
					/>
				</div>
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

				<button
					type='submit'
					className='btn btn-primary me-3'
					disabled={!name || !email || !password}
				>
					Sign Up
				</button>
				<Link to='/login'>Log In</Link>
			</form>
		</div>
	)
}

export default SignUpPage
