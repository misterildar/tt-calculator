'use client';

import { MODAL_TEXTS } from './constants';
import styles from '../ConsultationModal.module.scss';

interface StartModalProps {
  onRequestAdvice: () => void;
}

export const StartModal = ({ onRequestAdvice }: StartModalProps) => {
  return (
    <div className={styles.startContent}>
      <div className={styles.phoneIcon}>
        <svg width='80' height='80' viewBox='0 0 80 80' fill='none'>
          <path
            d='M20 15C18.9 15 18 15.9 18 17V63C18 64.1 18.9 65 20 65H60C61.1 65 62 64.1 62 63V17C62 15.9 61.1 15 60 15H20Z'
            fill='#1E40AF'
          />
          <path
            d='M25 25C25 23.9 25.9 23 27 23H53C54.1 23 55 23.9 55 25V50C55 51.1 54.1 52 53 52H27C25.9 52 25 51.1 25 50V25Z'
            fill='white'
          />
          <circle cx='40' cy='57' r='3' fill='white' />
        </svg>
      </div>

      <h2 className={styles.startTitle}>{MODAL_TEXTS.START.title}</h2>

      <p className={styles.startDescription}>{MODAL_TEXTS.START.description}</p>

      <button onClick={onRequestAdvice} className={styles.primaryButton}>
        {MODAL_TEXTS.START.button}
      </button>
    </div>
  );
};
