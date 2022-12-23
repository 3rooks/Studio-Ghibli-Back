import pathPass from '../../lib/api/patch-user-password';
import Button from '../Button';

const PatchPassword = ({ setContent, token, setUser }) => {
	return setContent(
		<form onSubmit={(ev) => handleSubmit(ev, token, setContent, setUser)}>
			<label>
				Current Password:
				<input
					className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
					type='password'
					name='oldpass'
					required={true}
				/>
			</label>
			<label>
				New Password: <b>[a-Z/0-9(8-20)]</b>
				<input
					className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
					type='password'
					name='newpass'
					required={true}
				/>
			</label>
			<div className='my-2'>
				<Button>
					<i>Send</i>
				</Button>
			</div>
		</form>
	);
};

export default PatchPassword;

const handleSubmit = async (ev, token, setContent, setUser) => {
	ev.preventDefault();
	setContent(undefined);

	const userPass = {
		oldPassword: ev.target.oldpass.value,
		newPassword: ev.target.newpass.value
	};
	await pathPass(token, userPass, setUser);
};
