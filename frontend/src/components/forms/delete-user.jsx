import { clearTokenLocalStorage } from '../../constants/token-persistence';
import deleteUser from '../../lib/api/delete-user';

const DeleteUser = ({ setContent, token, setToken, setUser, navigate }) => {
	return setContent(
		<form
			onSubmit={(ev) =>
				handleSubmit(ev, token, setToken, setContent, setUser, navigate)
			}
		>
			<p>ARE U SURE?</p>
			<label>
				TYPE CURRENT PASSWORD:
				<input
					className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
					type='password'
					name='currpass'
					required={true}
				/>
			</label>
			<button type='Submit'>SEND</button>
		</form>
	);
};

export default DeleteUser;

const handleSubmit = (ev, token, setToken, setContent, setUser, navigate) => {
	ev.preventDefault();

	const userDel = {
		password: ev.target.currpass.value
	};
	deleteUser(token, userDel);

	clearTokenLocalStorage('jwt');
	setToken(undefined);
	setUser(undefined);

	setContent();
	navigate('/');
};
