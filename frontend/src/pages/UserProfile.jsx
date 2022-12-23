import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
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
		<div className='w-1/2 mx-auto flex items-center justify-center xl:w-1/3 2xl:w-1/4'>
			{!user ? (
				<Loader />
			) : (
				<div className='w-full'>
					<Modal closeModal={() => setContent()}>{content}</Modal>
					<div className='flex items-center justify-center flex-col mb-4'>
						<img
							src={user.image || '/img/cat.png'}
							height='200px'
							width='200px'
							className='shadow-md rounded-md mb-2'
						/>
						<div>
							<Button
								onClick={() =>
									PatchImg({ setContent, token, setUser })
								}
							>
								<i>Edit image</i>
							</Button>
						</div>
					</div>
					<div className='block md:flex justify-between mb-4'>
						<p>
							<i>Username:</i> <b>{user.username}</b>
						</p>
						<div>
							<Button
								onClick={() =>
									PatchUsername({
										setContent,
										token,
										setUser
									})
								}
							>
								<i>Edit username</i>
							</Button>
						</div>
					</div>
					<div className='block md:flex justify-between mb-4'>
						<p>
							<i>Email:</i> <b>{user.email}</b>
						</p>
						<div>
							<Button
								onClick={() =>
									PatchEmail({
										setContent,
										token,
										setUser
									})
								}
							>
								<i>Edit email</i>
							</Button>
						</div>
					</div>
					<div className='block md:flex justify-between mb-4'>
						<p>
							<i>Password:</i> <b>********</b>
						</p>
						<div>
							<Button
								onClick={() =>
									PatchPassword({
										setContent,
										token,
										setUser
									})
								}
							>
								<i>Edit password</i>
							</Button>
						</div>
					</div>
					<Button
						onClick={async () =>
							await DeleteUser({
								setContent,
								token,
								setToken,
								setUser,
								navigate
							})
						}
					>
						<i>Delete account</i>
					</Button>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
