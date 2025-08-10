'use client';

import { SuccessStepProps } from '../types';
import { MODAL_TEXTS } from '../constants';
import styles from '../ConsultationModal.module.scss';

export const SuccessStep = ({ onClose }: SuccessStepProps) => {
  return (
    <div className={styles.successStep}>
      <p className={styles.description}>{MODAL_TEXTS.SUCCESS.description}</p>

      <div className={styles.expectations}>
        <h3>{MODAL_TEXTS.SUCCESS.expectationsTitle}</h3>
        <ul>
          {MODAL_TEXTS.SUCCESS.expectations.map((expectation, index) => (
            <li key={index}>✓ {expectation}</li>
          ))}
        </ul>
      </div>

      <button onClick={onClose} className={styles.primaryButton}>
        {MODAL_TEXTS.SUCCESS.button}
      </button>
    </div>
  );
};
