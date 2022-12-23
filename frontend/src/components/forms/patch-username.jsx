import pathUsername from '../../lib/api/patch-user-username';
import Button from '../Button';

const PatchUsername = ({ setContent, token, setUser }) => {
	return setContent(
		<form onSubmit={(ev) => handleSubmit(ev, token, setContent, setUser)}>
			<label>
				EDIT USERNAME: <b>[A-z/2-20]</b>
				<input
					className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
					focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
					disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
					invalid:border-pink-500 invalid:text-pink-600
					focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
					type='text'
					name='username'
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

export default PatchUsername;

const handleSubmit = async (ev, token, setContent, setUser) => {
	ev.preventDefault();
	setContent(undefined);

	const userUsername = {
		username: ev.target.username.value
	};
	await pathUsername(token, userUsername, setUser);
};
