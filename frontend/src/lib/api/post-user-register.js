import { API_FETCH } from '../../constants/urls';
import emitEvent from '../events/alertEvent';

const postUserRegister = async (user, navigate) => {
	try {
		const res = await fetch(API_FETCH.USER_REGISTER, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		});
		if (res.status === 201) {
			navigate('/login');
			emitEvent('user created - you can login');
		} else if (res.status === 400) {
			emitEvent('invalid inputs');
		} else if (res.status === 409) {
			emitEvent('user already exist');
		}
	} catch (error) {
		console.log(error);
	}
};

export default postUserRegister;
