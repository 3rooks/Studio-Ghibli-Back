import { useEffect, useState } from 'react';

const AlertBox = () => {
	const alert = useAlert();

	return (
		<div className='container bg-gray-400 w-100% text-center text-white'>
			{alert?.message}
		</div>
	);
};

const useAlert = () => {
	const [alert, setAlert] = useState();

	useEffect(() => {
		if (!alert) return;
		const timeoutId = setTimeout(() => setAlert(), 2000);

		return () => clearTimeout(timeoutId);
	}, [alert]);

	useEffect(() => {
		const handler = (ev) => {
			setAlert(ev.detail);
			console.log(ev.detail);
		};
		document.addEventListener('alert', handler);

		return () => document.removeEventListener('alert', handler);
	}, []);

	return alert;
};

export default AlertBox;
