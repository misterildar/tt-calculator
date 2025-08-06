'use client';

import { FooterFormProps } from './types';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '@/ui';
import styles from './Footer.module.scss';

export const FooterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FooterFormProps>();

  const onSubmit: SubmitHandler<FooterFormProps> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.footerForm}>
      <p>Connect with Us Today</p>
      <div className={styles.inputGroup}>
        <label>Your Name</label>
        <input {...register('name', { required: true })} placeholder='Liam Smith' />
        {errors.name && <p className={styles.errorMessage}>Required</p>}
      </div>
      <div className={styles.inputGroup}>
        <label>Email address</label>
        <input {...register('email', { required: true })} placeholder='smith@example.com' />
        {errors.email && <p className={styles.errorMessage}>Required</p>}
      </div>
      <div className={styles.inputGroup}>
        <label>Your message</label>
        <textarea {...register('message', { required: true })} placeholder='Message' />
        {errors.message && <p className={styles.errorMessage}>Required</p>}
      </div>
      <Button text='Send message' type='submit'></Button>
      <div className={styles.checkboxGroup}>
        <div className={styles.agreementContainer}>
          <label className={styles.footerCheckbox}>
            <input
              type='checkbox'
              {...register('agreement', { required: true })}
              className={styles.footerCheckboxInput}
            />
            <span className={styles.checkmark}></span>
          </label>
          <span className={styles.footerAgreement}>
            I agree to the <Link href=''>Privacy Policy</Link> and{' '}
            <Link href=''>User Agreement</Link>
          </span>
        </div>
        {errors.agreement && <p className={styles.errorMessage}>Required</p>}
      </div>
    </form>
  );
};
