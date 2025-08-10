'use client';

import { forwardRef } from 'react';
import styles from './Checkbox.module.scss';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substring(2, 11)}`;

    return (
      <div className={`${styles.checkboxGroup} ${className}`}>
        <div className={styles.checkboxWrapper}>
          <input
            ref={ref}
            type='checkbox'
            id={checkboxId}
            className={`${styles.checkbox} ${error ? styles.error : ''}`}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className={styles.label}>
              {label}
            </label>
          )}
        </div>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
