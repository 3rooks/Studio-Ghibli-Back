import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DeleteUser from '../components/forms/delete-user';
import PatchEmail from '../components/forms/patch-email';
import PatchImg from '../components/forms/patch-img';
import PatchPassword from '../components/forms/patch-password';
import PatchUsername from '../components/forms/patch-username';
import Loader from '../components/loader/loader';
import Modal from '../components/modal/Modal';
import { UserContext } from '../lib/context/UserContext';

const UserProfile = () => {
	const navigate = useNavigate();

	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	const [content, setContent] = useState(undefined);

	return (
		<div>
			{!user ? (
				<Loader />
			) : (
				<div className='px-4'>
					<Modal closeModal={() => setContent()}>{content}</Modal>
					<div>
						<div className='flex'>
							<img
								src={user.image || '/img/cat.png'}
								height='50px'
								width='50px'
							/>
							<button
								onClick={() =>
									PatchImg({ setContent, token, setUser })
								}
							>
								Edit IMG
							</button>
						</div>
						<div className='flex'>
							<p>Username: {user.username}/</p>
							<button
								onClick={() =>
									PatchUsername({
										setContent,
										token,
										setUser
									})
								}
							>
								Edit USERNAME
							</button>
						</div>
						<div className='flex'>
							<p>Email: {user.email}/</p>
							<button
								onClick={() =>
									PatchEmail({ setContent, token, setUser })
								}
							>
								Edit EMAIL
							</button>
						</div>
						<div className='flex'>
							<p>Password/</p>
							<button
								onClick={() =>
									PatchPassword({
										setContent,
										token,
										setUser
									})
								}
							>
								Edit PASSWORD
							</button>
						</div>
						<div>
							<button
								onClick={() =>
									DeleteUser({
										setContent,
										token,
										setToken,
										setUser,
										navigate
									})
								}
							>
								Delete Account
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
