import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const Modal = ({ children }) => {
	return createPortal(
		<div className={style.overlay}>
			<div className={style.modal}>{children}</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
