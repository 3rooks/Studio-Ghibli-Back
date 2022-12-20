import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { getTokenLocalStorage } from '../constants/token-persistence';
import postUserRegister from '../lib/api/post-user-register';

const Register = () => {
	const token = getTokenLocalStorage();
	const navigate = useNavigate();
	const { username, email, password, setUsername, setEmail, setPassword } =
		useFormValues();
	return (
		<div>
			{token ? (
				<Navigate relative to={'/'} />
			) : (
				<>
					<div className='w-3/4 mx-auto border border-stone-900'>
						<h1 className='text-center text-lg'>Register...</h1>
						<form
							className='flex flex-col p-4'
							onSubmit={(ev) =>
								handleSubmit(
									ev,
									username,
									email,
									password,
									navigate
								)
							}
						>
							<label htmlFor='username'>Username:</label>
							<input
								className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
						focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
								type='text'
								name='username'
								id='username'
								onChange={(ev) => setUsername(ev.target.value)}
							/>

							<label htmlFor='email'>Email:</label>
							<input
								className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
						focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
								type='text'
								name='email'
								id='email'
								onChange={(ev) => setEmail(ev.target.value)}
							/>
							<label htmlFor='password'>Password:</label>
							<input
								className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
						focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
						disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
						invalid:border-pink-500 invalid:text-pink-600
						focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
								type='text'
								name='password'
								onChange={(ev) => setPassword(ev.target.value)}
							/>
							{/* <label htmlFor='image'>Image</label>
						<input
							type='file'
							name='image'
							id='image'
							onChange={(ev) => setImage(ev.target.files)}
						/> */}
							<br />
							<Button name={'Register'} type='submit'></Button>
						</form>
					</div>
				</>
			)}
		</div>
	);
};

const useFormValues = () => {
	const [formValues, setformValues] = useState({
		username: '',
		email: '',
		password: ''
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

	// const setImage = async (newImage) => {
	// 	setformValues({
	// 		...formValues,
	// 		image: newImage[0]
	// 	});
	// };

	return {
		...formValues,
		setUsername,
		setEmail,
		setPassword
	};
};

const handleSubmit = (ev, username, email, password, navigate) => {
	ev.preventDefault();

	const user = {
		username,
		email,
		password
	};

	postUserRegister(user, navigate);
};

export default Register;
