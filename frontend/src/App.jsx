import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { UserContext } from './lib/context/UserContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Product from './pages/Product';
import Register from './pages/Register';
import UserCart from './pages/UserCart';
import UserProfile from './pages/UserProfile';
import Users from './pages/Users';
import AuthGuard from './utils/AuthGuard';
import Layout from './utils/Layout';
import RoutesNotFound from './utils/RoutesNotFound';

const App = () => {
	const [user, setUser] = useState(undefined);
	const [token, setToken] = useState(undefined);

	return (
		<BrowserRouter>
			<UserContext.Provider value={{ user, setUser, token, setToken }}>
				<Layout>
					<RoutesNotFound>
						{/* public */}
						<Route path='/' element={<Home />} />
						<Route path='/products/:id' element={<Product />} />
						<Route path='/login' element={<Login />} />
						<Route path='/register' element={<Register />} />
						{/* private */}
						<Route element={<AuthGuard />}>
							<Route path='/users/' element={<Users />}>
								<Route
									path='profiles'
									element={<UserProfile />}
								/>
								<Route
									path='carts/:id'
									element={<UserCart />}
								/>
							</Route>
						</Route>
					</RoutesNotFound>
				</Layout>
			</UserContext.Provider>
		</BrowserRouter>
	);
};

export default App;
