import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import UserCart from './pages/UserCart';
import UserProfile from './pages/UserProfile';
import Users from './pages/Users';
import AuthGuard from './utils/AuthGuard';
import RoutesNotFound from './utils/RoutesNotFound';

const App = () => {
	return (
		<BrowserRouter>
			<RoutesNotFound>
				{/* public */}
				<Route path='/' element={<Home />} />
				<Route path='/products/:id' element={<Product />} />
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />
				{/* private */}
				<Route element={<AuthGuard />}>
					<Route path='/users/' element={<Users />}>
						<Route path='profiles' element={<UserProfile />} />
						<Route path='carts' element={<UserCart />} />
					</Route>
				</Route>
			</RoutesNotFound>
		</BrowserRouter>
	);
};

export default App;
