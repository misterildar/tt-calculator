'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../close-icon';

import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  children,
  className = '',
  showCloseButton = true,
}: ModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen, isMounted]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => onClose();
    dialog.addEventListener('close', handleClose);
    return () => {
      dialog.removeEventListener('close', handleClose);
    };
  }, [onClose]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isMounted) return null;

  return createPortal(
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${className}`}
      onKeyDown={handleKeyDown}
      onClick={handleBackdropClick}
    >
      <div className={styles.modalContent}>
        {showCloseButton && (
          <button onClick={onClose} className={styles.modalCloseButton} aria-label='Close modal'>
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </dialog>,
    document.body
  );
};

export default Modal;
