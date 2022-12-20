import AlertBox from '../components/alerts/AlertBox';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
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
