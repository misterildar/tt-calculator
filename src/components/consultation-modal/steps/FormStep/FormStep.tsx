'use client';

import { useForm } from 'react-hook-form';

import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
import { FormStepProps } from '../../types';
import { FORM_FIELDS, FormData, FORM_TEXTS } from './constants';

import styles from './FormStep.module.scss';

export const FormStep = ({ formData, setFormData, onNext }: FormStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
    onNext();
  };

  const agreementLabel = (
    <>
      {FORM_TEXTS.agreement.split('Privacy Policy')[0]}
      <a href='#' className={styles.link}>
        Privacy Policy
      </a>
      {FORM_TEXTS.agreement.split('Privacy Policy')[1].split('User Agreement')[0]}
      <a href='#' className={styles.link}>
        User Agreement
      </a>
    </>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formStep}>
      {FORM_FIELDS.map((field) => (
        <Input
          key={field.name}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          error={errors[field.name]?.message}
          {...register(field.name, field.validation)}
        />
      ))}
      <Button
        type='submit'
        text={FORM_TEXTS.button}
        className={`${styles.button} ${styles.modalButton}`}
        variant={isValid ? 'primary' : 'calculate'}
      />

      <Checkbox
        label={agreementLabel}
        error={errors.agreeToTerms?.message}
        {...register('agreeToTerms', {
          required: 'You must agree to the terms',
        })}
      />
    </form>
  );
};
