import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getTokenLocalStorage } from '../constants/token-persistence';
import getUserProfile from '../lib/api/get-user-profile';

const Header = () => {
	const navigate = useNavigate();

	const token = getTokenLocalStorage();
	const [user, setUser] = useState(null);

	useEffect(() => {
		if (!token) return;
		getUserProfile(token, setUser);
	}, [token]);

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
					{user ? (
						<>
							<li className='flex gap-1 px-3 hover:underline'>
								<img
									src={user.image}
									alt={user.username}
									width='20px'
									height='10px'
									className='rounded-full'
								/>
								<Link to='/users/profiles'>
									{user.username}
								</Link>
							</li>
							<li className='hover:underline'>
								<Link to='/users/carts'>Cart</Link>
							</li>
							<li>
								<button
									className='hover:underline'
									onClick={() => UseHandleClick(navigate)}
								>
									logout
								</button>
							</li>
						</>
					) : (
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
					)}
				</ul>
			</nav>
		</header>
	);
};

const UseHandleClick = (navigate) => {
	window.localStorage.removeItem('jwt');
	navigate('/login');
};

export default Header;
