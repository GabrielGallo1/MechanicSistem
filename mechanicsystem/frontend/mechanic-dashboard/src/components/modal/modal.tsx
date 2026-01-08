import styles from './modal.module.css';

type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: modalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.box}>
            <button className={styles.closeBtn} onClick={onClose}> X </button>
            {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
