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

      // Проверяем, помещается ли модальное окно, и уменьшаем размеры если нужно
      const adjustSizes = () => {
        const modalHeight = dialog.scrollHeight;
        const availableHeight = window.innerHeight * 0.95; // 90% от высоты экрана

        if (modalHeight > availableHeight) {
          // Если не помещается, уменьшаем все размеры
          dialog.style.setProperty('--input-font-size', '14px');
          dialog.style.setProperty('--input-padding-vertical', '2px');
          dialog.style.setProperty('--input-padding-horizontal', '12px');
          dialog.style.setProperty('--input-group-gap', '5px');
          dialog.style.setProperty('--form-step-gap', '5px');
          dialog.style.setProperty('--step-container-gap', '5px');
          dialog.style.setProperty('--button-margin-top', '10px');
          dialog.style.setProperty('--modal-button-font-size', '24px');
          dialog.style.setProperty('--modal-button-height', '48px');
          dialog.style.setProperty('--modal-button-padding-vertical', '2px');
          dialog.style.setProperty('--modal-button-padding-horizontal', '24px');
          dialog.style.setProperty('--modal-padding-vertical', '32px');
          dialog.style.setProperty('--modal-padding-horizontal', '16px');
          dialog.style.setProperty('--step-title-font-size', '18px');
          dialog.style.setProperty('--step-indicator-font-size', '14px');
          dialog.style.setProperty('--step-indicator-size', '36px');
          dialog.style.setProperty('--step-indicator-margin-bottom', '14px');
        } else {
          // Если помещается, используем обычные размеры
          dialog.style.setProperty('--input-font-size', '20px');
          dialog.style.setProperty('--input-padding-vertical', '12px');
          dialog.style.setProperty('--input-padding-horizontal', '16px');
          dialog.style.setProperty('--input-group-gap', '8px');
          dialog.style.setProperty('--form-step-gap', '20px');
          dialog.style.setProperty('--step-container-gap', '16px');
          dialog.style.setProperty('--button-margin-top', '20px');
          dialog.style.setProperty('--modal-button-font-size', '32px');
          dialog.style.setProperty('--modal-button-height', '78px');
          dialog.style.setProperty('--modal-button-padding-vertical', '16px');
          dialog.style.setProperty('--modal-button-padding-horizontal', '36px');
          dialog.style.setProperty('--modal-padding-vertical', '64px');
          dialog.style.setProperty('--modal-padding-horizontal', '32px');
          dialog.style.setProperty('--step-title-font-size', '24px');
          dialog.style.setProperty('--step-indicator-font-size', '16px');
          dialog.style.setProperty('--step-indicator-size', '42px');
          dialog.style.setProperty('--step-indicator-margin-bottom', '36px');
        }
      };

      // Проверяем сразу и при изменении размера окна
      setTimeout(adjustSizes, 100); // Небольшая задержка для рендера
      window.addEventListener('resize', adjustSizes);

      return () => {
        window.removeEventListener('resize', adjustSizes);
      };
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
