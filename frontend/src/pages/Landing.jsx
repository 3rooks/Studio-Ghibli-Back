import Header from '../components/Header';

const Landing = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
			<footer>FOOTER</footer>
		</>
	);
};

export default Landing;
