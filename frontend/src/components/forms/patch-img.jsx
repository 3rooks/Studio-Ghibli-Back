import pathUserImg from '../../lib/api/patch-user-img';
import Button from '../Button';

const ALLOWED_MIME_TYPES = ['image/png', 'image/jpeg'];

const PatchImg = ({ setContent, token, setUser }) => {
	return setContent(
		<form onSubmit={(ev) => handleSubmit(ev, token, setContent, setUser)}>
			<label>
				EDIT IMAGE:
				<input
					type='file'
					name='image'
					required={true}
					accept={ALLOWED_MIME_TYPES.join(',')}
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

export default PatchImg;

const handleSubmit = async (ev, token, setContent, setUser) => {
	ev.preventDefault();

	const user = new FormData(ev.target);
	await pathUserImg(token, user, setUser);

	setContent();
};
