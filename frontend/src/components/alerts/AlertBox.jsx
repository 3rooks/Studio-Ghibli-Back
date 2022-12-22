import { useEffect, useState } from 'react';

const AlertBox = () => {
	const alert = useAlert();

	return (
		<>
			{alert && (
				<div className='w-full h-10 bg-slate-900 text-white uppercase mb-4 flex items-center justify-center'>
					<b>{alert && alert.message}</b>
				</div>
			)}
		</>
	);
};

export default AlertBox;

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
		};
		document.addEventListener('alert', handler);

		return () => document.removeEventListener('alert', handler);
	}, []);

	return alert;
};
