import { Navigate, Outlet } from 'react-router-dom';
import { getTokenLocalStorage } from '../constants/token-persistence';

const AuthGuard = () => {
	const token = getTokenLocalStorage();
	return token ? <Outlet /> : <Navigate replace to={'/login'} />;
};

export default AuthGuard;
