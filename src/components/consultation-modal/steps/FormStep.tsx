'use client';

import { useForm } from 'react-hook-form';
import { Input } from '@/ui/input';
import { Checkbox } from '@/ui/checkbox';
import { Button } from '@/ui/button';
import { FormStepProps } from '../types';
import { MODAL_TEXTS } from '../constants';
import styles from '../ConsultationModal.module.scss';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  agreeToTerms: boolean;
}

interface FormField {
  name: keyof Omit<FormData, 'agreeToTerms'>;
  type: string;
  label: string;
  placeholder: string;
  validation: object;
}

const FORM_FIELDS: FormField[] = [
  {
    name: 'firstName',
    type: 'text',
    label: MODAL_TEXTS.FORM.firstName,
    placeholder: 'Liam',
    validation: {
      required: 'Имя обязательно',
      minLength: {
        value: 2,
        message: 'Минимум 2 символа',
      },
    },
  },
  {
    name: 'lastName',
    type: 'text',
    label: MODAL_TEXTS.FORM.lastName,
    placeholder: 'Smith',
    validation: {
      required: 'Фамилия обязательна',
      minLength: {
        value: 2,
        message: 'Минимум 2 символа',
      },
    },
  },
  {
    name: 'email',
    type: 'email',
    label: MODAL_TEXTS.FORM.email,
    placeholder: 'smith@example.com',
    validation: {
      required: 'Email обязателен',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Неверный формат email',
      },
    },
  },
  {
    name: 'phone',
    type: 'tel',
    label: MODAL_TEXTS.FORM.phone,
    placeholder: '+1 (555) 123-4567',
    validation: {
      required: 'Телефон обязателен',
      minLength: {
        value: 10,
        message: 'Минимум 10 цифр',
      },
    },
  },
];

export const FormStep = ({ formData, setFormData, onNext }: FormStepProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
    onNext();
  };

  const agreementLabel = (
    <>
      {MODAL_TEXTS.FORM.agreement.split('Privacy Policy')[0]}
      <a href='#' className={styles.link}>
        Privacy Policy
      </a>
      {MODAL_TEXTS.FORM.agreement.split('Privacy Policy')[1].split('User Agreement')[0]}
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

      <Checkbox
        label={agreementLabel}
        error={errors.agreeToTerms?.message}
        {...register('agreeToTerms', {
          required: 'Необходимо согласиться с условиями',
        })}
      />

      <Button type='submit' variant='primary' text={MODAL_TEXTS.FORM.button} />
    </form>
  );
};
