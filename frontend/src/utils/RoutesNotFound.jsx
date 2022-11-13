import { Route, Routes } from 'react-router-dom';

const RoutesNotFound = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route path='*' element={<h1>NOT FOUND</h1>} />
		</Routes>
	);
};

export default RoutesNotFound;
