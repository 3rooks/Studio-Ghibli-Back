import { API_FETCH } from '../../constants/urls';

const getUserProfile = async (token, setUserProfile) => {
	try {
		const res = await fetch(API_FETCH.GET_USER_PROFILE, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				authorization: `Bearer ${JSON.parse(token)}`
			}
		});

		if (res.ok) {
			const { result } = await res.json();
			setUserProfile(result);
		}
	} catch (error) {
		console.log(error);
	}
};

export default getUserProfile;
