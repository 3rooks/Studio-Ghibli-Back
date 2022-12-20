import pathUserImg from '../../lib/api/patch-user-img';

const PatchImg = ({ setContent, token, setUser }) => {
	return setContent(
		<form onSubmit={(ev) => handleSubmit(ev, token, setContent, setUser)}>
			<label>
				EDIT IMAGE:
				<input type='file' name='image' />
			</label>
			<button type='Submit'>SEND</button>
		</form>
	);
};

export default PatchImg;

const handleSubmit = (ev, token, setContent, setUser) => {
	ev.preventDefault();

	const user = new FormData(ev.target);

	setContent();

	pathUserImg(token, user, setUser);
};
