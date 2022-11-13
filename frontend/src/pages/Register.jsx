import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { getTokenLocalStorage } from '../constants/token-persistence';
import postUserRegister from '../lib/api/post-user-register';
import Landing from './Landing';

const Register = () => {
	const token = getTokenLocalStorage();
	const navigate = useNavigate();
	const { setUsername, setEmail, setPassword, setImage } = useFormValues();
	return (
		<Landing>
			{token ? (
				<Navigate relative to={'/'} />
			) : (
				<>
					<h1>Register...</h1>
					<form onSubmit={(ev) => handleSubmit(ev, navigate)}>
						<label htmlFor='username'>Username:</label>
						<input
							type='text'
							name='username'
							id='username'
							onChange={(ev) => setUsername(ev.target.value)}
						/>

						<label htmlFor='email'>Email:</label>
						<input
							type='text'
							name='email'
							id='email'
							onChange={(ev) => setEmail(ev.target.value)}
						/>
						<label htmlFor='password'>Password:</label>
						<input
							type='text'
							name='password'
							onChange={(ev) => setPassword(ev.target.value)}
						/>
						<label htmlFor='image'>Image</label>
						<input
							type='file'
							name='image'
							id='image'
							onChange={(ev) => setImage(ev.target.files)}
						/>
						<button type='submit'>Register</button>
					</form>
				</>
			)}
		</Landing>
	);
};

const useFormValues = () => {
	const [formValues, setformValues] = useState({
		username: '',
		email: '',
		password: '',
		image: ''
	});
	const setUsername = (newUsername) =>
		setformValues({
			...formValues,
			username: newUsername
		});

	const setEmail = (newEmail) =>
		setformValues({
			...formValues,
			email: newEmail
		});

	const setPassword = (newPassword) =>
		setformValues({
			...formValues,
			password: newPassword
		});

	const setImage = async (newImage) => {
		setformValues({
			...formValues,
			image: newImage[0]
		});
	};

	return {
		...formValues,
		setUsername,
		setEmail,
		setPassword,
		setImage
	};
};

const handleSubmit = (ev, navigate) => {
	ev.preventDefault();

	const user = new FormData(ev.target);

	postUserRegister(user, navigate);
};

export default Register;
