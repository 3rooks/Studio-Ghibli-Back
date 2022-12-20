import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	clearTokenLocalStorage,
	getTokenLocalStorage
} from '../constants/token-persistence';
import getUserProfile from '../lib/api/get-user-profile';
import { UserContext } from '../lib/context/UserContext';

const Header = () => {
	const navigate = useNavigate();
	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	useEffect(() => {
		const tokenLocal = getTokenLocalStorage();
		if (!tokenLocal) return;
		setToken(JSON.parse(tokenLocal));
		getUserProfile(token, setUser);
	}, [setToken, setUser, token]);

	return (
		<header className='container mx-auto flex justify-between px-16 h-16 items-center '>
			<div className='w-auto'>
				<Link to='/'>
					<h1 className='text-3xl underline hover:bg-white-400'>
						Studio Ghibli
					</h1>
				</Link>
			</div>
			<nav className='w-4/12'>
				<ul className='flex justify-evenly gap-4'>
					{!user ? (
						<>
							<li className='hover:underline'>
								<Link to='/about'>About</Link>
							</li>
							<li className='hover:underline'>
								<Link to='/register'>Register</Link>
							</li>
							<li className='hover:underline'>
								<Link to='/login'>Login</Link>
							</li>
						</>
					) : (
						<>
							<li className='flex gap-1 px-3 hover:underline'>
								<img
									src={user.image || '/img/cat.png'}
									width='25px'
									height='25px'
									className='rounded-full'
								/>
								<Link to='/users/profiles' className='pr-4'>
									{user.username}
								</Link>
							</li>
							<li className='hover:underline'>
								<Link to={`/users/carts/${user.cart}`}>
									Cart
								</Link>
							</li>
							<li>
								<button
									className='hover:underline'
									onClick={() =>
										UseHandleClick(
											navigate,
											setToken,
											setUser
										)
									}
								>
									logout
								</button>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

const UseHandleClick = (navigate, setToken, setUser) => {
	clearTokenLocalStorage('jwt');
	setToken(undefined);
	setUser(undefined);
	navigate('/login');
};

export default Header;
