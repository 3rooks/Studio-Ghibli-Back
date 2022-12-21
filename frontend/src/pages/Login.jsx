import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import postUserLogin from '../lib/api/post-user-login';
import { UserContext } from '../lib/context/UserContext';

const Login = () => {
	const navigate = useNavigate();

	const value = useContext(UserContext);
	const { token, setToken } = value;

	return (
		<div>
			{token ? (
				<Navigate replace to={'/'} />
			) : (
				<div className='flex justify-center items-center w-full h-96 p-3'>
					<div className='w-full shadow-md rounded-md sm:w-2/3 md:w-2/3 lg:w-3/4 xl:w-2/3 2xl:w-1/2'>
						<form
							className='flex flex-col p-4 text-center gap-3'
							onSubmit={(ev) =>
								handleSubmit(ev, navigate, setToken)
							}
						>
							<label>
								Email:
								<input
									className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
									type='email'
									name='mail'
								/>
							</label>
							<label>
								Password:
								<input
									className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
									type='password'
									name='pass'
								/>
							</label>
							<Button>LOGIN</Button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

const handleSubmit = (ev, navigate, setToken) => {
	ev.preventDefault();

	const user = {
		email: ev.target.mail.value,
		password: ev.target.pass.value
	};

	postUserLogin(user, navigate, setToken);
};

export default Login;
