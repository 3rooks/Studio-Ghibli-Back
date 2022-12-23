import { createPortal } from 'react-dom';
import Button from '../Button';

const Modal = ({ closeModal, children }) => {
	if (!children) return null;
	return createPortal(
		<div className='fixed inset-0 h-screen w-full flex items-center justify-center bg-gray-200 '>
			<div className='w-80 rounded-md p-6 bg-white'>
				{children}
				<Button onClick={() => closeModal(undefined)}>Close</Button>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
