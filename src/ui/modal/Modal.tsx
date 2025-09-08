'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../close-icon';

import styles from './Modal.module.scss';

const MODAL_HEIGHT_RATIO = 0.95; // 95% от высоты экрана

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
      const commonValues = {
        '--input-padding-horizontal': '16px',
        '--modal-padding-horizontal': '32px',
        '--step-indicator-font-size': '16px',
      };

      const themes = {
        compact: {
          ...commonValues,
          '--input-font-size': '14px',
          '--input-padding-vertical': '4px',
          '--input-group-gap': '6px',
          '--form-step-gap': '8px',
          '--step-container-gap': '8px',
          '--button-margin-top': '12px',
          '--modal-button-font-size': '24px',
          '--modal-button-height': '48px',
          '--modal-button-padding-vertical': '4px',
          '--modal-button-padding-horizontal': '24px',
          '--modal-padding-vertical': '32px',
          '--step-title-font-size': '18px',
          '--step-indicator-size': '36px',
          '--step-indicator-margin-bottom': '16px',
        },
        normal: {
          ...commonValues,
          '--input-font-size': '20px',
          '--input-padding-vertical': '12px',
          '--input-group-gap': '8px',
          '--form-step-gap': '20px',
          '--step-container-gap': '16px',
          '--button-margin-top': '20px',
          '--modal-button-font-size': '32px',
          '--modal-button-height': '78px',
          '--modal-button-padding-vertical': '16px',
          '--modal-button-padding-horizontal': '36px',
          '--modal-padding-vertical': '64px',
          '--step-title-font-size': '24px',
          '--step-indicator-size': '42px',
          '--step-indicator-margin-bottom': '36px',
        },
      };

      const applyTheme = (theme: typeof themes.compact) => {
        Object.entries(theme).forEach(([property, value]) => {
          dialog.style.setProperty(property, value);
        });
      };

      const determineTheme = () => {
        applyTheme(themes.normal);
        dialog.showModal();
        const modalHeight = dialog.scrollHeight;
        const availableHeight = window.innerHeight * MODAL_HEIGHT_RATIO;
        dialog.close();
        return modalHeight > availableHeight ? themes.compact : themes.normal;
      };

      const selectedTheme = determineTheme();

      applyTheme(selectedTheme);

      dialog.showModal();

      const adjustSizes = () => {
        const modalHeight = dialog.scrollHeight;
        const availableHeight = window.innerHeight * MODAL_HEIGHT_RATIO;
        if (modalHeight > availableHeight) {
          applyTheme(themes.compact);
        } else {
          applyTheme(themes.normal);
        }
      };

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
