import { useEffect, useState } from 'react';

const AlertBox = (props) => {
	const alert = useAlert();

	return <div className='container bg-lime-500'>{alert?.message}</div>;
};

const useAlert = () => {
	const [alert, setAlert] = useState();

	useEffect(() => {
		if (!alert) return;
		const timeoutId = setTimeout(() => setAlert(), 2500);

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
