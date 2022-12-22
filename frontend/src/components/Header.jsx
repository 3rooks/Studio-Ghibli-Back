import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { clearTokenLocalStorage } from '../constants/token-persistence';
import getUserProfile from '../lib/api/get-user-profile';
import { UserContext } from '../lib/context/UserContext';
import CrossIcon from './icons/CrossIcon';
import MenuIcon from './icons/MenuIcon';

const Header = () => {
	const navigate = useNavigate();

	const value = useContext(UserContext);
	const { user, setUser, token, setToken } = value;

	const [navbar, setNavbar] = useState(false);

	useEffect(() => {
		if (!token) return;
		getUserProfile(token, setUser);
	}, [token, setUser]);

	return (
		<header className='w-full'>
			<div className='justify-between px-8 mx-auto lg:max-w-7xl md:items-center md:flex md:px-16 sm:px-12 lg:px-20 xl:px-24'>
				<div className='flex items-center justify-between py-3 md:py-5 md:block'>
					<Link to='/'>
						<h1 className='underline'>Studio Ghibli</h1>
					</Link>
					<div className='md:hidden'>
						<button
							className='p-2'
							onClick={() => setNavbar(!navbar)}
						>
							{navbar ? <CrossIcon /> : <MenuIcon />}
						</button>
					</div>
				</div>
				<nav>
					<div
						className={`flex-1 justify-self-center pb-4 md:block md:pb-0 md:mt-0 ${
							navbar ? 'block' : 'hidden'
						}`}
					>
						<ul className='flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-6 md:space-y-0'>
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
									<li className='hover:underline'>
										<Link
											to='/users/profiles'
											className='flex capitalize'
										>
											<img
												src={
													user.image || '/img/cat.png'
												}
												width='25px'
												height='25px'
												className='rounded-full'
											/>
											<span className='pl-1'>
												{user.username}
											</span>
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
												handleClick(
													navigate,
													setToken,
													setUser
												)
											}
										>
											Logout
										</button>
									</li>
								</>
							)}
						</ul>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;

const handleClick = (navigate, setToken, setUser) => {
	clearTokenLocalStorage('jwt');
	setToken(undefined);
	setUser(undefined);
	navigate('/login');
};
