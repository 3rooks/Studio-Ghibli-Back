const Button = ({ children, onClick }) => (
	<button
		onClick={onClick}
		className='w-full rounded-md text-white bg-slate-900 hover:bg-slate-700 px-4'
	>
		{children}
	</button>
);

export default Button;
