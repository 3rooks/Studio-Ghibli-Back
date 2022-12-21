const Button = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className='w-full rounded-md text-white bg-slate-900 hover:bg-slate-700 px-4'
		>
			{children}
		</button>
	);
};

export default Button;
