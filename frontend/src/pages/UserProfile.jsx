import { useEffect, useState } from 'react';
import Loader from '../components/loader/loader';
import { getTokenLocalStorage } from '../constants/token-persistence';
import getUserProfile from '../lib/api/get-user-profile';
import Landing from './Landing';

const UserProfile = () => {
	const token = getTokenLocalStorage();
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		if (!token) return;
		getUserProfile(token, setUserProfile);
	}, [token]);

	return (
		<Landing>
			<div>
				{userProfile === null ? (
					<Loader />
				) : (
					<div>
						<img
							src={userProfile.image}
							alt={userProfile.username}
						/>
						<p>Username: {userProfile.username}</p>
						<p>Email: {userProfile.email}</p>
					</div>
				)}
			</div>
		</Landing>
	);
};

export default UserProfile;
