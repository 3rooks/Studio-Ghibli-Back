import { createPortal } from 'react-dom';
import Button from '../Button';
import style from './Modal.module.css';

const Modal = ({ closeModal, children }) => {
	if (!children) return null;
	return createPortal(
		<div className={style.overlay}>
			<div className={style.modal}>
				{children}
				<Button onClick={() => closeModal(undefined)}>close</Button>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
