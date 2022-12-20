import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import postUserLogin from '../lib/api/post-user-login';
import { UserContext } from '../lib/context/UserContext';

const Login = () => {
	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	const navigate = useNavigate();
	const { email, password, setEmail, setPassword } = useFormValues();

	return (
		<div>
			{token ? (
				<Navigate replace to={'/'} />
			) : (
				<>
					<div className='w-3/4 mx-auto border border-stone-900'>
						<h1 className='text-center text-lg'>Login...</h1>
						<form
							onSubmit={(ev) =>
								handleSubmit(
									ev,
									email,
									password,
									navigate,
									setToken
								)
							}
							className='flex flex-col p-4'
						>
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
							<br />
							<Button name={'Login'} type='submit'></Button>
						</form>
					</div>
				</>
			)}
		</div>
	);
};

const useFormValues = () => {
	const [formValues, setformValues] = useState({
		email: '',
		password: ''
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

	return { ...formValues, setEmail, setPassword };
};

const handleSubmit = (ev, email, password, navigate, setToken) => {
	ev.preventDefault();
	const user = {
		email,
		password
	};

	postUserLogin(user, navigate, setToken);
};

export default Login;
