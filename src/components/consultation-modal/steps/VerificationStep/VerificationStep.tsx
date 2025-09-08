'use client';

import { useForm } from 'react-hook-form';

import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { MODAL_TEXTS } from '../../constants';
import { VerificationStepProps } from '../../types';

import styles from './VerificationStep.module.scss';

export interface VerificationData {
  code: string;
}

export const VerificationStep = ({ code, setCode, onNext, onBack }: VerificationStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<VerificationData>({
    defaultValues: { code },
  });

  const onSubmit = (data: VerificationData) => {
    setCode(data.code);
    onNext();
  };

  return (
    <div className={styles.verificationStep}>
      <p className={styles.description}>{MODAL_TEXTS.VERIFICATION.description}</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={MODAL_TEXTS.VERIFICATION.label}
          placeholder='12345'
          maxLength={6}
          error={errors.code?.message}
          {...register('code', {
            required: 'Please enter verification code',
            minLength: {
              value: 5,
              message: 'Code must contain at least 5 characters',
            },
          })}
        />

        <div className={styles.buttonGroup}>
          <Button
            type='button'
            variant='secondary'
            text={MODAL_TEXTS.VERIFICATION.backButton}
            onClick={onBack}
            className={styles.modalButton}
          />
          <Button
            type='submit'
            variant={isValid ? 'primary' : 'calculate'}
            text={MODAL_TEXTS.VERIFICATION.button}
            className={styles.modalButton}
          />
        </div>
      </form>

      <a href='#' className={styles.resendLink}>
        {MODAL_TEXTS.VERIFICATION.resendLink}
      </a>
    </div>
  );
};
