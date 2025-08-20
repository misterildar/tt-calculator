'use client';

import { SuccessStepProps } from '../../types';
import { MODAL_TEXTS } from '../../constants';
import styles from './SuccessStep.module.scss';
import { Button, CheckIcon } from '@/ui';

export const SuccessStep = ({ onClose }: SuccessStepProps) => {
  return (
    <div>
      <p className={styles.description}>{MODAL_TEXTS.SUCCESS.description}</p>
      <div className={styles.expectations}>
        <h3 className={styles.label}>{MODAL_TEXTS.SUCCESS.expectationsTitle}</h3>
        <ul>
          {MODAL_TEXTS.SUCCESS.expectations.map((expectation, index) => (
            <li key={index} className={styles.label}>
              <CheckIcon /> {expectation}
            </li>
          ))}
        </ul>
      </div>
      <Button
        onClick={onClose}
        variant='primary'
        text={MODAL_TEXTS.SUCCESS.button}
        className={styles.button}
      />
    </div>
  );
};
