import { API_FETCH } from '../../constants/urls';

const postUserLogin = async (user, navigate) => {
	try {
		const res = await fetch(API_FETCH.USER_LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});

		if (res.ok) {
			const { token } = await res.json();
			window.localStorage.setItem('jwt', JSON.stringify(token));
			navigate('/');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserLogin;
