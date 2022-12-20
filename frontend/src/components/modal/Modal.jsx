import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	if (!children) return null;
	return createPortal(
		<div className={style.overlay}>
			<div className={style.modal}>
				{children}
				<button onClick={() => closeModal(undefined)}>close</button>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
