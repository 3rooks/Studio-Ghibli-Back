import { API_FETCH } from '../../constants/urls';

const postUserRegister = async (user, navigate) => {
	try {
		const res = await fetch(API_FETCH.USER_REGISTER, {
			method: 'POST',
			body: user
		});

		if (res.ok) {
			await res.json();
			navigate('/login');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserRegister;
