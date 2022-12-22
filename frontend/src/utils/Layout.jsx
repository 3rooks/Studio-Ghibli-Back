import { useContext, useEffect } from 'react';
import AlertBox from '../components/alerts/AlertBox';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getTokenLocalStorage } from '../constants/token-persistence';
import { UserContext } from '../lib/context/UserContext';

const Layout = ({ children }) => {
	const value = useContext(UserContext);
	const { setToken } = value;

	useEffect(() => {
		setToken(getTokenLocalStorage());
	}, [setToken]);

	return (
		<>
			<Header />
			<AlertBox />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
