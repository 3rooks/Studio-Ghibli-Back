import { Route, Routes } from 'react-router-dom';

const RoutesNotFound = ({ children }) => {
	return (
		<Routes>
			{children}
			<Route
				path='*'
				element={
					<h1 className='text-center'>
						<b>404 / NOT FOUND</b>
					</h1>
				}
			/>
		</Routes>
	);
};

export default RoutesNotFound;
